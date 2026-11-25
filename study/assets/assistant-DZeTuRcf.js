import{_ as e,d as t,l as n,m as r,n as i,r as a,u as o,v as s,x as c,y as l}from"./index-DmQzr_oP.js";import{n as u}from"./learning-BDw0BaFN.js";import{t as d}from"./client-Dsq9SQS-.js";var f=8388608,p={pack:e(),language:`c`,lessonId:`output`,dirty:!1};window.addEventListener(`beforeunload`,e=>{p.dirty&&(e.preventDefault(),e.returnValue=``)});function m(e,n){let r=t(e,n);return{language:e,lessonId:n,sections:structuredClone(o(e,n).sections),examples:structuredClone(r?.examples||[])}}function h(){return p.pack.lessons.find(e=>e.language===p.language&&e.lessonId===p.lessonId)||m(p.language,p.lessonId)}function g(e,t){let n=o(e,t),r=n.files&&Object.keys(n.files).length?o(e,`output`):n;return{id:`example-`+crypto.randomUUID().replaceAll(`-`,``).slice(0,16),title:`我的程序例子`,description:`请根据教学目标修改示例，并说明需要观察什么。`,code:r.code,input:r.input,expectedOutput:r.expectedOutput}}function _(e){let t=h(),m,_=new WeakMap,v=!1,y=!1;function b(n,r){_.set(n,r);let i=t.examples.indexOf(n),o=e.querySelector(`[data-run-status="${i}"]`),s=e.querySelector(`[data-run-output="${i}"]`),c=e.querySelector(`[data-studio-action="run"][data-index="${i}"]`);o&&s&&c&&(o.dataset.kind=r.kind,o.textContent=r.message,s.hidden=r.output===void 0,s.textContent=r.output??``,c.innerHTML=r.kind===`running`?`${a(`stop`)}停止试运行`:`${a(`play`)}试运行`)}function x(e=`已停止试运行。`){if(!m)return;let{item:t,client:n}=m;m=void 0,n.cancel(),b(t,{kind:`pending`,message:e})}function S(){let n=p.pack.lessons.findIndex(e=>e.language===t.language&&e.lessonId===t.lessonId);n<0?p.pack.lessons.push(t):p.pack.lessons[n]=t,p.dirty=!0;let r=e.querySelector(`.studio-draft-status`);r&&(r.textContent=`内容包中有 ${p.pack.lessons.length} 门课程 · 修改尚未导出`)}function C(t,n=!1){let r=e.querySelector(`.studio-message`);r&&(r.textContent=t,r.classList.toggle(`is-error`,n))}function w(){let n=e.querySelector(`.studio-preview-body`);if(!n)return;let r=o(t.language,t.lessonId);n.innerHTML=`<span class="eyebrow gold">${i(c[t.language])} · 课程预览</span><h2>${i(r.title)}</h2><div class="studio-preview-sections">${t.sections.map(e=>`<section><h3>${i(e.title||`未填写标题`)}</h3><p>${i(e.body||`正文尚未填写。`)}</p></section>`).join(``)}</div><h3 class="studio-preview-examples-title">补充程序例子 · ${t.examples.length}</h3>${t.examples.length?t.examples.map(e=>`<div class="studio-preview-example"><b>${i(e.title||`未填写标题`)}</b><p>${i(e.description)}</p><pre><code>${i(e.code)}</code></pre></div>`).join(``):`<p class="muted">还没有添加补充例子。</p>`}`}function T(){x();let o=e.querySelector(`.studio-guide`);o&&(y=o.open);let s=n(p.language),u=r(p.language);e.innerHTML=`<section class="teaching-studio${e.querySelector(`.teaching-studio`)?``:` page-enter`}">
      <header class="studio-heading">
        <div class="studio-identity">
          <span class="studio-emblem" aria-hidden="true">${a(`book`)}</span>
          <div><h1>助教内容工作台</h1><p>编辑知识点、试运行例题，再把内容包交给管理员发布。</p></div>
        </div>
        <div class="studio-actions">
          <button class="button quiet" data-studio-action="choose-file">导入内容包</button>
          <input type="file" accept=".json,application/json" data-file-import hidden>
          <button class="button gold-button" data-studio-action="export">${a(`into`)}导出内容包</button>
        </div>
      </header>
      <div class="studio-status-bar">
        <p class="studio-draft-status" role="status">内容包中有 ${p.pack.lessons.length} 门课程 · ${p.dirty?`修改尚未导出`:`当前没有未导出的修改`}</p>
        <p class="studio-message" role="status"></p>
      </div>
      <details class="studio-guide" ${y?`open`:``}>
        <summary>${a(`info`)}操作指南</summary>
        <div class="studio-guide-grid">
          <div>
            <ol>
              <li>选择课程，编辑知识点的标题和正文。右侧会同步显示学生看到的文字。</li>
              <li>添加程序例子，填写要观察的现象、代码、标准输入和预期输出。点击「试运行」核对结果。</li>
              <li>导出 JSON 交给管理员审核发布。下次打开工作台，可以导入同一文件继续编辑。</li>
            </ol>
            <p>刷新前请先导出草稿。例子支持标准输入。自定义 C 程序首次运行需要准备编译组件，Java 首次运行需要联网。</p>
          </div>
          <div>
            <h2>C 语言例子 · 输出</h2>
            <pre><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("Hello, Astra!\\n");
    return 0;
}</code></pre>
            <p>标准输入留空，预期输出填写 <code>Hello, Astra!</code>。</p>
          </div>
        </div>
      </details>
      <div class="studio-layout">
        <div class="studio-editor">
          <section class="studio-block studio-course-picker">
            <div class="studio-block-head">
              <h2>选择课程</h2>
              <div class="studio-jump" aria-label="跳到本课">
                <button class="button quiet small" data-studio-action="jump-sections">知识点</button>
                <button class="button quiet small" data-studio-action="jump-examples">程序例子</button>
              </div>
            </div>
            <div class="studio-selects">
              <label>编程语言<select data-studio-language>${l.map(e=>`<option value="${e}" ${e===p.language?`selected`:``}>${i(c[e])}</option>`).join(``)}</select></label>
              <label>课程<select data-studio-lesson>${s.chapters.map(e=>`<optgroup label="${i(e.title)}">${e.lessons.map(e=>`<option value="${i(e)}" ${e===p.lessonId?`selected`:``}>${i(u.find(t=>t.id===e).title)}</option>`).join(``)}</optgroup>`).join(``)}</select></label>
            </div>
          </section>
          <section class="studio-block" data-studio-section="sections">
            <div class="studio-block-head">
              <h2>知识点课文</h2>
              <button class="button quiet small" data-studio-action="add-section" ${t.sections.length>=30?`disabled`:``}>＋ 添加知识点</button>
            </div>
            <div class="studio-edit-list">${t.sections.map((e,n)=>`
              <article class="studio-edit-card">
                <div class="studio-item-heading"><b>知识点 ${n+1}</b><button class="text-action" data-studio-action="remove-section" data-index="${n}" aria-label="删除知识点 ${n+1}" ${t.sections.length===1?`disabled`:``}>删除</button></div>
                <label>标题<input data-section="${n}" data-field="title" maxlength="100" value="${i(e.title)}"></label>
                <label>正文<textarea data-section="${n}" data-field="body" rows="4" maxlength="8000">${i(e.body)}</textarea></label>
              </article>`).join(``)}</div>
          </section>
          <section class="studio-block" data-studio-section="examples">
            <div class="studio-block-head">
              <h2>程序演示例子</h2>
              <button class="button quiet small" data-studio-action="add-example" ${t.examples.length>=30?`disabled`:``}>＋ 添加程序例子</button>
            </div>
            ${t.examples.length?`<div class="studio-edit-list">${t.examples.map((e,t)=>`
              <article class="studio-edit-card">
                <div class="studio-item-heading"><b>程序例子 ${t+1}</b><button class="text-action" data-studio-action="remove-example" data-index="${t}" aria-label="删除程序例子 ${t+1}">删除</button></div>
                <label>例子标题<input data-example="${t}" data-field="title" maxlength="100" value="${i(e.title)}"></label>
                <label>例子说明<textarea data-example="${t}" data-field="description" rows="2" maxlength="4000">${i(e.description)}</textarea></label>
                <label>程序代码<textarea class="studio-code" data-example="${t}" data-field="code" rows="8" spellcheck="false" maxlength="65536">${i(e.code)}</textarea></label>
                <div class="studio-io">
                  <label>标准输入<textarea class="studio-code" data-example="${t}" data-field="input" rows="3" spellcheck="false" maxlength="65536">${i(e.input)}</textarea></label>
                  <label>预期输出<textarea class="studio-code" data-example="${t}" data-field="expectedOutput" rows="3" spellcheck="false" maxlength="65536">${i(e.expectedOutput)}</textarea></label>
                </div>
                <div class="studio-example-actions"><button class="button quiet small" data-studio-action="run" data-index="${t}">${a(`play`)}试运行</button><span data-run-status="${t}" role="status">运行后可核对预期输出。</span></div>
                <pre class="studio-run-output" data-run-output="${t}" hidden></pre>
              </article>`).join(``)}</div>`:`<p class="studio-empty">可基于本课的运行示例添加补充例子。</p>`}
          </section>
        </div>
        <aside class="studio-preview" aria-label="学生预览">
          <div class="studio-preview-heading"><b>学生预览</b><span>随编辑更新</span></div>
          <div class="studio-preview-body" tabindex="0" aria-label="课程预览内容"></div>
          <p class="studio-hint">发布后，学生才能在课程里看到这些修改。</p>
        </aside>
      </div>
    </section>`,w();for(let e of t.examples){let t=_.get(e);t&&b(e,t)}}function E(e,n){p.language=e,p.lessonId=n,t=h(),T()}async function D(e){let n=t.examples[e];if(m?.item===n){x();return}if(!n?.code.trim()){n&&b(n,{kind:`error`,message:`请先填写程序代码。`});return}x();let r={item:n,client:new d};m=r;let i=n.expectedOutput;b(n,{kind:`running`,message:`正在准备运行环境…`});try{let e=await r.client.run({language:t.language,code:n.code,input:n.input},e=>{!v&&m===r&&b(n,{kind:`running`,message:e})});if(v||m!==r)return;let a=u(e.stdout,i);b(n,{kind:e.error?`error`:a?`passed`:`mismatch`,message:e.error?`运行未完成，请查看诊断。`:a?`输出与预期一致。`:`输出与预期不同。`,output:e.error||e.stdout||`（无标准输出）`})}catch(e){!v&&m===r&&b(n,{kind:`error`,message:`运行未完成。`,output:e instanceof Error?e.message:String(e)})}finally{m===r&&(m=void 0,r.client.cancel())}}function O(){if(!p.pack.lessons.length)C(`请先修改一门课程，再导出内容包。`,!0);else try{let t=s(p.pack,(e,t)=>!!o(e,t)),n=JSON.stringify(t,null,2)+`
`;if(new TextEncoder().encode(n).byteLength>f)throw Error(`内容包不能超过 8 MiB，请拆分课程后导出。`);let r=URL.createObjectURL(new Blob([n],{type:`application/json;charset=utf-8`})),i=document.createElement(`a`);i.href=r,i.download=`astra-teaching-pack.json`,i.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3),p.dirty=!1,e.querySelector(`.studio-draft-status`).textContent=`已导出 ${t.lessons.length} 门课程 · 继续修改后请再次导出`,C(`已生成内容包。请将 JSON 文件交给负责审核和发布的人。`)}catch(e){C(e instanceof Error?e.message:String(e),!0)}}async function k(e){try{if(e.size>f)throw Error(`内容包不能超过 8 MiB。`);let n=s(JSON.parse(await e.text()),(e,t)=>!!o(e,t));if(v||p.dirty&&!window.confirm(`当前有尚未导出的修改。继续导入会替换这些修改。`))return;p.pack=n,p.dirty=!1,n.lessons[0]&&(p.language=n.lessons[0].language,p.lessonId=n.lessons[0].lessonId),t=h(),T(),C(`已导入 ${n.lessons.length} 门课程，可以继续编辑。`)}catch(e){v||C(e instanceof Error?e.message:`内容包无法读取。`,!0)}}let A=e=>{let n=e.target,r=n.dataset.section,i=n.dataset.example,a=n.dataset.field;if(r!==void 0&&(a===`title`||a===`body`))t.sections[Number(r)][a]=n.value;else if(i!==void 0&&(a===`title`||a===`description`||a===`code`||a===`input`||a===`expectedOutput`)){let e=t.examples[Number(i)];if(e[a]===n.value)return;if(e[a]=n.value,(a===`code`||a===`input`||a===`expectedOutput`)&&_.has(e)){let t=`内容已修改，请重新试运行。`;m?.item===e?x(t):b(e,{kind:`pending`,message:t})}}else return;S(),w()},j=e=>{let t=e.target;if(t.matches(`[data-studio-language]`)){let e=t.value;E(e,r(e)[0].id)}else t.matches(`[data-studio-lesson]`)?E(p.language,t.value):t instanceof HTMLInputElement&&t.matches(`[data-file-import]`)&&t.files?.[0]&&(k(t.files[0]),t.value=``)},M=n=>{let r=n.target.closest(`[data-studio-action]`);if(!r||r.disabled)return;let i=Number(r.dataset.index);switch(r.dataset.studioAction){case`jump-sections`:case`jump-examples`:e.querySelector(`[data-studio-section="${r.dataset.studioAction.slice(5)}"]`)?.scrollIntoView({block:`start`});break;case`add-section`:t.sections.push({title:``,body:``}),S(),T(),e.querySelector(`[data-section="${t.sections.length-1}"][data-field="title"]`)?.focus();break;case`remove-section`:t.sections.length>1&&(t.sections.splice(i,1),S(),T());break;case`add-example`:t.examples.push(g(t.language,t.lessonId)),S(),T(),e.querySelector(`[data-example="${t.examples.length-1}"][data-field="title"]`)?.focus();break;case`remove-example`:t.examples.splice(i,1),S(),T();break;case`run`:D(i);break;case`choose-file`:e.querySelector(`[data-file-import]`).click();break;case`export`:O()}};return e.addEventListener(`input`,A),e.addEventListener(`change`,j),e.addEventListener(`click`,M),T(),()=>{v=!0,x(),e.removeEventListener(`input`,A),e.removeEventListener(`change`,j),e.removeEventListener(`click`,M)}}export{_ as mountAssistant};