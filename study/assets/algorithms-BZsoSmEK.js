import{T as e,n as t,r as n,x as r}from"./index-Da0Y7kiC.js";import{o as i}from"./algorithm-directory-BMMqZjUf.js";import{n as a,r as o,t as s}from"./study-panel-Bmwk3IqX.js";import{t as c}from"./directory-drawer-D40IFIWm.js";import{t as l}from"./shared-BltHzax8.js";import{i as u}from"./state-D6fYI8f9.js";function d(e,t,n){return{question:e,choices:Object.entries(t).map(([e,t])=>({id:e,label:t})),answer:n}}function f(e){let t=e.trim().split(/[,，\s]+/).filter(Boolean);if(t.length<2||t.length>20)throw Error(`请输入 2—20 个整数，以逗号或空格分隔。`);if(t.some(e=>!/^-?\d+$/.test(e)))throw Error(`每一项都需要是完整的整数，例如 5, 2, -3, 8。`);let n=t.map(Number);if(n.some(e=>!Number.isSafeInteger(e)||Math.abs(e)>999))throw Error(`为了清楚展示，请使用 -999 到 999 之间的整数。`);return n}function p(t,n,r=6){if(!e.includes(t))throw Error(`未注册的算法。`);let i=[...n],a=n.map((e,t)=>t),o=[],s=0,c=0,l=0,u=0,f=0,p=(e,t,n,r=[],d={})=>{o.push({values:[...i],ids:[...a],active:[...r],settled:[],phase:e,title:t,explanation:n,comparisons:s,swaps:c,reductions:l,writes:u,round:f,...d,...d.auxiliary?{auxiliary:{...d.auxiliary,values:[...d.auxiliary.values]}}:{}})};if(t===`linear`){p(`start`,`逐项检查候选位置`,`从左到右寻找 ${r}，不要求数组有序。`,[],{target:r,range:[0,i.length-1]});for(let e=0;e<i.length;e++){f++,s++;let t=i[e]===r;if(p(`compare`,`${i[e]} = ${r} → ${t}`,t?`当前元素与目标相等，下一步返回这个下标。`:`这个位置不匹配，下一步继续检查右侧。`,[e],{target:r,range:[e,i.length-1],prediction:d(`这次比较以后，应该怎样继续？`,{found:`返回当前下标`,next:`继续向右检查`},t?`found`:`next`)}),t)return p(`found`,`首次命中在下标 ${e}`,`从左到右首次找到 ${r}，无需继续扫描。`,[e],{target:r,range:[e,e]}),o;l++,e+1<i.length&&p(`range`,`继续下一个位置`,`下标 0 到 ${e} 已排除。`,[],{target:r,range:[e+1,i.length-1]})}return p(`end`,`数组中没有这个数`,`已检查全部 ${i.length} 个位置，返回 -1。`,[],{target:r}),o}if(t===`binary`){if(i.some((e,t)=>t>0&&i[t-1]>e))throw Error(`二分查找需要升序数组，请先排序或选择升序示例。`);let e=0,t=i.length-1;for(p(`start`,`从一个有序数组开始`,`寻找 ${r}，每次排除不可能包含目标的一半。`,[],{target:r,range:[e,t]});e<=t;){f++,s++;let n=Math.floor((e+t)/2);if(p(`compare`,`检查中间位置 [${n}]`,`${i[n]} ${i[n]===r?`=`:i[n]<r?`<`:`>`} ${r}。${i[n]===r?`已经找到目标。`:i[n]<r?`目标只可能在右半区。`:`目标只可能在左半区。`}`,[n],{range:[e,t],target:r,prediction:d(`下一步应该怎样处理搜索区间？`,{left:`保留左半区`,right:`保留右半区`,found:`返回当前下标`},i[n]===r?`found`:i[n]<r?`right`:`left`)}),i[n]===r)return p(`found`,`在下标 ${n} 找到 ${r}`,`命中目标，搜索结束。`,[n],{range:[n,n],target:r}),o;i[n]<r?e=n+1:t=n-1,l++,e<=t&&p(`range`,`缩小搜索范围`,`现在只需要检查 [${e}] 到 [${t}]。`,[],{range:[e,t],target:r})}return p(`end`,`数组中没有这个数`,`搜索区间已经为空，${r} 不在当前数组中。`,[],{target:r}),o}if(t===`selection`){p(`start`,`先确定最小值的位置`,`左侧逐渐形成有序前缀，每轮扫描剩余部分。`);for(let e=0;e<i.length-1;e++){f++;let t=e,n=Array.from({length:e},(e,t)=>t);p(`choose`,`本轮先把 [${e}] 作为候选`,`扫描时先更新最小值位置，扫描结束后才交换。`,[e],{minimum:t,settled:n});for(let r=e+1;r<i.length;r++){s++;let e=i[r]<i[t];p(`compare`,`${i[r]} < ${i[t]} → ${e}`,e?`发现更小的元素，下一步更新候选位置。`:`当前候选更小或相等，保持候选位置。`,[t,r],{minimum:t,settled:n,prediction:d(`需要更新最小值的候选位置吗？`,{update:`改为新位置`,keep:`保持原候选`},e?`update`:`keep`)}),e&&(t=r,p(`choose`,`最小值候选移到 [${r}]`,`目前扫描到的最小值为 ${i[r]}，尚未交换。`,[r],{minimum:t,settled:n}))}t===e?p(`choose`,`当前位置已经是本轮最小值`,`不需要交换，有序前缀继续增长。`,[e],{settled:[...n,e],minimum:e}):([i[e],i[t]]=[i[t],i[e]],[a[e],a[t]]=[a[t],a[e]],c++,p(`swap`,`把本轮最小值放到 [${e}]`,`这次可能是远距离交换，注意相等元素的原始位置。`,[e,t],{settled:[...n,e],minimum:e}))}return p(`end`,`排序完成`,`共比较 ${s} 次、交换 ${c} 次。`,[],{settled:i.map((e,t)=>t)}),o}if(t===`merge`){p(`start`,`从长度为 1 的有序段开始`,`每轮把相邻两段合并，段长按 1、2、4…增长。`);for(let e=1;e<i.length;e*=2){f++;for(let t=0;t+e<i.length;t+=e*2){let n=t+e,r=Math.min(t+e*2,i.length),o=t,c=n,l=0,f=Array(r-t).fill(null),m=[],h=()=>({auxiliary:{start:t,values:f},mergeBounds:[t,n,r]});p(`divide`,`合并 [${t}, ${n-1}] 与 [${n}, ${r-1}]`,`两段已经分别有序，接下来比较两端当前尚未取出的首元素。`,[t,n],h());let g=e=>{f[l++]=i[e],m.push(a[e]),p(`write`,`将 ${i[e]} 放入临时区`,`原数组暂时保留，临时区填满后再整体写回。`,[e],h())};for(;o<n&&c<r;){s++;let e=i[o]<=i[c];p(`compare`,`${i[o]} ≤ ${i[c]} → ${e}`,e?`取左段首元素；相等时这样处理可以保持稳定性。`:`右段首元素更小，先取右侧。`,[o,c],{...h(),prediction:d(`哪个段的当前首元素应进入临时区？`,{left:`取左段`,right:`取右段`},e?`left`:`right`)}),g(e?o++:c++)}for(;o<n;)g(o++);for(;c<r;)g(c++);i.splice(t,r-t,...f),a.splice(t,r-t,...m),u+=r-t,p(`merge`,`写回有序段 [${t}, ${r-1}]`,`临时区已经有序，现在将这一整段写回原数组。`,Array.from({length:r-t},(e,n)=>t+n),h())}}return p(`end`,`归并排序完成`,`共比较 ${s} 次、向原数组写回 ${u} 个元素。`,[],{settled:i.map((e,t)=>t)}),o}if(p(`start`,t===`bubble`?`从左向右，比较相邻元素`:`把当前元素插入有序部分`,`点击下一步，先观察，再预测即将发生的变化。`),t===`bubble`)for(let e=i.length-1;e>0;e--){f++;let t=!1;for(let n=0;n<e;n++){s++;let r=i[n]>i[n+1],o=[...i];r&&([o[n],o[n+1]]=[o[n+1],o[n]]),p(`compare`,`${i[n]} > ${i[n+1]} → ${r}`,r?`左侧更大，下一步交换这两个元素。`:`顺序已经合适，继续向右比较。`,[n,n+1],{settled:i.map((e,t)=>t).filter(t=>t>e),next:o,prediction:d(`这两个相邻元素需要交换吗？`,{swap:`需要交换`,keep:`保持顺序`},r?`swap`:`keep`)}),r&&([i[n],i[n+1]]=[i[n+1],i[n]],[a[n],a[n+1]]=[a[n+1],a[n]],c++,t=!0,p(`swap`,`交换相邻元素`,`较大的 ${i[n+1]} 向右移动到 [${n+1}]。`,[n,n+1],{settled:i.map((e,t)=>t).filter(t=>t>e)}))}if(!t)break}else for(let e=1;e<i.length;e++){f++;let t=e;for(;t>0;){s++;let e=i[t-1]>i[t],n=[...i];if(e&&([n[t-1],n[t]]=[n[t],n[t-1]]),p(`compare`,`把 ${i[t]} 与左侧 ${i[t-1]} 比较`,e?`当前元素更小，继续向左找到合适的位置。`:`当前位置已经合适，这一轮结束。`,[t-1,t],{next:n,prediction:d(`当前元素还需要向左移动吗？`,{move:`继续向左`,keep:`停止本轮`},e?`move`:`keep`)}),!e)break;[i[t-1],i[t]]=[i[t],i[t-1]],[a[t-1],a[t]]=[a[t],a[t-1]],c++,p(`move`,`向左插入一个位置`,`左侧仍保持有序，继续检查前一个元素。`,[t-1,t]),t--}}return p(`end`,`排序完成`,`共进行了 ${s} 次比较、${c} 次相邻交换。`,[],{settled:i.map((e,t)=>t)}),o}var m=[`python`,`c`,`javascript`],h={bubble:`void solve(int a[], int n) {
    for (int end = n - 1; end > 0; end--) {
        int moved = 0;
        for (int j = 0; j < end; j++) {
            if (a[j] > a[j + 1]) {
                int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
                moved = 1;
            }
        }
        if (!moved) break;
    }
}`,selection:`void solve(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int best = i;
        for (int j = i + 1; j < n; j++) {
            if (a[j] < a[best]) best = j;
        }
        if (best != i) {
            int t = a[i]; a[i] = a[best]; a[best] = t;
        }
    }
}`,insertion:`void solve(int a[], int n) {
    for (int i = 1; i < n; i++) {
        int j = i;
        while (j > 0 && a[j - 1] > a[j]) {
            int t = a[j - 1]; a[j - 1] = a[j]; a[j] = t;
            j--;
        }
    }
}`,merge:`void solve(int a[], int n, int buffer[]) {
    for (int width = 1; width < n; width *= 2) {
        for (int lo = 0; lo + width < n; lo += 2 * width) {
            int mid = lo + width;
            int hi = lo + 2 * width;
            if (hi > n) hi = n;
            int left = lo, right = mid, k = lo;
            while (left < mid && right < hi) {
                if (a[left] <= a[right]) buffer[k++] = a[left++];
                else buffer[k++] = a[right++];
            }
            while (left < mid) buffer[k++] = a[left++];
            while (right < hi) buffer[k++] = a[right++];
            for (int i = lo; i < hi; i++) a[i] = buffer[i];
        }
    }
}`,linear:`int solve(int a[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (a[i] == target) return i;
    }
    return -1;
}`,binary:`int solve(int a[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (a[mid] == target) return mid;
        if (a[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`},g={bubble:`def solve(a):
    for end in range(len(a) - 1, 0, -1):
        moved = False
        for j in range(end):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                moved = True
        if not moved:
            break
    return a`,selection:`def solve(a):
    for i in range(len(a) - 1):
        best = i
        for j in range(i + 1, len(a)):
            if a[j] < a[best]:
                best = j
        if best != i:
            a[i], a[best] = a[best], a[i]
    return a`,insertion:`def solve(a):
    for i in range(1, len(a)):
        j = i
        while j > 0 and a[j - 1] > a[j]:
            a[j - 1], a[j] = a[j], a[j - 1]
            j -= 1
    return a`,merge:`def solve(a):
    n = len(a)
    buffer = [0] * n
    width = 1
    while width < n:
        for lo in range(0, n - width, 2 * width):
            mid, hi = lo + width, min(lo + 2 * width, n)
            left, right, k = lo, mid, lo
            while left < mid and right < hi:
                if a[left] <= a[right]:
                    buffer[k] = a[left]
                    left += 1
                else:
                    buffer[k] = a[right]
                    right += 1
                k += 1
            while left < mid:
                buffer[k] = a[left]
                left, k = left + 1, k + 1
            while right < hi:
                buffer[k] = a[right]
                right, k = right + 1, k + 1
            for i in range(lo, hi):
                a[i] = buffer[i]
        width *= 2
    return a`,linear:`def solve(a, target):
    for i in range(len(a)):
        if a[i] == target:
            return i
    return -1`,binary:`def solve(a, target):
    left, right = 0, len(a) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if a[mid] == target:
            return mid
        if a[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`},_={bubble:`function solve(a) {
  for (var end = a.length - 1; end > 0; end--) {
    var moved = false;
    for (var j = 0; j < end; j++) {
      if (a[j] > a[j + 1]) {
        var t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return a;
}`,selection:`function solve(a) {
  for (var i = 0; i < a.length - 1; i++) {
    var best = i;
    for (var j = i + 1; j < a.length; j++) {
      if (a[j] < a[best]) best = j;
    }
    if (best !== i) {
      var t = a[i]; a[i] = a[best]; a[best] = t;
    }
  }
  return a;
}`,insertion:`function solve(a) {
  for (var i = 1; i < a.length; i++) {
    var j = i;
    while (j > 0 && a[j - 1] > a[j]) {
      var t = a[j - 1]; a[j - 1] = a[j]; a[j] = t;
      j--;
    }
  }
  return a;
}`,merge:`function solve(a) {
  var n = a.length, buffer = new Array(n);
  for (var width = 1; width < n; width *= 2) {
    for (var lo = 0; lo + width < n; lo += 2 * width) {
      var mid = lo + width, hi = Math.min(lo + 2 * width, n);
      var left = lo, right = mid, k = lo;
      while (left < mid && right < hi) {
        if (a[left] <= a[right]) buffer[k++] = a[left++];
        else buffer[k++] = a[right++];
      }
      while (left < mid) buffer[k++] = a[left++];
      while (right < hi) buffer[k++] = a[right++];
      for (var i = lo; i < hi; i++) a[i] = buffer[i];
    }
  }
  return a;
}`,linear:`function solve(a, target) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === target) return i;
  }
  return -1;
}`,binary:`function solve(a, target) {
  var left = 0, right = a.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (a[mid] === target) return mid;
    if (a[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`};function v(e,t,n,r){let i=e===`linear`||e===`binary`,a=n.join(`, `);return t===`python`?`${g[e]}\n\nvalues = [${a}]\n${i?`print(solve(values, ${r}))`:`print(" ".join(str(v) for v in solve(values)))`}\n`:t===`javascript`?`${_[e]}\n\nvar values = [${a}];\nconsole.log(${i?`solve(values, ${r})`:`solve(values).join(" ")`});\n`:`#include <stdio.h>\n\n${h[e]}\n\nint main(void) {\n    int a[${n.length}] = {${a}};\n    int n = ${n.length};\n${i?`    printf("%d\\n", solve(a, n, ${r}));`:`${e===`merge`?`    int buffer[${n.length}];\n    solve(a, n, buffer);`:`    solve(a, n);`}\n    for (int i = 0; i < n; i++) {\n        if (i > 0) printf(" ");\n        printf("%d", a[i]);\n    }\n    printf("\\n");`}\n    return 0;\n}\n`}function y(e,t,n,a){let o=i[t],c={...o,metrics:[{label:`最好时间`,value:o.best},{label:`平均时间`,value:o.average},{label:`最坏时间`,value:o.worst},{label:`辅助空间`,value:o.space}],analysis:o.complexityNote,propertyLabel:o.family===`sort`?`稳定性`:`返回位置的约定`,property:o.stability,propertyNote:o.family===`sort`?`稳定表示相等键值保持原有先后次序。可以打开原始位置进行观察。`:void 0,codeCaption:o.family===`search`?`输出命中下标，不存在时输出 -1；下标从 0 开始。`:`输出升序结果，数据来自本次已应用的原始输入。`};return s(e,c,()=>{let e=n();return m.map(n=>({id:n,label:r[n],language:n,code:v(t,n,e.values,e.target),caption:n===`javascript`?`JavaScript 采用当前工作台支持的 ES5 语法。`:void 0}))},a)}var b=e=>a(i[e].source),x={start:`准备数据`,compare:`比较`,swap:`交换`,move:`移动`,range:`缩小范围`,found:`命中`,divide:`确定有序段`,write:`填入临时区`,merge:`写回原数组`,choose:`确定候选`,end:`结束`};function S(e,r){let a=i[r],s=a.family===`search`,d=a.requiresSorted?[1,2,5,6,8,11,13]:r===`merge`?[7,2,5,2,1,6,3]:[5,2,8,1,6],m=6,h=p(r,d,m),g=0,_=!1,v,S=`principle`,C=!1,w=``,T=!1,E;e.innerHTML=`<div class="algorithm-shell page-enter">
  <section class="algorithm-main"><div class="algorithm-page-heading"><div class="content-navigation-row">${l([`算法空间`,a.group])}<div class="content-navigation-actions">${c(`#/algorithms`,`返回算法目录`,`快速切换算法`)}<button class="button quiet small" data-action="study">${n(`book`)}学习笔记</button></div></div><span class="eyebrow gold">理解原理 · 观察过程 · 动手验证</span><h1>${a.title}</h1><p>${a.overview}</p></div>
  <details class="algorithm-parameters"><summary>${n(`array`)}编辑输入与案例</summary><form class="algorithm-input-form"><label for="algorithm-data">数据序列</label><textarea id="algorithm-data" rows="2" maxlength="160" spellcheck="false">${d.join(`, `)}</textarea>${s?`<label for="search-target">查找目标</label><input id="search-target" type="number" min="-999" max="999" value="6" required>`:``}<p>${a.requiresSorted?`二分查找使用升序数据。`:`2—20 个整数，可含负数和重复值。`}</p><div class="algorithm-error" role="alert"></div><button class="button quiet" type="submit">${n(`reset`)}重新演示</button></form><div class="algorithm-samples"><span>从典型情况开始</span><button data-sample="experiment">${a.experiment.title}${n(`arrow`)}</button><button data-sample="reverse">${a.requiresSorted?`较长的有序数组`:`倒序数组`}${n(`arrow`)}</button><button data-sample="repeat">含有重复值${n(`arrow`)}</button></div></details>
  <section class="algorithm-stage-pane"><div class="stage-caption"><span class="round-caption"></span><div class="stage-settings"><button class="origin-toggle" data-action="origins" aria-pressed="false">原始位置</button><span class="phase-indicator"></span></div></div><div class="algorithm-stage" role="group" aria-label="算法数据与当前操作"><div class="stage-baseline"></div><div class="bars"></div><div class="stage-arrows"></div><div class="comparison-callout"></div></div><div class="stage-index-caption">${s?`标亮区间仍可能包含目标，灰色位置已被排除。`:`下标从 0 开始；原始位置可以帮助观察相等元素的先后顺序。`}</div><div class="merge-buffer" hidden></div><div class="next-preview"></div></section>
  <div class="algorithm-dock"><div class="step-buttons"><button class="button small" data-action="previous">${n(`previous`)}上一步</button><button class="button small gold-button" data-action="play">${n(`play`)}播放</button><button class="button small" data-action="next">下一步${n(`next`)}</button></div><div class="seek-area"><div class="seek-description"><span>过程时间轴</span><span class="algo-step-count"></span></div><input type="range" class="algorithm-seek" aria-label="算法步骤" min="0" value="0" max="${h.length-1}"></div><select class="algorithm-speed" aria-label="算法播放速度"><option value="0.5">0.5×</option><option value="1" selected>1×</option><option value="2">2×</option></select></div>
  <div class="algorithm-study"></div>${b(r)}</section>
  <aside class="algorithm-inspector"><div class="algorithm-inspector-tabs"><button data-algo-tab="principle" class="selected">当前步骤</button><button data-algo-tab="code">关键逻辑</button><button data-algo-tab="exercise">预测</button></div><div class="algorithm-explanation"></div><div class="algorithm-counters"><div><span>比较</span><b class="comparison-count">0</b><small>次</small></div><div><span>${a.counter.label}</span><b class="secondary-count">0</b><small>${a.counter.field===`writes`?`项`:r===`linear`?`个`:`次`}</small></div></div><div class="algorithm-code" hidden></div><div class="prediction-box"></div><div class="algorithm-bottom-note">${n(`info`)}先看过程，再解释为什么。<p>定义、性质、完整代码与自测位于下方学习笔记。</p><a href="${a.source.url}" target="_blank" rel="noopener noreferrer">OI Wiki · ${a.source.title}${n(`arrow`)}</a></div></aside></div>`;let D=t=>e.querySelector(t);function O(){_=!1,clearTimeout(v),v=void 0}function k(){D(`.bars`).innerHTML=d.map((e,t)=>`<button class="bar-item" data-bar-id="${t}" title="原始位置 ${t}，数值 ${e}"><span class="bar-pillar"><b>${e}</b></span><span class="bar-marker"></span><span class="bar-index">[${t}]</span><span class="bar-origin">原[${t}]</span></button>`).join(``)}function A(){let r=h[g],i=d.some(e=>e<0),o=i?166:260,c=Math.max(...d.map(Math.abs),1),l=(i?100:184)/c;D(`.stage-baseline`).style.top=o+`px`,D(`.algorithm-stage`).classList.toggle(`show-origins`,T),e.querySelectorAll(`[data-bar-id]`).forEach(e=>{let t=r.ids.indexOf(Number(e.dataset.barId)),n=r.values[t],i=e.querySelector(`.bar-pillar`);e.style.left=`${(t+.5)*100/d.length}%`,e.style.width=`${Math.min(68,78/d.length)}%`;let a=Math.max(10,Math.abs(n)*l);i.style.height=a+`px`,i.style.top=(n<0?o:o-a)+`px`,e.classList.toggle(`active`,r.active.includes(t)),e.classList.toggle(`secondary`,r.active.indexOf(t)===1),e.classList.toggle(`settled`,r.settled.includes(t)),e.classList.toggle(`negative`,n<0),e.classList.toggle(`minimum`,r.minimum===t),e.classList.toggle(`excluded`,s&&(!!r.range&&(t<r.range[0]||t>r.range[1])||r.phase===`end`)),e.classList.toggle(`merge-left`,!!r.mergeBounds&&t>=r.mergeBounds[0]&&t<r.mergeBounds[1]),e.classList.toggle(`merge-right`,!!r.mergeBounds&&t>=r.mergeBounds[1]&&t<r.mergeBounds[2]),e.querySelector(`.bar-index`).textContent=`[${t}]`,e.querySelector(`.bar-marker`).textContent=r.minimum===t?`min`:``,e.setAttribute(`aria-label`,`下标 ${t}，数值 ${n}${T?`，原始位置 ${e.dataset.barId}`:``}`)}),D(`.round-caption`).textContent=r.round?`第 ${r.round} ${s?`次检查`:`轮`} · ${x[r.phase]}`:x[r.phase],D(`.phase-indicator`).textContent=s?`目标 ${m}`:r.mergeBounds?`左段 [${r.mergeBounds[0]},${r.mergeBounds[1]-1}] · 右段 [${r.mergeBounds[1]},${r.mergeBounds[2]-1}]`:r.minimum===void 0?r.phase===`end`?`已排序`:`升序排列`:`最小值候选 [${r.minimum}]`;let f=D(`.comparison-callout`);f.textContent=[`compare`,`found`].includes(r.phase)?r.title:r.phase===`end`?`本次演示结束`:``,f.hidden=!f.textContent;let p=r.next?.some((e,t)=>e!==r.values[t]);if(D(`.next-preview`).innerHTML=p?`<div><span class="eyebrow violet">下一步预览</span><span>移动后将变成</span></div><div class="preview-array">${r.next.map((e,t)=>`<span class="${e===r.values[t]?``:`changed`}">${e}</span>`).join(``)}</div>`:`<div class="stage-explanation"><span class="pulse-dot"></span>${t(r.explanation)}</div>`,p&&r.active.length===2){let[e,t]=r.active,n=(e+.5)*1e3/d.length,i=(t+.5)*1e3/d.length;D(`.stage-arrows`).innerHTML=`<svg viewBox="0 0 1000 320" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="swap-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 8 4 0 8Z" fill="currentColor"/></marker></defs><path d="M ${n} 62 Q ${(n+i)/2} -3 ${i} 62" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 6" marker-end="url(#swap-arrow)"/></svg>`}else D(`.stage-arrows`).innerHTML=``;let v=D(`.merge-buffer`);v.hidden=!r.auxiliary,r.auxiliary&&(v.innerHTML=`<div class="buffer-caption"><span>临时合并区 [${r.auxiliary.start},${r.auxiliary.start+r.auxiliary.values.length-1}]</span><small>填满后再写回原数组</small></div><div class="buffer-slots">${r.auxiliary.values.map((e,t)=>`<div class="${e===null?`empty`:`filled`}"><b>${e===null?`·`:e}</b><small>[${r.auxiliary.start+t}]</small></div>`).join(``)}</div>`),D(`.comparison-count`).textContent=String(r.comparisons),D(`.secondary-count`).textContent=String(r[a.counter.field]),D(`.algo-step-count`).textContent=`${g+1} / ${h.length}`;let y=D(`.algorithm-seek`);y.max=String(h.length-1),y.value=String(g),D(`[data-action="previous"]`).disabled=g===0,D(`[data-action="next"]`).disabled=g===h.length-1;let b=D(`[data-action="play"]`);b.innerHTML=_?`${n(`pause`)}暂停`:`${n(`play`)}播放`,b.setAttribute(`aria-pressed`,String(_)),D(`.algorithm-explanation`).innerHTML=`<span class="eyebrow gold">${a.name} · ${x[r.phase]}</span><h2>${t(r.title)}</h2><p>${t(r.explanation)}</p><div class="algorithm-phases">${a.steps.map((e,t)=>`${t?n(`arrow`):``}<span>${e}</span>`).join(``)}</div>`,D(`.algorithm-code`).hidden=S!==`code`,S===`code`&&!E&&(D(`.algorithm-code`).innerHTML=`<span class="eyebrow">关键逻辑 · 伪代码</span><div class="algorithm-code-editor"></div>`,E=new u(D(`.algorithm-code-editor`),`python`,a.pseudocode,{readonly:!0,label:`算法关键逻辑伪代码`}));let O=C||S===`exercise`;D(`.prediction-box`).innerHTML=O?`<div class="question-label">${n(`spark`)}预测下一步</div><p>${r.prediction?r.prediction.question:g===h.length-1?`演示已结束，可以回退到比较步骤重新预测。`:`走到一个比较步骤，看看下一步应怎样处理。`}</p>${r.prediction?`<div class="prediction-options">${r.prediction.choices.map(e=>`<button class="button small quiet" data-predict="${e.id}">${e.label}</button>`).join(``)}</div>`:``}${w?`<div class="prediction-response" role="status">${t(w)}</div>`:``}<button class="text-action" data-action="next" ${g===h.length-1?`disabled`:``}>验证下一步${n(`arrow`)}</button>`:`<button class="button quiet predict-toggle" data-action="predict" ${g===h.length-1?`disabled`:``}>${n(`spark`)}预测下一步</button>`}function j(e){g=Math.max(0,Math.min(h.length-1,e)),w=``,A()}function M(){_&&(v=setTimeout(()=>{_&&(j(g+1),g===h.length-1?(O(),A()):M())},1e3/Number(D(`.algorithm-speed`).value)))}function N(e,t){try{let n=p(r,e,t);O(),d=[...e],m=t,h=n,g=0,w=``,k(),A(),F.updateData(),D(`.algorithm-error`).textContent=``}catch(e){D(`.algorithm-error`).textContent=e.message}}function P(){let e=a.experiment;D(`#algorithm-data`).value=e.values.join(`, `),s&&(D(`#search-target`).value=String(e.target??m)),N(e.values,e.target??m),D(`.algorithm-stage-pane`).scrollIntoView({block:`start`,behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`})}let F=y(D(`.algorithm-study`),r,()=>({values:d,target:m}),P),I=e=>{e.preventDefault();try{let e=f(D(`#algorithm-data`).value),t=s?D(`#search-target`).value.trim():`6`,n=Number(t);if(!t||!Number.isSafeInteger(n)||Math.abs(n)>999)throw Error(`请输入 -999 到 999 之间的查找目标。`);N(e,n)}catch(e){D(`.algorithm-error`).textContent=e.message}},L=t=>{let n=t.target.closest(`button`);if(n){if(n.closest(`.algorithm-study`))_&&(O(),A());else if(n.dataset.algoTab)S=n.dataset.algoTab,e.querySelectorAll(`[data-algo-tab]`).forEach(e=>{e.classList.toggle(`selected`,e===n),e.setAttribute(`aria-pressed`,String(e===n))}),A();else if(n.dataset.predict){let t=n.dataset.predict;w=t===h[g].prediction?.answer?`预测正确。点击“验证下一步”观察实际处理。`:`再对照当前数据和关键逻辑，或进入下一步验证。`,A(),e.querySelector(`[data-predict="${t}"]`)?.focus()}else if(n.dataset.sample){if(n.dataset.sample===`experiment`){P();return}let e=a.requiresSorted?n.dataset.sample===`repeat`?[1,2,4,4,6,8]:[1,3,5,7,9,11,13,15]:n.dataset.sample===`repeat`?[3,1,3,2,1]:[8,6,5,2,1];D(`#algorithm-data`).value=e.join(`, `),N(e,m)}else if(n.dataset.barId){let e=h[g].ids.indexOf(Number(n.dataset.barId));D(`.phase-indicator`).textContent=`下标 ${e} · 值 ${h[g].values[e]} · 原始位置 ${n.dataset.barId}`}else switch(n.dataset.action){case`previous`:O(),j(g-1);break;case`next`:O(),j(g+1);break;case`play`:_?O():(g===h.length-1&&j(0),_=!0,M()),A();break;case`predict`:C=!C,A();break;case`origins`:T=!T,n.setAttribute(`aria-pressed`,String(T)),A();break;case`study`:O(),A(),F.showOverview()}}},R=()=>{O(),j(Number(D(`.algorithm-seek`).value))},z=()=>{_&&(clearTimeout(v),M())},B=()=>{document.hidden&&(O(),A())};e.addEventListener(`click`,L),D(`.algorithm-input-form`).addEventListener(`submit`,I),D(`.algorithm-seek`).addEventListener(`input`,R),D(`.algorithm-speed`).addEventListener(`change`,z),document.addEventListener(`visibilitychange`,B);let V=o(e,r);return k(),A(),()=>{O(),E?.destroy(),F.dispose(),V(),e.removeEventListener(`click`,L),document.removeEventListener(`visibilitychange`,B)}}export{S as mountAlgorithms};