"""Statement snapshots from CPython itself; used by Pyodide and native tests."""
import ast
import dis
import io
import json
import os
import sys
import tempfile
import time
import types
import weakref


class TraceLimit(BaseException):
    pass


class BoundedOutput(io.StringIO):
    def write(self, value):
        if self.tell() + len(value) > 32000:
            raise TraceLimit("标准输出／错误达到 32000 字符上限。")
        return super().write(value)


def trace_program(code, stdin="", max_frames=1800, push=None, files=None, directory_root=None):
    started = time.perf_counter()
    limit = min(2500, max(10, int(max_frames)))
    frames, identities, weak_objects, frame_ids = [], {}, {}, {}
    frame_serial = 0
    pending_exceptions = {}
    object_serial = 0
    live_objects = set()
    output, errors = BoundedOutput(), BoundedOutput()
    source = code.splitlines() or [""]
    module = types.ModuleType("__main__")
    module.__file__ = "<student>"
    namespace = module.__dict__
    previous = (sys.stdin, sys.stdout, sys.stderr, sys.gettrace(), os.getcwd())
    previous_main = sys.modules.get("__main__")
    previous_path = list(sys.path)
    previous_modules = set(sys.modules)
    last_scopes, last_memory, last_line = [], None, 1

    def identity(value):
        nonlocal object_serial
        key = id(value)
        live_objects.add(key)
        if key not in identities or (key in weak_objects and weak_objects[key]() is not value):
            object_serial += 1
            identities[key] = "py-object-" + str(object_serial)
            try:
                weak_objects[key] = weakref.ref(value)
            except TypeError:
                pass
        return identities[key]

    def typename(value):
        cls = type(value)
        return cls.__qualname__

    def atomic(value):
        if value is None or type(value) in (str, bool, float):
            if type(value) is str:
                return value[:3000]
            if type(value) is float and (value != value or abs(value) == float("inf")):
                return str(value)
            return value
        if type(value) is int:
            return value if abs(value) <= 9007199254740991 else str(value)
        if type(value) is bytes:
            return list(value[:40])
        return None

    def snapshot(active):
        nonlocal frame_serial
        live_objects.clear()
        nodes, links, visited = [], [], set()
        budget = [2500]

        def plain(value, depth=0, seen=None):
            budget[0] -= 1
            if budget[0] < 0 or depth > 4:
                return "…"
            if value is None or type(value) in (str, bool, int, float, bytes):
                return atomic(value)
            seen = set() if seen is None else seen
            if id(value) in seen:
                return "↩ " + identity(value)
            seen = seen | {id(value)}
            if type(value) in (list, tuple):
                return [plain(v, depth + 1, seen) for v in value[:40]]
            if type(value) in (set, frozenset):
                return [plain(v, depth + 1, seen) for v in list(value)[:40]]
            if type(value) is dict:
                return {str(k) if type(k) in (str, int, bool) else identity(k): plain(v, depth + 1, seen) for k, v in list(value.items())[:30]}
            if type(value) is types.FunctionType:
                return "<函数 " + value.__qualname__ + ">"
            if isinstance(value, type):
                return "<类 " + value.__qualname__ + ">"
            try:
                fields = object.__getattribute__(value, "__dict__")
            except (AttributeError, TypeError):
                return "<" + typename(value) + ">"
            return {k: plain(v, depth + 1, seen) for k, v in list(fields.items())[:30] if not k.startswith("__")}

        def reference(value):
            return value is not None and type(value) not in (str, int, float, bool, bytes)

        def field(name, value, owner, depth):
            result = {"name": str(name), "type": typename(value), "value": plain(value)}
            if reference(value):
                ref = visit(value, depth + 1)
                if ref:
                    result["ref"] = ref
                    links.append({"from": owner, "field": str(name), "to": ref, "relation": "reference"})
            return result

        def visit(value, depth=0):
            if depth > 4 or len(nodes) >= 50:
                return None
            key = identity(value)
            if key in visited:
                return key
            visited.add(key)
            kind = "object"
            if type(value) in (list, tuple, set, frozenset, dict):
                kind = "array" if type(value) is not dict else "object"
            elif type(value) is types.FunctionType:
                kind = "function"
            elif isinstance(value, type):
                kind = "class"
            node = {"id": key, "label": typename(value), "type": typename(value), "storage": kind, "status": "live", "fields": []}
            nodes.append(node)
            if type(value) is dict:
                pairs = [(str(k) if type(k) in (str, int, bool) else "键 " + identity(k), v) for k, v in list(value.items())[:30]]
            elif type(value) in (list, tuple, set, frozenset):
                pairs = list(enumerate(list(value)[:40]))
            elif type(value) is types.FunctionType:
                pairs = [("名称", value.__qualname__)]
                for name, cell in zip(value.__code__.co_freevars, value.__closure__ or ()):
                    try:
                        pairs.append(("捕获 · " + name, cell.cell_contents))
                    except ValueError:
                        pass
            elif isinstance(value, type):
                pairs = [(k, v) for k, v in type.__getattribute__(value, "__dict__").items() if not k.startswith("__") and not callable(v) and not isinstance(v, (property, classmethod, staticmethod))][:30]
                node["label"] = "类 " + value.__qualname__
                for base in type.__getattribute__(value, "__bases__"):
                    if base is not object:
                        parent = visit(base, depth + 1)
                        if parent:
                            links.append({"from": key, "field": "继承", "to": parent, "relation": "inherits"})
            else:
                try:
                    data = object.__getattribute__(value, "__dict__")
                    pairs = [(k, v) for k, v in data.items() if not k.startswith("__")][:30]
                except (AttributeError, TypeError):
                    pairs = []
                cls = type(value)
                if cls.__module__ == "__main__":
                    parent = visit(cls, depth + 1)
                    if parent:
                        links.append({"from": key, "field": "实例", "to": parent, "relation": "instance-of"})
            node["fields"] = [field(name, v, key, depth) for name, v in pairs]
            return key

        stack = []
        cursor = active
        while cursor:
            if cursor.f_code.co_filename == "<student>":
                stack.append(cursor)
            cursor = cursor.f_back
        stack.reverse()
        scopes = []
        for frame in stack:
            key = id(frame)
            if key not in frame_ids:
                frame_serial += 1
                frame_ids[key] = "py-frame-" + str(frame_serial)
            local = frame.f_locals
            kind = "global" if frame.f_code.co_name == "<module>" else "class" if "__qualname__" in local and "__module__" in local else "function"
            scope = {"id": frame_ids[key], "name": "全局" if kind == "global" else frame.f_code.co_qualname, "kind": kind, "variables": []}
            for name, value in list(local.items()):
                if name.startswith("__") or isinstance(value, types.ModuleType):
                    continue
                variable = {"name": name, "type": typename(value), "value": plain(value)}
                if reference(value):
                    ref = visit(value)
                    if ref:
                        variable["objectId"] = ref
                        links.append({"from": scope["id"], "field": name, "to": ref, "relation": "reference"})
                scope["variables"].append(variable)
            scopes.append(scope)
        for key in list(identities):
            if key not in live_objects:
                identities.pop(key, None)
                weak_objects.pop(key, None)
        return scopes, {"nodes": nodes, "links": links, "note": "对象身份来自本次 CPython 执行；对象图不是物理内存布局。集合显示当前迭代顺序。"}

    def emit(frame, phase, kind, extra=None):
        nonlocal last_scopes, last_memory, last_line
        if len(frames) >= limit:
            raise TraceLimit(f"达到 {limit} 个可视化步骤上限，请缩小输入或检查循环条件。")
        if time.perf_counter() - started > 7:
            raise TraceLimit("Python 程序执行超过 7 秒，已保留此前状态。")
        scopes, memory = snapshot(frame)
        number = max(1, min(len(source), frame.f_lineno))
        record = {"id": len(frames), "line": number, "column": 0, "source": source[number - 1].strip(), "phase": phase, "kind": kind, "scopes": scopes, "memory": memory, "stdout": output.getvalue(), "stderr": errors.getvalue()}
        if extra:
            record.update(extra)
        frames.append(record)
        if scopes:
            last_scopes, last_memory, last_line = scopes, memory, number
        if push:
            push(json.dumps(record, ensure_ascii=False))

    def trace(frame, event, arg):
        if frame.f_code.co_filename != "<student>":
            return None
        if event == "line":
            pending_exceptions.pop(id(frame), None)
            text = (source[frame.f_lineno - 1] if frame.f_lineno <= len(source) else "").lstrip()
            kind = "condition" if text.startswith(("if ", "elif ", "while ", "for ")) else "output" if text.startswith("print(") else "statement"
            emit(frame, "before", kind)
        elif event == "call":
            emit(frame, "before", "call")
        elif event == "return":
            opname = dis.opname[frame.f_code.co_code[frame.f_lasti]] if 0 <= frame.f_lasti < len(frame.f_code.co_code) else ""
            kind = "yield" if "YIELD" in opname else "return"
            exception = pending_exceptions.get(id(frame))
            if exception and not opname.startswith("RETURN") and kind != "yield":
                emit(frame, "after", "exception", {"exception": exception})
                frame_ids.pop(id(frame), None)
                pending_exceptions.pop(id(frame), None)
                return trace
            result = atomic(arg) if arg is None or type(arg) in (str, int, bool, float, bytes) else "<" + typename(arg) + ">"
            emit(frame, "after", kind, {"returnValue": result})
            if kind != "yield":
                frame_ids.pop(id(frame), None)
                pending_exceptions.pop(id(frame), None)
        elif event == "exception":
            cls, exception, _ = arg
            message = " ".join(str(v) for v in exception.args if type(v) in (str, int, bool, float))[:600]
            detail = {"type": cls.__name__, "message": message}
            pending_exceptions[id(frame)] = detail
            emit(frame, "before", "exception", {"exception": detail})
        return trace

    error = None
    results = {}
    temporary = None
    try:
        temporary = tempfile.TemporaryDirectory(prefix="astra-", dir=directory_root)
        directory = temporary.name
        sys.modules["__main__"] = module
        sys.path.insert(0, directory)
        if directory:
            os.chdir(directory)
            for name, content in (files or {}).items():
                if os.path.isabs(name) or ".." in name.replace("\\", "/").split("/"):
                    raise ValueError("虚拟文件必须位于当前实验目录。")
                os.makedirs(os.path.dirname(name) or ".", exist_ok=True)
                with open(name, "w", encoding="utf-8") as target:
                    target.write(content)
            compiled = compile(code, "<student>", "exec")
            sys.stdin, sys.stdout, sys.stderr = io.StringIO(stdin), output, errors
            sys.settrace(trace)
            try:
                exec(compiled, namespace, namespace)
            finally:
                sys.settrace(previous[3])
            for root, _, names in os.walk(directory):
                for name in names[:16]:
                    path = os.path.join(root, name)
                    if os.path.getsize(path) <= 32000:
                        try:
                            with open(path, encoding="utf-8") as saved:
                                results[os.path.relpath(path, directory)] = saved.read()
                        except UnicodeError:
                            continue
            if len(frames) < limit:
                record = {"id": len(frames), "line": last_line, "column": 0, "source": source[last_line - 1].strip(), "phase": "end", "kind": "end", "scopes": last_scopes, "memory": last_memory, "stdout": output.getvalue(), "stderr": errors.getvalue()}
                frames.append(record)
                if push:
                    push(json.dumps(record, ensure_ascii=False))
    except BaseException as failure:
        if isinstance(failure, SyntaxError):
            error = f"第 {failure.lineno} 行：{failure.msg}"
        else:
            error = type(failure).__name__ + ": " + " ".join(str(v) for v in failure.args if type(v) in (str, int, bool, float))
    finally:
        sys.stdin, sys.stdout, sys.stderr = previous[:3]
        sys.settrace(previous[3])
        os.chdir(previous[4])
        sys.path[:] = previous_path
        if previous_main is None:
            sys.modules.pop("__main__", None)
        else:
            sys.modules["__main__"] = previous_main
        if temporary is not None:
            for name in set(sys.modules) - previous_modules:
                loaded = sys.modules.get(name)
                filename = getattr(loaded, "__file__", None)
                if isinstance(filename, str) and os.path.abspath(filename).startswith(directory + os.sep):
                    sys.modules.pop(name, None)
        if temporary is not None:
            temporary.cleanup()
    return {"frames": frames, "stdout": output.getvalue(), "stderr": errors.getvalue(), "files": results, "error": error, "elapsed": round((time.perf_counter() - started) * 1000)}


def trace_json(code, stdin="", max_frames=1800, push=None, files_json="{}"):
    return json.dumps(trace_program(code, stdin, max_frames, push, json.loads(files_json)), ensure_ascii=False)


if __name__ == "__main__":
    request = json.loads(sys.stdin.read())
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".tmp-python-runs"))
    os.makedirs(root, exist_ok=True)
    result = trace_program(request["code"], request.get("input", ""), request.get("maxFrames", 1800), files=request.get("files"), directory_root=root)
    print(json.dumps(result, ensure_ascii=False))
