import{a as e,i as t}from"./algorithm-directory-BMMqZjUf.js";import{C as n,n as r,r as i,w as a}from"./index-Da0Y7kiC.js";import{n as o,r as s,t as c}from"./study-panel-Bmwk3IqX.js";import{t as l}from"./directory-drawer-D40IFIWm.js";import{t as u}from"./shared-BltHzax8.js";function d(e,t,n,r){if(!e||!/^[-]?\d+$/.test(e.trim()))throw Error(`${r}需要是完整整数。`);let i=Number(e);if(!Number.isSafeInteger(i)||i<t||i>n)throw Error(`${r}范围为 ${t}—${n}。`);return i}function f(e,t,n,r=`数据`){let i=(e||``).trim().split(/[,，\s]+/).filter(Boolean);if(i.length<t||i.length>n)throw Error(`${r}需要 ${t}—${n} 个整数。`);return i.map(e=>d(e,-99,99,r))}function p(e,t,n){let r=(e||``).split(/\n|;/).map(e=>e.trim()).filter(Boolean);if(!r.length||r.length>t)throw Error(`${n}需要 1—${t} 行。`);return r}function m(e,t,n,r){let i=e.split(/[,，\s]+/).filter(Boolean);if(i.length!==2)throw Error(`${t}每行需要两个整数。`);return i.map(e=>d(e,n,r,t))}function h(e,t){if([`dfs`,`bfs`,`dijkstra`,`topological`,`kruskal`].includes(e)){let n=d(t.n,1,12,`顶点数`),r=e===`dijkstra`||e===`kruskal`,i=e===`topological`||e===`dijkstra`||[`dfs`,`bfs`].includes(e)&&t.direction===`directed`;if([`dfs`,`bfs`].includes(e)&&![`directed`,`undirected`].includes(t.direction))throw Error(`请选择有向图或无向图。`);let a=(t.edges||``).split(/\n|;/).map(e=>e.trim()).filter(Boolean);if(a.length>30)throw Error(`图演示最多 30 条边。`);return{kind:`graph`,n,edges:a.map((t,i)=>{let a=t.split(/[,，\s]+/).filter(Boolean);if(a.length!==(r?3:2))throw Error(r?`每条边格式为：起点 终点 权值。`:`无权图每条边格式为：起点 终点。`);return{id:`e${i}`,from:d(a[0],0,n-1,`起点`),to:d(a[1],0,n-1,`终点`),weight:r?d(a[2],e===`kruskal`?-99:0,99,`权值`):1}}),directed:i,weighted:r,start:d(t.start??`0`,0,n-1,`搜索起点`),target:d(t.target??String(n-1),0,n-1,`目标顶点`)}}if(e===`backtrack`||e===`lis`){let n=f(t.values,1,e===`backtrack`?5:14);if(e===`backtrack`&&new Set(n).size!==n.length)throw Error(`此全排列演示使用互不相同的元素，重复元素需要额外去重策略。`);return{kind:`array`,values:n}}if(e===`knapsack`){let e=d(t.capacity,1,16,`容量`);return{kind:`knapsack`,items:p(t.items,8,`物品`).map(e=>{let[t,n]=m(e,`物品的重量与价值`,0,99);if(t===0)throw Error(`演示物品的重量必须大于 0。`);return{weight:t,value:n}}),capacity:e}}if([`union-find`,`fenwick`,`segment-tree`].includes(e)){let n=e===`union-find`?[]:f(t.values,1,12),r=e===`union-find`?d(t.n,1,10,`元素数`):n.length;return{kind:`structure`,n:r,values:n,operations:p(t.operations,10,`操作`).map(t=>{let n=t.split(/\s+/),i=n[0],a;if(e===`union-find`){if(![`union`,`find`,`same`].includes(i)||n.length!==(i===`find`?2:3))throw Error(`并查集操作：union a b、find a、same a b（下标从 0 开始）。`);a=n.slice(1).map(e=>d(e,0,r-1,`元素下标`))}else if(e===`fenwick`){if(![`add`,`sum`,`range`].includes(i)||n.length!==(i===`sum`?2:3))throw Error(`树状数组操作：add i delta、sum r、range l r（位置从 1 开始）。`);if(a=i===`add`?[d(n[1],1,r,`更新位置`),d(n[2],-99,99,`增量`)]:n.slice(1).map(e=>d(e,i===`sum`?0:1,r,`查询位置`)),i===`range`&&a[0]>a[1])throw Error(`查询左端点不能大于右端点。`)}else{if(![`set`,`sum`].includes(i)||n.length!==3)throw Error(`线段树操作：set i value、sum l r（下标从 0 开始）。`);if(a=i===`set`?[d(n[1],0,r-1,`修改位置`),d(n[2],-99,99,`新值`)]:n.slice(1).map(e=>d(e,0,r-1,`查询下标`)),i===`sum`&&a[0]>a[1])throw Error(`查询左端点不能大于右端点。`)}return{type:i,args:a}})}}if(e===`kmp`){let e=t.text??``,n=t.pattern??``;if(!e||e.length>48||!n||n.length>12||!/^[\x20-\x7e]+$/.test(e+n))throw Error(`文本为 1—48 个可见英文字符，模式为 1—12 个，区分大小写。`);return{kind:`text`,text:e,pattern:n}}if(e===`trie`){let e=(t.words||``).trim().split(/[\s,，]+/).filter(Boolean),n=t.query||``;if(!e.length||e.length>8||e.some(e=>!/^[a-z]{1,8}$/.test(e))||e.reduce((e,t)=>e+t.length,0)>40||!/^[a-z]{1,8}$/.test(n))throw Error(`输入 1—8 个小写英文单词，每词最多 8 字母，总长度不超过 40；查询串也用小写字母。`);return{kind:`trie`,words:e,query:n}}if(e===`gcd`)return{kind:`math`,a:d(t.a,0,1e9,`a`),b:d(t.b,0,1e9,`b`),mod:1,limit:0};if(e===`fast-power`)return{kind:`math`,a:d(t.a,0,1e9,`底数`),b:d(t.b,0,1e9,`指数`),mod:d(t.mod,1,1e9,`模数`),limit:0};if(e===`sieve`)return{kind:`math`,a:0,b:0,mod:1,limit:d(t.limit,2,120,`筛选上限`)};if(e===`prefix-sum`){let e=f(t.values,1,14);return{kind:`prefix`,values:e,queries:p(t.queries,8,`查询`).map(t=>{let n=m(t,`闭区间下标`,0,e.length-1);if(n[0]>n[1])throw Error(`左下标不能大于右下标。`);return n})}}return{kind:`interval`,intervals:p(t.intervals,8,`区间`).map((e,t)=>{let[n,r]=m(e,`活动起止时间`,0,30);if(n>=r)throw Error(`开始时间必须早于结束时间。`);return{id:t,start:n,end:r}})}}var g=class{parent;size;constructor(e){this.parent=Array.from({length:e},(e,t)=>t),this.size=Array(e).fill(1)}find(e,t){if(t?.(e,`walk`),this.parent[e]!==e){let n=this.find(this.parent[e],t);return this.parent[e]!==n&&(this.parent[e]=n,t?.(e,`compress`)),n}return e}union(e,t,n){let r=this.find(e,n),i=this.find(t,n);return r!==i&&(this.size[r]<this.size[i]&&([r,i]=[i,r]),this.parent[i]=r,this.size[r]+=this.size[i],!0)}},_=class{items=[];less(e,t){return e[0]<t[0]||e[0]===t[0]&&e[1]<t[1]}push(e){this.items.push(e);let t=this.items.length-1;for(;t>0;){let e=Math.floor((t-1)/2);if(!this.less(this.items[t],this.items[e]))break;[this.items[t],this.items[e]]=[this.items[e],this.items[t]],t=e}}pop(){if(!this.items.length)return;let e=this.items[0],t=this.items.pop();if(this.items.length){this.items[0]=t;let e=0;for(;;){let t=e;for(let n of[e*2+1,e*2+2])n<this.items.length&&this.less(this.items[n],this.items[t])&&(t=n);if(t===e)break;[this.items[e],this.items[t]]=[this.items[t],this.items[e]],e=t}}return e}get length(){return this.items.length}snapshot(){return this.items.map(e=>[...e]).sort((e,t)=>e[0]-t[0]||e[1]-t[1])}};function v(e,t,n){let r=[],i=n;for(let n=0;n<=e.length&&i>=0;n++){if(r.unshift(i),i===t)return r;i=e[i]}return[]}function y(e,t,n){let{n:r,edges:i,start:a,target:o,directed:s}=t,c=Array.from({length:r},()=>[]);for(let e of i)c[e.from].push({to:e.to,weight:e.weight,id:e.id}),s||c[e.to].push({to:e.from,weight:e.weight,id:e.id});c.forEach(e=>e.sort((e,t)=>e.to-t.to||e.weight-t.weight||e.id.localeCompare(t.id)));let l=Array(r).fill(!1),u=new Set,d=Array(r).fill(-1),f=Array(r).fill(``),p=[],m=0,h=(e=-1,n=``,a=f.filter(Boolean),o=[])=>({kind:`graph`,title:s?`有向图`:`无向图`,nodes:Array.from({length:r},(t,n)=>({id:`n${n}`,label:String(n),state:n===e?`current`:o.includes(n)?`chosen`:u.has(n)?`done`:l[n]?`seen`:`muted`})),edges:i.map(e=>({id:e.id,from:`n${e.from}`,to:`n${e.to}`,label:t.weighted?String(e.weight):void 0,directed:s,state:e.id===n?`current`:a.includes(e.id)?`chosen`:void 0})),current:e<0?void 0:`n${e}`,caption:`金色为当前执行点，蓝色为已发现，绿色为完成或选中的关系。`}),y=(e,t,r)=>({frames:n.frames,output:e,summary:t,result:r});if(e===`dfs`||e===`bfs`){let t=Array(r).fill(-1),i=[],s=(r,a,o,s=-1,c=``,f)=>n.add({phase:r,title:a,explanation:o,metrics:[{label:`已发现`,value:l.filter(Boolean).length},{label:`检查邻接项`,value:m}],prediction:f,panels:[h(s,c),{kind:`frontier`,title:e===`dfs`?`递归调用栈`:`等待扩展的队列`,mode:e===`dfs`?`stack`:`queue`,values:[...i],caption:e===`dfs`?`栈顶在右侧；退出函数后回到前一层。`:`队首在左侧；发现顶点时就标记，避免重复入队。`},{kind:`row`,title:`发现顺序`,values:[...p]},{kind:`table`,title:e===`bfs`?`最短边数与父节点`:`遍历树的父节点`,columns:[`顶点`,`父节点`,e===`bfs`?`到起点边数`:`状态`],rows:d.map((n,r)=>[r,n<0?`—`:n,e===`bfs`?t[r]<0?`不可达`:t[r]:u.has(r)?`已回退`:l[r]?`已发现`:`未访问`]),activeRow:s}]});if(e===`dfs`){let e=t=>{l[t]=!0,p.push(t),i.push(t),s(`enter`,`进入顶点 ${t}`,`先标记，再探索邻接点；同一个顶点只进入一次。`,t);for(let n of c[t]){m++;let r=l[n.to];s(`inspect`,`检查 ${t} → ${n.to}`,r?`邻接点已经发现，跳过这条探索分支。`:`邻接点尚未发现，下一步递归进入。`,t,n.id,{question:`下一步是否递归进入这个邻接点？`,choices:[{id:`enter`,label:`递归进入`},{id:`skip`,label:`跳过已访问点`}],answer:r?`skip`:`enter`}),r||(d[n.to]=t,f[n.to]=n.id,e(n.to))}i.pop(),u.add(t),s(`backtrack`,`离开顶点 ${t}`,i.length?`这一层探索完成，回到调用栈的上一层。`:`起点的可达部分已全部探索。`,i.at(-1)??-1)};e(a);let t=l[o]?v(d,a,o):[];return n.add({phase:`end`,title:`DFS 遍历完成`,explanation:`只遍历起点 ${a} 的可达部分。目标路径是遍历树中的一条路径，不保证最短。`,metrics:[{label:`可达顶点`,value:p.length},{label:`邻接项检查`,value:m}],panels:[h(-1,``,f.filter(Boolean),t),{kind:`row`,title:`DFS 发现顺序`,values:p},{kind:`row`,title:l[o]?`到目标的首次路径（不保证最短）`:`目标不可达`,values:t}]}),y(p.join(` `),`DFS 发现顺序`,{order:p,parent:d,path:t})}for(l[a]=!0,t[a]=0,i.push(a),p.push(a),s(`discover`,`起点 ${a} 入队`,`起点的距离是 0。入队时标记，可避免同一点被多个父节点重复发现。`,a);i.length;){let e=i.shift();s(`dequeue`,`队首 ${e} 出队`,`按先进先出的顺序扩展当前顶点。`,e);for(let n of c[e]){m++;let r=l[n.to];s(`inspect`,`检查 ${e} → ${n.to}`,r?`已经发现，不再重复入队。`:`首次发现后距离将是 ${t[e]+1}。`,e,n.id,{question:`这个邻接点接下来要入队吗？`,choices:[{id:`enqueue`,label:`标记并入队`},{id:`skip`,label:`跳过`}],answer:r?`skip`:`enqueue`}),r||(l[n.to]=!0,d[n.to]=e,f[n.to]=n.id,t[n.to]=t[e]+1,p.push(n.to),i.push(n.to),s(`enqueue`,`发现并入队 ${n.to}`,`dist[${n.to}] = dist[${e}] + 1 = ${t[n.to]}。`,n.to,n.id))}u.add(e),s(`complete`,`顶点 ${e} 扩展完成`,`队列中的后续顶点继续按层次扩展。`,e)}let g=t[o]<0?[]:v(d,a,o);return n.add({phase:`end`,title:t[o]<0?`目标不可达`:`最短路径包含 ${t[o]} 条边`,explanation:`这是无权图的最短边数。带权最短路不能直接使用这个结论。`,metrics:[{label:`已发现`,value:p.length},{label:`最短边数`,value:t[o]}],panels:[h(-1,``,g.slice(1).map(e=>f[e]),g),{kind:`row`,title:`BFS 发现顺序`,values:p},{kind:`row`,title:`最短路径`,values:g},{kind:`row`,title:`各顶点的最短边数（-1 表示不可达）`,values:t}]}),y(String(t[o]),`到目标的最短边数`,{distance:t,parent:d,path:g,order:p})}if(e===`dijkstra`){if(i.some(e=>e.weight<0))throw Error(`Dijkstra 只用于非负边权。`);let e=Array(r).fill(1/0),t=new _;e[a]=0,l[a]=!0,t.push([0,a]);let s=(i,a,o,s=-1,c=``,f)=>n.add({phase:i,title:a,explanation:o,prediction:f,metrics:[{label:`已确定顶点`,value:u.size},{label:`检查边`,value:m}],panels:[{...h(s,c),nodes:Array.from({length:r},(t,n)=>({id:`n${n}`,label:String(n),detail:`d=${e[n]===1/0?`∞`:e[n]}`,state:n===s?`current`:u.has(n)?`done`:l[n]?`seen`:`muted`}))},{kind:`frontier`,title:`优先队列（按距离展示）`,mode:`priority`,values:t.snapshot().map(([e,t])=>`${t}: ${e}`)},{kind:`table`,title:`最短距离与前驱`,columns:[`顶点`,`距离`,`前驱`],rows:e.map((e,t)=>[t,e===1/0?`∞`:e,d[t]<0?`—`:d[t]]),activeRow:s}]});for(s(`start`,`起点距离设为 0`,`其余顶点暂时不可达，用 ∞ 表示。`);t.length;){let[n,r]=t.pop();if(n!==e[r])s(`stale`,`丢弃顶点 ${r} 的旧记录`,`队列距离 ${n} 已不是当前最优值 ${e[r]}。`,r);else{u.add(r),s(`settle`,`确定顶点 ${r} 的最短距离`,`在非负边权下，当前最小距离 ${n} 不会再被改小。`,r);for(let i of c[r]){m++;let a=n+i.weight,o=a<e[i.to];s(`relax`,`尝试松弛 ${r} → ${i.to}`,`${n} + ${i.weight} = ${a}，${o?`可以改进`:`不能改进`}当前距离。`,r,i.id,{question:`是否更新终点的当前距离？`,choices:[{id:`update`,label:`更新并入队`},{id:`keep`,label:`保持原值`}],answer:o?`update`:`keep`}),o&&(e[i.to]=a,l[i.to]=!0,d[i.to]=r,f[i.to]=i.id,t.push([a,i.to]),s(`update`,`更新 dist[${i.to}] = ${a}`,`加入新记录，较旧的队列记录在弹出时再判断是否过期。`,i.to,i.id))}}}let p=e[o]===1/0?[]:v(d,a,o),g=e[o]===1/0?-1:e[o];return s(`end`,g<0?`目标不可达`:`目标最短距离为 ${g}`,`结束后可查看所有顶点的距离，-1 输出表示目标不可达。`),n.frames[n.frames.length-1].panels[0]=h(-1,``,p.slice(1).map(e=>f[e]),p),y(String(g),`到目标的最短距离`,{distance:e.map(e=>Number.isFinite(e)?e:null),parent:d,path:p})}if(e===`topological`){let e=Array(r).fill(0),t=[];i.forEach(t=>e[t.to]++),e.forEach((e,n)=>{e||(t.push(n),l[n]=!0)});let a=(i,a,o,s=-1,c=``)=>n.add({phase:i,title:a,explanation:o,metrics:[{label:`已输出`,value:p.length},{label:`剩余顶点`,value:r-p.length}],panels:[h(s,c),{kind:`frontier`,title:`当前入度为 0 的队列`,mode:`queue`,values:t},{kind:`row`,title:`剩余入度`,values:e},{kind:`row`,title:`拓扑序列`,values:p}]});for(a(`start`,`找出所有入度为 0 的顶点`,`它们不再依赖尚未处理的前置顶点。`);t.length;){let n=t.shift();p.push(n),l[n]=!0,u.add(n),a(`remove`,`输出顶点 ${n}`,`移除当前顶点对后继的依赖边。`,n);for(let r of c[n])e[r.to]--,a(`decrease`,`入度[${r.to}] 减少到 ${e[r.to]}`,`只有剩余入度刚好变成 0，才加入可处理队列。`,n,r.id),e[r.to]===0&&(t.push(r.to),l[r.to]=!0,a(`enqueue`,`顶点 ${r.to} 已无剩余前置依赖`,`加入队尾，等待处理。`,r.to,r.id))}let o=p.length<r;return a(`end`,o?`检测到有向环`:`拓扑排序完成`,o?`队列为空但还有顶点未输出，无法得到覆盖全部顶点的拓扑序。`:`每条有向边的起点都位于终点之前；拓扑序不一定唯一。`),y(o?`CYCLE`:p.join(` `),`拓扑序或环检测`,{order:p,cycle:o})}let b=new g(r),x=[],S=[],C=0,w=[...i].sort((e,t)=>e.weight-t.weight||e.from-t.from||e.to-t.to||e.id.localeCompare(t.id)),T=(e,t,a,o=``,s)=>n.add({phase:e,title:t,explanation:a,prediction:s,metrics:[{label:`已选边`,value:x.length},{label:`总权值`,value:C}],panels:[{...h(-1,o,x),edges:i.map(e=>({id:e.id,from:`n${e.from}`,to:`n${e.to}`,label:String(e.weight),state:e.id===o?`current`:x.includes(e.id)?`chosen`:S.includes(e.id)?`rejected`:void 0}))},{kind:`table`,title:`边按权值排序`,columns:[`边`,`权值`,`状态`],rows:w.map(e=>[`${e.from}—${e.to}`,e.weight,x.includes(e.id)?`已选`:S.includes(e.id)?`成环，跳过`:`待检查`]),activeRow:w.findIndex(e=>e.id===o)},{kind:`row`,title:`并查集代表元`,values:Array.from({length:r},(e,t)=>b.find(t))}]});T(`start`,`先按边权从小到大排序`,`每次仅接受连接两个不同连通块的边。`);for(let e of w){let t=b.find(e.from)!==b.find(e.to);T(`inspect`,`考虑边 ${e.from}—${e.to}，权值 ${e.weight}`,t?`两端属于不同连通块，可以合并。`:`两端已经连通，加入会形成环。`,e.id,{question:`这条边应加入当前生成森林吗？`,choices:[{id:`take`,label:`接受这条边`},{id:`skip`,label:`跳过成环边`}],answer:t?`take`:`skip`}),t?(b.union(e.from,e.to),x.push(e.id),C+=e.weight,l[e.from]=l[e.to]=!0,T(`accept`,`接受并合并两个连通块`,`继续选择不成环的最小候选边。`,e.id)):(S.push(e.id),T(`reject`,`跳过这条成环边`,`生成树不能包含环。`,e.id))}let E=x.length===r-1;return T(`end`,E?`最小生成树权值 ${C}`:`图不连通，无法形成生成树`,E?`已选 n−1 条边并连接所有顶点。`:`当前得到最小生成森林，森林权值为 ${C}；模板输出 DISCONNECTED。`),y(E?String(C):`DISCONNECTED`,`最小生成树或不可连通标记`,{weight:C,selected:x,connected:E})}function b(e,t){let{items:n,capacity:r}=e,i=n.length,a=Array.from({length:i+1},(e,t)=>Array(r+1).fill(t===0?0:null)),o=Array.from({length:i+1},()=>Array(r+1).fill(!1)),s=0,c=(e,o,c,l,u,d=[])=>t.add({phase:e,title:o,explanation:c,metrics:[{label:`已算状态`,value:s},{label:`背包容量`,value:r}],panels:[{kind:`table`,title:`物品（每件至多使用一次）`,columns:[`编号`,`重量`,`价值`],rows:n.map((e,t)=>[t+1,e.weight,e.value]),activeRow:l?l[0]-1:void 0},{kind:`matrix`,title:`dp[i][c]：前 i 件物品、容量不超过 c 的最大价值`,rows:Array.from({length:i+1},(e,t)=>String(t)),columns:Array.from({length:r+1},(e,t)=>String(t)),values:a,active:l,sources:u,caption:`第 0 行为无物品状态；尚未计算的单元显示 ·。`},...d]});c(`start`,`从不放物品的状态开始`,`dp[0][c] = 0。逐件决定不选或者选当前物品。`);for(let e=1;e<=i;e++)for(let i=0;i<=r;i++){let r=n[e-1],l=a[e-1][i],u=r.weight<=i,d=u?a[e-1][i-r.weight]+r.value:-1/0;a[e][i]=Math.max(l,d),o[e][i]=d>l,s++;let f=[[e-1,i]];u&&f.push([e-1,i-r.weight]),c(`transition`,`计算 dp[${e}][${i}] = ${a[e][i]}`,u?`不选得到 ${l}，选它得到 ${d}；比较的来源都在上一行，不能重复使用当前物品。`:`容量不足，只能继承上一行的不选结果。`,[e,i],f,[{kind:`formula`,title:`本次转移`,expression:u?`max(${l}, ${a[e-1][i-r.weight]} + ${r.value})`:`继承 dp[${e-1}][${i}]`,result:String(a[e][i])}]),u&&(t.frames[t.frames.length-1].prediction={question:`这一格更好的选择是什么？`,choices:[{id:`take`,label:`选当前物品`},{id:`skip`,label:`不选（平局也可）`}],answer:d>l?`take`:`skip`})}let l=r,u=[],d=[];for(let e=i;e>0;e--)d.push([e,l]),o[e][l]&&(u.unshift(e),l-=n[e-1].weight);return t.add({phase:`end`,title:`最大价值为 ${a[i][r]}`,explanation:`根据上一行来源回溯选中的物品。相等方案不一定唯一，本页平局优先不选。`,metrics:[{label:`最优价值`,value:a[i][r]},{label:`使用重量`,value:r-l}],panels:[{kind:`matrix`,title:`最终 DP 表与回溯路径`,rows:Array.from({length:i+1},(e,t)=>String(t)),columns:Array.from({length:r+1},(e,t)=>String(t)),values:a,chosen:d},{kind:`row`,title:`选中物品编号`,values:u}]}),{frames:t.frames,output:String(a[i][r]),summary:`0/1 背包最大价值`,result:{value:a[i][r],chosen:u,usedWeight:r-l}}}function x(e,t){let n=e.values,r=n.length,i=Array(r).fill(1),a=Array(r).fill(-1),o=0,s=(e,r,s,c=-1,l=-1)=>t.add({phase:e,title:r,explanation:s,metrics:[{label:`比较候选`,value:o},{label:`当前最大长度`,value:Math.max(...i)}],panels:[{kind:`row`,title:`原序列（子序列可以不连续）`,values:n,indexBase:0,active:[c,l].filter(e=>e>=0)},{kind:`matrix`,title:`以 i 结尾的最优长度`,rows:[`数值`,`dp 长度`],columns:n.map((e,t)=>String(t)),values:[n,i],active:c>=0?[1,c]:void 0,sources:l>=0?[[1,l]]:void 0},{kind:`row`,title:`用于还原的一条最优前驱链`,values:a,indexBase:0}]});s(`start`,`单个元素本身构成长度 1 的子序列`,`这里求严格上升子序列：相等值不能延长。`);for(let e=0;e<r;e++)for(let t=0;t<e;t++){o++;let r=n[t]<n[e],c=r&&i[t]+1>i[e];s(`compare`,`尝试从 [${t}] 接到 [${e}]`,r?`候选长度 ${i[t]} + 1 = ${i[t]+1}，${c?`可以改进`:`无需改动`}当前长度 ${i[e]}。`:`${n[t]} 不小于 ${n[e]}，不能构成严格上升。`,e,t),c&&(i[e]=i[t]+1,a[e]=t,s(`update`,`更新 dp[${e}] = ${i[e]}`,`记住前驱，用于在结束时还原一条实际子序列。`,e,t))}let c=0;for(let e=1;e<r;e++)i[e]>i[c]&&(c=e);let l=[];for(let e=c;e>=0;e=a[e])l.unshift(e);return t.add({phase:`end`,title:`最长严格上升子序列长度 ${i[c]}`,explanation:`显示的是一条最优解，不保证唯一，也不是连续子数组。`,metrics:[{label:`长度`,value:i[c]},{label:`候选比较`,value:o}],panels:[{kind:`row`,title:`原序列中选中的位置`,values:n,indexBase:0,chosen:l},{kind:`row`,title:`还原出的严格上升子序列`,values:l.map(e=>n[e])},{kind:`row`,title:`最终 dp`,values:i,indexBase:0}]}),{frames:t.frames,output:String(i[c]),summary:`最长严格上升子序列长度`,result:{length:i[c],indices:l,sequence:l.map(e=>n[e]),dp:i}}}function S(e,t){let n=e.values,r=n.length,i=[],a=Array(r).fill(!1),o=[],s=0,c=(e,r,s,c=-1)=>t.add({phase:e,title:r,explanation:s,metrics:[{label:`递归深度`,value:i.length},{label:`已生成方案`,value:o.length}],panels:[{kind:`frontier`,title:`当前选择路径 / 递归栈`,mode:`stack`,values:i.map(e=>n[e]),caption:`向下一层添加选择；回退时撤销最后一个选择。`},{kind:`row`,title:`输入元素`,values:n,indexBase:0,active:c<0?[]:[c],chosen:a.map((e,t)=>e?t:-1).filter(e=>e>=0)},{kind:`row`,title:`used 标记`,values:a.map(e=>+!!e),indexBase:0},{kind:`table`,title:`最近生成的方案（最多显示三项）`,columns:[`序号`,`方案`],rows:o.slice(-3).map((e,t)=>[Math.max(1,o.length-2)+t,e.join(` → `)])}]}),l=()=>{if(c(`enter`,`进入深度 ${i.length}`,`只从尚未使用的位置选择下一个元素。`),i.length===r)o.push(i.map(e=>n[e])),c(`solution`,`生成一个完整排列`,`记录以后继续回退，枚举其他分支。`);else for(let e=0;e<r;e++)s++,c(`inspect`,`检查位置 ${e}`,a[e]?`当前路径已经使用，剪去这条分支。`:`当前位置还可使用，下一步选择它。`,e),t.frames[t.frames.length-1].prediction={question:`这个位置还能加入当前排列吗？`,choices:[{id:`take`,label:`选择并递归`},{id:`skip`,label:`跳过已使用位置`}],answer:a[e]?`skip`:`take`},a[e]||(a[e]=!0,i.push(e),c(`choose`,`选择 ${n[e]}`,`设置 used，再进入下一层。`,e),l(),i.pop(),a[e]=!1,c(`undo`,`撤销 ${n[e]}`,`恢复 path 和 used，保证下一条分支不受污染。`,e))};return l(),c(`end`,`共生成 ${o.length} 个排列`,`整个搜索树已经走完，路径和 used 都恢复到初始状态。`),{frames:t.frames,output:String(o.length),summary:`全排列方案数量`,result:{count:o.length,solutions:o,attempts:s}}}function C(e,t){let n=e.values,r=Array(n.length+1).fill(null),i=[];r[0]=0;let a=(e,t=[],a=[],o)=>[{kind:`row`,title:`原数组 a（下标从 0 开始）`,values:n,indexBase:0,active:e===void 0?[]:[e],chosen:t},{kind:`row`,title:`p[k] 是前 k 项之和，p[0] = 0`,values:r.map(e=>e===null?`·`:e),indexBase:0,active:a},...o?[o]:[],{kind:`row`,title:`已回答的查询`,values:i}];t.add({phase:`start`,title:`先预处理前缀和`,explanation:`用一个额外的 p[0]，统一处理从下标 0 开始的查询。`,metrics:[],panels:a()});for(let e=0;e<n.length;e++)r[e+1]=r[e]+n[e],t.add({phase:`build`,title:`p[${e+1}] = ${r[e+1]}`,explanation:`前 i 项的和，再加上第 i 项。`,metrics:[{label:`已预处理`,value:e+1}],panels:a(e,[],[e,e+1],{kind:`formula`,title:`前缀递推`,expression:`p[${e}] + a[${e}] = ${r[e]} + ${n[e]}`,result:String(r[e+1])})});for(let[n,o]of e.queries){let e=r[o+1]-r[n];i.push(e),t.add({phase:`query`,title:`区间 [${n},${o}] 的和为 ${e}`,explanation:`右端点包含在区间里，因此要用 p[r+1] − p[l]。`,metrics:[{label:`已回答`,value:i.length}],panels:a(void 0,Array.from({length:o-n+1},(e,t)=>n+t),[n,o+1],{kind:`formula`,title:`闭区间查询`,expression:`p[${o+1}] − p[${n}] = ${r[o+1]} − ${r[n]}`,result:String(e)})})}return t.add({phase:`end`,title:`全部区间查询完成`,explanation:`静态前缀只预处理一次；每次闭区间查询都使用 p[r+1] − p[l]。`,metrics:[{label:`已回答查询`,value:i.length}],panels:a()}),{frames:t.frames,output:i.join(` `),summary:`依次查询的区间和`,result:{prefix:r,answers:i}}}function w(e,t){let n=[...e.intervals].sort((e,t)=>e.end-t.end||e.start-t.start||e.id-t.id),r=[],i=[],a=-1/0,o=(e,o,s,c)=>t.add({phase:e,title:o,explanation:s,metrics:[{label:`已选活动`,value:r.length},{label:`上次结束`,value:Number.isFinite(a)?a:`—`}],panels:[{kind:`intervals`,title:`候选按结束时间排序（区间允许首尾相接）`,items:n,current:c,selected:r,rejected:i,caption:`采用 [开始,结束) 半开区间，开始时间等于上次结束时间时可以接续。`},{kind:`row`,title:`已选活动的原始编号`,values:r}]});o(`start`,`先按结束时间从早到晚排序`,`尽早结束，可以给后续活动留下更多空间。`);for(let e of n){let n=e.start>=a;o(`inspect`,`考虑活动 ${e.id}：[${e.start},${e.end})`,n?`开始时间不早于上次结束，可以选择。`:`和上一次选中的活动有重叠，跳过。`,e.id),t.frames[t.frames.length-1].prediction={question:`应该接受这项活动吗？`,choices:[{id:`take`,label:`接受`},{id:`skip`,label:`跳过冲突`}],answer:n?`take`:`skip`},n?(r.push(e.id),a=e.end,o(`accept`,`接受当前活动`,`更新最后结束时间，再看下一个候选。`,e.id)):(i.push(e.id),o(`reject`,`跳过冲突活动`,`保持之前已经选择的方案。`,e.id))}return o(`end`,`最多选择 ${r.length} 项活动`,`这里优化活动数量，不适用于活动有不同收益时直接求最大收益。`),{frames:t.frames,output:String(r.length),summary:`最多互不重叠活动数量`,result:{count:r.length,selected:r}}}function T(e,t,n){if(e===`gcd`){let e=Math.abs(t.a),r=Math.abs(t.b),i=[];for(;r!==0;){let t=Math.floor(e/r),a=e%r;i.push([e,r,t,a]),n.add({phase:`divide`,title:`${e} = ${t} × ${r} + ${a}`,explanation:`gcd(a,b) 与 gcd(b,a mod b) 相同，用余数缩小问题。`,metrics:[{label:`取模轮数`,value:i.length}],panels:[{kind:`formula`,title:`本轮带余除法`,expression:`${e} = ${t} × ${r} + ${a}`,result:`下一轮 (${r}, ${a})`},{kind:`table`,title:`辗转相除记录`,columns:[`a`,`b`,`商`,`余数`],rows:i,activeRow:i.length-1}]}),[e,r]=[r,a]}return n.add({phase:`end`,title:`最大公约数为 ${e}`,explanation:`第二个数为 0 时，第一个数就是结果。本示例约定 gcd(0,0)=0。`,metrics:[{label:`结果`,value:e}],panels:[{kind:`formula`,title:`终止条件`,expression:`gcd(${e}, 0)`,result:String(e)},{kind:`table`,title:`计算记录`,columns:[`a`,`b`,`商`,`余数`],rows:i}]}),{frames:n.frames,output:String(e),summary:`最大公约数`,result:e}}if(e===`fast-power`){let e=BigInt(t.mod),r=BigInt(t.a)%e,i=t.b,a=1n%e,o=0,s=t.b.toString(2).split(``),c=[],l=(e,t,r,l)=>n.add({phase:e,title:t,explanation:r,metrics:[{label:`剩余指数`,value:i},{label:`当前结果`,value:a.toString()}],panels:[{kind:`row`,title:`指数二进制（高位在左，从右侧低位处理）`,values:s,active:i>0?[s.length-1-o]:[]},{kind:`table`,title:`运算状态`,columns:[`轮次`,`当前底数`,`本轮低位`,`累计结果`],rows:c},...l?[l]:[]]});for(l(`start`,`把指数拆成二进制位`,`需要时乘入当前底数，每轮底数平方，指数减半。`);i>0;){let t=i%2;if(c.push([o,r.toString(),t,a.toString()]),l(`bit`,`检查第 ${o} 个低位：${t}`,`低位为 1 才乘入结果。`),n.frames[n.frames.length-1].prediction={question:`这一位是否需要乘入结果？`,choices:[{id:`multiply`,label:`需要乘入`},{id:`skip`,label:`跳过乘入`}],answer:t?`multiply`:`skip`},t){let t=a;a=a*r%e,l(`multiply`,`更新累计结果`,`每次乘法后都取模，模型使用精确整数运算。`,{kind:`formula`,title:`乘入这一位`,expression:`(${t} × ${r}) mod ${e}`,result:a.toString()})}let s=r;r=r*r%e,i=Math.floor(i/2),l(`square`,`底数平方，指数减半`,`准备处理下一位。`,{kind:`formula`,title:`准备下一位的底数`,expression:`(${s} × ${s}) mod ${e}`,result:r.toString()}),o++}return l(`end`,`模幂结果为 ${a}`,`指数为 0 时，结果按乘法单位元 1 取模；模数为 1 时结果为 0。`),{frames:n.frames,output:a.toString(),summary:`精确模幂结果`,result:a.toString()}}let r=t.limit,i=Array(r+1).fill(!1);i[0]=i[1]=!0;let a=0,o=0,s=(e,t,s,c,l,u=!1)=>n.add({phase:e,title:t,explanation:s,metrics:[{label:`标记合数`,value:a},{label:`访问倍数`,value:o}],panels:[{kind:`sieve`,title:`筛选 2—${r} 的素数`,limit:r,composite:i,current:c,marked:l,complete:u,caption:`未标记的数先作为候选；筛选完成后，剩下的候选就是素数。`}]});s(`start`,`0 和 1 不是素数`,`从 2 开始，跳过已被较小因子筛掉的数。`);for(let e=2;e*e<=r;e++)if(!i[e]){s(`prime`,`使用素数 ${e} 作为筛因子`,`从 ${e}² = ${e*e} 开始；更小倍数已被较小因子处理。`,e);for(let t=e*e;t<=r;t+=e)o++,i[t]?s(`skip`,`${t} 已被标记`,`无需重复写入标记。`,e,t):(i[t]=!0,a++,s(`mark`,`标记 ${t} 为合数`,`${t} 是 ${e} 的倍数。`,e,t))}let c=Array.from({length:r-1},(e,t)=>t+2).filter(e=>!i[e]);return s(`end`,`找到 ${c.length} 个素数`,`所有未被标记的候选都已确认是素数。`,void 0,void 0,!0),{frames:n.frames,output:c.join(` `),summary:`筛选得到的素数`,result:c}}function E(e,t){let n=new g(e.n),r=[],i=`初始化`,a=0,o=(e,o,s,c=-1)=>t.add({phase:e,title:o,explanation:s,metrics:[{label:`连通分量`,value:new Set(n.parent.map((e,t)=>{let r=t;for(;n.parent[r]!==r;)r=n.parent[r];return r})).size},{label:`路径压缩写入`,value:a}],panels:[{kind:`tree`,title:`父指针森林（箭头指向父节点）`,nodes:n.parent.map((e,t)=>({id:`d${t}`,label:String(t),parent:e===t?void 0:`d${e}`,detail:e===t?`根 · size=${n.size[t]}`:`p=${e}`,state:t===c?`current`:e===t?`chosen`:void 0})),edges:n.parent.flatMap((e,t)=>e===t?[]:[{id:`d${t}-${e}`,from:`d${t}`,to:`d${e}`,directed:!0,state:t===c?`current`:void 0}])},{kind:`table`,title:i,columns:[`元素`,`父节点`,`根上的大小`],rows:n.parent.map((e,t)=>[t,e,e===t?n.size[t]:`—`]),activeRow:c},{kind:`row`,title:`查询依次返回的结果`,values:r}]}),s=(e,t)=>{t===`compress`&&a++,o(t,t===`compress`?`将 ${e} 直接连到根`:`沿父指针访问 ${e}`,t===`compress`?`压缩路径，后续查询更快；集合关系不变。`:`查找代表元，不要求代表元就是集合最小元素。`,e)};o(`start`,`每个元素先独立成一个集合`,`根节点的父节点是自己。`);for(let t of e.operations){i=`${t.type} ${t.args.join(` `)}`;let[e,a]=t.args;if(t.type===`union`){let t=n.union(e,a,s);o(`union`,t?`按大小合并两个集合`:`两个元素已经同属一组`,t?`将较小集合的根连接到较大集合的根。`:`不重复累加集合大小。`)}else if(t.type===`find`){let t=n.find(e,s);r.push(t),o(`answer`,`find(${e}) = ${t}`,`返回本实现的代表元。`,e)}else{let t=n.find(e,s)===n.find(a,s);r.push(+!!t),o(`answer`,t?`两个元素已连通`:`两个元素尚未连通`,`比较代表元是否相同。`)}}return o(`end`,`并查集操作完成`,`路径压缩和按大小合并只改变内部结构，不改变查询的集合语义。`),{frames:t.frames,output:r.join(` `),summary:`find / same 查询结果`,result:{parent:n.parent,size:n.size,answers:r}}}function D(e,t){let n=[...e.values],r=n.length,i=Array(r+1).fill(0),a=[],o=`初始化`,s=0,c=[],l=0,u=e=>e&-e;for(let e=1;e<=r;e++)for(let t=e;t<=r;t+=u(t))i[t]+=n[e-1];let d=(e,r,d,f=0)=>t.add({phase:e,title:r,explanation:d,metrics:[{label:`路径访问`,value:l},{label:`本次前缀累计`,value:s}],panels:[{kind:`row`,title:`原数组（位置从 1 开始）`,values:n,indexBase:1,active:f?[f-1]:[]},{kind:`row`,title:`树状数组 tree[i]`,values:i.slice(1),indexBase:1,active:f?[f-1]:[]},{kind:`table`,title:o+` · lowbit 与覆盖段`,columns:[`i`,`lowbit(i)`,`覆盖位置`,`tree[i]`],rows:i.slice(1).map((e,t)=>{let n=t+1;return[n,u(n),`[${n-u(n)+1},${n}]`,e]}),activeRow:f-1},{kind:`row`,title:`本次经过的索引`,values:c},{kind:`row`,title:`已回答的区间和`,values:a}]});d(`start`,`由原数组构建树状数组`,`每个 tree[i] 保存以 i 结尾、长度为 lowbit(i) 的一段和。`);let f=e=>{s=0,c=[];for(let t=e;t>0;t-=u(t))s+=i[t],c.push(t),l++,d(`query`,`读取 tree[${t}] = ${i[t]}`,`累计为 ${s}，接下来 i -= lowbit(i)。`,t);return s};for(let t of e.operations){o=`${t.type} ${t.args.join(` `)}`;let[e,s]=t.args;if(t.type===`add`){n[e-1]+=s,c=[];for(let t=e;t<=r;t+=u(t))i[t]+=s,c.push(t),l++,d(`update`,`tree[${t}] 增加 ${s}`,`本次修改尚在传播，全部祖先更新完毕后才开始下一条操作。`,t);d(`operation`,`本次单点增加已完成`,`原数组与树状数组重新一致。`)}else{let n=f(t.type===`sum`?e:s),r=t.type===`sum`?0:f(e-1),i=n-r;a.push(i),d(`answer`,`查询结果为 ${i}`,t.type===`sum`?`前 0 项之和为 0，其他前缀由 lowbit 路径分解得到。`:`sum(${s}) − sum(${e-1}) = ${n} − ${r}。`)}}return d(`end`,`树状数组操作完成`,`单点增加、前缀和与区间和均按实际 lowbit 路径执行。`),{frames:t.frames,output:a.join(` `),summary:`树状数组查询结果`,result:{values:n,tree:i,answers:a}}}function O(e,t){let n=[...e.values],r=new Map,i=[],a=[],o=new Set,s=`构建区间树`,c=0,l=0,u=(e,u,d,f=-1)=>t.add({phase:e,title:u,explanation:d,metrics:[{label:`访问节点`,value:l},{label:`查询贡献累计`,value:c}],panels:[{kind:`tree`,title:s,nodes:[...r.values()].map(e=>({id:`s${e.id}`,label:`[${e.lo},${e.hi}]`,detail:`Σ=${e.sum===null?`·`:e.sum}`,parent:e.parent===void 0?void 0:`s${e.parent}`,state:e.id===f?`current`:o.has(e.id)?`chosen`:a.includes(e.id)?`seen`:void 0})),edges:[...r.values()].flatMap(e=>e.parent===void 0?[]:[{id:`s${e.parent}-${e.id}`,from:`s${e.parent}`,to:`s${e.id}`,state:a.includes(e.id)?`current`:void 0}])},{kind:`row`,title:`原数组（0-based）`,values:n,indexBase:0},{kind:`row`,title:`已回答的区间和`,values:i}]}),d=(e,t,i,a)=>{let o={id:e,lo:t,hi:i,sum:null,parent:a};if(r.set(e,o),t===i)o.sum=n[t],u(`build`,`建立叶子 [${t},${i}]`,`叶子的和就是这一项的值。`,e);else{let n=Math.floor((t+i)/2);d(e*2,t,n,e),d(e*2+1,n+1,i,e),o.sum=r.get(e*2).sum+r.get(e*2+1).sum,u(`pull`,`合并区间 [${t},${i}]`,`父节点的和等于两个子区间的和。`,e)}};d(1,0,n.length-1);let f=(e,t,i)=>{let o=r.get(e);if(a.push(e),l++,u(`visit`,`访问 [${o.lo},${o.hi}]`,`沿包含目标下标的那一个子区间下降。`,e),o.lo===o.hi)n[t]=i,o.sum=i,u(`update`,`位置 ${t} 改为 ${i}`,`叶子更新后，逐层重新合并祖先。`,e);else{let n=Math.floor((o.lo+o.hi)/2);f(t<=n?e*2:e*2+1,t,i),o.sum=r.get(e*2).sum+r.get(e*2+1).sum,u(`pull`,`更新祖先区间和为 ${o.sum}`,`只需修改这条根到叶子的路径。`,e)}a.pop()},p=(e,t,n)=>{let i=r.get(e);if(a.push(e),l++,n<i.lo||t>i.hi)return u(`skip`,`跳过 [${i.lo},${i.hi}]`,`与目标区间不相交，贡献为 0。`,e),a.pop(),0;if(t<=i.lo&&i.hi<=n)return o.add(e),c+=i.sum,u(`cover`,`完整采用区间 [${i.lo},${i.hi}]`,`已经完全被查询覆盖，不再向下重复计算。`,e),a.pop(),i.sum;u(`split`,`继续拆分 [${i.lo},${i.hi}]`,`只有部分覆盖，需要分别求两个子区间的贡献。`,e);let s=p(e*2,t,n)+p(e*2+1,t,n);return u(`combine`,`这部分返回 ${s}`,`合并左右子树返回的值；完全覆盖节点的贡献不会重复加入。`,e),a.pop(),s};for(let t of e.operations){s=`${t.type} ${t.args.join(` `)}`,o.clear(),c=0;let[e,n]=t.args;if(t.type===`set`)f(1,e,n);else{let t=p(1,e,n);i.push(t),u(`answer`,`sum(${e},${n}) = ${t}`,`闭区间 [l,r] 的贡献已经合并完成。`)}}return u(`end`,`线段树操作完成`,`本页实现单点赋值与区间和，不把未实现的懒标记区间修改混入模板。`),{frames:t.frames,output:i.join(` `),summary:`线段树区间和结果`,result:{values:n,answers:i,rootSum:r.get(1).sum}}}function k(e,t){let n=Array.from(e.text),r=Array.from(e.pattern),i=Array(r.length).fill(0),a=[],o=0,s=(e,n,a,s,c)=>t.add({phase:e,title:n,explanation:a,metrics:[{label:`字符比较`,value:o},{label:`当前匹配长度`,value:c}],panels:[{kind:`row`,title:`模式串字符`,values:r,indexBase:0,active:[s,c]},{kind:`row`,title:`前缀函数 pi[i]`,values:i,indexBase:0,active:[s]}]});for(let e=1;e<r.length;e++){let t=i[e-1];for(;t>0&&r[e]!==r[t];)o++,s(`failure`,`前缀长度从 ${t} 回退到 ${i[t-1]}`,`利用已经计算过的前缀函数，尝试更短的相同前后缀。`,e,t),t=i[t-1];o++,r[e]===r[t]&&t++,i[e]=t,s(`prefix`,`pi[${e}] = ${t}`,`它表示以该位置结尾的前缀中，最长相同真前后缀的长度。`,e,Math.max(0,t-1))}let c=0,l=(e,s,l,u,d,f=c)=>t.add({phase:e,title:s,explanation:l,metrics:[{label:`已命中`,value:a.length},{label:`字符比较`,value:o}],panels:[{kind:`strings`,title:`文本与模式对齐（下标从 0 开始）`,text:n,pattern:r,offset:d,textActive:u,patternActive:f,matches:a,caption:`模式失配时只回退 j，文本指针 i 不回头。`},{kind:`row`,title:`前缀函数`,values:i,indexBase:0,active:f>=0&&f<i.length?[f]:[]},{kind:`row`,title:`已经找到的起始下标`,values:a}]});l(`start`,`前缀函数准备完成`,`开始扫描文本，继续复用模式串内部的重复信息。`,0,0);for(let e=0;e<n.length;e++){for(;c>0&&n[e]!==r[c];){o++;let t=c;c=i[c-1],l(`fallback`,`匹配长度 ${t} → ${c}`,`保留已知的重复前后缀，文本位置不回退。`,e,e-c)}o++;let s=n[e]===r[c];l(`compare`,`比较文本[${e}] 与模式[${c}]`,s?`字符相同，匹配长度将增加。`:`匹配长度为 0，继续下一个文本字符。`,e,e-c),t.frames[t.frames.length-1].prediction={question:`当前两个字符是否匹配？`,choices:[{id:`same`,label:`相同，延长匹配`},{id:`different`,label:`不同，继续处理`}],answer:s?`same`:`different`},s&&c++,c===r.length&&(a.push(e-r.length+1),l(`found`,`在下标 ${a.at(-1)} 找到一个匹配`,`记录后仍继续查找，重叠的匹配也不会遗漏。`,e,e-r.length+1,r.length-1),c=i[c-1])}return l(`end`,a.length?`找到 ${a.length} 个匹配`:`文本中没有匹配`,`输出全部匹配起点，无匹配时输出 -1。`,n.length,Math.max(0,n.length-c),-1),{frames:t.frames,output:a.length?a.join(` `):`-1`,summary:`所有匹配的起始下标`,result:{positions:a,prefix:i}}}function A(e,t){let n=[{id:0,char:`根`,children:{},end:0}],r=[0],i=0,a=(a,o,s,c=0)=>t.add({phase:a,title:o,explanation:s,metrics:[{label:`节点数`,value:n.length},{label:`已插入单词`,value:i}],panels:[{kind:`tree`,title:`共享前缀的字典树`,nodes:n.map(e=>({id:`t${e.id}`,label:e.char,parent:e.parent===void 0?void 0:`t${e.parent}`,terminal:e.end>0,detail:e.end?`结尾 ×${e.end}`:``,state:e.id===c?`current`:r.includes(e.id)?`chosen`:void 0})),edges:n.filter(e=>e.parent!==void 0).map(e=>({id:`t${e.parent}-${e.id}`,from:`t${e.parent}`,to:`t${e.id}`,directed:!0,state:r.includes(e.id)?`chosen`:void 0}))},{kind:`row`,title:`待插入的单词`,values:e.words},{kind:`row`,title:`当前路径节点`,values:r}]});a(`start`,`从一个根节点开始`,`路径表示前缀；只有结尾标记才能证明完整单词存在。`);for(let t of e.words){let e=0;r.splice(0,r.length,0);for(let i of t)if(n[e].children[i]===void 0){let t=n.length;n[e].children[i]=t,n.push({id:t,parent:e,char:i,children:{},end:0}),e=t,r.push(e),a(`create`,`创建字符 ${i} 的分支`,`缺少的前缀路径才新建，已有路径直接共享。`,e)}else e=n[e].children[i],r.push(e),a(`reuse`,`复用字符 ${i} 的分支`,`多个单词可以共享同一个前缀。`,e);n[e].end++,i++,a(`terminal`,`标记完整单词 ${t}`,`重复插入会增加结尾计数，不会把整条路径重复新建。`,e)}let o=0,s=!1;r.splice(0,r.length,0);for(let t of e.query){let e=n[o].children[t];if(e===void 0){s=!0,a(`missing`,`缺少下一字符 ${t}`,`这条路径不存在，完整单词和此前缀都不存在。`,o);break}o=e,r.push(o),a(`query`,`沿字符 ${t} 向下`,`走到路径末尾以后，还需要检查结尾标记。`,o)}let c=s?`NONE`:n[o].end>0?`WORD`:`PREFIX`;return a(`end`,c===`WORD`?`查询到完整单词`:c===`PREFIX`?`只有前缀，没有完整单词`:`没有这条前缀路径`,`模板输出 ${c}；WORD、PREFIX、NONE 表达不同的查询结果。`,o),{frames:t.frames,output:c,summary:`字典树查询状态`,result:{status:c,nodes:n.map(e=>({id:e.id,parent:e.parent??-1,char:e.char,end:e.end}))}}}function j(e,t){let r=n();return[`dfs`,`bfs`,`dijkstra`,`topological`,`kruskal`].includes(e)?y(e,a(t,`graph`),r):e===`knapsack`?b(a(t,`knapsack`),r):e===`lis`?x(a(t,`array`),r):e===`backtrack`?S(a(t,`array`),r):e===`prefix-sum`?C(a(t,`prefix`),r):e===`interval-greedy`?w(a(t,`interval`),r):[`gcd`,`fast-power`,`sieve`].includes(e)?T(e,a(t,`math`),r):e===`union-find`?E(a(t,`structure`),r):e===`fenwick`?D(a(t,`structure`),r):e===`segment-tree`?O(a(t,`structure`),r):e===`kmp`?k(a(t,`text`),r):A(a(t,`trie`),r)}var M=`class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b:
            return False
        if self.size[a] < self.size[b]:
            a, b = b, a
        self.parent[b] = a
        self.size[a] += self.size[b]
        return True
`,N={dfs:`    n, start = data['n'], data['start']
    graph = [[] for _ in range(n)]
    for e in data['edges']:
        graph[e['from']].append(e['to'])
        if not data['directed']:
            graph[e['to']].append(e['from'])
    for row in graph:
        row.sort()
    visited, order = [False] * n, []
    def dfs(u):
        visited[u] = True
        order.append(u)
        for v in graph[u]:
            if not visited[v]:
                dfs(v)
    dfs(start)
    return ' '.join(map(str, order))`,bfs:`    from collections import deque
    n, start, target = data['n'], data['start'], data['target']
    graph = [[] for _ in range(n)]
    for e in data['edges']:
        graph[e['from']].append(e['to'])
        if not data['directed']:
            graph[e['to']].append(e['from'])
    for row in graph:
        row.sort()
    dist = [-1] * n
    dist[start] = 0
    queue = deque([start])
    while queue:
        u = queue.popleft()
        for v in graph[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                queue.append(v)
    return str(dist[target])`,backtrack:`    a = data['values']
    used, path, answers = [False] * len(a), [], []
    def dfs():
        if len(path) == len(a):
            answers.append(path.copy())
            return
        for i, value in enumerate(a):
            if used[i]:
                continue
            used[i] = True
            path.append(value)
            dfs()
            path.pop()
            used[i] = False
    dfs()
    return str(len(answers))`,dijkstra:`    import heapq
    n, start, target = data['n'], data['start'], data['target']
    graph = [[] for _ in range(n)]
    for e in data['edges']:
        graph[e['from']].append((e['to'], e['weight']))
    dist = [float('inf')] * n
    dist[start] = 0
    heap = [(0, start)]
    while heap:
        distance, u = heapq.heappop(heap)
        if distance != dist[u]:
            continue
        for v, weight in graph[u]:
            candidate = distance + weight
            if candidate < dist[v]:
                dist[v] = candidate
                heapq.heappush(heap, (candidate, v))
    return str(-1 if dist[target] == float('inf') else dist[target])`,topological:`    from collections import deque
    n = data['n']
    graph, degree = [[] for _ in range(n)], [0] * n
    for e in data['edges']:
        graph[e['from']].append(e['to'])
        degree[e['to']] += 1
    for row in graph:
        row.sort()
    queue = deque(i for i in range(n) if degree[i] == 0)
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in graph[u]:
            degree[v] -= 1
            if degree[v] == 0:
                queue.append(v)
    return 'CYCLE' if len(order) != n else ' '.join(map(str, order))`,kruskal:`    dsu = DSU(data['n'])
    edges = sorted(data['edges'], key=lambda e: (e['weight'], e['from'], e['to']))
    total, accepted = 0, 0
    for e in edges:
        if dsu.union(e['from'], e['to']):
            total += e['weight']
            accepted += 1
    return str(total) if accepted == data['n'] - 1 else 'DISCONNECTED'`,knapsack:`    capacity, items = data['capacity'], data['items']
    dp = [[0] * (capacity + 1) for _ in range(len(items) + 1)]
    for i, item in enumerate(items, 1):
        for c in range(capacity + 1):
            dp[i][c] = dp[i - 1][c]
            if item['weight'] <= c:
                dp[i][c] = max(dp[i][c], dp[i - 1][c - item['weight']] + item['value'])
    return str(dp[-1][capacity])`,lis:`    a = data['values']
    dp = [1] * len(a)
    for i in range(len(a)):
        for j in range(i):
            if a[j] < a[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return str(max(dp))`,"union-find":`    dsu = DSU(data['n'])
    answers = []
    for op in data['operations']:
        args = op['args']
        if op['type'] == 'union':
            dsu.union(args[0], args[1])
        elif op['type'] == 'find':
            answers.append(dsu.find(args[0]))
        else:
            answers.append(int(dsu.find(args[0]) == dsu.find(args[1])))
    return ' '.join(map(str, answers))`,fenwick:`    a, ops = data['values'], data['operations']
    n = len(a)
    tree = [0] * (n + 1)
    def add(i, delta):
        while i <= n:
            tree[i] += delta
            i += i & -i
    def prefix(i):
        answer = 0
        while i > 0:
            answer += tree[i]
            i -= i & -i
        return answer
    for i, value in enumerate(a, 1):
        add(i, value)
    answers = []
    for op in ops:
        args = op['args']
        if op['type'] == 'add':
            add(args[0], args[1])
        elif op['type'] == 'sum':
            answers.append(prefix(args[0]))
        else:
            answers.append(prefix(args[1]) - prefix(args[0] - 1))
    return ' '.join(map(str, answers))`,"segment-tree":`    a = data['values']
    tree = [0] * (4 * len(a))
    def build(node, lo, hi):
        if lo == hi:
            tree[node] = a[lo]
            return
        mid = (lo + hi) // 2
        build(node * 2, lo, mid)
        build(node * 2 + 1, mid + 1, hi)
        tree[node] = tree[node * 2] + tree[node * 2 + 1]
    def update(node, lo, hi, index, value):
        if lo == hi:
            tree[node] = value
            return
        mid = (lo + hi) // 2
        if index <= mid:
            update(node * 2, lo, mid, index, value)
        else:
            update(node * 2 + 1, mid + 1, hi, index, value)
        tree[node] = tree[node * 2] + tree[node * 2 + 1]
    def query(node, lo, hi, left, right):
        if right < lo or hi < left:
            return 0
        if left <= lo and hi <= right:
            return tree[node]
        mid = (lo + hi) // 2
        return query(node * 2, lo, mid, left, right) + query(node * 2 + 1, mid + 1, hi, left, right)
    build(1, 0, len(a) - 1)
    answers = []
    for op in data['operations']:
        x, y = op['args']
        if op['type'] == 'set':
            update(1, 0, len(a) - 1, x, y)
        else:
            answers.append(query(1, 0, len(a) - 1, x, y))
    return ' '.join(map(str, answers))`,kmp:`    text, pattern = data['text'], data['pattern']
    pi = [0] * len(pattern)
    for i in range(1, len(pattern)):
        j = pi[i - 1]
        while j > 0 and pattern[i] != pattern[j]:
            j = pi[j - 1]
        if pattern[i] == pattern[j]:
            j += 1
        pi[i] = j
    j, positions = 0, []
    for i, char in enumerate(text):
        while j > 0 and char != pattern[j]:
            j = pi[j - 1]
        if char == pattern[j]:
            j += 1
        if j == len(pattern):
            positions.append(i - len(pattern) + 1)
            j = pi[j - 1]
    return ' '.join(map(str, positions)) if positions else '-1'`,trie:`    children, end = [{}], [0]
    for word in data['words']:
        node = 0
        for char in word:
            if char not in children[node]:
                children[node][char] = len(children)
                children.append({})
                end.append(0)
            node = children[node][char]
        end[node] += 1
    node = 0
    for char in data['query']:
        if char not in children[node]:
            return 'NONE'
        node = children[node][char]
    return 'WORD' if end[node] else 'PREFIX'`,gcd:`    a, b = abs(data['a']), abs(data['b'])
    while b:
        a, b = b, a % b
    return str(a)`,"fast-power":`    a, exponent, mod = data['a'], data['b'], data['mod']
    a %= mod
    result = 1 % mod
    while exponent:
        if exponent & 1:
            result = result * a % mod
        a = a * a % mod
        exponent //= 2
    return str(result)`,sieve:`    n = data['limit']
    composite = [False] * (n + 1)
    composite[0] = composite[1] = True
    p = 2
    while p * p <= n:
        if not composite[p]:
            for value in range(p * p, n + 1, p):
                composite[value] = True
        p += 1
    return ' '.join(str(i) for i in range(2, n + 1) if not composite[i])`,"prefix-sum":`    prefix = [0]
    for value in data['values']:
        prefix.append(prefix[-1] + value)
    answers = [prefix[right + 1] - prefix[left] for left, right in data['queries']]
    return ' '.join(map(str, answers))`,"interval-greedy":`    intervals = sorted(data['intervals'], key=lambda item: (item['end'], item['start'], item['id']))
    last_end, answer = float('-inf'), 0
    for item in intervals:
        if item['start'] >= last_end:
            answer += 1
            last_end = item['end']
    return str(answer)`},P=`struct DSU {
    vector<int> parent, size;
    DSU(int n): parent(n), size(n, 1) { iota(parent.begin(), parent.end(), 0); }
    int find(int x) { return parent[x] == x ? x : parent[x] = find(parent[x]); }
    bool unite(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;
        if (size[a] < size[b]) swap(a, b);
        parent[b] = a; size[a] += size[b]; return true;
    }
};`,F=`struct SegmentTree {
    int n; vector<long long> tree;
    SegmentTree(const vector<long long>& a): n(a.size()), tree(4 * n) { build(1, 0, n - 1, a); }
    void build(int p, int l, int r, const vector<long long>& a) {
        if (l == r) { tree[p] = a[l]; return; }
        int m = (l + r) / 2;
        build(p * 2, l, m, a); build(p * 2 + 1, m + 1, r, a);
        tree[p] = tree[p * 2] + tree[p * 2 + 1];
    }
    void setValue(int p, int l, int r, int i, long long v) {
        if (l == r) { tree[p] = v; return; }
        int m = (l + r) / 2;
        if (i <= m) setValue(p * 2, l, m, i, v);
        else setValue(p * 2 + 1, m + 1, r, i, v);
        tree[p] = tree[p * 2] + tree[p * 2 + 1];
    }
    long long sum(int p, int l, int r, int ql, int qr) {
        if (qr < l || r < ql) return 0;
        if (ql <= l && r <= qr) return tree[p];
        int m = (l + r) / 2;
        return sum(p * 2, l, m, ql, qr) + sum(p * 2 + 1, m + 1, r, ql, qr);
    }
};`,I={dfs:`    vector<int> visited(n), order;
    function<void(int)> dfs = [&](int u) {
        visited[u] = 1; order.push_back(u);
        for (int v : graph[u]) if (!visited[v]) dfs(v);
    };
    dfs(start); printList(order);`,bfs:`    vector<int> distance(n, -1); queue<int> q;
    distance[start] = 0; q.push(start);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : graph[u]) if (distance[v] == -1) {
            distance[v] = distance[u] + 1; q.push(v);
        }
    }
    cout << distance[target] << '\\n';`,dijkstra:`    const long long INF = LLONG_MAX / 4;
    vector<long long> distance(n, INF);
    priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> heap;
    distance[start] = 0; heap.push({0, start});
    while (!heap.empty()) {
        long long d = heap.top().first; int u = heap.top().second; heap.pop();
        if (d != distance[u]) continue;
        for (auto edge : graph[u]) {
            int v = edge.first; long long weight = edge.second;
            if (d + weight < distance[v]) {
                distance[v] = d + weight; heap.push({distance[v], v});
            }
        }
    }
    cout << (distance[target] == INF ? -1 : distance[target]) << '\\n';`,topological:`    vector<int> degree(n), order; queue<int> q;
    for (int u = 0; u < n; ++u) for (int v : graph[u]) ++degree[v];
    for (int i = 0; i < n; ++i) if (degree[i] == 0) q.push(i);
    while (!q.empty()) {
        int u = q.front(); q.pop(); order.push_back(u);
        for (int v : graph[u]) if (--degree[v] == 0) q.push(v);
    }
    if ((int)order.size() != n) cout << "CYCLE\\n";
    else printList(order);`,kruskal:`    sort(edges.begin(), edges.end(), [](const Edge& a, const Edge& b) {
        return tie(a.w, a.u, a.v) < tie(b.w, b.u, b.v);
    });
    DSU dsu(n); long long total = 0; int count = 0;
    for (auto e : edges) if (dsu.unite(e.u, e.v)) { total += e.w; ++count; }
    if (count != n - 1) cout << "DISCONNECTED\\n";
    else cout << total << '\\n';`,backtrack:`    vector<int> used(a.size()); vector<long long> path;
    vector<vector<long long>> answers;
    function<void()> dfs = [&]() {
        if (path.size() == a.size()) { answers.push_back(path); return; }
        for (int i = 0; i < (int)a.size(); ++i) if (!used[i]) {
            used[i] = 1; path.push_back(a[i]); dfs();
            path.pop_back(); used[i] = 0;
        }
    };
    dfs(); cout << answers.size() << '\\n';`,knapsack:`    vector<vector<long long>> dp(items.size() + 1, vector<long long>(capacity + 1));
    for (int i = 1; i <= (int)items.size(); ++i) for (int c = 0; c <= capacity; ++c) {
        dp[i][c] = dp[i - 1][c];
        int weight = items[i - 1].first; long long value = items[i - 1].second;
        if (weight <= c) dp[i][c] = max(dp[i][c], dp[i - 1][c - weight] + value);
    }
    cout << dp.back()[capacity] << '\\n';`,lis:`    vector<int> dp(a.size(), 1);
    for (int i = 0; i < (int)a.size(); ++i) for (int j = 0; j < i; ++j)
        if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
    cout << *max_element(dp.begin(), dp.end()) << '\\n';`,"union-find":`    DSU dsu(n); vector<int> answers;
    for (auto op : operations) {
        if (op.type == "union") dsu.unite(op.x, (int)op.y);
        else if (op.type == "find") answers.push_back(dsu.find(op.x));
        else answers.push_back(dsu.find(op.x) == dsu.find((int)op.y));
    }
    printList(answers);`,fenwick:`    vector<long long> tree(n + 1), answers;
    auto add = [&](int i, long long delta) { for (; i <= n; i += i & -i) tree[i] += delta; };
    auto prefix = [&](int i) { long long s = 0; for (; i > 0; i -= i & -i) s += tree[i]; return s; };
    for (int i = 1; i <= n; ++i) add(i, a[i - 1]);
    for (auto op : operations) {
        if (op.type == "add") add(op.x, op.y);
        else if (op.type == "sum") answers.push_back(prefix(op.x));
        else answers.push_back(prefix((int)op.y) - prefix(op.x - 1));
    }
    printList(answers);`,"segment-tree":`    SegmentTree tree(a); vector<long long> answers;
    for (auto op : operations) {
        if (op.type == "set") tree.setValue(1, 0, tree.n - 1, op.x, op.y);
        else answers.push_back(tree.sum(1, 0, tree.n - 1, op.x, (int)op.y));
    }
    printList(answers);`,kmp:`    vector<int> pi(pattern.size()), positions;
    for (int i = 1; i < (int)pattern.size(); ++i) {
        int j = pi[i - 1];
        while (j > 0 && pattern[i] != pattern[j]) j = pi[j - 1];
        if (pattern[i] == pattern[j]) ++j;
        pi[i] = j;
    }
    for (int i = 0, j = 0; i < (int)text.size(); ++i) {
        while (j > 0 && text[i] != pattern[j]) j = pi[j - 1];
        if (text[i] == pattern[j]) ++j;
        if (j == (int)pattern.size()) { positions.push_back(i - j + 1); j = pi[j - 1]; }
    }
    if (positions.empty()) cout << "-1\\n"; else printList(positions);`,trie:`    vector<map<char,int>> children(1); vector<int> ends(1);
    for (const string& word : words) {
        int node = 0;
        for (char c : word) {
            if (!children[node].count(c)) {
                children[node][c] = children.size();
                children.push_back(map<char,int>()); ends.push_back(0);
            }
            node = children[node][c];
        }
        ++ends[node];
    }
    int node = 0; bool missing = false;
    for (char c : query) {
        if (!children[node].count(c)) { missing = true; break; }
        node = children[node][c];
    }
    cout << (missing ? "NONE" : ends[node] ? "WORD" : "PREFIX") << '\\n';`,gcd:`    while (b != 0) { long long remainder = a % b; a = b; b = remainder; }
    cout << a << '\\n';`,"fast-power":`    a %= mod; long long result = 1 % mod;
    while (b > 0) {
        if (b & 1) result = result * a % mod;
        a = a * a % mod; b /= 2;
    }
    cout << result << '\\n';`,sieve:`    vector<bool> composite(limit + 1); composite[0] = composite[1] = true;
    for (int p = 2; 1LL * p * p <= limit; ++p) if (!composite[p])
        for (long long value = 1LL * p * p; value <= limit; value += p) composite[value] = true;
    vector<int> primes;
    for (int i = 2; i <= limit; ++i) if (!composite[i]) primes.push_back(i);
    printList(primes);`,"prefix-sum":`    vector<long long> prefix(a.size() + 1), answers;
    for (int i = 0; i < (int)a.size(); ++i) prefix[i + 1] = prefix[i] + a[i];
    for (auto interval : queries) answers.push_back(prefix[interval.second + 1] - prefix[interval.first]);
    printList(answers);`,"interval-greedy":`    sort(intervals.begin(), intervals.end(), [](const Interval& a, const Interval& b) {
        return tie(a.end, a.start, a.id) < tie(b.end, b.start, b.id);
    });
    long long last = LLONG_MIN; int answer = 0;
    for (auto item : intervals) if (item.start >= last) { ++answer; last = item.end; }
    cout << answer << '\\n';`};function L(e){if(e.kind===`graph`){let t=e.edges.map(e=>`{${e.from}, ${e.to}, ${e.weight}}`).join(`, `);return`    int n = ${e.n}, start = ${e.start}, target = ${e.target};\n    struct Edge { int u, v; long long w; };\n    vector<Edge> edges = {${t}};`}if(e.kind===`array`||e.kind===`prefix`||e.kind===`structure`){let t=`    vector<long long> a = {${e.values.join(`, `)}};`;return e.kind===`prefix`?t+`\n    vector<pair<int,int>> queries = {${e.queries.map(e=>`{${e.join(`, `)}}`).join(`, `)}};`:e.kind===`structure`?t+`\n    int n = ${e.n};\n    struct Operation { string type; int x; long long y; };\n    vector<Operation> operations = {${e.operations.map(e=>`{${JSON.stringify(e.type)}, ${e.args[0]}, ${e.args[1]??0}}`).join(`, `)}};`:t}return e.kind===`knapsack`?`    int capacity = ${e.capacity};\n    vector<pair<int,long long>> items = {${e.items.map(e=>`{${e.weight}, ${e.value}}`).join(`, `)}};`:e.kind===`text`?`    string text = ${JSON.stringify(e.text)}, pattern = ${JSON.stringify(e.pattern)};`:e.kind===`trie`?`    vector<string> words = {${e.words.map(e=>JSON.stringify(e)).join(`, `)}};\n    string query = ${JSON.stringify(e.query)};`:e.kind===`math`?`    long long a = ${e.a}, b = ${e.b}, mod = ${e.mod};\n    int limit = ${e.limit};`:`    struct Interval { int start, end, id; };\n    vector<Interval> intervals = {${e.intervals.map(e=>`{${e.start}, ${e.end}, ${e.id}}`).join(`, `)}};`}function R(e,t,n){if(t===`python`)return`# Python 3: current demonstration parameters\nimport json\n\n${[`union-find`,`kruskal`].includes(e)?M+`
`:``}def solve(data):\n${N[e]}\n\nDATA = json.loads(${JSON.stringify(JSON.stringify(n))})\nprint(solve(DATA))\n`;let r=n.kind===`graph`&&e!==`kruskal`?e===`dijkstra`?`
    vector<vector<pair<int,long long>>> graph(n);
    for (auto e : edges) graph[e.u].push_back({e.v, e.w});`:`\n    vector<vector<int>> graph(n);\n    for (auto e : edges) { graph[e.u].push_back(e.v); ${n.directed?``:`graph[e.v].push_back(e.u);`} }\n    for (auto& row : graph) sort(row.begin(), row.end());`:``;return`// C++14 or later: replace the parameter block with the problem's input.\n#include <bits/stdc++.h>\nusing namespace std;\n\ntemplate<class T> void printList(const vector<T>& values) {\n    for (int i = 0; i < (int)values.size(); ++i) { if (i) cout << ' '; cout << values[i]; }\n    cout << '\\n';\n}\n${[`union-find`,`kruskal`].includes(e)?`
`+P+`
`:``}${e===`segment-tree`?`
`+F+`
`:``}\nint main() {\n${L(n)}${r}\n${I[e]}\n    return 0;\n}\n`}var z=`http://www.w3.org/2000/svg`;function B(e){let t=new Map;if(e.kind===`graph`){let n=e.nodes.length;return e.nodes.forEach((e,r)=>{let i=-Math.PI/2+r*Math.PI*2/Math.max(1,n);t.set(e.id,{x:500+Math.cos(i)*(n<3?180:340),y:235+Math.sin(i)*165})}),t}let n=new Map;e.nodes.forEach(e=>{if(e.parent){let t=n.get(e.parent)||[];t.push(e),n.set(e.parent,t)}});let r=e.nodes.filter(e=>!e.parent),i=new Map,a=e=>{let t=(n.get(e.id)||[]).reduce((e,t)=>e+a(t),0)||1;return i.set(e.id,t),t},o=r.reduce((e,t)=>e+a(t),0)||1,s=0,c=new Map,l=(e,t)=>{c.set(e.id,t),s=Math.max(s,t);for(let r of n.get(e.id)||[])l(r,t+1)};r.forEach(e=>l(e,0));let u=(e,r,a)=>{t.set(e.id,{x:(r+a)/2,y:55+(c.get(e.id)||0)*Math.max(65,340/Math.max(1,s))});let o=r;for(let t of n.get(e.id)||[]){let n=(a-r)*i.get(t.id)/i.get(e.id);u(t,o,o+n),o+=n}},d=45;return r.forEach(e=>{let t=910*i.get(e.id)/o;u(e,d,d+t),d+=t}),t}var V=class{host;tree;key;svg;nodes=new Map;constructor(e,t,n){this.host=e,this.tree=t,this.key=n,e.innerHTML=`<div class="scene-graph-viewport"><svg class="contest-graph" viewBox="0 0 1000 460" role="img"><defs><marker id="scene-arrow-${n}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" fill="#819eb8"/></marker></defs><g class="scene-edges"></g><g class="scene-nodes"></g><circle class="graph-cursor" r="34" cx="0" cy="0" fill="none"/></svg></div><div class="scene-graph-legend"><span><i class="gold"></i>当前位置</span><span><i class="cyan"></i>候选／已发现</span><span><i class="mint"></i>完成／已选关系</span></div>`,this.svg=e.querySelector(`svg`)}paint(e){this.svg.setAttribute(`aria-label`,`${e.title}，${e.nodes.length} 个节点、${e.edges.length} 条关系${e.current?`，当前位置 ${e.nodes.find(t=>t.id===e.current)?.label}`:``}。${e.caption||``}`);let t=B(e);this.svg.setAttribute(`viewBox`,`0 0 1000 ${this.tree?Math.max(460,...Array.from(t.values(),e=>e.y+55)):460}`);let n=this.tree?27:25,i=new Set(e.nodes.map(e=>e.id));for(let[e,t]of this.nodes)i.has(e)||(t.remove(),this.nodes.delete(e));let a=new Map;this.svg.querySelector(`.scene-edges`).innerHTML=e.edges.map(e=>{let i=t.get(e.from),o=t.get(e.to);if(!i||!o)return``;let s=[e.from,e.to].sort().join(`-`),c=a.get(s)||0;a.set(s,c+1);let l=o.x-i.x,u=o.y-i.y,d=Math.hypot(l,u)||1,f,p,m;if(e.from===e.to)f=`M ${i.x+14} ${i.y-20} C ${i.x+90} ${i.y-95} ${i.x+85} ${i.y+45} ${i.x+20} ${i.y+10}`,p=i.x+71,m=i.y-32;else{let e=c?28*(c%2?1:-1):0,t=i.x+l/d*n,r=i.y+u/d*n,a=o.x-l/d*(n+5),s=o.y-u/d*(n+5),h=(i.x+o.x)/2-u/d*e,g=(i.y+o.y)/2+l/d*e;f=`M ${t} ${r} Q ${h} ${g} ${a} ${s}`,p=h-u/d*13,m=g+l/d*13}return`<g class="scene-edge ${e.state||``}" data-edge-id="${e.id}"><path d="${f}" ${e.directed?`marker-end="url(#scene-arrow-${this.key})"`:``}/>${e.label?`<text x="${p}" y="${m}" text-anchor="middle">${r(e.label)}</text>`:``}</g>`}).join(``);let o=e.nodes.filter(t=>!e.nodes.some(e=>e.parent===t.id)).length,s=Math.max(48,Math.min(94,860/Math.max(1,o)-7));for(let n of e.nodes){let e=this.nodes.get(n.id);e||(e=document.createElementNS(z,`g`),e.innerHTML=this.tree?`<rect class="node-body" x="${-s/2}" y="-23" width="${s}" height="46" rx="6"/><text class="node-label" text-anchor="middle"/><text class="node-detail" text-anchor="middle"/><text class="node-terminal" text-anchor="end"/>`:`<circle class="node-body" r="25"/><text class="node-label" text-anchor="middle" y="6"/><text class="node-detail" text-anchor="middle" y="45"/>`,this.nodes.set(n.id,e),this.svg.querySelector(`.scene-nodes`).append(e));let r=t.get(n.id);if(e.style.transform=`translate(${r.x}px,${r.y}px)`,e.setAttribute(`class`,`scene-node ${n.state||``}`),e.setAttribute(`aria-label`,`${n.label}${n.detail?`，`+n.detail:``}`),e.querySelector(`.node-label`).textContent=n.label,e.querySelector(`.node-detail`).textContent=n.detail||``,this.tree){let t=e.querySelector(`rect`);t.setAttribute(`x`,String(-s/2)),t.setAttribute(`width`,String(s));let r=e.querySelector(`text`);r.setAttribute(`y`,n.detail?`-3`:`5`),r.setAttribute(`font-size`,s<60?`11`:`14`),e.querySelector(`.node-detail`).setAttribute(`y`,`14`);let i=e.querySelector(`.node-terminal`);i.textContent=n.terminal?`✦`:``,i.setAttribute(`x`,String(s/2-3)),i.setAttribute(`y`,`-16`)}}let c=this.svg.querySelector(`.graph-cursor`),l=e.current?t.get(e.current):void 0;c.style.opacity=l?`1`:`0`,l&&(c.style.transform=`translate(${l.x}px,${l.y}px)`)}},H=class{root;hosts=[];graphs=new Map;constructor(e){this.root=e}paint(e,t){for(;this.hosts.length>e.panels.length;)this.graphs.delete(this.hosts.length-1),this.hosts.pop().remove();e.panels.forEach((e,n)=>{let a=this.hosts[n];a||(a=document.createElement(`section`),a.className=`scene-panel`,a.innerHTML=`<h3 class="scene-panel-title"></h3><div class="scene-panel-content"></div><p class="scene-panel-caption"></p>`,this.root.append(a),this.hosts.push(a));let o=a.querySelector(`.scene-panel-content`);a.dataset.kind!==e.kind&&(a.dataset.kind=e.kind,o.innerHTML=``,delete o.dataset.matrixSize,delete o.dataset.stringSignature,this.graphs.delete(n)),a.querySelector(`h3`).textContent=e.title,a.querySelector(`p`).textContent=e.caption||``;let s=t?.panels[n];if(e.kind===`graph`||e.kind===`tree`){let t=this.graphs.get(n);t||(t=new V(o,e.kind===`tree`,n),this.graphs.set(n,t)),t.paint(e)}else if(e.kind===`row`)o.innerHTML=`<div class="scene-row">${e.values.map((t,n)=>`<div class="scene-value ${e.active?.includes(n)?`active`:``} ${e.chosen?.includes(n)?`chosen`:``} ${s?.kind===`row`&&s.values[n]!==t?`changed`:``}"><b>${r(t)}</b>${e.indexBase===void 0?``:`<small>[${n+e.indexBase}]</small>`}</div>`).join(``)}</div>`;else if(e.kind===`frontier`)this.frontier(o,e);else if(e.kind===`table`){o.innerHTML=`<div class="scene-table-scroll"><table class="scene-table"><thead><tr>${e.columns.map(e=>`<th>${r(e)}</th>`).join(``)}</tr></thead><tbody>${e.rows.map((t,n)=>`<tr class="${n===e.activeRow?`active`:``}">${t.map(e=>`<td>${r(e)}</td>`).join(``)}</tr>`).join(``)}</tbody></table></div>`;let t=o.querySelector(`tr.active`),n=o.querySelector(`.scene-table-scroll`);t&&(n.scrollTop=Math.max(0,t.offsetTop-n.clientHeight/2))}else if(e.kind===`matrix`)this.matrix(o,e,s);else if(e.kind===`formula`)o.innerHTML=`<div class="scene-formula"><code>${r(e.expression)}</code>${i(`arrow`)}<strong>${r(e.result)}</strong></div>`;else if(e.kind===`strings`)this.strings(o,e);else if(e.kind===`sieve`)o.innerHTML=`<div class="sieve-grid">${Array.from({length:e.limit+1},(t,n)=>`<span class="sieve-number ${n<2?`excluded`:e.composite[n]?`composite`:e.complete?`prime`:`candidate`} ${n===e.current?`current`:``} ${n===e.marked?`marking`:``}" title="${n<2?`不是素数`:e.composite[n]?`已标记合数`:e.complete?`素数`:`候选`}">${n}</span>`).join(``)}</div>`;else if(e.kind===`intervals`){let t=Math.max(...e.items.map(e=>e.end),1),n=e.selected.length?e.items.find(t=>t.id===e.selected.at(-1)).end:void 0;o.innerHTML=`<div class="interval-chart"><div class="interval-axis"><span>0</span><span>${t}</span></div>${n===void 0?``:`<div class="interval-cut" style="left:calc(95px + (100% - 95px) * ${n/t})"><span>上次结束 ${n}</span></div>`}${e.items.map(n=>`<div class="interval-row ${e.current===n.id?`current`:``} ${e.selected.includes(n.id)?`chosen`:``} ${e.rejected.includes(n.id)?`rejected`:``}"><span>#${n.id} [${n.start},${n.end})</span><div><i style="left:${n.start/t*100}%;width:${(n.end-n.start)/t*100}%" title="活动 ${n.id}，${n.start} 到 ${n.end}"><b>#${n.id}</b></i></div></div>`).join(``)}</div>`}})}matrix(e,t,n){let i=`${t.rows.length}:${t.columns.length}`;e.dataset.matrixSize!==i&&(e.dataset.matrixSize=i,e.innerHTML=`<div class="matrix-scroll"><div class="matrix-core" style="min-width:${(t.columns.length+1)*44}px"><table class="scene-matrix"><thead><tr><th>i / c</th>${t.columns.map(e=>`<th>${r(e)}</th>`).join(``)}</tr></thead><tbody>${t.rows.map((e,n)=>`<tr><th>${r(e)}</th>${t.columns.map((e,t)=>`<td data-cell="${n},${t}"></td>`).join(``)}</tr>`).join(``)}</tbody></table><svg class="matrix-arrows" aria-hidden="true"></svg></div></div>`),t.values.forEach((r,i)=>r.forEach((r,a)=>{let o=e.querySelector(`[data-cell="${i},${a}"]`);o.textContent=r===null?`·`:String(r),o.classList.toggle(`active`,t.active?.[0]===i&&t.active?.[1]===a),o.classList.toggle(`source`,!!t.sources?.some(e=>e[0]===i&&e[1]===a)),o.classList.toggle(`chosen`,!!t.chosen?.some(e=>e[0]===i&&e[1]===a)),o.classList.toggle(`changed`,n?.kind===`matrix`&&n.values[i]?.[a]!==r&&r!==null)}));let a=e.querySelector(`svg`),o=e.querySelector(`.matrix-core`);if(a.setAttribute(`viewBox`,`0 0 ${o.offsetWidth} ${o.offsetHeight}`),t.active&&t.sources?.length){let n=o.getBoundingClientRect(),r=e.querySelector(`[data-cell="${t.active.join(`,`)}"]`).getBoundingClientRect(),i=r.left-n.left+r.width/2,s=r.top-n.top+r.height/2;a.innerHTML=t.sources.map(t=>{let r=e.querySelector(`[data-cell="${t.join(`,`)}"]`).getBoundingClientRect(),a=r.left-n.left+r.width/2;return`<path d="M ${a} ${r.top-n.top+r.height/2} Q ${a} ${s} ${i} ${s}"/>`}).join(``)}else a.innerHTML=``}strings(e,t){let n=JSON.stringify([t.text,t.pattern]);if(e.dataset.stringSignature!==n&&(e.dataset.stringSignature=n,e.innerHTML=`<div class="string-scroll"><div class="string-stage" style="min-width:${Math.max(Math.max(t.text.length,t.pattern.length)*32+20,300)}px"><div class="text-line">${t.text.map((e,t)=>`<span data-text="${t}"><b>${r(e===` `?`␠`:e)}</b><small>${t}</small></span>`).join(``)}</div><div class="pattern-line">${t.pattern.map((e,t)=>`<span data-pattern="${t}"><b>${r(e===` `?`␠`:e)}</b><small>${t}</small></span>`).join(``)}</div></div></div>`),e.querySelectorAll(`[data-text]`).forEach(e=>{let n=Number(e.dataset.text);e.classList.toggle(`active`,n===t.textActive),e.classList.toggle(`matched-start`,t.matches.includes(n))}),e.querySelectorAll(`[data-pattern]`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.pattern)===t.patternActive)),e.querySelector(`.pattern-line`).style.transform=`translateX(${t.offset*32}px)`,t.textActive!==void 0){let n=e.querySelector(`.string-scroll`),r=t.textActive*32;(r<n.scrollLeft||r>n.scrollLeft+n.clientWidth-50)&&n.scrollTo({left:Math.max(0,r-n.clientWidth/2),behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`})}}frontier(e,t){e.querySelector(`.frontier-track`)||(e.innerHTML=`<div class="frontier-caption"><span></span><small></small></div><div class="frontier-scroll"><div class="frontier-track"></div></div><span class="frontier-empty">空</span>`),e.querySelector(`.frontier-caption span`).textContent=t.mode===`queue`?`队首 → 队尾`:t.mode===`stack`?`栈底 → 栈顶`:`优先队列内容（按距离展示）`,e.querySelector(`.frontier-caption small`).textContent=`${t.values.length} 项`;let n=e.querySelector(`.frontier-track`),r=t.values.map((e,n)=>`${e}:${t.values.slice(0,n).filter(t=>t===e).length}`),i=new Map(Array.from(n.children).map(e=>[e.dataset.key,e]));for(let[e,t]of i)r.includes(e)||t.remove();t.values.forEach((e,a)=>{let o=i.get(r[a]);o?o.classList.remove(`entering`):(o=document.createElement(`div`),o.className=`frontier-item entering`,o.dataset.key=r[a],n.append(o)),o.textContent=String(e),o.style.left=`${a*82}px`,o.classList.toggle(`frontier-head`,a===0&&t.mode===`queue`),o.classList.toggle(`frontier-top`,a===t.values.length-1&&t.mode===`stack`)}),n.style.width=`${t.values.length*82}px`,e.querySelector(`.frontier-empty`).hidden=t.values.length>0}dispose(){this.graphs.clear(),this.hosts=[]}},U=new Map;function W(n,a){let d=t[a],f={...U.get(a)||e(a)},p=h(a,f),m=j(a,p),g=0,_=!1,v,y=``,b=!1,x=a===`dfs`?`bfs`:a===`bfs`?`dfs`:void 0;n.innerHTML=`<div class="algorithm-shell contest-shell page-enter">
    <section class="algorithm-main contest-main">
      <div class="algorithm-page-heading"><div class="content-navigation-row">${u([`算法空间`,d.group])}<div class="content-navigation-actions">${l(`#/algorithms`,`返回算法目录`,`快速切换算法`)}<button class="button quiet small" data-contest-action="study">${i(`book`)}学习笔记</button></div></div><div class="contest-topic-meta"><span>${d.group}</span><span>${d.level}</span><span>可交互实验</span></div><h1>${d.name}</h1><p>${d.title}</p><p class="contest-prerequisite"><span>建议先了解</span> ${r(d.prerequisite)}</p></div>
      <div class="contest-task"><div><span class="eyebrow gold">本次要解决的问题</span><p>${r(d.problem||d.overview)}</p></div><button class="button quiet small" data-contest-action="input">${i(`array`)}编辑输入</button></div>
      ${x?`<div class="contest-comparison">${i(`compare`)}<span>换一种搜索策略，保留当前的图、起点和目标。</span><button data-contest-action="compare">用同一张图看 ${x.toUpperCase()}${i(`arrow`)}</button></div>`:``}
      <section class="contest-workbench" aria-label="${r(d.name)}的逐步可视化">
        <header class="contest-stage-heading"><span><i class="pulse-dot"></i>实际步骤 · 可自由回放</span><span class="contest-stage-count"></span></header>
        <div class="contest-player"><div class="contest-transport"><button class="button quiet small icon-button" data-contest-action="reset" aria-label="回到开始">${i(`reset`)}</button><button class="button quiet small icon-button" data-contest-action="previous" aria-label="上一步">${i(`previous`)}</button><button class="button primary small" data-contest-action="play"></button><button class="button quiet small icon-button" data-contest-action="next" aria-label="下一步">${i(`next`)}</button><button class="button quiet small" data-contest-action="end">查看结果${i(`next`)}</button><label class="contest-speed-label">速度<select class="contest-speed" aria-label="播放速度"><option value="1300">慢速</option><option value="800" selected>标准</option><option value="350">快速</option></select></label></div><label class="contest-seek-label"><span>步骤进度</span><input class="contest-seek" type="range" min="0" max="${m.frames.length-1}" value="0" aria-label="算法步骤"><output class="contest-step-number"></output></label><div class="contest-milestones"></div></div>
        <div class="contest-scene"></div>
      </section>
      <div class="contest-case-strip"><div><span class="eyebrow">边界与对照</span><h3>换一个案例，再验证一次。</h3></div><button class="button quiet small" data-contest-action="default">默认输入</button>${d.examples.map((e,t)=>`<button class="button quiet small" data-contest-example="${t}">${r(e.title)}${i(`arrow`)}</button>`).join(``)}</div>
      <div class="algorithm-study"></div>${o(d.source)}
    </section>
    <aside class="contest-inspector"><div class="contest-inspector-heading">${i(`spark`)}这一步发生了什么</div><div class="contest-current-step" role="status" aria-live="polite"></div><div class="contest-prediction"></div><div class="contest-final-result" hidden></div><div class="contest-inspector-note">画布中的颜色、数值与关系来自当前算法快照。拖动进度可检查每一步。</div></aside>
    <dialog class="contest-input-dialog" aria-labelledby="contest-input-title"><form class="contest-input-editor" novalidate><header><div><span class="eyebrow gold">修改实验参数</span><h2 id="contest-input-title">${d.name}</h2></div><button type="button" class="button quiet small icon-button" data-contest-action="cancel-input" aria-label="关闭输入编辑">${i(`close`)}</button></header><p>应用后从第一步重新演示。下方完整代码也会使用本次输入。</p><div class="contest-input-fields">${d.fields.map(e=>`<label class="contest-input-field ${e.type===`textarea`?`wide`:``}" for="contest-input-${e.key}"><span>${r(e.label)}</span>${e.type===`textarea`?`<textarea id="contest-input-${e.key}" name="${e.key}" rows="5" spellcheck="false" maxlength="1500"></textarea>`:e.type===`select`?`<select id="contest-input-${e.key}" name="${e.key}">${e.options.map(e=>`<option value="${e.value}">${r(e.label)}</option>`).join(``)}</select>`:`<input id="contest-input-${e.key}" name="${e.key}" type="${e.type}" maxlength="400" ${e.type===`number`?`step="1"`:``}>`}${e.hint?`<small>${r(e.hint)}</small>`:``}</label>`).join(``)}</div><div class="contest-input-error" role="alert"></div><footer><button type="button" class="button quiet" data-contest-action="cancel-input">取消</button><button type="submit" class="button primary">应用并演示${i(`play`)}</button></footer></form></dialog>
  </div>`;let S=e=>n.querySelector(e),C=s(n,a),w=new H(S(`.contest-scene`)),T=S(`.contest-input-dialog`),E=c(S(`.algorithm-study`),{...d,experiment:d.examples[0],codeCaption:`模板包含完整入口及当前已应用的参数，可复制到本地或在线评测环境运行。`},()=>[{id:`cpp`,label:`C++`,language:`c`,code:R(a,`cpp`,p),caption:`使用 C++14 起的标准库语法。浏览器程序追踪目前不支持完整 C++ STL；这里展示算法模型的独立实现。`},{id:`python`,label:`Python 3`,language:`python`,code:R(a,`python`,p),caption:`使用 Python 3 标准库，输出与本次演示对应。`}],()=>M({...e(a),...d.examples[0].fields}));function D(){clearTimeout(v),v=void 0,_=!1}function O(){let e=m.frames[g];w.paint(e,g>0?m.frames[g-1]:void 0),S(`.contest-stage-count`).textContent=`${g+1} / ${m.frames.length}`,S(`.contest-step-number`).textContent=`${g+1} / ${m.frames.length}`;let t=S(`.contest-seek`);t.max=String(m.frames.length-1),t.value=String(g);let n=S(`[data-contest-action="play"]`);n.innerHTML=`${i(_?`pause`:`play`)}${_?`暂停`:g===m.frames.length-1?`重播`:`播放`}`,n.setAttribute(`aria-pressed`,String(_)),S(`[data-contest-action="previous"]`).disabled=g===0,S(`[data-contest-action="next"]`).disabled=g===m.frames.length-1,S(`.contest-current-step`).innerHTML=`<span class="contest-step-kicker">STEP ${String(g+1).padStart(2,`0`)}</span><h2>${r(e.title)}</h2><p>${r(e.explanation)}</p><dl class="contest-metrics">${e.metrics.map(e=>`<div><dt>${r(e.label)}</dt><dd>${r(e.value)}</dd></div>`).join(``)}</dl>`,S(`.contest-prediction`).innerHTML=e.prediction?`<div class="eyebrow gold">先想一步</div><h3>${r(e.prediction.question)}</h3><div>${e.prediction.choices.map(e=>`<button data-contest-predict="${r(e.id)}" class="${y===e.id?`selected`:``}">${r(e.label)}</button>`).join(``)}</div>${y?`<p role="status">${y===e.prediction.answer?`判断正确。继续一步，观察变化。`:`再想一想，可以回看当前的边、状态与边界。`}</p>`:``}`:``;let a=S(`.contest-final-result`);a.hidden=g!==m.frames.length-1,a.hidden||(a.innerHTML=`<span class="eyebrow">本次结果</span><pre>${r(m.output)}</pre><p>${r(m.summary)}</p>`),S(`.contest-milestones`).innerHTML=m.frames.map((e,t)=>({f:e,i:t})).filter(({f:e,i:t})=>t===0||t===m.frames.length-1||e.phase!==m.frames[t-1].phase).filter((e,t,n)=>t===0||t===n.length-1||n.length<=8||t%Math.ceil(n.length/6)===0).map(({f:e,i:t})=>`<button data-contest-step="${t}" class="${g===t?`selected`:``}" title="步骤 ${t+1}">${r(e.title)}</button>`).join(``)}function k(e){g=Math.max(0,Math.min(m.frames.length-1,e)),y=``,O()}function A(){v=setTimeout(()=>{!b&&_&&(g>=m.frames.length-1?(D(),O()):(k(g+1),g===m.frames.length-1?(D(),O()):A()))},Number(S(`.contest-speed`).value))}function M(e){let t=h(a,e),n=j(a,t);D(),f={...e},p=t,m=n,U.set(a,f),g=0,y=``,E.updateData(),O()}function N(){D(),O(),S(`.contest-input-error`).textContent=``;for(let e of d.fields)S(`[name="${e.key}"]`).value=f[e.key]||``;T.showModal()}let P=t=>{let r=t.target.closest(`button`);if(r&&!r.closest(`.algorithm-study`)){if(r.dataset.contestExample!==void 0)M({...e(a),...d.examples[Number(r.dataset.contestExample)].fields});else if(r.dataset.contestStep!==void 0)D(),k(Number(r.dataset.contestStep));else if(r.dataset.contestPredict!==void 0)y=r.dataset.contestPredict,O(),n.querySelector(`[data-contest-predict="${y}"]`)?.focus();else switch(r.dataset.contestAction){case`input`:N();break;case`cancel-input`:T.close();break;case`reset`:D(),k(0);break;case`previous`:D(),k(g-1);break;case`next`:D(),k(g+1);break;case`end`:D(),k(m.frames.length-1);break;case`default`:M(e(a));break;case`study`:D(),O(),E.showOverview();break;case`compare`:x&&(U.set(x,{...f}),location.hash=`#/algorithms/${x}`);break;case`play`:_?D():(g===m.frames.length-1&&k(0),_=!0,A()),O()}}},F=e=>{if(!e.target.matches(`.contest-input-editor`))return;e.preventDefault();let t=Object.fromEntries(d.fields.map(e=>[e.key,S(`[name="${e.key}"]`).value]));try{M(t),T.close()}catch(e){S(`.contest-input-error`).textContent=e instanceof Error?e.message:`输入未能处理，请检查参数。`}},I=()=>{D(),k(Number(S(`.contest-seek`).value))},L=()=>{_&&(clearTimeout(v),A())},z=()=>{document.hidden&&(D(),O())},B=e=>{T.open||e.target.closest(`.directory-drawer`)||![`ArrowLeft`,`ArrowRight`,` `].includes(e.key)||e.target.closest(`button,a,input,textarea,select,.cm-editor`)||e.target.closest(`.contest-workbench`)&&(e.preventDefault(),e.key===` `?S(`[data-contest-action="play"]`).click():(D(),k(g+(e.key===`ArrowRight`?1:-1))))};return S(`.contest-workbench`).tabIndex=0,n.addEventListener(`click`,P),n.addEventListener(`submit`,F),n.addEventListener(`keydown`,B),S(`.contest-seek`).addEventListener(`input`,I),S(`.contest-speed`).addEventListener(`change`,L),document.addEventListener(`visibilitychange`,z),O(),()=>{b=!0,D(),T.open&&T.close(),w.dispose(),E.dispose(),C(),n.removeEventListener(`click`,P),n.removeEventListener(`submit`,F),n.removeEventListener(`keydown`,B),S(`.contest-seek`).removeEventListener(`input`,I),S(`.contest-speed`).removeEventListener(`change`,L),document.removeEventListener(`visibilitychange`,z)}}export{W as mountContest};