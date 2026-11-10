import{a as e,l as t,n,o as r,r as i,u as a,x as o}from"./index-Da0Y7kiC.js";import{t as s}from"./course-directory-DlZM4Mnf.js";import{t as c}from"./shared-BltHzax8.js";function l(l,u,d){let f=t(u),p=r(),m=p.last?.language===u?a(u,p.last.lesson):void 0,h=d??m?.id??f.chapters[0].lessons[0],g=f.lessons.filter(e=>{let t=p.checks[`${u}:${e.id}`]?.quiz;return t&&t.correct===t.total}).length,_=f.lessons.filter(e=>{let t=p.checks[`${u}:${e.id}`]?.practice;return t&&t.passed===t.total}).length,v=f.lessons.filter(e=>e.exercise).length;return l.innerHTML=`<section class="course-directory-page page-enter">
    ${c([o[u],`课程目录`])}
    <header class="course-directory-hero">
      <div>
        <span class="eyebrow gold">${f.chapters.length} 章 · ${f.lessons.length} 课 · ${v} 个编程练习</span>
        <h1>${o[u]} 课程目录</h1>
        <p>${n(f.description)}</p>
      </div>
      ${m?`<a class="button gold-button" href="${e(u,m.id)}">继续上次学习${i(`arrow`)}</a>`:``}
    </header>
    <div class="course-directory-summary">
      <span>理解检查 ${g}/${f.lessons.length} · 练习自测 ${_}/${v}</span>
      <details><summary>本课程的学习目标</summary><ul>${f.outcomes.map(e=>`<li>${n(e)}</li>`).join(``)}</ul></details>
    </div>
    <div class="course-directory-list"></div>
  </section>`,s(l.querySelector(`.course-directory-list`),u,h,`page`)}export{l as mountLearn};