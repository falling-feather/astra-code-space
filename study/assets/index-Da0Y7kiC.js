const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assistant-Ct0MwSKp.js","./learning-BDw0BaFN.js","./client-B_0mdAhb.js","./learn-BfS69p7z.js","./course-directory-DlZM4Mnf.js","./shared-BltHzax8.js","./lesson-CYtU3twZ.js","./directory-drawer-D40IFIWm.js","./execution-DCCdSo0J.js","./state-D6fYI8f9.js","./dist-Cx0FjiNj.js","./trace-Dp2bqtLl.js","./algorithm-index-DaBx8rf2.js","./algorithm-directory-BMMqZjUf.js","./contest-DKMn_O7S.js","./study-panel-Bmwk3IqX.js","./algorithms-BZsoSmEK.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`bubble`,`selection`,`insertion`,`merge`,`linear`,`binary`],t=[`dfs`,`bfs`,`backtrack`,`dijkstra`,`topological`,`kruskal`,`knapsack`,`lis`,`union-find`,`fenwick`,`segment-tree`,`kmp`,`trie`,`gcd`,`fast-power`,`sieve`,`prefix-sum`,`interval-greedy`];function n(e){return t.includes(e)}function r(){let e=[];return{frames:e,add(t){if(e.length>=5e3)throw Error(`演示步骤超过 5000，请缩小输入。`);e.push(structuredClone(t))}}}function i(e,t){if(e.kind!==t)throw Error(`输入与算法类型不匹配。`);return e}var a={c:`C`,python:`Python`,java:`Java`,javascript:`JavaScript`,cpp:`C++17`},o={c:`main.c`,python:`main.py`,java:`Main.java`,javascript:`main.js`,cpp:`main.cpp`},s=(e,t=``)=>`#include <stdio.h>\n\n${t}${t?`
`:``}int main(void) {\n${e.split(`
`).map(e=>`    ${e}`).join(`
`)}\n    return 0;\n}`,c=(e,t=``)=>`#include <bits/stdc++.h>\nusing namespace std;\n\n${t}${t?`
`:``}int main() {\n${e.split(`
`).map(e=>`    `+e).join(`
`)}\n    return 0;\n}`,l=(e,t=``)=>`import java.util.Scanner;\n\npublic class Main {\n${t?t+`
`:``}    public static void main(String[] args) {\n${e.split(`
`).map(e=>`        ${e}`).join(`
`)}\n    }\n}`,u={c:`变量有明确的静态类型；查看实际作用域中的类型和值。`,python:`名称绑定到对象；观察运行时的值及其类型。`,java:`局部变量具有静态类型；方法与类共同组织程序。`},d=[{id:`output`,title:`第一次与程序对话`,short:`认识输出`,summary:`让一句话从代码走进输出窗口。`,goal:`区分源代码与标准输出，认识程序的执行入口。`,minutes:6,question:`输出窗口会出现哪一句话？`,experiment:`把问候语改成自己的句子，再运行一次。`,explanation:`输出语句把值交给标准输出。引号界定字符串本身，不会跟着内容一起输出。`,input:``,codes:{cpp:c(`cout << "Hello, Astra!\\n";`),c:s(`printf("Hello, Astra!\\n");`),python:`print("Hello, Astra!")`,java:l(`System.out.println("Hello, Astra!");`),javascript:`print("Hello, Astra!");`},distinctions:{c:`从 main 进入程序，printf 负责格式化输出，\\n 表示换行。`,python:`print() 输出内容并默认换行，不需要书写 main 入口。`,java:`执行从 main 方法开始，System.out.println 输出并换行。`}},{id:`input`,title:`让程序读懂你的输入`,short:`读取一个整数`,summary:`输入文本，转换成整数，再存入变量。`,goal:`理解标准输入、数值转换和变量之间的关系。`,minutes:10,question:`输入 18 后，变量 age 中会存下什么？`,experiment:`将标准输入改为 27，观察 age 和输出如何一起改变。`,explanation:`标准输入提供文本。读取整数需要按规则转换；C 的 %d、Python 的 int() 和 Java 的 nextInt() 以不同方式完成这个任务。`,input:`18`,codes:{cpp:c(`int age = 0;
if (!(cin >> age)) return 1;
cout << age << "\\n";`),c:s(`int age;
if (scanf("%d", &age) != 1) return 1;
printf("%d\\n", age);`),python:`age = int(input())
print(age)`,java:l(`Scanner sc = new Scanner(System.in);
int age = sc.nextInt();
System.out.println(age);`),javascript:`var age = parseInt(input(), 10);
print(age);`},distinctions:{c:`先声明 int age，再用 %d 读取整数；&age 提供接收数据的位置。`,python:`input() 首先得到字符串，再通过 int() 显式转为整数。`,java:`Scanner 从 System.in 读取，nextInt() 转换下一个整数。`}},{id:`types`,title:`数据怎样住进变量`,short:`变量与类型`,summary:`给值取名字，也认识值的类型。`,goal:`识别整数与小数，观察初始化后的变量状态。`,minutes:10,question:`age 与 height 分别保存哪一种数据？`,experiment:`把 age 改为 21，保持 height 不变，观察哪些数据发生变化。`,explanation:`类型决定数据能够怎样表示与运算。静态类型语言在声明处约束类型，Python 在运行时确定对象类型。`,input:``,codes:{cpp:c(`int age = 18;
double height = 1.65;
cout << age << " " << fixed << setprecision(2) << height << "\\n";`),c:s(`int age = 18;
double height = 1.65;
printf("%d %.2f\\n", age, height);`),python:`age = 18
height = 1.65
print(age, height)`,java:l(`int age = 18;
double height = 1.65;
System.out.println(age + " " + height);`),javascript:`var age = 18;
var height = 1.65;
print(age, height);`},distinctions:u},{id:`sequence`,title:`顺序，决定结果`,short:`顺序结构`,summary:`一条语句的结果，会成为下一条语句的起点。`,goal:`区分赋值前后的状态，逐步跟踪计算过程。`,minutes:8,question:`score 先为 2，再增加 3，最后输出多少？`,experiment:`交换两条赋值语句，先预测结果，再运行检验。`,explanation:`程序按顺序执行。赋值使用当前已经存在的值，执行后，新的值会影响后续语句。`,input:``,codes:{cpp:c(`int score = 2;
score = score + 3;
cout << score << "\\n";`),c:s(`int score = 2;
score = score + 3;
printf("%d\\n", score);`),python:`score = 2
score = score + 3
print(score)`,java:l(`int score = 2;
score = score + 3;
System.out.println(score);`),javascript:`var score = 2;
score = score + 3;
print(score);`},distinctions:u},{id:`branch`,title:`让程序做一次选择`,short:`条件分支`,summary:`一次真假判断，选择不同的执行路径。`,goal:`看到条件的求值，以及实际进入的分支。`,minutes:12,question:`score 为 72 时，程序会输出 pass 还是 retry？`,experiment:`将 score 改成 59，再改成 60，检查边界处的路径。`,explanation:`if 检查条件是否成立。只有选中的分支会执行；边界值 60 能帮助我们区分 >= 与 >。`,input:``,codes:{cpp:c(`int score = 72;
if (score >= 60) {
    cout << "pass\\n";
} else {
    cout << "retry\\n";
}`),c:s(`int score = 72;
if (score >= 60) {
    printf("pass\\n");
} else {
    printf("retry\\n");
}`),python:`score = 72
if score >= 60:
    print("pass")
else:
    print("retry")`,java:l(`int score = 72;
if (score >= 60) {
    System.out.println("pass");
} else {
    System.out.println("retry");
}`),javascript:`var score = 72;
if (score >= 60) {
  print("pass");
} else {
  print("retry");
}`},distinctions:u},{id:`loops`,title:`循环与边界`,short:`循环与边界`,summary:`判断何时继续，也理解为什么结束。`,goal:`跟踪条件、循环体与再次判断，解释一次边界变化。`,minutes:15,question:`count 从 0 开始，循环结束后会变成多少？`,experiment:`将 < 3 改为 <= 3，预测新的结果，并与上一次运行比较。`,explanation:`while 在每一轮开始前检查条件。条件为假时不会再次进入循环体。< 与 <= 的差别，会改变边界值是否参与循环。`,input:``,codes:{cpp:c(`int count = 0;
while (count < 3) {
    count += 1;
}
cout << count << "\\n";`),c:s(`int count = 0;
while (count < 3) {
    count += 1;
}
printf("%d\\n", count);`),python:`count = 0
while count < 3:
    count += 1
print(count)`,java:l(`int count = 0;
while (count < 3) {
    count += 1;
}
System.out.println(count);`),javascript:`var count = 0;
while (count < 3) {
  count += 1;
}
print(count);`},distinctions:u},{id:`nested`,title:`两层循环，怎样前进`,short:`嵌套循环`,summary:`观察外层与内层循环的配合。`,goal:`解释为什么 3 轮外循环与 2 轮内循环会累加 6 次。`,minutes:15,question:`total 最终是 3、5，还是 6？`,experiment:`把内层次数从 2 改为 4，比较 total 的变化。`,explanation:`每次外层循环开始，内层循环都会重新从自己的起点执行。跟踪 i、j 和 total，能看清每一次累加属于哪一轮。`,input:``,codes:{cpp:c(`int total = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        total += 1;
    }
}
cout << total << "\\n";`),c:s(`int total = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        total += 1;
    }
}
printf("%d\\n", total);`),python:`total = 0
for i in range(3):
    for j in range(2):
        total += 1
print(total)`,java:l(`int total = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) total++;
}
System.out.println(total);`),javascript:`var total = 0;
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    total++;
  }
}
print(total);`},distinctions:u},{id:`functions`,title:`函数与返回值`,short:`函数与返回值`,summary:`跟随一个值，进入函数，再回到调用处。`,goal:`分清实参、形参、函数作用域和返回值。`,minutes:15,question:`n 是 3，twice(n) 会把什么交还给 result？`,experiment:`把 n 改成 5，在调用处步入函数，再观察返回后的 result。`,explanation:`调用函数时，实参的值传给形参。函数拥有自己的作用域；return 将结果交回调用处，调用方再完成赋值。`,input:``,codes:{cpp:c(`int n = 3;
int result = twice(n);
cout << result << "\\n";`,`int twice(int value) {
    return value * 2;
}
`),c:s(`int n = 3;
int result = twice(n);
printf("%d\\n", result);`,`int twice(int value) {
    return value * 2;
}
`),python:`def twice(value):
    return value * 2

n = 3
result = twice(n)
print(result)`,java:l(`int n = 3;
int result = twice(n);
System.out.println(result);`,`    static int twice(int value) {
        return value * 2;
    }`),javascript:`function twice(value) {
  return value * 2;
}
var n = 3;
var result = twice(n);
print(result);`},distinctions:u},{id:`scope`,title:`同一个名字，不同的空间`,short:`作用域`,summary:`观察函数内部的改变是否影响调用方。`,goal:`区分两个作用域中的同名值，解释参数与返回值。`,minutes:12,question:`函数内部加一以后，调用方的 n 会变吗？`,experiment:`让函数加 2，再比较 n 与 result。`,explanation:`这个例子传递整数值。函数内对形参重新赋值，不会把调用方的整数变量一起改掉。返回值需要由调用方接收。`,input:``,codes:{cpp:c(`int n = 10;
int result = addOne(n);
cout << n << " " << result << "\\n";`,`int addOne(int n) {
    n = n + 1;
    return n;
}
`),c:s(`int n = 10;
int result = addOne(n);
printf("%d %d\\n", n, result);`,`int addOne(int n) {
    n = n + 1;
    return n;
}
`),python:`def add_one(n):
    n = n + 1
    return n

n = 10
result = add_one(n)
print(n, result)`,java:l(`int n = 10;
int result = addOne(n);
System.out.println(n + " " + result);`,`    static int addOne(int n) {
        return n + 1;
    }`),javascript:`function addOne(n) {
  n = n + 1;
  return n;
}
var n = 10;
var result = addOne(n);
print(n, result);`},distinctions:u},{id:`arrays`,title:`给一组数据排好位置`,short:`数组与下标`,summary:`一组数据，用下标找到其中一项。`,goal:`理解从 0 开始的下标，区分位置与数值。`,minutes:12,question:`values[2] 对应第三个元素，它是多少？`,experiment:`将下标改为 0、1 或 4，观察读取到的值。`,explanation:`下标表示位置。长度为 5 的这组数据，有效下标从 0 到 4。超出范围时，各语言的行为并不相同，不能依赖越界结果。`,input:``,codes:{cpp:c(`vector<int> values = {5, 2, 8, 1, 6};
int chosen = values[2];
cout << chosen << "\\n";`),c:s(`int values[5] = {5, 2, 8, 1, 6};
int chosen = values[2];
printf("%d\\n", chosen);`),python:`values = [5, 2, 8, 1, 6]
chosen = values[2]
print(chosen)`,java:l(`int[] values = {5, 2, 8, 1, 6};
int chosen = values[2];
System.out.println(chosen);`),javascript:`var values = [5, 2, 8, 1, 6];
var chosen = values[2];
print(chosen);`},distinctions:u},{id:`traversal`,title:`沿着数组，逐项累加`,short:`遍历与累加`,summary:`把下标、当前元素和累计值联系起来。`,goal:`解释 total 每次更新时使用了哪一个元素。`,minutes:15,question:`5、2、8、1、6 的总和是多少？`,experiment:`修改数组中的一个值，预测总和增加了多少。`,explanation:`遍历让程序依次访问每一个元素。累计变量保留之前的结果，再加入当前元素。观察下标和 total，就能解释每一次更新。`,input:``,codes:{cpp:c(`vector<int> values = {5, 2, 8, 1, 6};
int total = 0;
for (int i = 0; i < static_cast<int>(values.size()); i++) {
    total += values[i];
}
cout << total << "\\n";`),c:s(`int values[5] = {5, 2, 8, 1, 6};
int total = 0;
for (int i = 0; i < 5; i++) {
    total += values[i];
}
printf("%d\\n", total);`),python:`values = [5, 2, 8, 1, 6]
total = 0
for value in values:
    total += value
print(total)`,java:l(`int[] values = {5, 2, 8, 1, 6};
int total = 0;
for (int value : values) total += value;
System.out.println(total);`),javascript:`var values = [5, 2, 8, 1, 6];
var total = 0;
for (var i = 0; i < values.length; i++) {
  total += values[i];
}
print(total);`},distinctions:u},{id:`practice`,title:`从输入走到结果`,short:`综合小实验`,summary:`把输入、变量和循环串成一个完整程序。`,goal:`用标准输入决定循环次数，解释最后的结果。`,minutes:18,question:`输入 4，程序会执行几次加一？`,experiment:`分别输入 0、1 和 5，比较轨迹中循环体执行的次数。`,explanation:`这一课组合之前的输入转换、变量初始化、条件判断和重复执行。先用小输入验证边界，再查看完整运行。`,input:`4`,codes:{cpp:c(`int target = 0;
if (!(cin >> target)) return 1;
int count = 0;
while (count < target) {
    count++;
}
cout << count << "\\n";`),c:s(`int target;
if (scanf("%d", &target) != 1) return 1;
int count = 0;
while (count < target) {
    count++;
}
printf("%d\\n", count);`),python:`target = int(input())
count = 0
while count < target:
    count += 1
print(count)`,java:l(`Scanner sc = new Scanner(System.in);
int target = sc.nextInt();
int count = 0;
while (count < target) count++;
System.out.println(count);`),javascript:`var target = parseInt(input(), 10);
var count = 0;
while (count < target) {
  count++;
}
print(count);`},distinctions:u}],ee=[`python`,`c`,`java`];function f(e,t,n,r){return{prompt:e,options:t,answer:n,explanation:r}}function p(e){return{...e,short:e.short||e.title,goal:e.goal||e.objectives.join(`；`),minutes:e.minutes||25,prerequisites:e.prerequisites||[],sections:e.sections.map(([e,t])=>({title:e,body:t})),input:e.input||``,view:e.view||`flow`,concept:e.concept||e.id,references:e.references||[]}}var m=(e,t=``)=>`#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n\n${t}\nint main(void) {\n${e.split(`
`).map(e=>`    `+e).join(`
`)}\n    return 0;\n}`,h=(e,t=``)=>`import java.util.*;\nimport java.io.*;\n\n${t}\npublic class Main {\n    public static void main(String[] args) throws Exception {\n${e.split(`
`).map(e=>`        `+e).join(`
`)}\n    }\n}`;function te(e){let t=(t,n,r)=>e===`c`?m(t):e===`python`?n:h(r),n=e=>e.map(([e,t,n])=>({name:e,input:t,output:n}));return{input:{id:`double-input`,revision:1,title:`读入，再翻倍`,task:`读入一个整数 n，输出 2 × n，末尾换行。输入不会包含提示词，输出也不要添加提示词。`,constraints:`−1000 ≤ n ≤ 1000；标准输入只有一个整数。`,starter:t(`int n = 0;
/* 读取 n，并输出它的两倍 */`,`# 读入整数 n，再输出两倍
`,`Scanner sc = new Scanner(System.in);
// 读取 n，并输出它的两倍`),solution:t(`int n = 0;
if (scanf("%d", &n) != 1) return 1;
printf("%d\\n", 2 * n);`,`n = int(input())
print(2 * n)`,`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
System.out.println(2 * n);`),hints:[`先把标准输入里的文本转换为整数。`,`乘法的结果交给输出语句，不要输出字符串 "2*n"。`],explanation:`输入、计算和输出是三个步骤。负数与零验证程序是否真的使用输入，而不是写死示例答案。`,cases:n([[`正整数`,`7`,`14
`],[`零`,`0`,`0
`],[`负整数`,`-8`,`-16
`]])},branch:{id:`grade-boundary`,revision:1,title:`在及格线做判断`,task:`读入整数成绩 score。大于等于 60 输出 pass，否则输出 retry。只输出这一行。`,constraints:`0 ≤ score ≤ 100；恰好 60 分属于 pass。`,starter:t(`int score = 0;
scanf("%d", &score);
/* 根据 score 判断 */`,`score = int(input())
# 根据 score 判断
`,`Scanner sc = new Scanner(System.in);
int score = sc.nextInt();
// 根据 score 判断`),solution:t(`int score = 0;
scanf("%d", &score);
if (score >= 60) printf("pass\\n");
else printf("retry\\n");`,`score = int(input())
if score >= 60:
    print("pass")
else:
    print("retry")`,`Scanner sc = new Scanner(System.in);
int score = sc.nextInt();
if (score >= 60) System.out.println("pass");
else System.out.println("retry");`),hints:[`先写清楚：60 分应该进入哪个分支？`,`条件需要包含等号。两个输出分支互斥。`],explanation:`59、60、100 覆盖不及格、临界值和高分，能暴露把 >= 写成 > 的问题。`,cases:n([[`低于边界`,`59`,`retry
`],[`恰好及格`,`60`,`pass
`],[`满分`,`100`,`pass
`]])},loops:{id:`sum-range`,revision:1,title:`累加 1 到 n`,task:`读入非负整数 n，使用循环计算从 1 到 n 的整数和。n 为 0 时输出 0。`,constraints:`0 ≤ n ≤ 30；练习目标是理解循环，页面只核对输出，不检查是否使用循环。`,starter:t(`int n = 0, total = 0;
scanf("%d", &n);
/* 累加 1 到 n */
printf("%d\\n", total);`,`n = int(input())
total = 0
# 累加 1 到 n
print(total)`,`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int total = 0;
// 累加 1 到 n
System.out.println(total);`),solution:t(`int n = 0, total = 0;
scanf("%d", &n);
for (int i = 1; i <= n; i++) total += i;
printf("%d\\n", total);`,`n = int(input())
total = 0
for i in range(1, n + 1):
    total += i
print(total)`,`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int total = 0;
for (int i = 1; i <= n; i++) total += i;
System.out.println(total);`),hints:[`累计值从 0 开始；每一轮把当前整数加入累计值。`,`检查终止边界是否把 n 自己算进去了，且 n=0 时循环应执行零轮。`],explanation:`循环不变式：处理 i 之前，total 保存 1 到 i−1 的和。循环结束后，已经包含 1 到 n 的全部项。`,cases:n([[`空区间`,`0`,`0
`],[`单项`,`1`,`1
`],[`一般输入`,`10`,`55
`]])},functions:{id:`absolute-function`,revision:1,title:`把绝对值封装为函数`,task:`补全 magnitude 函数，返回整数 x 的绝对值。主程序读入 x 并输出 magnitude(x)。`,constraints:`−1000 ≤ x ≤ 1000；不涉及最小有符号整数取负溢出。`,starter:e===`c`?m(`int x = 0;
scanf("%d", &x);
printf("%d\\n", magnitude(x));`,`int magnitude(int x) {
    /* 返回绝对值 */
    return 0;
}`):e===`python`?`def magnitude(x):
    # 返回绝对值
    return 0

x = int(input())
print(magnitude(x))`:`import java.util.*;
public class Main {
    static int magnitude(int x) {
        // 返回绝对值
        return 0;
    }
    public static void main(String[] args) {
        int x = new Scanner(System.in).nextInt();
        System.out.println(magnitude(x));
    }
}`,solution:e===`c`?m(`int x = 0;
scanf("%d", &x);
printf("%d\\n", magnitude(x));`,`int magnitude(int x) {
    if (x < 0) return -x;
    return x;
}`):e===`python`?`def magnitude(x):
    if x < 0:
        return -x
    return x

x = int(input())
print(magnitude(x))`:`import java.util.*;
public class Main {
    static int magnitude(int x) {
        if (x < 0) return -x;
        return x;
    }
    public static void main(String[] args) {
        int x = new Scanner(System.in).nextInt();
        System.out.println(magnitude(x));
    }
}`,hints:[`负数需要改变符号；非负数保持原值。`,`函数要 return 计算结果，主程序负责输出。`],explanation:`函数返回的是数据。把输入输出留在 main 或顶层，计算函数更容易独立测试和复用。`,cases:n([[`负数`,`-9`,`9
`],[`零`,`0`,`0
`],[`正数`,`12`,`12
`]])},traversal:{id:`maximum-negative`,revision:1,title:`在一组数中寻找最大值`,task:`输入第一行是 n，第二行是 n 个整数。输出最大值。必须正确处理全为负数的数组。`,constraints:`1 ≤ n ≤ 10；每个整数在 −1000 到 1000 之间。`,starter:t(`int n = 0, values[10] = {0};
scanf("%d", &n);
for (int i = 0; i < n; i++) scanf("%d", &values[i]);
/* 计算并输出最大值 */`,`n = int(input())
values = list(map(int, input().split()))
# 计算并输出最大值
`,`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int[] values = new int[n];
for (int i = 0; i < n; i++) values[i] = sc.nextInt();
// 计算并输出最大值`),solution:t(`int n = 0, values[10] = {0};
scanf("%d", &n);
for (int i = 0; i < n; i++) scanf("%d", &values[i]);
int best = values[0];
for (int i = 1; i < n; i++) if (values[i] > best) best = values[i];
printf("%d\\n", best);`,`n = int(input())
values = list(map(int, input().split()))
best = values[0]
for value in values[1:n]:
    if value > best:
        best = value
print(best)`,`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int[] values = new int[n];
for (int i = 0; i < n; i++) values[i] = sc.nextInt();
int best = values[0];
for (int i = 1; i < n; i++) if (values[i] > best) best = values[i];
System.out.println(best);`),hints:[`不要把最大值初始化为 0，全负数时会出错。`,`用第一个元素初始化 best，再从第二个元素开始比较。`],explanation:`处理第 i 个元素前，best 是已处理前缀的最大值。非空条件保证 values[0] 存在，空数组需要另行设计契约。`,cases:n([[`单元素`,`1
-5`,`-5
`],[`全为负数`,`4
-7 -2 -9 -3`,`-2
`],[`含重复最大值`,`5
3 8 2 8 0`,`8
`]])}}}var ne={output:{sections:[[`源代码、运行过程与输出`,`源代码描述要做什么，标准输出记录实际产生的文本。引号用于界定字符串，通常不会成为输出的一部分。先观察程序入口，再沿执行顺序找到输出语句，可以避免把编辑器中的文字都误认为运行结果。`],[`换行是数据的一部分`,`换行符让下一次输出从新的一行开始。控制台中的空格、大小写和顺序同样有意义。修改问候语之后必须重新运行；旧轨迹对应上一次源码，不能用来说明已经修改的程序。`]],pitfalls:[`把变量名放在引号里会输出名字本身，而非它保存的值。`,`屏幕上看到代码，不代表这段代码已经执行。`],observe:[`运行到输出前，控制台仍为空；跨过输出语句后出现文本。`],quiz:[f(`引号在这里主要起什么作用？`,[`界定字符串`,`让程序重复执行`,`表示标准输入`],0,`引号界定源代码中的字符串字面量，输出内容通常不包含界定用的引号。`),f(`修改问候语后应如何查看新结果？`,[`继续看旧轨迹`,`重新运行程序`,`只切换变量面板`],1,`每一次轨迹与当次源码和输入绑定；修改源码后必须重新执行才能生成相应结果。`)],expected:`Hello, Astra!
`,prerequisites:[]},input:{sections:[[`先有文本，再有数值`,`标准输入是送给程序的数据流，输入数字字符不等于程序已经得到整数。读取操作需要按约定完成转换，再把得到的值保存下来。把读取、计算和输出分成三步，更容易定位问题究竟出在哪里。`],[`输入也需要契约`,`示例约定输入是一个有效整数。真正的应用还需要处理空输入、格式错误与越界；本课程后面的异常或文件章节会继续讨论。测试时至少更换一次输入，确认输出确实依赖输入而不是固定答案。`]],pitfalls:[`输入 18 与字符串 "18" 具有不同的类型语义。`,`自动检查不需要“请输入数字”之类提示词。`],observe:[`将标准输入换成 27，找到读取后变量的第一次出现。`],quiz:[f(`输入整数后，接下来通常先做什么？`,[`忽略输入`,`按语言规则读取和转换`,`把旧输出当作新值`],1,`输入原本是文本，需要读取并按预期规则转换，后续算术才能使用正确的数值。`),f(`怎样确认程序真正读取了输入？`,[`只运行默认值`,`更换输入并核对变量和输出`,`只观察源代码颜色`],1,`独立更换输入并检查实际变量状态，能识别写死答案以及读取失败等问题。`)],expected:`18
`,prerequisites:[`output`]},types:{sections:[[`名称、值与类型`,`变量的名字便于引用数据，值是当前保存或绑定的数据，类型限制允许进行的操作。不要把这三件事混在一起。追踪时同时查看类型和值，才能理解为什么同样的运算符可能表现出不同语义。`],[`初始化与后续修改`,`第一次给变量建立确定值称为初始化，后面的赋值会改变它保存或绑定的值。先初始化再读取是重要习惯。整数除法、浮点误差和取值范围会在本语言的运算章节继续展开，不能只凭显示格式判断底层类型。`]],pitfalls:[`变量名不是字符串内容。`,`浮点数的十进制显示不保证内部能够精确表示该小数。`],observe:[`找到 age 与 height 初始化后的类型和值。`],quiz:[f(`类型主要影响什么？`,[`允许的操作和表示规则`,`变量名的长度`,`执行按钮的颜色`],0,`类型参与决定数据的表示与允许的运算，不能只凭变量名来推断这些规则。`),f(`读取变量前为什么要初始化？`,[`保证有确定的初始状态`,`让所有变量变成字符串`,`避免一切运行错误`],0,`初始化提供明确的起点；它不是万能检查，但能避免依赖不确定或尚未绑定的值。`)],expected:`18 1.65
`,prerequisites:[`input`]},sequence:{sections:[[`赋值使用此刻的值`,`赋值先计算右侧表达式，再更新左侧目标。score = score + 3 不是数学方程，而是读取旧 score、加三、保存新值的动作。将每一步写成状态表，就能解释程序为何得到当前结果。`],[`交换顺序会改变依赖`,`语句之间可能存在数据依赖。一条语句读取另一条刚写入的值时，交换它们就可能改变结果。编辑后使用两次运行对照，比较同一输入下最终状态与输出，避免仅凭直觉判断顺序无关。`]],pitfalls:[`赋值符号不是相等关系的陈述。`],observe:[`在加三之前与之后各暂停一次，比较 score。`],quiz:[f(`score=2 后执行 score=score+3，结果是？`,[`2`,`3`,`5`],2,`先读取旧值 2，再计算 2+3，最后用 5 更新 score，赋值不会保留两个并列值。`),f(`两条语句能否随意调换？`,[`总可以`,`总不可以`,`需检查数据依赖`],2,`是否可以调换取决于读写依赖与副作用；后面依赖前面结果时，顺序可能影响行为。`)],expected:`5
`,prerequisites:[`types`]},branch:{sections:[[`条件选择一条路径`,`if 先求条件，成立时执行对应分支，否则进入 else。一次判断只选择实际路径，不会把两边都执行一遍。回放时关注条件所使用的当前值，再看程序实际到达哪一条输出语句。`],[`用临界值检验逻辑`,`及格条件是大于等于 60，最有用的测试是 59、60、61。普通值往往无法暴露比较符号的错误。多个区间还要检查分支的覆盖和互斥，避免同一个值被遗漏，或者被不恰当的早期分支截获。`]],pitfalls:[`把 > 写成 >= 或反过来，都会改变临界值。`],observe:[`依次输入或修改为 59、60、61，解释各自进入的分支。`],quiz:[f(`及格线为 60，哪个条件合适？`,[`score > 60`,`score >= 60`,`score == 100`],1,`需要把恰好 60 分包含在及格区间内，>= 表示大于或等于，边界不会被遗漏。`),f(`一个 if-else 判断会执行几个分支？`,[`两个都执行`,`根据条件选择一个`,`总是第一个`],1,`if-else 根据条件选择互斥路径，未选择的分支不会在该次判断中执行。`)],expected:`pass
`,prerequisites:[`sequence`]},loops:{sections:[[`把一次变化放入重复结构`,`while 每轮执行前检查条件；若一开始就为假，循环体一次也不执行。计数变量、继续条件与每轮更新共同决定进度。只关注循环体而忽视更新，容易写出永远无法结束的循环。`],[`边界与循环不变式`,`循环不变式是在每轮边界处保持的事实。本例 count 表示已经完成的次数，进入下一轮之前检查它是否仍小于目标。结束时条件为假并不表示程序出错，而是说明已经达到停止边界。`]],pitfalls:[`遗漏更新可能导致死循环。`,`条件里的 <= 与 < 会让执行次数相差一轮。`],observe:[`检查初始判断、最后一次进入与最终失败的判断。`],quiz:[f(`while 初始条件为假时执行几轮？`,[`0`,`1`,`无限轮`],0,`while 在进入循环体之前检查条件，因此初始条件为假时，循环体执行零轮。`),f(`count 从 0 每轮加一，条件 count<3，结束时为？`,[`2`,`3`,`4`],1,`count 等于 3 时再次判断为假，循环退出；退出状态不需要再减回最后一个进入值。`)],expected:`3
`,prerequisites:[`branch`]},nested:{sections:[[`每次外循环都重新进入内循环`,`嵌套循环包含两层独立的控制状态。每次外层推进，内层通常从它自己的初始化位置重新开始。把执行顺序列为坐标对 (i,j)，比单看两条 for 更容易理解二维表、矩阵与组合枚举。`],[`复杂度来自重复次数`,`若外层执行 m 轮且每轮内层固定执行 n 轮，核心操作共执行 m×n 次。若内层边界依赖外层，不能直接套固定乘积，例如三角形枚举需要求和。计数实验是理解时间复杂度的第一步。`]],pitfalls:[`内循环的初始化位置决定它是否每轮重置。`],observe:[`将外层和内层计数配对，确认六次累加分别发生在哪里。`],quiz:[f(`3 轮外循环，每轮 2 次内循环，总计？`,[`3`,`5`,`6`],2,`每次外层都完整执行两次内层，总次数为 3×2=6，而不是把两个次数相加。`),f(`内层次数依赖外层时如何计算？`,[`总是直接相乘`,`按每轮次数求和`,`只看最后一轮`],1,`边界随外层变化时，需要分别统计每轮内层次数并求和，不能套固定次数乘积。`)],expected:`6
`,prerequisites:[`loops`]},functions:{sections:[[`参数进入，返回值离开`,`函数把一项任务封装起来。调用时由实参为形参提供初始值，函数体在自己的调用上下文中执行。return 先计算结果，再把它交回调用表达式；调用方可以继续赋值、计算或输出。`],[`调用栈与职责划分`,`嵌套调用需要记住返回位置，因此执行过程中会出现调用栈。每次调用有自己的局部状态。把计算函数与输入输出分开，能够用多个参数独立测试计算规则，也能让同一计算在不同界面中复用。`]],pitfalls:[`在函数中打印不等于返回一个可供调用方使用的结果。`],observe:[`从 twice(n) 步入，检查 value，再观察返回后 result 的第一次出现。`],quiz:[f(`return 的主要作用是什么？`,[`把结果交回调用处并结束本次调用`,`总是打印一行`,`创建全局变量`],0,`return 结束当前调用并把计算结果交给调用表达式，打印属于另一种副作用。`),f(`函数两次调用的局部状态是否天然共用？`,[`总共用`,`每次调用独立，外部共享对象另论`,`取决于函数名长度`],1,`每次调用有自己的局部上下文；共享对象或静态状态是需要另外识别的数据关系。`)],expected:`6
`,prerequisites:[`nested`]},scope:{sections:[[`同名并不意味着同一变量`,`函数内部与调用方可以存在同名的局部名称。解析一个名称时要看它所处的作用域。追踪图用不同的调用编号区分状态，不应把两个 n 合并成一条变量变化。作用域与对象生存期相关，但不是同一个概念。`],[`重新赋值与修改共享数据`,`本例对整数形参重新赋值，调用方的 n 不会自动变成新值。后面的指针或对象引用课程会展示另一种情形：不同名称可以访问同一对象，修改对象内容能被其他名称观察到。先分清改名称还是改对象。`]],pitfalls:[`调用方是否受影响，要区分重新赋值与共享对象修改。`],observe:[`比较函数内 n 和调用方 n，说明 10 与 11 为什么同时存在。`],quiz:[f(`本例函数内 n 加一后，调用方 n 是？`,[`10`,`11`,`未定义`],0,`本例针对整数形参进行重新赋值，调用方的 n 仍保存 10，返回值另由 result 接收。`),f(`同名变量能否只靠名字认作同一个？`,[`能`,`不能，还需要作用域信息`,`只看是否相邻`],1,`名称必须连同作用域或调用身份一起解释，否则同名局部变量会被错误合并。`)],expected:`10 11
`,prerequisites:[`functions`]},arrays:{sections:[[`用下标描述位置`,`数组或列表把多个元素组织起来，下标用于定位元素。本例从零开始，因此第三个元素对应下标 2。长度是元素数量，最后一个非负有效下标是长度减一。要把位置与当前位置保存的值分开理解。`],[`读取、修改与边界`,`读取元素不会自动改变它；给某个元素赋值只更新该位置，其他位置通常保持原值。访问边界由语言规则决定，C 的越界属于未定义行为，托管语言通常抛出异常，不能把它当成合法的查找方式。`]],pitfalls:[`长度不是最后一个下标。`,`Python 列表与 C 数组不是完全相同的存储模型。`],observe:[`读取 values[2] 后修改一个元素，检查其他位置是否改变。`],quiz:[f(`长度为 5 时，最后一个非负有效下标是？`,[`4`,`5`,`6`],0,`从 0 开始的五个位置依次为 0、1、2、3、4，因此最后一个非负下标是 4。`),f(`values[2] 中 2 表示什么？`,[`元素数量`,`位置下标`,`元素一定等于 2`],1,`下标描述要访问的位置，不表示元素本身的值，也不等于整个容器的长度。`)],expected:`8
`,prerequisites:[`types`]},traversal:{sections:[[`把容器与控制流程连接`,`遍历依次访问元素。累计变量 total 保留已经处理部分的结果，每次再加入当前元素。回放时同时观察当前下标或元素、旧 total 与新 total，能清楚解释最后的总和是怎样形成的。`],[`选择正确的初始状态`,`求和通常从零开始，因为零是加法的单位元。求最大值则不能照搬零作初始值，全负数会得到错误结果。算法的初始状态必须与任务和输入契约一致，非空数组可以用首元素初始化最大值。`]],pitfalls:[`求和的初始值与求最大值的初始值不一定相同。`],observe:[`检查每轮 total 的增量是否恰好等于当前元素。`],quiz:[f(`求和 total 通常初始化为？`,[`0`,`任意大数`,`最后一项`],0,`零是加法单位元，累计之前还没有处理任何元素，空前缀的和应为零。`),f(`全负数组求最大值，best=0 有什么问题？`,[`没有问题`,`可能输出不存在的 0`,`会自动变成首元素`],1,`所有元素都小于 0 时，best 不会更新，结果 0 并不是数组中的最大值。`)],expected:`22
`,prerequisites:[`arrays`,`loops`]},practice:{sections:[[`从契约拆解小程序`,`先明确输入、输出和允许范围，再拆成读取、初始化、重复和输出。本例只在 count 小于 target 时前进，因此非负输入结束时 count 等于 target。分析成立条件比记住一段代码更有价值。`],[`用边界和状态检验解释`,`输入零验证循环可执行零次，输入一验证第一步，普通值验证多轮重复。程序输出正确还不够，应能说明每个状态的含义。后面的综合项目会把这一方法扩展到函数、容器与对象协作。`]],pitfalls:[`默认示例通过不代表边界输入也正确。`],observe:[`分别运行 0、1、5，解释循环次数与退出状态。`],quiz:[f(`为什么要测试 target=0？`,[`它检查循环零次的边界`,`它一定最耗时`,`它能覆盖所有整数`],0,`零能检验初始化和进入条件是否正确，尤其能发现本不应执行却执行了一次的错误。`),f(`一次示例通过意味着什么？`,[`证明所有输入正确`,`只确认了这组输入的实际行为`,`不必再阅读代码`],1,`有限示例只能提供对应输入的证据，仍需契约分析、边界测试与对算法过程的解释。`)],expected:`4
`,prerequisites:[`input`,`loops`]}},g={c:{output:`main 是可执行程序的入口。stdio.h 提供 printf 的声明，格式串描述输出，\\n 写出换行。后续用 %d 和 %.2f 输出整数与小数时，要让转换说明和实参类型匹配。`,input:`scanf 的 %d 指定读取一个 int，&age 提供写入位置。返回 1 才说明本次完成了一个转换。读取失败时提前返回，避免使用尚未初始化的 age。取地址和指向关系会在指针课展开。`,types:`int 表示整数，double 表示双精度浮点数。这里的 %.2f 只控制显示位数。改成 %.4f 后底层数值仍相同。先声明对象的类型，再检查初始化和每一次转换。`,sequence:`赋值会更新 score 对象所在的存储。回放的执行前帧读取旧值，执行后帧显示新值。在后续表达式中使用 score 时，读取的是写入之后的状态。`,branch:`C 将零解释为假，将非零解释为真。比较 score >= 60 的结果是整数 0 或 1。给每个分支加上花括号，可清楚看到哪些语句属于选择路径。`,loops:`while 的条件先于循环体执行。若使用 for，可把初始化、条件和更新放在头部。两种写法都需要能说明每轮如何接近退出条件。`,nested:`内层 for 声明的 j 在这一轮内层循环结束时退出作用域。下一次进入内层 for 会建立新的 j，哪怕运行时复用了之前的地址。`,functions:`twice 的形参 value 是独立的 int 对象，调用时取得 n 的值副本。声明说明参数与返回类型，函数定义提供计算。之后会用指针参数说明怎样访问调用方对象。`,scope:`函数形参和块内自动对象各自有名称作用域。退出函数后，普通自动对象的生存期结束。仅仅在不同函数中写下同名 n，无法把它们合成一个存储位置。`,arrays:`int values[5] 在同一个数组对象中存五个连续的 int。当前作用域的 sizeof values 可以取得整个数组大小。访问 values[5] 越过了最后一个元素。`,traversal:`i 是下标，values[i] 是该位置的值。循环以 i<5 限定有效下标。将数组交给其他函数时，还需传入长度或给出明确边界。`,practice:`把输入失败、零次迭代和多次迭代分别验证。scanf 返回值决定是否可以继续，count 的初始值和每轮更新决定正常输入的输出。`},python:{output:`脚本通常按顶层语句顺序执行。print 负责把值转换为可读文本，多个实参默认用空格隔开，末尾默认换行。修改 sep 和 end 可观察这两个格式规则。`,input:`input() 读入一行并返回 str，int() 按整数语法转换。前后空白可被接受，空文本和不合法数字会触发 ValueError。输入框每行会交给程序一次相应的读取。`,types:`名称绑定到对象，类型属于对象。可以把同一个名称重新绑定到另一类型的对象。用 type 查看当前绑定的对象类型，再决定如何进行运算或转换。`,sequence:`score = score + 3 先根据旧绑定计算新整数，再更新 score 的绑定。整数对象不可变。后续的列表例子会比较重新绑定和就地修改的差别。`,branch:`条件后的冒号开始一个代码块，缩进决定分支所包含的语句。真假判断也适用于空容器、零和 None，使用时要分清这些值在业务中的含义。`,loops:`这里用 while 观察条件与更新。对固定次数遍历，range(3) 给出 0、1、2。for 会逐项取值，range 的停止边界本身不会被取到。`,nested:`每次进入内层 for 都会重新遍历相应的 range。循环语句通常不会创建函数局部作用域。看最后一帧时，仍可看到本例的 i 和 j 绑定。`,functions:`def 执行时将名称绑定到函数对象。调用把实参绑定给形参。return 把结果交还给调用者，函数运行到末尾且没有显式返回值时会返回 None。`,scope:`函数内的赋值通常建立局部绑定。需要重新绑定外层函数名称时用 nonlocal，模块层名称用 global。通过参数修改共享列表则属于对象状态变化。`,arrays:`本例使用 Python 列表 list。它支持负下标、可增长，并持有元素的对象引用。values[-1] 取最后一项，超出有效下标会抛 IndexError。`,traversal:`for value in values 直接取得元素。若同时需要位置，可用 enumerate。遍历期间直接删除列表元素可能移动后续位置，筛选可另建结果列表。`,practice:`输入先由 int 转换为目标次数，循环负责推进计数。当前任务只规定有效整数，非法文本会产生转换异常。后续异常课会说明怎样处理这条路径。`},java:{output:`程序从 public static void main(String[] args) 进入。println 输出并结束当前行，print 继续写在当前行。源码中的类名、方法签名与调用表达式各承担不同职责。`,input:`Scanner 按分隔规则读取输入，nextInt() 转换下一个整数记号。用 nextLine() 读取整行时要留意当前行剩余内容。空输入与格式错误会走不同的异常路径。`,types:`int 与 double 是基本类型。局部变量使用前要通过编译器的明确赋值检查。对象字段具有默认初始化规则，声明引用变量仍需区分是否已创建对象。`,sequence:`依次观察读取旧 score、计算右侧表达式和更新局部变量。赋值后，后续使用 score 的语句获得新值。编译器还会检查表达式结果能否赋给声明类型。`,branch:`if 条件必须得到 boolean。score >= 60 是比较表达式，其结果选定一个分支。把条件当作布尔值阅读，再跟踪语句，可以解释临界值如何通过判断。`,loops:`while 要求布尔条件，每轮先判断再执行。for 把计数器的初始化、继续条件与更新放在一起。改变小于号是否含等号，会影响最后一轮和结束值。`,nested:`在 for 头部声明的 j 只在对应循环结构中使用。每次外层推进，内层初始化重新执行。用 i、j 的组合解释每次更新，可为二维数组遍历做准备。`,functions:`twice 是 Main 的静态方法，main 可直接调用它。方法签名和返回类型约束调用，实例方法还需要一个接收者。后续类课程会观察 this 和对象状态。`,scope:`方法中的参数与局部变量属于本次调用。Java 按值传参，整数参数取得基本值副本，引用参数取得引用值副本。引用共享的影响在对象课程中观察。`,arrays:`int[] 是数组引用类型，数组长度在创建时确定，可用 length 读取。越界会抛 ArrayIndexOutOfBoundsException。复制引用变量会共享原数组对象。`,traversal:`增强 for 可直接读取每一项，无需手写下标。当前元素是基本类型 int，给循环变量重新赋值不会改原数组。需要就地修改时，可用有效下标写回。`,practice:`main 负责读取目标次数并安排流程。把计算移到独立静态方法后，可以对零、边界和一般输入单独检查，也能更清楚地区分输入错误与计算错误。`}};function _(e){let t=te(e);return d.map(n=>{let r=ne[n.id],i=e===`python`&&n.id===`arrays`;return p({id:n.id,title:i?`列表、下标与元素`:n.title,short:i?`列表与下标`:n.short,summary:n.summary,goal:n.goal,minutes:Math.max(15,n.minutes),prerequisites:r.prerequisites,objectives:[n.goal,n.distinctions[e]],sections:[...r.sections,[`本课的语言规则`,g[e][n.id]]],pitfalls:r.pitfalls,observe:r.observe,experiment:n.experiment,code:n.codes[e],input:n.input,expectedOutput:r.expected,quiz:r.quiz,exercise:t[n.id],references:[{title:e===`c`?`GNU C 入门与参考`:e===`python`?`Python 3.14 官方教程`:`dev.java 官方语言教程`,url:e===`c`?`https://www.gnu.org/software/c-intro-and-ref/manual/c-intro-and-ref.html`:`https://`+(e===`python`?`docs.python.org/3.14/tutorial/`:`dev.java/learn/language/`)}]})})}var re={"pointer-parameters":{id:`pointer-swap`,revision:1,title:`用指针交换输入的两个整数`,task:`读取两个整数 a、b，补全 swap(int*,int*)，交换后输出 a b。主程序必须调用 swap；自测核对实际输出，不以关键词判断实现。`,constraints:`−1000 ≤ a,b ≤ 1000；允许两值相同。`,starter:m(`int a = 0, b = 0;
scanf("%d %d", &a, &b);
swap(&a, &b);
printf("%d %d\\n", a, b);`,`void swap(int *a, int *b) {
    /* 修改指针所指的两个整数 */
}`),solution:m(`int a = 0, b = 0;
scanf("%d %d", &a, &b);
swap(&a, &b);
printf("%d %d\\n", a, b);`,`void swap(int *a, int *b) {
    int saved = *a;
    *a = *b;
    *b = saved;
}`),hints:[`先保存 *a，而不是保存 a。`,`交换的是目标对象的值；交换本地指针变量不会改调用方整数。`],explanation:`参数复制地址值，解引用定位调用方两个整数。临时整数保留第一次写入之前的原值。`,cases:[{name:`普通正数`,input:`2 9`,output:`9 2
`},{name:`一正一负`,input:`-3 7`,output:`7 -3
`},{name:`相等值`,input:`5 5`,output:`5 5
`}]},strings:{id:`digit-count`,revision:1,title:`扫描字符，统计数字`,task:`读取一行长度不超过 60 的 ASCII 文本，输出其中数字字符 0 到 9 的数量。空行输出 0。`,constraints:`输入可含空格；换行不算内容；使用容量 64 的字符数组。`,starter:m(`char text[64] = {0};
if (!fgets(text, sizeof text, stdin)) return 1;
int count = 0;
/* 遍历到零字符并统计数字 */
printf("%d\\n", count);`),solution:m(`char text[64] = {0};
if (!fgets(text, sizeof text, stdin)) return 1;
int count = 0;
for (size_t i = 0; text[i] != '\\0'; i++) {
    if (text[i] >= '0' && text[i] <= '9') count++;
}
printf("%d\\n", count);`),hints:[`以零字符作为遍历结束条件。`,`ASCII 数字字符从 '0' 到 '9' 连续排列；两个边界都要包含。`],explanation:`fgets 保留可容纳的换行，换行不是数字因此不会被计数。空行、全数字和混合文本共同检查边界与筛选条件。`,cases:[{name:`空行`,input:`
`,output:`0
`},{name:`数字边界`,input:`0123456789
`,output:`10
`},{name:`混合文本`,input:`A1 B20 x9!
`,output:`4
`}]},"dynamic-memory":{id:`heap-average`,revision:1,title:`动态数组的总和`,task:`输入 n，随后输入 n 个整数；动态申请数组，读取后求和输出，最后释放。n=0 时输出 0，不申请零大小存储。`,constraints:`0 ≤ n ≤ 10；每个值在 −100 到 100。自测核对结果，仍需在内存视图中检查释放。`,starter:m(`int n = 0;
scanf("%d", &n);
/* 处理 n=0，再申请、读取、求和、释放 */`),solution:m(`int n = 0;
scanf("%d", &n);
if (n == 0) { printf("0\\n"); return 0; }
int *values = malloc((size_t)n * sizeof *values);
if (!values) return 1;
int total = 0;
for (int i = 0; i < n; i++) {
    scanf("%d", &values[i]);
    total += values[i];
}
printf("%d\\n", total);
free(values);`),hints:[`零元素单独处理，避免依赖零大小申请规则。`,`申请 n*sizeof *values，检查成功后才能写入；每条正常路径都应结束所有权。`],explanation:`动态数组大小由运行时输入决定。按顺序写入并累加，读取前已经初始化；释放是资源契约的一部分，不能只根据输出判断。`,cases:[{name:`空数组`,input:`0`,output:`0
`},{name:`单个负数`,input:`1
-5`,output:`-5
`},{name:`正负混合`,input:`4
3 -2 7 0`,output:`8
`}]},"linked-list":{id:`linked-total`,revision:1,title:`沿链表求和并清理`,task:`读取 n 和 n 个整数，创建单向链表，输出节点值之和，最后释放全部节点。可以头插，求和不依赖输入顺序。`,constraints:`0 ≤ n ≤ 8；每值在 −100 到 100。`,starter:m(`int n = 0;
scanf("%d", &n);
struct Node *head = NULL;
/* 创建、遍历、释放链表 */`,`struct Node { int value; struct Node *next; };`),solution:m(`int n = 0;
scanf("%d", &n);
struct Node *head = NULL;
for (int i = 0; i < n; i++) {
    int value = 0;
    scanf("%d", &value);
    struct Node *node = malloc(sizeof *node);
    if (!node) {
        while (head) { struct Node *next = head->next; free(head); head = next; }
        return 1;
    }
    node->value = value;
    node->next = head;
    head = node;
}
int sum = 0;
for (struct Node *p = head; p; p = p->next) sum += p->value;
printf("%d\\n", sum);
while (head) {
    struct Node *next = head->next;
    free(head);
    head = next;
}`,`struct Node { int value; struct Node *next; };`),hints:[`头插时，先让新节点 next 指向旧 head，再更新 head。`,`清理先保存 next；不要 free(head) 后再访问 head->next。`],explanation:`头插让逻辑顺序反转，但求和不受影响。空链表、单节点和多个正负节点分别检验终止条件、连接和累计。`,cases:[{name:`空链表`,input:`0`,output:`0
`},{name:`单节点`,input:`1
7`,output:`7
`},{name:`多个节点`,input:`4
2 -3 5 1`,output:`5
`}]},"function-pointers":{id:`callback-transform`,revision:1,title:`用回调选择平方或立方`,task:`输入 mode 和 x。mode 为 2 时输出 x 的平方，为 3 时输出立方。通过类型为 int(*)(int) 的回调选择运算。`,constraints:`mode∈{2,3}，−10 ≤ x ≤ 10；自测不会检查代码关键词。`,starter:m(`int mode = 0, x = 0;
scanf("%d %d", &mode, &x);
/* 选择函数指针并输出调用结果 */`,`int square(int x) { return x * x; }
int cube(int x) { return x * x * x; }`),solution:m(`int mode = 0, x = 0;
scanf("%d %d", &mode, &x);
int (*operation)(int) = mode == 2 ? square : cube;
printf("%d\\n", operation(x));`,`int square(int x) { return x * x; }
int cube(int x) { return x * x * x; }`),hints:[`两个函数签名应兼容。`,`选择函数的地址，而不是先计算某一个固定函数的结果。`],explanation:`选择策略与执行策略分开。回调变量保存可调用目标，实际参数在调用时传入。`,cases:[{name:`负数平方`,input:`2 -3`,output:`9
`},{name:`正数立方`,input:`3 4`,output:`64
`},{name:`零`,input:`3 0`,output:`0
`}]},"file-records":{id:`file-sum`,revision:1,title:`统计虚拟数据文件`,task:`从虚拟文件 numbers.txt 逐行读取整数，输出总和。文件可能为空。不要从标准输入读取这些数。`,constraints:`每行一个合法整数；最多 10 行，每值绝对值不超过 100。`,starter:m(`FILE *file = fopen("numbers.txt", "r");
if (!file) return 1;
/* 按行读取、求和、关闭 */`),solution:m(`FILE *file = fopen("numbers.txt", "r");
if (!file) return 1;
char line[64] = {0};
long sum = 0;
while (fgets(line, sizeof line, file)) sum += strtol(line, NULL, 10);
fclose(file);
printf("%ld\\n", sum);`),hints:[`fgets 返回 NULL 表示当前没有读到下一行。`,`每次测试有独立虚拟文件；空文件的和应为 0。`],explanation:`本题输入契约已保证整数合法，重点是文件循环与资源关闭。更宽松的真实输入还需结束指针和范围校验。`,cases:[{name:`空文件`,input:``,files:{"numbers.txt":``},output:`0
`},{name:`单行`,input:``,files:{"numbers.txt":`-8
`},output:`-8
`},{name:`多行`,input:``,files:{"numbers.txt":`10
-2
7
`},output:`15
`}]},project:{id:`score-report`,revision:1,title:`输出一份成绩统计`,task:`读入 n 和 n 个成绩，输出最低分、最高分与两位小数的平均分，三个结果以一个空格分隔。`,constraints:`1 ≤ n ≤ 10；0 ≤ 成绩 ≤ 100；格式例：60 100 80.00。`,starter:m(`int n = 0, values[10] = {0};
scanf("%d", &n);
for (int i = 0; i < n; i++) scanf("%d", &values[i]);
/* 统计并输出 */`),solution:m(`int n = 0, values[10] = {0};
scanf("%d", &n);
for (int i = 0; i < n; i++) scanf("%d", &values[i]);
int low = values[0], high = values[0], total = 0;
for (int i = 0; i < n; i++) {
    total += values[i];
    if (values[i] < low) low = values[i];
    if (values[i] > high) high = values[i];
}
printf("%d %d %.2f\\n", low, high, (double)total / n);`),hints:[`最小值与最大值都从首元素开始。`,`平均值使用 (double)total/n；用 %.2f 控制两位小数显示。`],explanation:`非空契约保证首元素存在。单元素检查初始化，一般输入检查统计，零分检查数值边界。`,cases:[{name:`单人成绩`,input:`1
75`,output:`75 75 75.00
`},{name:`普通班组`,input:`3
60 80 100`,output:`60 100 80.00
`},{name:`含零分`,input:`4
0 1 2 3`,output:`0 3 1.50
`}]}},v=[p({id:`operators`,title:`运算、逻辑与短路求值`,summary:`区分整数除法、比较和逻辑运算，理解求值是否发生。`,prerequisites:[`types`],objectives:[`解释整数除法与余数`,`利用短路保护后续操作`],sections:[[`运算由操作数类型共同决定`,`两个整数相除得到整数商，小数部分向零截断；余数与被除数同号。需要小数结果时应在除法发生之前转换操作数。括号可以表达分组，但不要把优先级、结合方向与操作数求值顺序混为一谈。`],[`短路是控制流程的一部分`,`&& 左侧为假时不求右侧，|| 左侧为真时不求右侧。可以先检查分母不为零，再执行除法。按位 & 与逻辑 && 具有不同语义；避免在同一表达式中无序地多次修改同一个标量对象。`]],pitfalls:[`7/2 已经得到整数 3，再转为 double 也无法恢复 3.5。`,`不要编写 i++ + i++ 这样的未定义行为。`],observe:[`对比整除与浮点除法，观察短路后的 safe。`],experiment:`把 denominator 改为 0，说明右侧除法为什么不执行。`,code:m(`int numerator = 7;
int quotient = numerator / 2;
double exact = (double)numerator / 2;
int denominator = 2;
int safe = denominator != 0 && numerator / denominator > 2;
printf("%d %.1f %d\\n", quotient, exact, safe);`),expectedOutput:`3 3.5 1
`,quiz:[f(`得到 7 除以 2 的小数结果应写？`,[`(double)(7/2)`,`(double)7/2`,`7/2`],1,`转换必须发生在除法之前；整数除法已丢弃小数部分，事后转换不会补回它。`),f(`0 && expression 中右侧会执行吗？`,[`会`,`不会`,`只执行一半`],1,`逻辑与具有短路规则，左侧为假时结果已确定，因此不会计算右侧表达式。`)]}),p({id:`conversions`,title:`类型转换与数值边界`,summary:`识别整数提升、显式转换和取值范围，减少“看似正确”的数值错误。`,prerequisites:[`operators`],objectives:[`区分转换与显示格式`,`认识有符号溢出及无符号回绕`],sections:[[`转换可能丢失信息`,`从浮点数转换为整数会向零截断，前提是截断后的值能由目标整数类型表示；超出范围不可依赖。由窄类型转换为宽类型通常用于扩大可表达范围，但混合有符号和无符号运算可能使比较产生意外结果。`],[`范围是接口的一部分`,`C 不保证 int 在所有平台都是相同位数，标准头 limits.h 描述实现范围。本工作台的地址来自 Wasm 线性内存。无符号运算按模回绕，而有符号整数溢出属于未定义行为，不能当成可移植算法。`]],pitfalls:[`printf 的格式必须与实参类型匹配。`,`不应把当前浏览器中的类型大小假定为所有 C 平台的规则。`],observe:[`检查转换前后的类型与值，验证 -3.8 向零截断。`],experiment:`将 x 改成 3.8，再改成 -0.8，观察截断方向。`,code:m(`double x = -3.8;
int whole = (int)x;
unsigned int u = 0;
u = u - 1;
printf("%d %d\\n", whole, u > 0);`),expectedOutput:`-3 1
`,quiz:[f(`(int)-3.8 的结果为？`,[`-4`,`-3`,`4`],1,`在结果可表示的条件下，浮点转整数丢弃小数部分，方向是向零而不是向下取整。`),f(`有符号整数溢出可以用作稳定回绕吗？`,[`可以`,`不可以，属于未定义行为`,`等同于字符串拼接`],1,`C 的有符号整数溢出是未定义行为；无符号模运算的规定不能直接套到有符号整数。`)]}),p({id:`switch`,title:`switch、多分支与贯穿`,summary:`为离散选项选择路径，理解 case 标签与 break。`,prerequisites:[`branch`],objectives:[`编写离散整数分支`,`识别贯穿执行与 default`],sections:[[`标签决定从哪里进入`,`switch 计算一次控制表达式，再跳到匹配的 case；无匹配时可进入 default。case 是进入位置的标签，不是自动隔离的独立分支。传统 C switch 主要处理整数或枚举值，不能直接以字符串内容作为 case。`],[`break 决定在哪里离开`,`若一个 case 的末尾没有 break 或 return，控制会继续执行后续代码，这称为贯穿。有意共享处理逻辑可以利用它，但必须让意图清晰。没有匹配且没有 default 时，整个 switch 不执行任何分支。`]],pitfalls:[`漏写 break 可能导致多个分支连续执行。`],observe:[`定位 case 2 进入点，再观察 break 后跳到哪里。`],experiment:`移除 case 2 后的 break，预测输出是否包含 default 的变化。`,code:m(`int option = 2;
int credits = 0;
switch (option) {
case 1: credits = 1; break;
case 2: credits = 3; break;
default: credits = -1;
}
printf("%d\\n", credits);`),expectedOutput:`3
`,quiz:[f(`C 的 case 执行后默认会自动退出 switch 吗？`,[`会`,`不会，需要显式控制`,`只看缩进`],1,`case 只是标签，执行会继续向下；需要 break、return 等控制转移来结束当前路径。`),f(`default 的作用是？`,[`处理无 case 匹配的情况`,`每次都先执行`,`只声明变量`],0,`default 是无匹配标签时的备选入口，没有它也合法，但无匹配时不会执行分支代码。`)]}),p({id:`break-continue`,title:`提前终止与跳过本轮`,summary:`用 break 和 continue 组织搜索、筛选与循环退出。`,prerequisites:[`loops`],objectives:[`区分退出循环与跳过本轮`,`解释 for 的更新表达式何时执行`],sections:[[`两个关键字改变不同的边界`,`break 离开最近的一层循环或 switch；continue 跳到最近循环的下一轮控制点。对 for 而言，continue 仍会经过更新表达式，再进行条件判断。对 while 则直接回到条件检查，更新放置不当可能导致停滞。`],[`局部控制必须服务于清晰任务`,`在搜索中找到目标后可以 break，在筛选中排除一项可以 continue。嵌套循环里的 break 只退出最近一层；如果需要结束整个函数，可以返回结果，避免设置难以理解的多重状态标记。`]],pitfalls:[`continue 不会退出整个循环。`],observe:[`偶数被跳过，i 到达 7 时整个循环结束。`],experiment:`把终止值改为 9，先预测参与求和的奇数。`,code:m(`int total = 0;
for (int i = 1; i <= 10; i++) {
    if (i == 7) break;
    if (i % 2 == 0) continue;
    total += i;
}
printf("%d\\n", total);`),expectedOutput:`9
`,quiz:[f(`continue 在 for 循环中通常接着执行什么？`,[`更新表达式`,`函数返回`,`整个程序退出`],0,`for 的 continue 转到更新部分，然后再检查条件；while 的控制点则有所不同。`),f(`嵌套循环里的 break 默认退出几层？`,[`全部`,`最近一层`,`零层`],1,`break 退出最近的循环或 switch，外层循环是否继续取决于外层自己的控制流程。`)]}),p({id:`recursion`,title:`递归：分解、终止与返回`,summary:`用调用栈解释规模缩小和返回值的逐层合并。`,prerequisites:[`functions`,`branch`],objectives:[`写出基例与递归关系`,`区分多次调用的局部变量`],sections:[[`递归需要能到达的基例`,`函数可以调用自身，但每次都要朝更小的问题推进。阶乘以 n<=1 为基例，其他情况计算 n×fact(n−1)。只有基例而没有朝它前进，或者输入契约不包含负数处理，仍可能使递归无法结束。`],[`等待中的乘法保存在调用上下文`,`fact(4) 需要等待 fact(3)，后者又等待 fact(2)。每次调用有自己的 n 和返回位置。达到基例后，返回值逐层向外合并；递归深度会消耗调用栈，因此应控制输入规模而不是无限扩展。`]],pitfalls:[`不要把所有层的 n 看成一个全局变量。`,`阶乘增长很快，会先遇到整数范围限制。`],observe:[`在调用最深时查看多个 fact 作用域，再沿返回方向观察结果。`],experiment:`将 n 改为 0，说明为什么应返回 1。`,code:m(`int answer = fact(4);
printf("%d\\n", answer);`,`int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}`),expectedOutput:`24
`,quiz:[f(`递归必须具备哪一组条件？`,[`基例与向基例推进`,`只能有全局变量`,`每层都打印`],0,`可达的终止条件与递减的问题规模共同保证递归能结束，二者不能只保留一个。`),f(`fact(4) 和 fact(3) 的形参 n 是同一对象吗？`,[`是`,`不是，各调用独立`,`取决于输出格式`],1,`每次函数调用建立自己的形参对象和局部状态，调用栈用来保存这些不同层次。`)]}),p({id:`strings`,title:`字符数组、结束符与容量`,summary:`区分字符串长度与数组容量，安全地读取和修改字符。`,prerequisites:[`arrays`,`traversal`],objectives:[`说明结尾零字符的作用`,`按容量约束字符串写入`],sections:[[`字符串由字符与结束符组成`,`C 字符串是以零字符结尾的字符序列。char name[]="Astra" 会为五个可见字符和一个结束符分配空间。strlen 统计结束符之前的字符数量，sizeof 对数组表达的是整块存储大小，两者回答的问题不同。`],[`容量决定能写入多少内容`,`字符数组可修改，字符串字面量不可修改。读取单词时可限制 scanf 的字段宽度，整行可使用 fgets 并处理换行。任何复制都要确保目标容量足够，包括最后的零字符；只检查可见字符数是不够的。`]],pitfalls:[`字符串字面量不能通过 char* 去修改。`,`容量需要为结束符额外预留一个位置。`],observe:[`对比 strlen 与 sizeof，查看字符修改只影响一项。`],experiment:`把首字母改成小写，说明长度与容量为什么不变。`,code:m(`char name[] = "Astra";
name[0] = 'a';
printf("%s %zu %zu\\n", name, strlen(name), sizeof name);`),expectedOutput:`astra 5 6
`,quiz:[f(`char s[]="abc" 至少需要几个 char？`,[`3`,`4`,`2`],1,`三个可见字符后面还需要一个零字符作为 C 字符串结束标记，因此共四个 char。`),f(`strlen 与数组 sizeof 总是一样吗？`,[`是`,`不是，一个数内容长度，一个数存储字节`,`只在有空格时不同`],1,`strlen 扫描结束符之前的内容，sizeof 数组得到整体容量字节，两者语义不同。`)]}),p({id:`matrix`,title:`二维数组与行主序`,summary:`把嵌套数组与二维下标对应到实际连续存储。`,prerequisites:[`arrays`,`nested`],objectives:[`遍历二维数组`,`理解每行元素的连续性`],sections:[[`二维数组是数组的数组`,`int a[2][3] 包含两行，每行是三个 int 的数组。a[i][j] 先选择第 i 行，再选择该行第 j 个元素。C 采用行主序：同一行的元素相邻，各行按顺序排列；两个下标都必须分别满足边界。`],[`函数参数需要描述行的形状`,`将二维数组传入函数时，编译器需要知道每行包含多少元素，才能计算下一行的位置。int (*p)[3] 是指向三元素数组的指针，并非 int**。把这两种指针混用会破坏地址计算规则。`]],pitfalls:[`连续二维数组不能随意转换为 int**。`],observe:[`按行查看每次 sum 更新对应的 a[i][j]。`],experiment:`把求和改成每一行分别输出，验证行与列下标。`,code:m(`int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
int sum = 0;
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) sum += a[i][j];
}
printf("%d\\n", sum);`),expectedOutput:`21
`,quiz:[f(`int a[2][3] 的 a[1][2] 是第几行第几列？`,[`第一行第二列`,`第二行第三列`,`第三行第二列`],1,`数组下标从零开始，行下标 1 表示第二行，列下标 2 表示第三列。`),f(`int (*p)[3] 的 p+1 跨过什么？`,[`一个 char`,`一整行三个 int`,`一个指针变量`],1,`p 指向包含三个 int 的数组，因此加一跨越一个完整目标数组，而非单个 int。`)]}),p({id:`pointers`,title:`指针：地址、指向与解引用`,summary:`把变量自身、变量的地址和指针指向的值分开看清。`,prerequisites:[`types`,`scope`],view:`memory`,concept:`references`,minutes:35,objectives:[`用 & 获取有效对象地址`,`用 * 访问目标对象`,`区分 p 与 *p`],sections:[[`指针也有自己的存储位置`,`int value=3 创建一个整数对象，int *p=&value 创建另一个保存地址的对象。value、&value、p、&p 与 *p 分别描述值、地址、保存的目标地址、指针自己的地址和目标的值。图中箭头表示指向关系，不代表复制了整个整数。`],[`解引用需要有效目标`,`*p=7 会写入 p 当前指向的整数，因此 value 也变成 7。解引用的前提包括非空、目标生存期仍在、对齐和类型访问合法。指针未初始化时没有可靠目标；观察到一个地址数字也不能证明访问合法。`]],pitfalls:[`int *p, q 中只有 p 是指针。`,`p=... 改指向，*p=... 改目标内容。`,`NULL 可作无目标标记，但不能解引用。`],observe:[`找到 p 的地址与其保存的目标地址，沿箭头定位 value。`,`在 *p=7 前后比较 value，说明两个对象为何同步可见。`],experiment:`增加另一个整数 other，把 p 改为 &other，再通过 *p 赋值。`,code:m(`int value = 3;
int *p = &value;
*p = 7;
printf("%d %d\\n", value, *p);`),expectedOutput:`7 7
`,quiz:[f(`p=&value 后，*p=7 改变了什么？`,[`只改变 p 的地址`,`value 对象的内容`,`创建新整数`],1,`p 保存 value 的地址，解引用得到同一个目标对象，因此写 *p 会改变 value。`),f(`&p 与 p 的含义相同吗？`,[`相同`,`不同，分别为指针自身地址与目标地址`,`都等于目标整数`],1,`指针本身也是对象；&p 定位指针对象，p 保存它所指对象的地址，两者必须区分。`)]}),p({id:`pointer-parameters`,title:`传址修改：指针参数与交换`,summary:`C 仍然按值传参，复制的地址让函数能够访问调用方对象。`,prerequisites:[`pointers`,`functions`],view:`memory`,objectives:[`用指针参数修改调用方对象`,`准确解释 C 的按值传递`],sections:[[`传入的是地址值的副本`,`调用 swap(&a,&b) 时，a 与 b 的地址值被复制到形参。C 不会因此变成另一套“按引用传递”规则。形参指针自身可以重新赋值，但调用方的指针对象不会自动被改写；通过解引用则能访问同一个目标。`],[`用临时变量保护交换过程`,`若直接先把 *a 赋为 *b，原来的 *a 就丢失了。先保存临时值，再完成两次写入。函数接口应写明要求两个参数是有效的 int 对象地址，是否允许相同地址，以及是否需要处理空指针。`]],pitfalls:[`交换两个形参指针变量本身，不等于交换调用方整数。`],observe:[`在 swap 调用内，追踪两个指针分别指向 main 的哪一个整数。`],experiment:`让两个参数都传 &a，解释函数为什么仍保持 a 原值。`,code:m(`int a = 2, b = 9;
swap(&a, &b);
printf("%d %d\\n", a, b);`,`void swap(int *a, int *b) {
    int saved = *a;
    *a = *b;
    *b = saved;
}`),expectedOutput:`9 2
`,quiz:[f(`C 的指针参数传递方式是？`,[`按地址值进行按值传递`,`自动按引用传递`,`复制全部目标内存`],0,`形参拿到地址值的副本；多个指针可通过同一地址访问同一对象，但传参本身仍是按值传递。`),f(`swap 中保存临时值是为了？`,[`防止原值被覆盖后丢失`,`改变类型大小`,`强制内联`],0,`第一次写入会覆盖一个原值，临时变量保存它以便完成交换的第二次写入。`)]}),p({id:`pointer-arithmetic`,title:`指针运算与数组边界`,summary:`按元素前进，而不是随意相加地址数字。`,prerequisites:[`pointers`,`arrays`],view:`memory`,objectives:[`解释 p+1 的步长`,`区分尾后指针与可解引用指针`],sections:[[`步长由目标类型决定`,`指向 int 元素的指针加一，会移动一个 int 元素的距离。a[i] 在适当上下文下等价于 *(a+i)。同一数组内两个元素指针相减得到元素间距，结果类型是 ptrdiff_t；它不是随意两个地址的通用距离。`],[`允许形成尾后，不允许读取尾后`,`可以形成数组最后一个元素之后的指针，常用于循环终点，但不能解引用该指针。指针运算必须留在同一数组及允许的尾后范围内。一个地址碰巧落在其他对象附近，并不能使越界访问合法。`]],pitfalls:[`尾后地址能用于边界比较，不能当作额外元素。`],observe:[`观察 p 指向数组第二项，再查看 p+1 指向第三项。`],experiment:`形成 end=a+3；先比较 p 与 end，再思考为什么不能读取 *end。`,code:m(`int a[3] = {4, 7, 9};
int *p = a + 1;
printf("%d %td\\n", *(p + 1), p - a);`),expectedOutput:`9 1
`,quiz:[f(`int* p 加一通常跨越多少字节？`,[`总是一个字节`,`sizeof(int) 个字节`,`sizeof(p) 个字节`],1,`指针算术以目标元素为单位，int* 的步长由 sizeof(int) 决定，而非指针自身大小。`),f(`a+长度 可以解引用吗？`,[`可以`,`不可以，它是尾后指针`,`只要地址非零就可以`],1,`尾后指针可形成并用于范围控制，但没有对应数组元素，解引用不合法。`)]}),p({id:`array-pointers`,title:`数组不是指针：退化与参数`,summary:`比较 sizeof、数组形参调整和指向数组的指针。`,prerequisites:[`pointer-arithmetic`,`matrix`],view:`memory`,objectives:[`区分数组对象与指针对象`,`显式传递数组长度`],sections:[[`数组表达式常转为首元素指针`,`数组本体保存连续元素，指针对象保存地址。多数表达式中数组会转换为首元素指针，但 sizeof 数组和 &数组 等上下文保留数组信息。因此不能把“经常转换”理解为“数组就是指针”。`],[`形参数组写法会调整为指针`,`函数参数里的 int a[] 会被调整为 int*，函数无法仅靠 sizeof a 找回调用方数组长度。应另传长度，或采用明确的固定形状接口。二维数组还要保留行宽，才能正确计算跨行地址。`]],pitfalls:[`在数组形参上使用 sizeof 不能计算调用方数组元素数。`],observe:[`比较主函数中的 sizeof a，与函数显式收到的 n。`],experiment:`改变数组长度，同时更新传入 n；检查函数访问是否仍受边界约束。`,code:m(`int a[] = {3, 5, 7};
size_t n = sizeof a / sizeof a[0];
printf("%zu %d\\n", n, total(a, n));`,`int total(const int a[], size_t n) {
    int sum = 0;
    for (size_t i = 0; i < n; i++) sum += a[i];
    return sum;
}`),expectedOutput:`3 15
`,quiz:[f(`函数形参 int a[] 在参数类型上等价于？`,[`int* a`,`整个数组值复制`,`int** a`],0,`数组形式的形参会被调整为指向元素的指针，数组内容不会自动整体复制。`),f(`通用数组处理函数通常还需要什么？`,[`长度或边界信息`,`数组变量的拼写`,`显示器宽度`],0,`首元素指针本身不携带可用元素数量，安全遍历需要另传长度或明确边界契约。`)]}),p({id:`double-pointers`,title:`二级指针：修改一个指针`,summary:`当函数需要改变调用方的指向时，传入指针对象的地址。`,prerequisites:[`pointer-parameters`],view:`memory`,objectives:[`读懂 int** 的两级指向`,`用指针的地址更新调用方指针`],sections:[[`每一级解引用对应一个对象`,`int** pp 指向一个 int* 对象；*pp 访问该指针对象，**pp 再访问其目标整数。二级指针不是“更强的普通指针”，而是目标类型不同。应逐级写清 pp、*pp 与 **pp 分别指向或表示什么。`],[`输出参数需要定位调用方容器`,`函数若只接收 int* p，对 p 重新赋值只改本地副本。传入 &p 后，函数可用 *out=target 改调用方的 p。动态创建链表头、返回分配对象等接口常用该思路，同时应明确失败时指针保持何种状态。`]],pitfalls:[`int** 不能替代任意二维数组指针。`],observe:[`沿 out→p→b 的两级箭头，解释重新定位发生在哪个对象。`],experiment:`将 target 改为 &a，比较 p 的目标和 a、b 的数值。`,code:m(`int a = 3, b = 8;
int *p = &a;
redirect(&p, &b);
printf("%d %d\\n", *p, a);`,`void redirect(int **out, int *target) {
    *out = target;
}`),expectedOutput:`8 3
`,quiz:[f(`想改变调用方 int* p 的指向，传入什么？`,[`p 保存的整数`,`&p`,`*p`],1,`需要传入指针对象本身的地址，函数才能通过解引用写回调用方的指针。`),f(`若 pp 类型为 int**，*pp 的类型是？`,[`int`,`int*`,`int***`],1,`一次解引用移除一层指针，得到 int* 对象，再解引用一次才到 int 目标。`)]}),p({id:`dynamic-memory`,title:`动态内存：申请、初始化、释放`,summary:`观察堆块的独立生存期，并为分配失败与释放负责。`,prerequisites:[`pointer-arithmetic`],view:`memory`,minutes:35,objectives:[`按元素大小申请动态数组`,`处理失败与未初始化状态`,`解释 free 后别名失效`],sections:[[`malloc 分配存储，不初始化内容`,`malloc 返回一块满足大小要求的存储，失败时返回空指针。使用 sizeof *p 能把大小与目标类型联系起来。成功申请后仍要初始化元素；calloc 将分配区域的字节置零，但不能据此泛化所有复杂对象的语义。`],[`所有权需要明确的结束动作`,`动态内存不会随着创建它的函数返回自动释放。代码要明确谁负责 free，并确保只释放有效分配基址一次。free(p) 不会自动清空其他别名；释放后继续通过任何别名访问同一块存储都不合法。`]],pitfalls:[`申请成功不等于元素已有确定值。`,`free 后令 p=NULL 只清空这个变量，其他别名仍可能悬垂。`],observe:[`找到 malloc 后新出现的堆块、逐项初始化与最终释放标记。`],experiment:`在释放前增加 alias=p，观察释放后两个指针为何都不能再解引用。`,code:m(`int *a = malloc(3 * sizeof *a);
if (a == NULL) return 1;
for (int i = 0; i < 3; i++) a[i] = i + 1;
printf("%d\\n", a[0] + a[1] + a[2]);
free(a);
a = NULL;`),expectedOutput:`6
`,quiz:[f(`malloc 成功后的 int 元素是否自动为零？`,[`是`,`不是，仍需初始化`,`一定等于地址`],1,`malloc 只提供存储，不保证初始内容；必须先写入确定值，再读取这些元素。`),f(`free(p) 后其他别名指针是否仍可读取旧对象？`,[`可以`,`不可以，目标生存期已经结束`,`只有第一个元素可以`],1,`释放结束整块动态对象的生存期，所有指向它的别名都失去合法访问目标。`)]}),p({id:`realloc`,title:`realloc：扩容与失败保护`,summary:`用临时指针接收结果，保留原数据和失败时的所有权。`,prerequisites:[`dynamic-memory`,`double-pointers`],view:`memory`,objectives:[`正确处理 realloc 成功与失败`,`为新增区域初始化`],sections:[[`扩容可能搬迁到新地址`,`realloc 会尝试调整分配大小，成功时保留新旧较小大小范围内的内容，可能使用新地址。新增字节没有自动初始化。成功后应只使用返回的新指针，不再依赖旧地址或旧别名。`],[`先检查结果，再更新所有者`,`直接写 p=realloc(p,...) 在失败返回 NULL 时会丢失原分配地址，造成泄漏。使用临时变量，失败时仍由原 p 负责释放。这里约定申请正大小，避免不同标准版本中零大小行为的额外差异。`]],pitfalls:[`扩容后原来的元素数量不等于新容量，新增元素必须另行初始化。`],observe:[`比较扩容前后分配块，查看保留下来的第一项。`],experiment:`将新容量改为五，初始化所有新增项后再遍历求和。`,code:m(`int *a = malloc(2 * sizeof *a);
if (!a) return 1;
a[0] = 4; a[1] = 5;
int *grown = realloc(a, 3 * sizeof *a);
if (!grown) { free(a); return 1; }
a = grown;
a[2] = 6;
printf("%d\\n", a[0] + a[1] + a[2]);
free(a);`),expectedOutput:`15
`,quiz:[f(`为什么不直接 p=realloc(p,n)？`,[`失败可能丢掉原分配地址`,`会禁止扩容`,`一定更慢`],0,`失败时 realloc 返回空指针而原分配仍有效，直接覆盖 p 会失去释放原块所需的地址。`),f(`扩容新增区域的内容是？`,[`自动全零`,`未确定，需初始化`,`自动复制最后一项`],1,`realloc 只保证保留原有范围的内容，新增区域不能在未初始化前作为确定值读取。`)]}),p({id:`lifetime`,title:`生存期、悬垂与内存错误`,summary:`把作用域、对象生存期和所有权分别说明。`,prerequisites:[`dynamic-memory`,`scope`],view:`memory`,objectives:[`识别局部对象逃逸与释放后访问`,`避免重复释放与越界`],sections:[[`名字不可见与对象结束不是同一件事`,`作用域决定源码中能否用名称访问，生存期决定对象是否仍存在。自动局部对象通常在离开其块时结束，动态分配对象持续到释放。返回局部变量的地址不会延长局部对象生存期，调用方得到的是悬垂指针。`],[`错误应通过规则而不是碰巧结果识别`,`释放后读到“原来的值”仍是非法访问，越界没有崩溃也不代表正确。应在设计时明确所有者、有效区间和释放点。本工作台会标记已登记分配的部分越界与生存期错误，但不是覆盖全部未定义行为的完整检测器。`]],pitfalls:[`不要返回自动局部数组或变量的地址。`,`同一分配不能释放两次。`],observe:[`观察 free 后堆块进入已释放状态，指针置空只改变指针变量。`],experiment:`在一次临时实验里增加释放后读取，查看诊断；修复后重新运行。`,code:m(`int *owner = malloc(sizeof *owner);
if (!owner) return 1;
*owner = 9;
printf("%d\\n", *owner);
free(owner);
owner = NULL;
printf("%d\\n", owner == NULL);`),expectedOutput:`9
1
`,quiz:[f(`返回局部 int x 的 &x 能延长 x 的生存期吗？`,[`能`,`不能`,`只要加 static_cast 就能`],1,`取地址不改变自动对象生存期；函数返回后该局部对象已结束，不能通过悬垂指针访问。`),f(`越界读取没有崩溃说明什么？`,[`一定正确`,`不能证明合法`,`可以放心提交`],1,`未定义行为可能暂时看似正常、产生错误结果或崩溃，是否崩溃不是合法性的依据。`)]}),p({id:`const-pointers`,title:`const 与只读接口`,summary:`区分不能改目标、不能改指向与两者都不能改。`,prerequisites:[`pointers`,`array-pointers`],view:`memory`,objectives:[`读懂 const int* 与 int* const`,`为只读数组参数表达约束`],sections:[[`限定的是哪一个对象`,`const int *p 表示不能通过 p 修改目标整数，p 本身仍可重新指向；int *const p 表示指针对象不可重新赋值，但可通过它修改非 const 的目标。const int *const p 同时施加两层限制。`],[`只读访问不是深度不可变保证`,`只读参数能表达函数不应通过该路径修改数据，但其他合法别名仍可能改变原本非 const 的对象。不能用强制转换去修改真正定义为 const 的对象。接口注释还应说明长度、空指针与所有权等 const 无法表达的条件。`]],pitfalls:[`const int* 限制访问路径，不会复制数据。`],observe:[`只读 p 读取到 value 被另一条合法路径修改后的新值。`],experiment:`尝试通过 p 写入，阅读编译诊断，再恢复合法代码。`,code:m(`int value = 3;
const int *read_only = &value;
int *const fixed = &value;
*fixed = 5;
printf("%d\\n", *read_only);`),expectedOutput:`5
`,quiz:[f(`const int* p 允许哪一种操作？`,[`通过 *p 修改目标`,`让 p 改指向另一个有效 int`,`修改真正 const 对象`],1,`const 限制通过 p 写目标，指针变量本身未被 const 限定，因此可重新指向。`),f(`int* const p 中不能改的是什么？`,[`p 自身的指向`,`目标 int 的所有内容`,`所有别名`],0,`const 位于指针这一层，p 必须初始化且不能重新赋值，目标若非 const 仍可修改。`)]}),p({id:`structs`,title:`结构体：把相关数据组织起来`,summary:`用命名字段描述记录，理解结构体赋值与成员访问。`,prerequisites:[`types`,`arrays`],view:`memory`,objectives:[`定义结构体并初始化字段`,`区分值复制与指针成员共享`],sections:[[`字段表达一条记录的结构`,`结构体把不同类型的相关成员组织为一种类型，使用点运算符访问成员。成员的顺序与可能的填充共同影响 sizeof，不能简单把各字段大小相加当作可移植的结构体总大小。`],[`结构体赋值复制成员的值`,`Point b=a 会得到独立结构体对象，修改 b.x 不改变 a.x。但若字段本身是指针，复制的是地址值而非所指内容，两个结构体仍可能共享同一个动态对象。值复制与深复制必须结合字段类型判断。`]],pitfalls:[`结构体可能有填充字节。`,`不能用 == 直接比较一般 C 结构体。`],observe:[`观察 a 与 b 的独立字段，修改 b.x 后 a.x 保持不变。`],experiment:`为结构体增加一个 int* 字段，比较复制字段与复制目标的区别。`,code:m(`struct Point a = {2, 3};
struct Point b = a;
b.x = 8;
printf("%d %d\\n", a.x, b.x);`,`struct Point { int x; int y; };`),expectedOutput:`2 8
`,quiz:[f(`结构体赋值后，普通 int 字段属于？`,[`两个独立结构体各自的字段`,`同一全局字段`,`自动引用`],0,`结构体赋值复制字段值，两个独立结构体的普通数值字段可以分别修改。`),f(`结构体含指针时，普通赋值会复制目标内容吗？`,[`一定深复制`,`只复制指针值，不自动深复制`,`禁止一切赋值`],1,`指针字段也是一个值，复制它得到相同目标地址，不会自动申请或复制目标对象。`)]}),p({id:`struct-pointers`,title:`结构体指针与箭头运算符`,summary:`用 -> 访问记录，并通过函数修改同一个结构体。`,prerequisites:[`structs`,`pointer-parameters`],view:`memory`,objectives:[`说明 p->field 与 (*p).field 的关系`,`按地址更新记录`],sections:[[`箭头把解引用与字段选择合并`,`p->x 等价于 (*p).x，要求 p 指向有效结构体对象。括号很重要，因为字段选择与一元解引用的优先级不同。结构体指针只是访问路径，结构体本身仍可以位于自动存储区、静态区或动态分配区。`],[`把更新意图放进函数接口`,`函数接收 struct Point* 后可更新调用方记录；只读函数可接收 const struct Point*。用函数名表达业务动作，比让各处任意改字段更容易维护。空指针是否允许应在契约中明确，不能因为存在箭头语法就省略有效性检查。`]],pitfalls:[`p.x 适用于结构体对象，p->x 适用于结构体指针。`],observe:[`在 move 中沿 p 定位 main 中的 point，观察两个字段更新。`],experiment:`将 move 参数改为结构体值，比较调用方是否仍改变。`,code:m(`struct Point point = {1, 2};
move(&point, 3);
printf("%d %d\\n", point.x, point.y);`,`struct Point { int x; int y; };
void move(struct Point *p, int delta) {
    p->x += delta;
    p->y += delta;
}`),expectedOutput:`4 5
`,quiz:[f(`p->x 等价于哪一种写法？`,[`(*p).x`,`*(p.x)`,`&p.x`],0,`箭头先解引用结构体指针，再选择字段，需要用括号表达 (*p).x 的正确分组。`),f(`只读结构体参数更适合声明为？`,[`const struct Point*`,`struct Point** 必须`,`void* 且随意修改`],0,`const 指向结构体的参数表达不通过该访问路径修改字段的意图，同时保留静态类型信息。`)]}),p({id:`linked-list`,title:`链表：节点、连接与释放顺序`,summary:`让结构体中的指针连接记录，并安全地遍历和释放。`,prerequisites:[`struct-pointers`,`dynamic-memory`],view:`memory`,minutes:40,objectives:[`构建单向链表`,`遍历节点并保留释放后的下一跳`],sections:[[`节点不要求连续排列`,`单向链表节点包含数据与 next 指针，最后一个节点的 next 为 NULL。链表的逻辑顺序由指针关系决定，而不是由地址大小或内存相邻关系决定。插入节点需要修改连接，不能只创建一个孤立节点就认为已经插入。`],[`释放当前节点前先保存下一跳`,`遍历时通过 current=current->next 前进；清理时要先保存 next，再 free(current)，因为释放后读取 current->next 已经不合法。整个链表的所有权与是否允许共享节点必须明确，否则容易重复释放或漏掉节点。`]],pitfalls:[`释放后再读取 next 是释放后访问。`,`链表不天然比数组更快，遍历有额外指针开销。`],observe:[`沿 head 的箭头检查两个节点的逻辑顺序；释放时观察先保存的 next。`],experiment:`增加第三个节点，先画出连接，再写代码修改 next。`,code:m(`struct Node *head = malloc(sizeof *head);
struct Node *tail = malloc(sizeof *tail);
if (!head || !tail) { free(head); free(tail); return 1; }
head->value = 3; head->next = tail;
tail->value = 8; tail->next = NULL;
int sum = 0;
for (struct Node *p = head; p != NULL; p = p->next) sum += p->value;
printf("%d\\n", sum);
while (head != NULL) {
    struct Node *next = head->next;
    free(head);
    head = next;
}`,`struct Node { int value; struct Node *next; };`),expectedOutput:`11
`,quiz:[f(`链表的逻辑顺序取决于？`,[`next 的连接关系`,`节点地址从小到大`,`变量声明顺序`],0,`链表由链接字段描述逻辑次序，节点可以分散分配，地址顺序不能替代连接关系。`),f(`清理链表时应先做什么？`,[`free 后读 next`,`保存 next，再释放当前节点`,`释放头指针变量`],1,`必须在当前节点仍有效时保存下一跳，释放后再读成员属于非法的生存期访问。`)]}),p({id:`function-pointers`,title:`函数指针与回调策略`,summary:`把“要执行哪一种操作”作为函数参数。`,prerequisites:[`functions`,`pointers`],view:`memory`,objectives:[`声明类型匹配的函数指针`,`以回调分离遍历与处理策略`],sections:[[`函数地址也需要类型约束`,`int (*op)(int) 表示指向接收 int、返回 int 的函数的指针。括号把 op 绑定为指针；int *op(int) 则是返回 int* 的函数。通过函数指针调用时，实际函数类型必须兼容，不能随意强制转换后调用。`],[`回调让流程与策略分离`,`apply 接收一个操作函数，把参数交给该函数计算。调用方可以选择 square 或其他兼容函数，而不必修改 apply 的流程。这是排序比较器、事件处理与遍历访问器常见的组织方式，接口必须说明参数与副作用约束。`]],pitfalls:[`函数指针的参数和返回类型必须兼容。`],observe:[`在 apply 内查看 op 对应的函数，再跟随实际 square 调用。`],experiment:`新增 cube 函数并替换回调，保持 apply 不变。`,code:m(`int answer = apply(4, square);
printf("%d\\n", answer);`,`int square(int n) { return n * n; }
int apply(int value, int (*op)(int)) {
    return op(value);
}`),expectedOutput:`16
`,quiz:[f(`int (*op)(int) 声明的是？`,[`函数指针`,`整数指针数组`,`返回指针的函数`],0,`括号把 op 与 * 结合，随后 (int) 描述目标函数参数，整体是函数指针类型。`),f(`回调的主要价值是？`,[`分离公共流程与可替换策略`,`绕过所有类型检查`,`保证运行更快`],0,`回调用兼容函数替换局部策略，而公共控制流程保持稳定；它不自动承诺性能提升。`)]}),p({id:`typedef-enum`,title:`类型别名与枚举状态`,summary:`用有意义的名字描述类型和有限状态。`,prerequisites:[`structs`,`switch`],objectives:[`区分 typedef 与新类型`,`以枚举替代无说明数字`],sections:[[`typedef 为既有类型提供名字`,`typedef 可以简化结构体或函数指针的类型书写，它提供类型别名，并不因此创建具有不同语义的全新独立类型。别名应帮助读者理解业务角色，过度隐藏指针层级会使所有权和修改意图更难判断。`],[`枚举为离散状态命名`,`枚举常用于状态机、选项和返回码，让 Ready、Running 这样的名称替代散落的数字。使用 switch 处理状态时要考虑所有有效情况和异常输入。枚举名称可读性更好，但仍需约束整数转换与外部数据校验。`]],pitfalls:[`typedef 不等于运行时创建对象。`],observe:[`跟随枚举状态进入 switch，观察 typedef 定义的记录成员。`],experiment:`增加 PAUSED 状态，为它添加明确处理分支。`,code:m(`Task task = {RUNNING, 3};
switch (task.state) {
case READY: printf("ready\\n"); break;
case RUNNING: printf("running %d\\n", task.step); break;
}`,`enum State { READY, RUNNING };
typedef struct { enum State state; int step; } Task;`),expectedOutput:`running 3
`,quiz:[f(`typedef 主要做什么？`,[`给既有类型起别名`,`创建堆对象`,`执行条件分支`],0,`typedef 在编译层面提供类型名字，不会在运行时分配业务对象或执行某个操作。`),f(`枚举代替散落数字的好处是？`,[`状态意图更清楚`,`自动校验所有外部整数`,`消除所有 default`],0,`枚举名称使有限状态更可读，但外部输入转换和状态覆盖仍需程序自行处理。`)]}),p({id:`bitwise`,title:`位运算与标志集合`,summary:`用掩码表示独立开关，并用无符号值减少歧义。`,prerequisites:[`operators`,`typedef-enum`],objectives:[`使用 & | ^ 和移位`,`完成置位、清位与检测`],sections:[[`一位表达一个独立状态`,`位掩码把多个布尔开关放入一个无符号整数。用 | 设置某些位，用 & 检测，用 &~mask 清除，用 ^ 翻转。逻辑 && 和按位 & 的结果与求值规则不同，不能只因符号相近而互换。`],[`移位必须遵守宽度约束`,`移位次数必须非负并小于左操作数提升后的位宽。使用无符号类型和合适的常量后缀，能减少有符号移位的复杂规则。掩码适合独立可组合标志，互斥状态则通常更适合枚举。`]],pitfalls:[`不能用 flags && mask 代替检测某一位。`],observe:[`查看设置 READ 和 WRITE 后，再清除 WRITE 的结果。`],experiment:`增加 EXEC=4 标志，完成设置、检测与清除。`,code:m(`unsigned int read_flag = 1u, write_flag = 2u;
unsigned int flags = 0u;
flags |= read_flag | write_flag;
flags &= ~write_flag;
printf("%u %d\\n", flags, (flags & read_flag) != 0);`),expectedOutput:`1 1
`,quiz:[f(`清除 mask 中指定的位通常写？`,[`flags &= ~mask`,`flags |= mask`,`flags &&= mask`],0,`按位取反掩码使目标位为零，随后与原标志相与即可清除对应位并保留其他位。`),f(`移位次数等于类型位宽是否合法？`,[`合法`,`不合法`,`只在奇数时合法`],1,`移位次数必须小于提升后左操作数的位宽，等于或超过位宽不符合 C 的规则。`)]}),p({id:`files`,title:`文件流与资源关闭`,summary:`把标准输入输出的思想扩展到独立文件。`,prerequisites:[`strings`,`pointers`],objectives:[`检查 fopen 返回值`,`配对打开与关闭并选择模式`],sections:[[`文件流是有状态的资源`,`fopen 根据路径与模式打开流，失败返回 NULL。w 模式会创建或截断文本文件，r 只读取已有文件，a 在末尾追加。FILE* 应看作标准库管理的资源句柄，不应自己解引用内部成员或用 free 代替 fclose。`],[`检查读写结果与关闭时机`,`读取、写入与关闭都可能失败，真实应用需要按业务处理。示例在当前实验的虚拟文件目录中写入和读取，不会自动修改电脑上的个人文件。资源使用结束后及时 fclose，避免句柄泄漏与缓冲内容未提交。`]],pitfalls:[`w 模式会截断原内容。`,`fclose 与 free 处理的资源类型不同。`],observe:[`运行后在虚拟文件面板查看 note.txt，再核对从文件读回的内容。`],experiment:`改为 a 模式并在同一次程序中追加两行，再读取完整内容。`,code:m(`FILE *out = fopen("note.txt", "w");
if (!out) return 1;
fprintf(out, "%s\\n", "Astra");
fclose(out);
FILE *in = fopen("note.txt", "r");
if (!in) return 1;
char text[32] = {0};
if (fgets(text, sizeof text, in)) printf("%s", text);
fclose(in);`),expectedOutput:`Astra
`,quiz:[f(`fopen 失败通常返回？`,[`NULL`,`空字符串`,`整数 1 的地址`],0,`文件打开失败时返回空指针，必须检查后才能把它交给需要有效流的库函数。`),f(`fopen(path,"w") 对已有内容的影响是？`,[`保留并只读`,`通常截断后写入`,`自动合并旧行`],1,`w 是写入模式，成功打开已有文件时会截断原内容，不能用它代替追加模式。`)]}),p({id:`file-records`,title:`文本记录、解析与错误路径`,summary:`按行读取记录，分清读取成功与转换成功。`,prerequisites:[`files`,`loops`],objectives:[`用 fgets 遍历文本记录`,`认识 strtol 的结束位置校验`],sections:[[`读取一行不代表数据有效`,`fgets 返回一行文本，仍需把它解析成业务值。strtol 可通过 end 指针表明停止转换的位置；真实输入还应检查范围、尾部字符和过长行。把读取失败、格式错误与业务范围错误分开，便于给出准确反馈。`],[`契约决定简化的边界`,`示例虚拟文件每行只有一个范围内的整数，用 strtol 转换后累加，并拒绝没有任何数字的行。更严格的课程项目可以继续检查尾部空白与溢出。不能因为当前示例格式规整，就把部分校验描述为完整输入验证。`]],pitfalls:[`atoi 无法清晰区分零与转换失败。`],observe:[`查看每次 line 读取和 total 更新，检查文件结束后的退出。`],experiment:`在文件里插入 bad 一行，观察错误路径，再恢复为合法整数。`,files:{"scores.txt":`10
20
30
`},code:m(`FILE *file = fopen("scores.txt", "r");
if (!file) return 1;
char line[64] = {0};
long total = 0;
while (fgets(line, sizeof line, file)) {
    char *end = NULL;
    long value = strtol(line, &end, 10);
    if (end == line) { fclose(file); return 1; }
    total += value;
}
fclose(file);
printf("%ld\\n", total);`),expectedOutput:`60
`,quiz:[f(`fgets 成功是否保证这一行是有效整数？`,[`保证`,`不保证，还需解析和校验`,`只要有换行就保证`],1,`读取只解决文本获取，文本能否转换、是否越界以及是否符合业务范围都需要另行判断。`),f(`strtol 的 end==输入起点通常表示？`,[`没有读到任何数字`,`整数一定为零`,`已经解析完所有行`],0,`未发生数字转换时结束指针停在起点，这与成功解析出数值零是不同情况。`)]}),p({id:`preprocessor`,title:`预处理、宏与头文件`,summary:`区分文本替换、类型检查和函数调用。`,prerequisites:[`functions`,`operators`],objectives:[`说明 include 与宏常量`,`避免带副作用的宏参数`],sections:[[`预处理发生在编译分析之前`,`include 将声明引入当前翻译单元，define 按预处理规则替换记号。宏不是拥有独立参数对象的函数，不提供通常的类型检查。条件编译可以选择平台相关内容，头文件保护可避免重复包含定义。`],[`优先让表达式只求值一次`,`函数式宏可能多次使用实参，若实参有自增、输入等副作用，就可能产生非预期行为。括号能改善分组却不能消除多次求值。简单常量或条件编译适合宏，普通计算通常更适合类型明确的函数。`]],pitfalls:[`宏不是函数，不能假定实参只执行一次。`],observe:[`源码中的 LIMIT 在编译后表现为循环边界常量。`],experiment:`修改 LIMIT 并重新运行；比较预处理常量与运行时变量。`,code:`#include <stdio.h>
#define LIMIT 3
int main(void) {
    int total = 0;
    for (int i = 1; i <= LIMIT; i++) total += i;
    printf("%d\\n", total);
    return 0;
}`,expectedOutput:`6
`,quiz:[f(`给函数式宏实参传 i++ 的主要风险是？`,[`实参可能被重复求值`,`一定产生语法错误`,`自动创建线程`],0,`宏展开可能把参数出现多次，带副作用的实参因此被执行多次，括号不能解决该问题。`),f(`头文件中的函数声明主要帮助什么？`,[`让编译器检查调用类型`,`直接执行函数体`,`替代所有链接步骤`],0,`声明告诉编译器函数的接口类型；提供声明不等于已经提供实现或完成链接。`)]}),p({id:`modularity`,title:`接口、实现与多文件组织`,summary:`从单个 main 走向有清晰职责的 C 模块。`,prerequisites:[`functions`,`preprocessor`,`const-pointers`],objectives:[`区分声明、定义与调用`,`用参数契约组织计算模块`],sections:[[`头文件公开接口，源文件提供实现`,`常见工程把可复用函数声明放在头文件，定义放在对应源文件，main 只组织流程。声明说明参数与返回类型，定义提供函数体，链接阶段再把调用与实现连接起来。头文件不应随意定义会导致重复符号的全局对象。`],[`本课先在一个翻译单元观察接口`,`当前编辑器编译单份 main.c，示例用前置声明展示相同的接口边界；真正拆成多个 .c 需要在构建命令中编译并链接全部源文件。参数要说明长度、只读与错误约定，让实现可独立测试，而不是只把长文件机械切成几段。`]],pitfalls:[`声明存在不代表链接时一定有定义。`,`本工作台当前不提供任意多文件 C 构建配置。`],observe:[`先看到函数声明，再跟随 main 调入后方的函数定义。`],experiment:`将计算逻辑写成 total.h 的声明与 total.c 的实现草稿，说明各自职责。`,code:`#include <stdio.h>
#include <stddef.h>
int total(const int *values, size_t n);
int main(void) {
    int values[] = {2, 4, 6};
    printf("%d\\n", total(values, 3));
    return 0;
}
int total(const int *values, size_t n) {
    int answer = 0;
    for (size_t i = 0; i < n; i++) answer += values[i];
    return answer;
}`,expectedOutput:`12
`,quiz:[f(`声明与定义的区别是？`,[`声明说明接口，定义提供实体或函数体`,`完全没有区别`,`声明只在运行时出现`],0,`函数声明提供可调用的类型信息，定义给出实现；工程中还需正确完成编译和链接。`),f(`本课单文件示例说明了什么？`,[`已经支持任意构建系统`,`接口与实现的职责边界`,`C 不需要链接`],1,`示例在一个翻译单元中演示接口边界，不能据此声称工作台具备完整多文件构建系统。`)]}),p({id:`testing`,title:`断言、边界与错误定位`,summary:`把“我觉得对”变成可以复核的输入输出与状态证据。`,prerequisites:[`functions`,`arrays`,`lifetime`],objectives:[`设计正常、边界与失败用例`,`区分编译错误、运行错误和逻辑错误`],sections:[[`测试应来自契约与风险`,`从输入范围、空或单元素、临界值、重复值和非法条件推导用例。输出正确只是证据之一，还应解释中间状态、内存生存期和复杂度。不能用与实现完全相同的错误公式生成所谓独立预期答案。`],[`定位时缩小问题而不是添加猜测`,`先看编译诊断，再用最小输入复现错误，逐步检查首次偏离预期的状态。assert 可表达开发期内部不变量，但不能代替处理不可信输入；关闭断言后仍需要程序按接口契约正确运行。`]],pitfalls:[`有限用例通过不是全输入正确性的证明。`],observe:[`查看零、正负值三个检查如何独立调用同一个计算函数。`],experiment:`故意把 abs_value 的负数分支写错，找到哪条检查首先失败。`,code:m(`int checks = 0;
checks += abs_value(0) == 0;
checks += abs_value(-5) == 5;
checks += abs_value(7) == 7;
printf("%d/3\\n", checks);`,`int abs_value(int n) { return n < 0 ? -n : n; }`),expectedOutput:`3/3
`,quiz:[f(`测试预期结果应该主要依据什么？`,[`输入输出契约与独立分析`,`把实现公式原样复制`,`界面是否有动画`],0,`独立依据契约分析预期值，才可能发现实现错误；复制相同公式会复制相同缺陷。`),f(`assert 能完全替代外部输入校验吗？`,[`能`,`不能，断言可能被关闭且用途不同`,`只在网页上能`],1,`断言用于内部假设检查，外部输入错误需要明确业务处理，不能依赖可关闭的断言。`)]}),p({id:`project`,title:`综合项目：成绩记录与统计`,summary:`围绕明确输入契约，组合数组、函数和统计规则。`,prerequisites:[`structs`,`traversal`,`functions`,`testing`],minutes:45,objectives:[`拆分输入、存储与计算`,`解释平均值及边界处理`,`用多组数据验证统计`],sections:[[`先设计数据与函数边界`,`项目读取一组成绩，存入数组，计算总分、最低分、最高分与平均分。先约定人数范围和成绩范围，再决定数据结构。统计函数不直接读标准输入，可以复用于文件输入或其他界面，也更容易针对边界测试。`],[`把正确性与资源规则一起验收`,`单人成绩应使最低分与最高分相同；全零不应发生除零；一般输入需要浮点除法计算平均值。若改成动态数组，还要检查申请失败与释放。课程中的多用例自测验证指定输入，不等同于覆盖全部需求的生产考试系统。`]],pitfalls:[`平均值的除法要在计算前转成浮点。`,`人数为零时需单独设计输出，不应直接除以零。`],observe:[`跟踪输入数组与统计过程中 best、total 的更新。`],experiment:`为统计结果增加低于 60 分的人数，并补上全及格和全不及格测试。`,code:m(`int values[] = {60, 80, 100};
int total = 0, low = values[0], high = values[0];
for (int i = 0; i < 3; i++) {
    total += values[i];
    if (values[i] < low) low = values[i];
    if (values[i] > high) high = values[i];
}
printf("%d %d %.2f\\n", low, high, (double)total / 3);`),expectedOutput:`60 100 80.00
`,quiz:[f(`计算 int total / int count 后再转 double 会怎样？`,[`可能已经丢失小数`,`保证精确平均值`,`自动补回小数`],0,`两个整数先除会产生整数商，必须在除法前让操作数成为浮点类型才能保留小数部分。`),f(`统计函数与读取输入分开有什么益处？`,[`可以独立测试和复用`,`保证零缺陷`,`不再需要输入契约`],0,`将计算与输入输出分离，使同一规则可用于多种入口，并可直接用构造数据测试。`)]})];for(let e of v)e.exercise=re[e.id],e.references=[{title:`GNU C 语言入门与参考手册`,url:`https://www.gnu.org/software/c-intro-and-ref/manual/html_node/`}];var ie={language:`c`,title:`C · 从程序结构走向内存模型`,description:`沿着类型、控制流程、函数、指针与资源管理，建立可解释、可测试的 C 程序。`,outcomes:[`理解按值传递与指针访问`,`管理动态内存和文件资源`,`用结构体组织记录与链表`,`编写有契约和测试的模块`],lessons:[..._(`c`),...v],chapters:[{id:`start`,title:`程序起点与数据`,description:`入口、输入输出、类型与求值规则`,icon:`terminal`,lessons:[`output`,`input`,`types`,`operators`,`conversions`]},{id:`control`,title:`程序结构与边界`,description:`顺序、分支、循环与可控的退出`,icon:`branch`,lessons:[`sequence`,`branch`,`switch`,`loops`,`break-continue`,`nested`]},{id:`functions`,title:`函数、作用域与递归`,description:`独立状态、参数契约与调用栈`,icon:`function`,lessons:[`functions`,`scope`,`recursion`]},{id:`arrays`,title:`数组、字符串与矩阵`,description:`连续数据、容量、下标与遍历`,icon:`array`,lessons:[`arrays`,`traversal`,`strings`,`matrix`,`practice`]},{id:`pointers`,title:`指针与地址关系`,description:`从一次解引用到数组参数和二级指针`,icon:`layers`,lessons:[`pointers`,`pointer-parameters`,`pointer-arithmetic`,`array-pointers`,`double-pointers`,`const-pointers`]},{id:`memory`,title:`动态内存与生存期`,description:`申请、扩容、所有权与错误诊断`,icon:`database`,lessons:[`dynamic-memory`,`realloc`,`lifetime`]},{id:`records`,title:`结构体与连接结构`,description:`记录、链表、回调与状态表示`,icon:`code`,lessons:[`structs`,`struct-pointers`,`linked-list`,`function-pointers`,`typedef-enum`,`bitwise`]},{id:`engineering`,title:`文件、模块与综合实践`,description:`资源、接口、测试与一个完整小项目`,icon:`book`,lessons:[`files`,`file-records`,`preprocessor`,`modularity`,`testing`,`project`]}]},ae={classes:{id:`account-deposit`,revision:1,title:`让账户自己管理余额`,task:`输入初始非负余额 balance 和整数 amount，各占一行。补全 Account.deposit：非负金额累加，负金额忽略。输出最终余额。`,constraints:`0≤balance≤1000，−1000≤amount≤1000。`,starter:`class Account:
    def __init__(self, balance):
        self.balance = balance
    def deposit(self, amount):
        # 非负才更新余额
        pass

account = Account(int(input()))
account.deposit(int(input()))
print(account.balance)`,solution:`class Account:
    def __init__(self, balance):
        self.balance = balance
    def deposit(self, amount):
        if amount >= 0:
            self.balance += amount

account = Account(int(input()))
account.deposit(int(input()))
print(account.balance)`,hints:[`方法通过 self.balance 修改当前实例。`,`先验证 amount，再更新；负数保持原状态。`],explanation:`余额属于对象状态，入账规则由方法维护。负数用例确保接口不会无意减少余额。`,cases:[{name:`正常入账`,input:`100
25`,output:`125
`},{name:`零金额`,input:`0
0`,output:`0
`},{name:`拒绝负数`,input:`50
-20`,output:`50
`}]},dicts:{id:`word-frequency`,revision:1,title:`稳定输出词频`,task:`读取一行由空格分隔的英文单词，按字典序输出每个不同单词及次数，各占一行。空行不输出任何内容。`,constraints:`最多 12 个小写 ASCII 单词；不含标点。`,starter:`words = input().split()
counts = {}
# 计数，再按排序后的键输出
`,solution:`words = input().split()
counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1
for word in sorted(counts):
    print(word, counts[word])`,hints:[`缺失键计数从零开始。`,`先完成计数，再 sorted(counts) 产生稳定的键顺序。`],explanation:`字典保存频次，排序负责展示；两者职责不同，不能依赖输入顺序恰好等于字典序。`,cases:[{name:`空行`,input:`
`,output:``},{name:`单个单词`,input:`star`,output:`star 1
`},{name:`乱序重复`,input:`b a b c a b`,output:`a 2
b 3
c 1
`}]},comprehensions:{id:`even-squares`,revision:1,title:`筛选偶数再映射平方`,task:`读取一行整数，保持原顺序，仅输出其中偶数的平方，以一个空格分隔。没有结果时输出空行。`,constraints:`最多 12 个整数，每值在 −20 到 20。`,starter:`values = list(map(int, input().split()))
# 生成结果并输出
`,solution:`values = list(map(int, input().split()))
result = [x * x for x in values if x % 2 == 0]
print(" ".join(map(str, result)))`,hints:[`负偶数仍满足 x%2==0。`,`join 需要字符串序列，空序列产生空文本。`],explanation:`筛选条件决定保留哪些输入，映射表达式决定保留下来的项变成什么，顺序按原输入保留。`,cases:[{name:`全奇数`,input:`1 3 -5`,output:`
`},{name:`含零`,input:`0 2 4`,output:`0 4 16
`},{name:`正负混合`,input:`-4 3 -2 5 6`,output:`16 4 36
`}]},generators:{id:`squares-stream`,revision:1,title:`逐项生成平方数`,task:`读入 n，补全生成器 squares(n)，依次 yield 从 0 到 n−1 的平方。输出用空格分隔的一行。`,constraints:`0≤n≤10；自测核对输出，另需用回放观察 yield。`,starter:`def squares(n):
    # 逐项 yield 平方
    yield from ()

n = int(input())
print(" ".join(map(str, squares(n))))`,solution:`def squares(n):
    for i in range(n):
        yield i * i

n = int(input())
print(" ".join(map(str, squares(n))))`,hints:[`range(n) 不包含 n。`,`每轮 yield 一个值，而非 return 一个固定值后退出。`],explanation:`生成器把产出与消费分开。零长度、单项与多项检查边界；执行回放还应体现每次暂停和恢复。`,cases:[{name:`零项`,input:`0`,output:`
`},{name:`一项`,input:`1`,output:`0
`},{name:`五项`,input:`5`,output:`0 1 4 9 16
`}]},json:{id:`json-pass-count`,revision:1,title:`读取 JSON 生成及格报告`,task:`读取虚拟文件 scores.json，其中是成绩整数列表。输出 >=60 的人数，并把相同人数写入 report.txt，末尾换行。`,constraints:`最多 10 个合法成绩，范围 0..100；JSON 保证语法和结构合法。`,starter:`import json

# 读取 scores.json，统计并输出，生成 report.txt
`,solution:`import json

with open("scores.json", encoding="utf-8") as file:
    scores = json.load(file)
count = sum(score >= 60 for score in scores)
print(count)
with open("report.txt", "w", encoding="utf-8") as file:
    file.write(str(count) + "\\n")`,hints:[`json.load 接受打开的文件对象。`,`及格包含 60；用 with 写出报告并确保退出时关闭。`],explanation:`检查同时核对标准输出与生成的虚拟文件，避免只打印正确结果却遗漏保存报告。`,cases:[{name:`空记录`,input:``,files:{"scores.json":`[]`},output:`0
`,expectedFiles:{"report.txt":`0
`}},{name:`临界成绩`,input:``,files:{"scores.json":`[59,60,61]`},output:`2
`,expectedFiles:{"report.txt":`2
`}},{name:`全及格`,input:``,files:{"scores.json":`[80,100]`},output:`2
`,expectedFiles:{"report.txt":`2
`}}]},project:{id:`gradebook-report`,revision:1,title:`完成成绩簿的更新与统计`,task:`第一行输入记录数 n，随后 n 行每行 name score。同名记录覆盖旧成绩。输出及格姓名（字典序、空格分隔），再输出两位小数平均分。空成绩簿第一行为空、平均分 0.00。`,constraints:`0≤n≤8；name 是 ASCII 单词，score 在 0..100。`,starter:`class GradeBook:
    def __init__(self):
        self.scores = {}
    def put(self, name, score):
        # 更新记录
        pass
    def passed(self):
        return []
    def average(self):
        return 0.0

book = GradeBook()
for _ in range(int(input())):
    name, score = input().split()
    book.put(name, int(score))
print(" ".join(book.passed()))
print(f"{book.average():.2f}")`,solution:`class GradeBook:
    def __init__(self):
        self.scores = {}
    def put(self, name, score):
        self.scores[name] = score
    def passed(self):
        return sorted(name for name, score in self.scores.items() if score >= 60)
    def average(self):
        return sum(self.scores.values()) / len(self.scores) if self.scores else 0.0

book = GradeBook()
for _ in range(int(input())):
    name, score = input().split()
    book.put(name, int(score))
print(" ".join(book.passed()))
print(f"{book.average():.2f}")`,hints:[`字典按姓名更新，人数是唯一键的数量。`,`空数据先处理，再除以人数；排序只用于输出姓名。`],explanation:`同名更新会影响最终平均值但不增加唯一人数。对象方法只处理数据，输入输出留在主流程。`,cases:[{name:`空簿`,input:`0`,output:`
0.00
`},{name:`一般记录`,input:`3
Nova 50
Astra 80
Luna 60`,output:`Astra Luna
63.33
`},{name:`同名更新`,input:`3
Astra 20
Nova 100
Astra 80`,output:`Astra Nova
90.00
`}]}},y=[p({id:`operators`,title:`运算、真值与短路`,summary:`区分 /、//、% 与逻辑表达式返回的对象。`,prerequisites:[`types`],objectives:[`解释整除向下取整`,`理解 and/or 的短路和返回值`],sections:[[`整数与浮点数有不同运算约定`,`Python 的 / 执行真除法，// 进行向下取整的整除，因此 -7//2 为 -4。余数与除数保持对应关系 a==(a//b)*b+a%b。整数可按需要扩展精度，但受可用内存与执行时间约束；浮点数仍有舍入误差。`],[`逻辑运算不总是返回布尔值`,`and 与 or 按真值短路，并返回某个操作数本身。空容器、空字符串、零和 None 通常是假值，但含义不同。使用 value or default 可能把合法的零也替换掉，是否需要默认值应依据具体契约判断。`]],pitfalls:[`负数整除与 C、Java 的向零截断不同。`,`is 不能代替数值相等比较。`],observe:[`同时检查两种除法、余数和 or 的结果类型。`],experiment:`将 a 改为 7，对照正负整数除法与余数。`,code:`a = -7
print(a / 2, a // 2, a % 2)
value = 0 or 5
print(value)`,expectedOutput:`-3.5 -4 1
5
`,quiz:[f(`-7//2 的结果为？`,[`-3`,`-4`,`3`],1,`Python 整除向负无穷取整，-3.5 向下取整得到 -4，与向零截断不同。`),f(`0 or 5 返回什么？`,[`False`,`True`,`整数 5`],2,`or 在左侧是假值时返回右侧操作数，因此结果是整数 5，而非自动转换的布尔值。`)]}),p({id:`strings`,title:`字符串、切片与格式化`,summary:`用不可变文本处理索引、切片与显示格式。`,prerequisites:[`types`],objectives:[`解释切片左闭右开`,`理解字符串不可变`],sections:[[`切片创建所需区间的文本`,`字符串是 Unicode 文本序列，索引与切片按语言的序列规则工作。s[start:stop:step] 以 stop 不包含的形式选择元素，可用负下标从末尾计数。字符串长度并不总等于人眼看到的字形数量，更不等于 UTF-8 字节数。`],[`不可变与格式化分开理解`,`字符串方法通常返回新字符串，不会原地改写原字符串。f-string 把表达式结果嵌入文本，可控制数字精度；格式化改变显示方式，不会使浮点数变成精确十进制。需要精确金额时应另选适当的数据表示。`]],pitfalls:[`s[0]="A" 不能修改字符串。`,`切片终点不包含在结果内。`],observe:[`查看 title 保持原样，而 part 是新生成的切片。`],experiment:`比较 title[-2:]、title[:3] 与 title[::-1]。`,code:`title = "Astra"
part = title[1:4]
score = 2 / 3
print(part, title[-1])
print(f"{score:.2f}")`,expectedOutput:`str a
0.67
`,quiz:[f(`"Astra"[1:4] 得到？`,[`str`,`stra`,`Astr`],0,`切片从下标 1 开始，到下标 4 之前结束，选中下标 1、2、3 三个字符。`),f(`调用 s.upper() 会原地改变 s 吗？`,[`会`,`不会，返回新字符串`,`只改变首字符`],1,`字符串不可变，upper 返回转换后的字符串，只有重新绑定名称才能让 s 指向新值。`)]}),p({id:`list-methods`,title:`列表操作与可变性`,summary:`区分原地操作、返回新列表与嵌套共享。`,prerequisites:[`arrays`,`traversal`],view:`memory`,objectives:[`正确使用 append、extend、sort`,`识别列表复制的层次`],sections:[[`方法的返回值需要单独确认`,`append 把一个对象作为元素加入，extend 逐个加入可迭代对象的元素。sort 原地排序并返回 None，sorted 则创建新列表。不要因为一个方法改变了列表，就假定它返回改变后的列表。`],[`容器保存的是对象引用`,`列表可以包含不同类型对象，赋值并不复制列表内容。切片或 copy 创建浅复制，只复制外层容器的元素引用；嵌套列表仍可能共享内部对象。二维列表用 [[0]*m]*n 创建时，各行可能是同一个列表。`]],pitfalls:[`values=values.sort() 会把名称绑定到 None。`,`重复同一内层列表不会创建独立行。`],observe:[`查看 append 与 extend 后元素层级，再比较排序返回值。`],experiment:`创建两层列表并浅复制，修改内层对象观察共享。`,code:`values = [3, 1]
values.append(2)
returned = values.sort()
copy = values + [4]
print(values, returned)
print(copy)`,expectedOutput:`[1, 2, 3] None
[1, 2, 3, 4]
`,quiz:[f(`list.sort() 返回什么？`,[`排好序的新列表`,`None`,`原长度`],1,`sort 原地修改原列表，返回 None；需要新列表时应使用 sorted 或先复制。`),f(`浅复制嵌套列表后，内层对象是否总是独立？`,[`总独立`,`不一定，内层引用可能共享`,`禁止复制`],1,`浅复制只建立新的外层容器，元素若本身是可变对象，仍可被两边共同引用。`)]}),p({id:`tuple-unpack`,title:`元组、解包与不可变边界`,summary:`用结构化返回值和解包连接多个数据。`,prerequisites:[`arrays`],objectives:[`使用元组解包`,`区分容器不可变与内部对象可变`],sections:[[`逗号构成元组与多目标绑定`,`元组常用于固定结构的记录或返回多个结果，逗号是构造元组的关键。解包要求元素数量与目标匹配，带星号的目标可接收中间剩余项。a,b=b,a 会先计算右侧，再按位置绑定左侧名称。`],[`不可变只约束元组自己的位置`,`元组不能替换某个位置的元素，但若该元素是列表，列表内容仍可修改。是否可哈希还取决于元素能否哈希，不能简单把“元组”当作“总能作为字典键”的同义词。`]],pitfalls:[`单元素元组需要逗号，例如 (3,)。`],observe:[`查看 a,b 交换后各自绑定，以及 head、middle、tail 的类型。`],experiment:`将被解包序列改成三个元素，检查带星号目标的结果。`,code:`a, b = 2, 7
a, b = b, a
head, *middle, tail = (1, 2, 3, 4)
print(a, b)
print(head, middle, tail)`,expectedOutput:`7 2
1 [2, 3] 4
`,quiz:[f(`(3) 与 (3,) 的区别是？`,[`前者整数，后者单元素元组`,`完全相同`,`前者列表`],0,`括号可用于表达式分组，单元素元组需要尾随逗号来明确元组构造。`),f(`元组里包含列表时，列表内容可修改吗？`,[`不可以`,`可以，元组位置仍不改变`,`只能修改一次`],1,`元组不可变指位置引用不能替换，位置所指可变对象仍能按其自身规则修改。`)]}),p({id:`dicts`,title:`字典、映射与计数`,summary:`用键定位数据，建立频次表与记录索引。`,prerequisites:[`loops`,`strings`],view:`memory`,objectives:[`以 get 处理缺失键`,`区分键、值和键值对遍历`],sections:[[`映射回答“这个键对应什么”`,`字典把可哈希键映射到值，适合索引、频次和具名记录。直接访问缺失键会抛 KeyError，get 可以提供默认值。字典按插入顺序迭代，但这不是按字母或数值排序；需要排序时应明确调用 sorted。`],[`计数是一种状态更新模式`,`counts[word]=counts.get(word,0)+1 先读旧次数，再存回新次数。键比较与哈希共同参与定位，列表等常见可变容器不能作为普通字典键。遍历字典期间不要直接改变键集合，可先收集待删除项再处理。`]],pitfalls:[`for x in dict 默认遍历键。`,`缺失键与值为 None 的已有键是不同状态。`],observe:[`每个单词出现时观察对应计数，再查看排序后的输出。`],experiment:`增加一个新词和一个重复词，说明哪些键的值改变。`,code:`counts = {}
for word in "star moon star".split():
    counts[word] = counts.get(word, 0) + 1
for word in sorted(counts):
    print(word, counts[word])`,expectedOutput:`moon 1
star 2
`,quiz:[f(`遍历字典 d 默认得到什么？`,[`键`,`值`,`自动排序的键值对`],0,`字典直接迭代产生键；值用 values，键值对用 items，排序必须另行明确。`),f(`counts.get(word,0) 的作用是？`,[`缺失时提供零作为初值`,`删除这个键`,`保证键按字母排序`],0,`get 在缺失键时返回默认值，不会因此自动插入；赋值语句随后才更新计数映射。`)]}),p({id:`sets`,title:`集合、去重与成员判断`,summary:`把“是否出现过”与元素顺序分开处理。`,prerequisites:[`arrays`,`dicts`],objectives:[`使用交并差与成员测试`,`理解集合不提供序列位置`],sections:[[`集合表达互不重复的成员`,`set 适合去重、成员判断和集合运算。| 求并集，& 求交集，- 求差集。集合元素需要可哈希，空集合必须写 set()，因为 {} 构造的是字典。需要保持原顺序的去重任务还要另外设计顺序记录。`],[`不要依赖当前显示的迭代顺序`,`集合没有序列下标，也不承诺按插入或排序顺序展示。为了稳定输出与测试，可以把结果交给 sorted；排序只是展示策略，不会改变集合成员语义。是否选择集合，应看任务是否需要数量、顺序或重复项。`]],pitfalls:[`{} 是空字典，而不是空集合。`],observe:[`分别查看去重成员和交集，再用 sorted 输出稳定顺序。`],experiment:`保留重复次数的需求出现时，比较集合与计数字典的差别。`,code:`a = {1, 2, 2, 3}
b = {2, 4}
print(sorted(a))
print(sorted(a & b), sorted(a | b))`,expectedOutput:`[1, 2, 3]
[2] [1, 2, 3, 4]
`,quiz:[f(`空集合应写为？`,[`{}`,`set()`,`[]`],1,`{} 表示空字典，set() 才创建空集合；这影响后续可用方法与成员语义。`),f(`需要稳定排序输出集合时应？`,[`依赖当前遍历顺序`,`使用 sorted 得到排序序列`,`按下标读取集合`],1,`集合本身不提供排序顺序保证，sorted 会产生明确的展示序列，便于复核输出。`)]}),p({id:`comprehensions`,title:`推导式：映射与筛选`,summary:`把数据来源、筛选条件和结果表达式明确分开。`,prerequisites:[`list-methods`,`branch`],objectives:[`编写列表和字典推导式`,`选择适合阅读的复杂度`],sections:[[`按生成顺序阅读推导式`,`[x*x for x in values if x%2==0] 先从 values 取 x，再检查筛选条件，最后计算要收集的结果。映射表达式写在前面，但理解时应沿数据流阅读。字典推导式还需明确键冲突时后面的值会覆盖前面的值。`],[`简洁不应损害可解释性`,`简单映射和筛选适合推导式；多层副作用、复杂异常处理或难读条件更适合普通循环。推导式会立即构造结果列表，生成器表达式则惰性产生值，处理大量数据时内存行为不同。`]],pitfalls:[`筛选 if 与条件表达式的 if-else 位置不同。`],observe:[`先数出参与筛选的元素，再核对最终平方值。`],experiment:`将条件改为奇数；再改为所有元素映射并保留长度。`,code:`values = [-2, -1, 0, 3, 4]
squares = [x * x for x in values if x % 2 == 0]
print(squares)`,expectedOutput:`[4, 0, 16]
`,quiz:[f(`推导式中末尾 if 的作用是？`,[`筛选是否收集该元素`,`保证保留原长度`,`启动异常处理`],0,`末尾 if 过滤不符合条件的元素，因此结果长度可能小于原序列长度。`),f(`列表推导式的结果何时构造？`,[`立即构造列表`,`第一次点击时间轴时`,`从不保存元素`],0,`列表推导式立即求值得到新列表，惰性逐项生成需要使用生成器等其他机制。`)]}),p({id:`arguments`,title:`参数绑定、默认值与可变陷阱`,summary:`看清调用时绑定，及函数定义时只创建一次的默认对象。`,prerequisites:[`functions`,`list-methods`],view:`memory`,objectives:[`区分位置参数与关键字参数`,`避免可变默认值意外共享`],sections:[[`调用把实参绑定到形参名称`,`Python 调用会把对象绑定到函数局部名称。参数重新赋值不改调用方名称，修改共享可变对象则可能被调用方看见。位置、关键字和可变参数提供不同的绑定方式，接口应保持常用调用清楚而非堆叠任意参数。`],[`默认值在定义时计算一次`,`def add(x,items=[]) 会让多个未提供 items 的调用共享同一个默认列表。若每次需要独立列表，使用 None 作为哨兵并在函数内创建。None 是否也是有效业务值，决定这种哨兵是否适合该接口。`]],pitfalls:[`可变默认参数不会在每次调用时自动重建。`],observe:[`对比两次 append_item 调用中各自建立的列表对象。`],experiment:`暂时改为 items=[]，连续调用两次观察共享，再恢复 None 方案。`,code:`def append_item(value, items=None):
    if items is None:
        items = []
    items.append(value)
    return items

a = append_item(1)
b = append_item(2)
print(a, b)`,expectedOutput:`[1] [2]
`,quiz:[f(`函数默认列表通常何时创建？`,[`每次调用`,`函数定义执行时`,`打印时`],1,`默认参数表达式在定义执行时求值，多次省略该参数的调用会复用同一个默认对象。`),f(`修改参数绑定的列表内容，调用方可能看到吗？`,[`可能，因为可共享同一对象`,`绝不可能`,`只有列表为空时`],0,`参数名称可与调用方名称引用同一可变对象，对其内容的修改可以被其他别名观察到。`)]}),p({id:`alias-copy`,title:`别名、浅复制与深复制`,summary:`用真实对象图区分共享引用和独立对象。`,prerequisites:[`list-methods`,`scope`],view:`memory`,concept:`references`,minutes:35,objectives:[`用 is 判断对象身份`,`解释浅复制的嵌套共享`,`按需求选择复制层次`],sections:[[`赋值建立另一个绑定`,`b=a 不复制列表；a 和 b 绑定同一个对象。a==b 比较相等语义，a is b 比较身份。空列表等对象内容相等但身份可不同。不要把整数或字符串驻留等实现优化当作 is 可用于值比较的依据。`],[`浅复制新建外层，深复制递归处理`,`a.copy() 创建新的外层列表，但里面的可变元素仍可能共享。copy.deepcopy 按协议递归复制并处理已见对象，代价和业务含义都需要评估。有些资源不适合复制；明确哪些部分应共享，比盲目深复制更重要。`]],pitfalls:[`相等不等于同一个对象。`,`del 名称只删除绑定，不保证对象立即消失。`],observe:[`先看 a、b 的同一编号，再看 shallow 外层独立但内层共享。`],experiment:`增加 deepcopy 版本，修改嵌套元素比较三份结果。`,code:`a = [[1], [2]]
b = a
shallow = a.copy()
b[0].append(9)
print(a is b, a is shallow)
print(a, shallow)`,expectedOutput:`True False
[[1, 9], [2]] [[1, 9], [2]]
`,quiz:[f(`b=a 对列表做了什么？`,[`深复制`,`绑定同一对象`,`复制所有元素到新对象`],1,`普通赋值把名称绑定到现有对象，a 与 b 因此共享身份，而不是生成新列表。`),f(`浅复制后内层列表仍共享，说明什么？`,[`浅复制失败`,`只复制外层容器，元素引用仍可共享`,`所有复制都不可能独立`],1,`浅复制按设计只新建外层并复制元素引用，嵌套对象是否独立需要另行决定。`)]}),p({id:`recursion`,title:`递归与问题规模`,summary:`通过多个调用上下文观察递减与结果合并。`,prerequisites:[`functions`,`branch`],objectives:[`设计可达的基例`,`解释递归深度与返回链`],sections:[[`递归是一种任务分解`,`把问题表示为更小的同类问题，再给最小情形直接答案。阶乘中的 n−1 保证非负输入逐渐到达基例。递归不是自动更高效，重复子问题可能带来大量重复计算，后续算法空间的动态规划会进一步讨论。`],[`每次调用都有局部名称`,`多个 fact 调用拥有不同的 n，最深层返回后，等待的乘法按调用栈向外完成。Python 有递归深度限制，也不应依赖尾调用优化。输入规模大时可能需要迭代或显式栈，同时仍须遵守算法本身的复杂度约束。`]],pitfalls:[`扩大递归限制不是修复无限递归的方法。`],observe:[`在 n=1 时看完整调用链，再沿 return 回到顶层。`],experiment:`将 fact 改为累加 1 到 n，先写清楚基例和递推式。`,code:`def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)

answer = fact(4)
print(answer)`,expectedOutput:`24
`,quiz:[f(`fact(n-1) 在本例中的作用是？`,[`让问题规模靠近基例`,`自动缓存结果`,`删除调用栈`],0,`非负整数 n 每次减一会到达基例，这个进展保证递归有机会正常结束。`),f(`Python 递归是否可以无限加深？`,[`可以`,`不可以，受深度和资源限制`,`只要没有打印就可以`],1,`递归需要调用上下文并受解释器深度及资源限制，算法和输入规模必须适合这种实现。`)]}),p({id:`closures`,title:`作用域、闭包与 nonlocal`,summary:`让函数保留对外层绑定的访问，并明确更新的是哪一层。`,prerequisites:[`scope`,`functions`],view:`memory`,objectives:[`解释闭包捕获的绑定`,`使用 nonlocal 更新外层局部状态`],sections:[[`函数可以携带外层环境`,`在外层函数里定义的内部函数，可在外层返回后继续访问需要的绑定，这称为闭包。闭包保存的不是把每个值永远冻结的照片，而是对相关绑定的访问。循环中创建多个闭包时，要留意它们可能共享同一个后续变化的变量。`],[`nonlocal 指向外层函数绑定`,`内部函数若要重新赋值到外层函数的名称，需要 nonlocal；global 则指向模块全局名称。两者不能混用。共享可变状态会让调用顺序重要，应将状态范围保持清楚，复杂业务也可以用类表达同样的职责。`]],pitfalls:[`闭包读取当前绑定，不自动冻结循环变量每轮的值。`],observe:[`调用计数器两次，检查同一个闭包环境中的 count。`],experiment:`创建两个 counter，比较各自状态是否独立。`,code:`def make_counter():
    count = 0
    def step():
        nonlocal count
        count += 1
        return count
    return step

counter = make_counter()
print(counter(), counter())`,expectedOutput:`1 2
`,quiz:[f(`nonlocal 用于重新绑定哪一层名称？`,[`外层函数已有绑定`,`任意类字段`,`只读内置名称`],0,`nonlocal 指定最近相关外层函数作用域中的已有绑定，和模块级 global 的目标不同。`),f(`两个独立 make_counter() 调用的 count 通常？`,[`各自独立`,`天然全局共享`,`总为零`],0,`每次外层调用建立独立环境，返回的闭包分别保留自己的状态，而不是共用一个模块变量。`)]}),p({id:`decorators`,title:`装饰器：包装已有行为`,summary:`用可调用对象组合功能，保持接口与返回值清楚。`,prerequisites:[`closures`,`arguments`],objectives:[`理解 @decorator 的替换含义`,`正确转发参数与返回值`],sections:[[`装饰器接收函数再返回可调用对象`,`@trace 写在定义前，基本含义是把原函数交给 trace，再用其返回值绑定函数名。包装器可以在调用前后增加行为，也可以保留计数或缓存状态。它不是编译器凭空插入的特殊执行线程。`],[`转发要保留业务结果`,`通用包装器常用 *args、**kwargs 转发参数，并 return 原函数结果。functools.wraps 保留名称和文档等元信息，便于调试与帮助系统。装饰器不应悄悄改变接口契约或吞掉异常，除非这正是已说明的功能。`]],pitfalls:[`漏写 return 会让包装后的调用结果变为 None。`],observe:[`比较 wrapper 与原函数的调用层级，以及返回到 answer 的结果。`],experiment:`在包装器中加入调用次数，但保持结果与异常语义不变。`,code:`from functools import wraps

def doubled_result(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        return 2 * function(*args, **kwargs)
    return wrapper

@doubled_result
def add(a, b):
    return a + b

answer = add(2, 3)
print(answer)`,expectedOutput:`10
`,quiz:[f(`@d 放在函数 f 定义前大致相当于？`,[`f=d(f)`,`d=f+1`,`立即无限调用 f`],0,`装饰器在定义后处理函数对象，并把返回的可调用对象重新绑定到原函数名称。`),f(`包装器若漏写 return 原函数结果，会怎样？`,[`自动保留结果`,`通常返回 None`,`自动抛 SyntaxError`],1,`普通函数执行到末尾返回 None，调用过内部函数并不会自动把其结果传给外部调用者。`)]}),p({id:`classes`,title:`类、实例与 self`,summary:`把数据与操作组织为对象，用状态变化理解方法调用。`,prerequisites:[`functions`,`alias-copy`],view:`memory`,minutes:35,objectives:[`定义类并创建独立实例`,`解释 self 与属性`,`区分初始化与创建`],sections:[[`类描述行为，实例承载各自状态`,`执行 class 语句创建类对象，调用类通常创建并初始化实例。__init__ 为已经建立的实例设置初始属性，不应返回任意业务值。self 是方法第一个参数的惯用名称，指向本次调用所操作的实例，并非所有实例共用的全局对象。`],[`方法通过实例关联状态`,`counter.add(2) 把 counter 对应实例作为 self 传入方法。方法里的 self.value 与局部 value 不同，前者保存在实例中，可被后续方法调用访问。两个实例有不同身份和状态，多个名称也可以引用同一个实例。`]],pitfalls:[`__init__ 负责初始化，不是普通返回对象的工厂函数。`,`方法局部变量不会自动成为实例属性。`],observe:[`查看 a 和 b 的不同实例编号，跟随 self 只修改 a。`],experiment:`令 b=a，再调用 b.add，比较两个名称是否共享变化。`,code:`class Counter:
    def __init__(self, value):
        self.value = value
    def add(self, step):
        self.value += step

a = Counter(3)
b = Counter(10)
a.add(2)
print(a.value, b.value)`,expectedOutput:`5 10
`,quiz:[f(`self 通常指向什么？`,[`当前方法操作的实例`,`所有实例共用的类`,`一个固定整数`],0,`绑定方法调用把对应实例传入第一个参数，self 因此定位本次要读取或修改的实例。`),f(`局部 value 与 self.value 是否自动相同？`,[`是`,`不是，分别是局部绑定与实例属性`,`只看名字长度`],1,`局部名称属于调用作用域，self.value 是对象属性访问，两者有不同的存放与访问路径。`)]}),p({id:`instance-class`,title:`实例属性与类属性`,summary:`区分每个对象独有状态与类级共享配置。`,prerequisites:[`classes`],view:`memory`,objectives:[`识别共享类属性`,`避免把每实例容器写成类属性`],sections:[[`属性查找与赋值要分开看`,`实例读取属性时可以找到类上的属性；普通实例赋值通常会建立或更新实例自己的属性，从而遮蔽同名类属性。类属性适合共享配置或统计，不应把它误当每个实例自动拥有的独立存储。`],[`可变类属性尤其容易共享`,`若在 class 体中写 items=[]，多个实例通过它访问的可能是同一个列表。每个实例应有独立列表时，在 __init__ 中写 self.items=[]。修改共享容器内容与给实例重新绑定同名属性，是两种不同动作。`]],pitfalls:[`在类体中创建的列表不是每个实例一份。`],observe:[`查看类上的 created 和每实例 items，确认两个列表身份不同。`],experiment:`将 items 移到类体，观察两个实例添加后是否混在一起。`,code:`class Notebook:
    created = 0
    def __init__(self):
        self.items = []
        Notebook.created += 1

a = Notebook()
b = Notebook()
a.items.append("C")
print(a.items, b.items, Notebook.created)`,expectedOutput:`['C'] [] 2
`,quiz:[f(`每个实例独立列表适合在哪里创建？`,[`__init__ 中的 self.items=[]`,`类体 items=[]`,`只在 print 中`],0,`初始化时为每个新实例分别创建列表，能避免多个实例共用同一个可变类属性。`),f(`读取到类属性后，对实例同名普通属性赋值通常会？`,[`建立实例属性并遮蔽类属性`,`删除整个类`,`自动改所有实例`],0,`通常的实例属性赋值写入该实例自身，后续查找先得到它，类上的原属性仍可存在。`)]}),p({id:`properties`,title:`属性、封装与验证`,summary:`用 property 保持自然访问形式，同时约束状态变化。`,prerequisites:[`classes`,`branch`],view:`memory`,objectives:[`使用 getter 与 setter`,`在对象边界维护不变量`],sections:[[`封装的目标是保持合法状态`,`封装不只是把字段加下划线，而是让对象的可观察行为与状态约束一致。Python 的单下划线是一种非公开约定，双下划线名称改写也不是安全隔离。应通过清晰接口表达允许的操作与失败行为。`],[`property 将访问接到方法`,`property 允许读取和赋值外观不变，内部执行 getter 或 setter。验证失败可以抛明确异常，成功后更新实际存储。观察器不应为了显示对象而随意调用 property，因为访问器可能有副作用；对象图只读取已保存状态。`]],pitfalls:[`下划线不是绝对禁止外部访问的安全机制。`],observe:[`比较 amount 的访问接口与 _amount 中的实际保存值。`],experiment:`给 amount 赋负数并捕获 ValueError，确认旧状态保留。`,code:`class Wallet:
    def __init__(self, amount):
        self.amount = amount
    @property
    def amount(self):
        return self._amount
    @amount.setter
    def amount(self, value):
        if value < 0:
            raise ValueError("negative amount")
        self._amount = value

w = Wallet(5)
w.amount = 8
print(w.amount)`,expectedOutput:`8
`,quiz:[f(`property setter 适合做什么？`,[`在更新对象状态前验证条件`,`绕过所有方法调用`,`隐藏浏览器密码`],0,`setter 可把赋值接入验证逻辑，保持对象不变量，失败时应有清楚且一致的行为。`),f(`对象观察器应自动调用所有 property 吗？`,[`应该`,`不应该，可能产生副作用`,`只要名称短就应该`],1,`属性访问器本质可执行代码，可能改变状态或抛异常，显示状态不应悄悄执行它们。`)]}),p({id:`inheritance`,title:`继承、重写与 super`,summary:`通过可替换行为理解继承，而非仅为了少写代码。`,prerequisites:[`classes`,`properties`],view:`memory`,objectives:[`重写实例方法`,`用 super 协作初始化`,`解释实际对象决定的行为`],sections:[[`继承表达可替换的关系`,`子类继承并可重写父类行为，调用会按对象类型和方法解析顺序寻找实现。若子类破坏父类接口的预期，代码复用并没有形成好的设计。先判断是否确实存在“是一种”的关系，拥有某个组件则通常更适合组合。`],[`super 遵循方法解析顺序`,`super 不是简单写死“调用某个父类对象”，它沿方法解析顺序继续寻找实现。单继承中常用来复用父类初始化，多继承中需要各类协作保持兼容参数。这里只用单继承建立清晰基础，不把多继承当作默认选择。`]],pitfalls:[`子类自定义 __init__ 后不会自动替你完成所有父类初始化。`],observe:[`查看 Dog 实例与父类关系，再跟随被重写的 speak。`],experiment:`增加另一种 Animal 子类，让同一调用代码输出不同声音。`,code:`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
    def speak(self):
        return self.name + ": woof"

pet = Dog("Astra")
print(pet.speak())`,expectedOutput:`Astra: woof
`,quiz:[f(`子类重写方法后，实例调用通常执行？`,[`实际类型按解析规则找到的实现`,`总是父类版本`,`随机版本`],0,`方法查找依据实际对象的类型和方法解析顺序，子类重写可提供新的可观察行为。`),f(`super 主要依据什么继续查找？`,[`方法解析顺序`,`变量名字母顺序`,`实例创建时间`],0,`super 沿当前类型体系的方法解析顺序协作查找，不是任意选择某个父类对象。`)]}),p({id:`composition`,title:`组合与鸭子类型协作`,summary:`让对象通过明确协议合作，降低继承耦合。`,prerequisites:[`classes`,`inheritance`],view:`memory`,objectives:[`以持有对象实现组合`,`用共同方法协议替换组件`],sections:[[`拥有组件与属于类型不同`,`课程目录拥有一个存储组件，不意味着它是一种存储组件。组合把职责委托给内部对象，构造时注入所需依赖，就能替换实现而不修改业务流程。依赖关系应直接清楚，避免为简单任务堆叠没有实际需要的工厂和层次。`],[`鸭子类型关注可用行为`,`Python 常根据对象能否提供所需方法来协作，而不要求继承同一个具体类。这不代表没有契约：参数、返回值、副作用和错误仍需明确，类型提示或 Protocol 可进一步表达静态约束，但运行时不会自动证明其满足业务语义。`]],pitfalls:[`缺少显式继承不等于可以忽略接口约定。`],observe:[`沿 Service→store 的关系查看委托调用，确认数据由组件保存。`],experiment:`增加另一个提供 save 方法的组件，在不修改 Service 的情况下替换。`,code:`class MemoryStore:
    def __init__(self):
        self.items = []
    def save(self, text):
        self.items.append(text)

class Notes:
    def __init__(self, store):
        self.store = store
    def add(self, text):
        self.store.save(text)

store = MemoryStore()
notes = Notes(store)
notes.add("pointer")
print(store.items)`,expectedOutput:`['pointer']
`,quiz:[f(`组合关系更接近哪种表述？`,[`拥有并委托一个组件`,`必须继承组件`,`两个类名字相同`],0,`组合用对象引用持有协作对象并委托职责，适合“拥有一个”的关系，而非强行继承。`),f(`鸭子类型是否意味着没有契约？`,[`是`,`不是，仍需约定行为和输入输出`,`只有方法名重要`],1,`对象虽不必继承同一具体类，但所需方法的参数、结果和副作用仍需满足调用方预期。`)]}),p({id:`dunder`,title:`数据模型与特殊方法`,summary:`通过 __repr__、__len__ 与 __eq__ 让对象融入语言协议。`,prerequisites:[`classes`,`tuple-unpack`],objectives:[`实现有意义的对象表示`,`区分比较语义和对象身份`],sections:[[`特殊方法连接语言操作`,`len(obj)、repr(obj) 和相等比较会按数据模型寻找特定方法。特殊方法应遵守协议：例如 __len__ 返回非负整数，__repr__ 提供有助调试的表示。不要仅因能重载就制造与用户预期不一致的运算含义。`],[`相等与哈希需要协调`,`__eq__ 可以定义业务值相等，不适用的比较可返回 NotImplemented 让语言继续协商。可哈希对象需要相等对象有相同哈希值，参与哈希的状态不应在作为键后改变。只实现相等并不自动意味着适合字典键。`]],pitfalls:[`__repr__ 不是自动调用所有属性的许可。`],observe:[`比较两个不同 Point 的 == 与 is，再查看格式化表示。`],experiment:`给 Point 增加一个字段，并重新决定哪些字段参与相等。`,code:`class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
    def __eq__(self, other):
        if not isinstance(other, Point):
            return NotImplemented
        return (self.x, self.y) == (other.x, other.y)

a = Point(2, 3)
b = Point(2, 3)
print(a, a == b, a is b)`,expectedOutput:`Point(2, 3) True False
`,quiz:[f(`定义 __eq__ 后，== 与 is 是否相同？`,[`相同`,`不同，值语义与身份仍分开`,`is 被删除`],1,`__eq__ 定义相等语义，但 is 始终比较是否同一对象，二者目的不同。`),f(`相等的可哈希对象需要满足什么？`,[`相同哈希值`,`相同变量名`,`相同创建时间`],0,`哈希容器依赖相等对象具有一致哈希值，参与哈希的状态也必须保持适合键的稳定性。`)]}),p({id:`dataclasses`,title:`dataclass 与记录对象`,summary:`用显式字段减少样板，仍然理解默认值与不可变边界。`,prerequisites:[`classes`,`instance-class`,`dunder`],view:`memory`,objectives:[`定义数据类字段`,`用 default_factory 创建独立容器`],sections:[[`数据类自动生成常见方法`,`dataclass 根据字段声明生成初始化、表示和相等等常见方法，适合以数据为主的记录。类型注解有助工具理解字段，但不会自动对所有运行时赋值做严格验证。需要业务约束时仍应设计方法或初始化后检查。`],[`容器默认值用工厂产生`,`每个实例独立的列表应使用 field(default_factory=list)。frozen 限制常规字段重新赋值，但不能把内部可变对象递归变成不可变。简化样板并不意味着可以省略对共享、相等和哈希语义的判断。`]],pitfalls:[`类型注解不自动等于运行时输入校验。`],observe:[`查看两个 Notebook 的独立 tags，确认只修改第一个。`],experiment:`加入 frozen=True，分析为什么内部列表的可变性需要另外考虑。`,code:`from dataclasses import dataclass, field

@dataclass
class Notebook:
    title: str
    tags: list[str] = field(default_factory=list)

a = Notebook("C")
b = Notebook("Python")
a.tags.append("memory")
print(a.title, a.tags, b.tags)`,expectedOutput:`C ['memory'] []
`,quiz:[f(`独立列表默认值应使用？`,[`field(default_factory=list)`,`所有实例共用一个全局列表`,`把列表写成字符串`],0,`工厂在每个实例初始化时创建新列表，避免把可变默认对象共享给多个实例。`),f(`frozen 数据类是否保证嵌套列表也不可变？`,[`保证`,`不保证，它不递归冻结内部对象`,`会自动换成元组`],1,`frozen 主要限制实例字段的常规重新赋值，内部可变对象仍遵守自身的修改规则。`)]}),p({id:`iterators`,title:`可迭代对象与迭代器`,summary:`区分可以开始遍历的容器与保存遍历进度的对象。`,prerequisites:[`loops`,`classes`],objectives:[`理解 iter 与 next`,`说明迭代器耗尽状态`],sections:[[`容器与遍历进度分开`,`可迭代对象通过 iter 提供迭代器，迭代器用 next 产生下一个元素并保存进度。列表能反复创建新的迭代器，但一个迭代器消耗过的元素不会因为再次循环而自动回来。for 循环封装了这些协议步骤。`],[`结束是协议的一部分`,`迭代器耗尽时 next 抛 StopIteration，for 会把它视为正常结束。可给 next 传默认值来表达耗尽后的替代结果。自定义迭代器通常实现 __iter__ 和 __next__，而生成器能更简洁地实现许多逐项产出任务。`]],pitfalls:[`把同一迭代器遍历两次，第二次可能已经为空。`],observe:[`调用两次 next 后，list(it) 只收集剩余元素。`],experiment:`对同一列表重新 iter，比较新旧迭代器的状态。`,code:`values = [2, 4, 6]
it = iter(values)
first = next(it)
second = next(it)
rest = list(it)
print(first, second, rest)
print(next(it, "done"))`,expectedOutput:`2 4 [6]
done
`,quiz:[f(`迭代器主要额外保存什么？`,[`遍历进度`,`列表所有元素的深复制`,`源代码颜色`],0,`迭代器保存逐项访问的当前位置或生成状态，容器本身与某次遍历进度是不同概念。`),f(`耗尽的迭代器再次遍历会自动重启吗？`,[`会`,`不会，应重新取得合适的迭代器`,`仅整数会`],1,`迭代器通常维持耗尽状态，需要从可迭代对象重新取得迭代器才能开始新的遍历。`)]}),p({id:`generators`,title:`生成器、yield 与惰性流水线`,summary:`看见函数暂停、恢复与逐项产出，而非一次算完列表。`,prerequisites:[`iterators`,`functions`],view:`memory`,objectives:[`区分 yield 与 return`,`解释生成器局部状态在暂停后保留`],sections:[[`调用先创建可恢复的执行对象`,`含 yield 的函数调用通常返回生成器对象，函数体在请求元素时才向前执行。yield 产出一个值并暂停，后续 next 从暂停处继续，局部状态得以保留。return 则结束生成器，不再提供普通元素。`],[`惰性降低中间结果需求`,`多步转换可以通过生成器逐项连接，避免为每一步建立整个列表。但一次性消费、异常出现的时机和资源保持时间都随之变化。观察时应按真实 next 请求跟踪暂停与恢复，不能把它画成普通函数一次执行完毕。`]],pitfalls:[`生成器只创建不消费时，函数体未必已经执行。`],observe:[`寻找 yield 暂停帧，以及下一次请求恢复的同一生成器状态。`],experiment:`只取第一个值，再检查剩余值何时才计算。`,code:`def squares(n):
    for i in range(n):
        yield i * i

stream = squares(3)
first = next(stream)
rest = list(stream)
print(first, rest)`,expectedOutput:`0 [1, 4]
`,quiz:[f(`yield 与 return 的区别是？`,[`yield 暂停可恢复，return 结束`,`完全一样`,`yield 只用于打印`],0,`yield 保存可恢复执行状态并产出元素，return 则结束该生成器或普通调用的执行。`),f(`创建生成器后不请求元素，函数体一定跑完了吗？`,[`一定`,`不一定，通常尚未开始逐项执行`,`自动并行跑完`],1,`生成器是惰性执行对象，通常在 next 或遍历消费时才运行到下一次暂停点。`)]}),p({id:`exceptions`,title:`异常、捕获与清理`,summary:`在明确失败位置恢复，保留有价值的错误信息。`,prerequisites:[`functions`,`branch`],objectives:[`捕获具体异常`,`区分 else 与 finally`,`不吞掉未知错误`],sections:[[`异常沿调用链寻找处理者`,`转换失败、索引越界或显式 raise 会中断当前正常路径，逐层寻找匹配 except。应尽量捕获预期的具体异常，并在合适的边界恢复。裸 except 会连系统退出等信号也截住，常使真实问题变得难以定位。`],[`成功逻辑与清理逻辑分开`,`else 在 try 正常完成时执行，finally 在离开这一结构时负责清理，通常无论成功还是异常都会经过。不要在 finally 用 return 覆盖原结果或异常。资源管理往往可用 with 更直接地表达。`]],pitfalls:[`catch 一切再忽略，会使程序看似成功而丢掉错误。`],observe:[`输入坏文本触发 ValueError，观察异常帧与 finally 的执行。`],experiment:`将 text 改成 "12"，比较 else 是否执行以及 finally 是否仍执行。`,code:`text = "bad"
try:
    value = int(text)
except ValueError:
    print("invalid integer")
else:
    print(value)
finally:
    print("checked")`,expectedOutput:`invalid integer
checked
`,quiz:[f(`finally 通常负责什么？`,[`离开结构时的清理`,`只在成功时打印`,`隐藏所有异常`],0,`finally 用于无论正常还是异常离开时的清理，不能把它等同于成功分支。`),f(`读取整数转换失败时，更合适捕获？`,[`ValueError`,`所有 BaseException 并忽略`,`只捕获 KeyError`],0,`根据操作预期捕获具体异常，使恢复有明确原因，未知错误应继续暴露而非被吞掉。`)]}),p({id:`context-managers`,title:`上下文管理器与资源边界`,summary:`用 with 表达进入、使用与退出，保持清理动作可靠。`,prerequisites:[`exceptions`,`classes`],objectives:[`解释 __enter__ 与 __exit__`,`避免意外抑制异常`],sections:[[`with 把资源生存期写进结构`,`上下文管理器在进入时提供资源，在退出时执行清理。文件、锁或事务等不同对象可实现相同结构。as 绑定的是 __enter__ 返回的对象，不必恰好等于上下文管理器本身，因此应按接口而非名字猜测。`],[`退出方法可以影响异常传播`,`__exit__ 接收异常相关信息，返回真值会抑制异常。只有业务明确需要时才这样做，否则通常返回假值或 None 保留异常传播。清理逻辑与失败恢复要分开，以免错误在界面上被错误地显示为成功。`]],pitfalls:[`__exit__ 返回 True 会改变异常传播，不是普通完成标记。`],observe:[`观察 enter、body、exit 三个输出的先后顺序。`],experiment:`在 body 中 raise ValueError，比较退出清理与异常结果。`,code:`class Session:
    def __enter__(self):
        print("enter")
        return self
    def __exit__(self, kind, value, traceback):
        print("exit")
        return False

with Session() as session:
    print("body")`,expectedOutput:`enter
body
exit
`,quiz:[f(`with ... as value 中 value 取自？`,[`__enter__ 的返回值`,`固定字符串`,`__exit__ 的异常参数`],0,`as 接收上下文管理器进入方法的返回值，该值可以是资源对象而非管理器自身。`),f(`__exit__ 返回 True 对异常意味着？`,[`通常抑制该异常`,`重新执行正文`,`什么也不影响`],0,`退出方法的真值表示异常已被处理，会影响传播，因此必须有明确恢复意图。`)]}),p({id:`files`,title:`文本文件、编码与逐行读取`,summary:`在隔离的虚拟目录中练习资源关闭和文本处理。`,prerequisites:[`strings`,`context-managers`],objectives:[`使用 with 打开文件`,`明确编码、模式与换行`],sections:[[`路径、模式和编码各有职责`,`open 的路径定位文件，模式决定读写和截断行为，encoding 决定字节与文本的转换规则。文本课程明确使用 UTF-8。w 会截断原文件，a 用于追加；真正保存用户文件时需要尊重其已有内容。`],[`逐行处理与隔离实验`,`for line in file 可以逐行处理，不必一次读取全部内容。with 确保按资源协议退出。当前实验文件位于每次运行独立的虚拟目录，运行后可查看小型文本结果；这里的写入不会自动保存到个人磁盘或服务器账户。`]],pitfalls:[`readlines 或 read 会把全部内容读入内存。`],observe:[`在文件面板核对 notes.txt 内容，再逐行看列表形成。`],experiment:`追加第三行，比较 splitlines 与直接 read 的结果。`,code:`with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("C\\nPython\\n")
with open("notes.txt", encoding="utf-8") as file:
    names = [line.strip() for line in file]
print(names)`,expectedOutput:`['C', 'Python']
`,quiz:[f(`为什么显式写 encoding="utf-8"？`,[`明确文本编解码规则`,`让文件自动加密`,`让文件无限大`],0,`编码决定字节与字符如何转换，显式约定可减少不同环境默认编码带来的差异。`),f(`with 的主要资源价值是？`,[`明确使用区间并在退出时清理`,`保证内容永不出错`,`自动上传个人文件`],0,`with 通过上下文管理协议安排退出清理，文件内容和业务正确性仍需要自行处理。`)]}),p({id:`json`,title:`JSON、记录与序列化边界`,summary:`把结构化数据在文本与对象之间转换，并验证字段含义。`,prerequisites:[`dicts`,`files`,`exceptions`],objectives:[`使用 loads 与 dumps`,`区分语法解析和业务校验`],sections:[[`JSON 是跨环境的数据表示`,`JSON 表示对象、数组、字符串、数字、布尔和 null 等有限结构。loads 从文本解析成 Python 数据，dumps 产生文本。自定义实例、集合和文件句柄不能不加设计就自动变成可靠 JSON，需要明确选择可序列化的记录字段。`],[`解析成功仍需校验结构`,`合法 JSON 可能缺字段、类型不符或成绩超出范围。应按应用契约检查字段，再执行计算。ensure_ascii=False 影响非 ASCII 字符的输出形式，不等于修改编码；保存到文本文件仍要明确编码。`]],pitfalls:[`不要使用 eval 解析外部 JSON。`],observe:[`比较 JSON 文本、解析后的列表字典和新生成的报告文本。`],experiment:`加入不及格记录，修改报告以统计及格人数。`,code:`import json

text = '[{"name":"Astra","score":80},{"name":"Nova","score":60}]'
records = json.loads(text)
report = {"count": len(records), "total": sum(r["score"] for r in records)}
print(json.dumps(report, sort_keys=True))`,expectedOutput:`{"count": 2, "total": 140}
`,quiz:[f(`JSON 解析成功是否保证业务字段有效？`,[`保证`,`不保证，还需结构与范围校验`,`只要有大括号就有效`],1,`语法解析只证明符合 JSON 文法，字段是否存在、类型与业务范围仍需应用检查。`),f(`解析外部 JSON 应用哪个工具？`,[`json.loads`,`eval`,`执行整段文本`],0,`json.loads 按 JSON 数据规则解析，eval 会执行表达式，语义和边界完全不同。`)]}),p({id:`modules`,title:`模块、导入与程序入口`,summary:`把可复用函数放入模块，区分导入和直接运行。`,prerequisites:[`functions`,`files`],objectives:[`使用 import 组织命名空间`,`解释 __name__ 与入口守卫`],sections:[[`模块是独立命名空间`,`一个 Python 模块可包含定义和顶层语句，导入会按导入系统规则加载并绑定名称。使用 module.function 保留来源信息，避免星号导入造成名称混淆。已导入模块通常有缓存，因此不应把每次 import 都当作重新执行一份文件。`],[`入口守卫分离演示与复用`,`if __name__=="__main__" 让演示入口只在直接运行时执行，导入时主要提供定义。当前实验可以给出只读初始模块文件并导入，编辑器仍以 main.py 为入口。大型包、依赖发布与环境管理需要在正式工程工具中继续学习。`]],pitfalls:[`导入模块会执行其顶层代码，不只是读取声明。`],observe:[`查看 helper.py 初始文件，再运行入口调用其函数。`],experiment:`给 helper 增加另一个纯函数，在 main 中明确通过模块名调用。`,files:{"helper.py":`def twice(value):
    return value * 2
`},code:`import helper

def main():
    answer = helper.twice(4)
    print(answer)

if __name__ == "__main__":
    main()`,expectedOutput:`8
`,quiz:[f(`__name__=="__main__" 的常见用途？`,[`区分直接运行入口和被导入`,`让所有代码自动并行`,`禁止定义函数`],0,`入口守卫让脚本直接运行时执行演示流程，作为模块导入时则可复用其中定义。`),f(`每次 import 都保证重新执行全部模块吗？`,[`保证`,`不保证，导入系统通常使用缓存`,`从不执行顶层代码`],1,`首次加载通常执行模块顶层代码，后续导入常命中缓存，不能依赖重复 import 重置状态。`)]}),p({id:`testing`,title:`测试、类型提示与可维护代码`,summary:`用契约和边界测试说明行为，把类型提示作为辅助工具。`,prerequisites:[`functions`,`exceptions`,`classes`],objectives:[`设计可复核的检查`,`区分类型提示与运行时验证`],sections:[[`从函数契约推导检查`,`为函数写清输入范围、输出意义和异常，再选择正常、边界与失败用例。纯计算函数容易用 assert 或 unittest 检查。assert 适合开发期假设，不要依赖它处理必须生效的外部输入验证，因为优化模式可关闭断言。`],[`类型提示帮助阅读与工具分析`,`注解可以描述参数和返回值，静态检查工具能发现一类问题，但 Python 不会因此自动验证所有运行时对象。小函数、明确命名和最小必要职责往往比复杂装饰与继承体系更能提高可维护性。`]],pitfalls:[`类型提示不是运行时强制转换。`],observe:[`三条独立断言分别验证负数、零和正数。`],experiment:`新增错误输入时的异常契约和对应测试，不要只添加更多普通正数。`,code:`def magnitude(value: int) -> int:
    return -value if value < 0 else value

assert magnitude(-4) == 4
assert magnitude(0) == 0
assert magnitude(7) == 7
print("3 checks passed")`,expectedOutput:`3 checks passed
`,quiz:[f(`函数参数注解 int 自动强制转换传入值吗？`,[`会`,`不会，需另行校验或转换`,`只转换字符串`],1,`类型注解主要服务阅读与静态工具，运行时不会自动完成任意输入转换或完整验证。`),f(`外部输入校验能只依赖 assert 吗？`,[`可以`,`不应，因为断言可关闭且用途不同`,`只有字典需要校验`],1,`必须生效的输入处理应写为正常业务逻辑，不能依赖可能被优化模式移除的断言。`)]}),p({id:`project`,title:`综合项目：课程成绩簿`,summary:`用类、字典和纯计算方法组织一份可测试的成绩记录。`,prerequisites:[`classes`,`dicts`,`json`,`testing`],view:`memory`,minutes:45,objectives:[`分离记录管理与界面输入`,`定义更新和空数据规则`,`验证统计方法`],sections:[[`围绕职责组织对象`,`GradeBook 按姓名保存成绩，put 负责记录或更新，passed 查询及格者，average 计算平均值。字典保证同名记录只有一个当前值，排序仅用于稳定展示。接口先明确覆盖还是拒绝重复姓名，不能让数据结构选择悄悄改变业务含义。`],[`把边界写成可测试契约`,`空成绩簿平均值约定为 0.0，及格线包含 60。录入、统计与格式化分开，便于用内存数据、JSON 或其他入口复用同一规则。当前练习记录仅在本次运行中，不伪装成带账户同步和教师评分的完整教务系统。`]],pitfalls:[`重复姓名在本项目中是更新同一条记录，不是增加人数。`],observe:[`查看 book 对象中字典状态，再分别跟踪查询方法。`],experiment:`加入同名更新并设计测试，确认人数和平均值按更新后记录计算。`,code:`class GradeBook:
    def __init__(self):
        self.scores = {}
    def put(self, name, score):
        self.scores[name] = score
    def passed(self):
        return sorted(name for name, score in self.scores.items() if score >= 60)
    def average(self):
        if not self.scores:
            return 0.0
        return sum(self.scores.values()) / len(self.scores)

book = GradeBook()
book.put("Astra", 80)
book.put("Nova", 50)
print(book.passed())
print(f"{book.average():.2f}")`,expectedOutput:`['Astra']
65.00
`,quiz:[f(`同名 put 两次在此契约中表示？`,[`更新同一记录`,`总人数加二`,`自动拒绝`],0,`本项目使用姓名作为唯一键并明确覆盖更新，因此统计必须依据更新后的唯一记录集合。`),f(`空集合平均值应怎样处理？`,[`遵循明确契约，避免除零`,`直接除以零`,`借用上次结果`],0,`空数据行为必须事先约定，本项目返回 0.0，不能任由除零或旧状态决定结果。`)]})];for(let e of y)e.exercise=ae[e.id],e.references=[{title:`Python 3.14 官方教程`,url:`https://docs.python.org/3.14/tutorial/`}];var b={language:`python`,title:`Python · 从表达走向对象协作`,description:`从数据处理与函数，逐步建立对象模型、惰性迭代、资源管理与可测试项目。`,outcomes:[`准确理解名称、对象与共享`,`使用类、继承和组合组织行为`,`编写生成器与上下文管理器`,`处理文件、JSON 与可复用模块`],lessons:[..._(`python`),...y],chapters:[{id:`start`,title:`起步与表达`,description:`输入输出、数据类型与文本`,icon:`terminal`,lessons:[`output`,`input`,`types`,`operators`,`strings`]},{id:`control`,title:`程序结构`,description:`顺序、判断、循环与组合流程`,icon:`branch`,lessons:[`sequence`,`branch`,`loops`,`nested`,`practice`]},{id:`containers`,title:`容器与数据变换`,description:`列表、元组、字典、集合与推导式`,icon:`array`,lessons:[`arrays`,`traversal`,`list-methods`,`tuple-unpack`,`dicts`,`sets`,`comprehensions`]},{id:`functions`,title:`函数与绑定规则`,description:`参数、作用域、别名、闭包与装饰器`,icon:`function`,lessons:[`functions`,`scope`,`arguments`,`alias-copy`,`recursion`,`closures`,`decorators`]},{id:`objects`,title:`类与对象基础`,description:`实例、类属性、封装与初始化`,icon:`layers`,lessons:[`classes`,`instance-class`,`properties`]},{id:`collaboration`,title:`对象协作与数据模型`,description:`继承、组合、特殊方法与数据类`,icon:`code`,lessons:[`inheritance`,`composition`,`dunder`,`dataclasses`]},{id:`iteration`,title:`惰性执行与异常`,description:`迭代器、生成器、异常与上下文`,icon:`play`,lessons:[`iterators`,`generators`,`exceptions`,`context-managers`]},{id:`project`,title:`文件、模块与综合项目`,description:`结构化数据、测试与成绩簿`,icon:`book`,lessons:[`files`,`json`,`modules`,`testing`,`project`]}]},x={encapsulation:{id:`encapsulated-account`,revision:1,title:`把余额规则放进对象`,task:`读取初始余额和入账金额。Account.deposit 仅接受非负金额，负数不修改状态。输出 balance() 的结果。`,constraints:`0≤initial≤1000，−1000≤amount≤1000。`,starter:h(`Scanner sc = new Scanner(System.in);
Account account = new Account(sc.nextInt());
account.deposit(sc.nextInt());
System.out.println(account.balance());`,`class Account {
    private int balance;
    Account(int initial) { balance = initial; }
    void deposit(int amount) {
        // 非负金额才能更新
    }
    int balance() { return balance; }
}`),solution:h(`Scanner sc = new Scanner(System.in);
Account account = new Account(sc.nextInt());
account.deposit(sc.nextInt());
System.out.println(account.balance());`,`class Account {
    private int balance;
    Account(int initial) { balance = initial; }
    void deposit(int amount) { if (amount >= 0) balance += amount; }
    int balance() { return balance; }
}`),hints:[`私有字段只通过对象方法维护。`,`负数分支不更新余额，而不是把余额减成负值。`],explanation:`公开方法表达允许的状态变化；有限输出检查之外，还可在对象图中确认私有字段和调用接收者。`,cases:[{name:`正常入账`,input:`10 5`,output:`15
`},{name:`零金额`,input:`0 0`,output:`0
`},{name:`拒绝负数`,input:`50 -20`,output:`50
`}]},polymorphism:{id:`shape-dispatch`,revision:1,title:`让图形自己计算面积`,task:`输入 kind a b。kind 为 S 时创建边长 a 的正方形，为 R 时创建宽 a、高 b 的矩形。以 Shape 引用调用 area 并输出。`,constraints:`kind∈{S,R}，0≤a,b≤20；S 时忽略 b。自测核对输出，需自行观察动态分派。`,starter:h(`Scanner sc = new Scanner(System.in);
String kind = sc.next();
int a = sc.nextInt(), b = sc.nextInt();
Shape shape = kind.equals("S") ? new Square(a) : new Rectangle(a, b);
System.out.println(shape.area());`,`interface Shape { int area(); }
class Square implements Shape {
    int side;
    Square(int side) { this.side = side; }
    public int area() { return 0; }
}
class Rectangle implements Shape {
    int width, height;
    Rectangle(int width, int height) { this.width = width; this.height = height; }
    public int area() { return 0; }
}`),solution:h(`Scanner sc = new Scanner(System.in);
String kind = sc.next();
int a = sc.nextInt(), b = sc.nextInt();
Shape shape = kind.equals("S") ? new Square(a) : new Rectangle(a, b);
System.out.println(shape.area());`,`interface Shape { int area(); }
class Square implements Shape {
    int side;
    Square(int side) { this.side = side; }
    public int area() { return side * side; }
}
class Rectangle implements Shape {
    int width, height;
    Rectangle(int width, int height) { this.width = width; this.height = height; }
    public int area() { return width * height; }
}`),hints:[`两个实现都必须提供 public area()。`,`主程序只依赖 Shape 接口，公式放在各自对象中。`],explanation:`创建时选择具体类型，调用时使用公共接口。相同调用表达式会按实际对象执行不同重写方法。`,cases:[{name:`正方形`,input:`S 3 9`,output:`9
`},{name:`矩形`,input:`R 2 4`,output:`8
`},{name:`零宽矩形`,input:`R 0 5`,output:`0
`}]},generics:{id:`generic-pair`,revision:1,title:`泛型二元组的最大值`,task:`读取两个整数，用 Pair<Integer> 保存，补全 max() 返回较大者。Pair 的类型参数约束为 Comparable<T>。`,constraints:`−1000≤a,b≤1000；相等时任取相等值。`,starter:h(`Scanner sc = new Scanner(System.in);
Pair<Integer> pair = new Pair<>(sc.nextInt(), sc.nextInt());
System.out.println(pair.max());`,`class Pair<T extends Comparable<T>> {
    private final T first, second;
    Pair(T first, T second) { this.first = first; this.second = second; }
    T max() {
        // 使用 compareTo 比较
        return first;
    }
}`),solution:h(`Scanner sc = new Scanner(System.in);
Pair<Integer> pair = new Pair<>(sc.nextInt(), sc.nextInt());
System.out.println(pair.max());`,`class Pair<T extends Comparable<T>> {
    private final T first, second;
    Pair(T first, T second) { this.first = first; this.second = second; }
    T max() { return first.compareTo(second) >= 0 ? first : second; }
}`),hints:[`Comparable 的 compareTo 返回负、零、正表示相对顺序。`,`泛型不能用 > 比较任意 T，应调用约束提供的方法。`],explanation:`泛型上界提供可调用能力，最大值逻辑只依赖 Comparable 契约，可用于其他满足约束的引用类型。`,cases:[{name:`第二个较大`,input:`2 9`,output:`9
`},{name:`全负`,input:`-3 -8`,output:`-3
`},{name:`相等`,input:`5 5`,output:`5
`}]},"map-set":{id:`sorted-word-count`,revision:1,title:`按键排序统计词频`,task:`输入单词数 n，随后 n 个小写单词。按字典序每行输出 word count。n=0 时不输出内容。`,constraints:`0≤n≤12，单词为小写 ASCII 字母。`,starter:h(`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
Map<String, Integer> counts = new TreeMap<>();
// 读取并计数，再按键输出`),solution:h(`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
Map<String, Integer> counts = new TreeMap<>();
for (int i = 0; i < n; i++) {
    String word = sc.next();
    counts.put(word, counts.getOrDefault(word, 0) + 1);
}
for (String word : counts.keySet()) System.out.println(word + " " + counts.get(word));`),hints:[`TreeMap 的键遍历按比较顺序进行。`,`缺失键以零为旧次数，再加一写回。`],explanation:`计数与输出分成两段，避免输入顺序影响最终报告；空映射自然产生零行输出。`,cases:[{name:`无单词`,input:`0`,output:``},{name:`单个词`,input:`1
star`,output:`star 1
`},{name:`乱序重复`,input:`6
b a b c a b`,output:`a 2
b 3
c 1
`}]},exceptions:{id:`parse-recovery`,revision:1,title:`跳过无效整数，保留有效数据`,task:`输入 n，随后 n 个无空格文本。尝试 Integer.parseInt，合法整数累加并计数，无效文本跳过。输出 total count。`,constraints:`0≤n≤8；合法值范围 −100..100；无效项可能为 x 或带非数字后缀的文本。`,starter:h(`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int total = 0, count = 0;
// 捕获具体转换异常，累计有效整数
System.out.println(total + " " + count);`),solution:h(`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int total = 0, count = 0;
for (int i = 0; i < n; i++) {
    String text = sc.next();
    try {
        int value = Integer.parseInt(text);
        total += value;
        count++;
    } catch (NumberFormatException error) {
        // 本题契约明确要求跳过无效整数
    }
}
System.out.println(total + " " + count);`),hints:[`每项先读文本，只有 parseInt 成功后才增加 count。`,`只捕获此处预期的 NumberFormatException，不隐藏其他错误。`],explanation:`这里跳过错误是题目明确约定的恢复策略，不是无条件吞异常。成功计数应发生在转换之后。`,cases:[{name:`空输入集合`,input:`0`,output:`0 0
`},{name:`全无效`,input:`3
x 2x bad`,output:`0 0
`},{name:`正负混合`,input:`4
3 x -2 0`,output:`1 3
`}]},project:{id:`java-gradebook`,revision:1,title:`完成课程成绩服务`,task:`读入 n 及 n 行 name score，同名覆盖更新。输出及格姓名的排序行，再输出平均分两位小数。空记录姓名行为空，平均分为 0.00。`,constraints:`0≤n≤8；姓名 ASCII 单词，成绩 0..100。`,starter:h(`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
GradeBook book = new GradeBook();
for (int i = 0; i < n; i++) book.put(sc.next(), sc.nextInt());
System.out.println(String.join(" ", book.passed()));
System.out.printf(Locale.ROOT, "%.2f%n", book.average());`,`class GradeBook {
    private final Map<String, Integer> scores = new TreeMap<>();
    void put(String name, int score) { /* 更新 */ }
    List<String> passed() { return new ArrayList<>(); }
    double average() { return 0.0; }
}`),solution:h(`Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
GradeBook book = new GradeBook();
for (int i = 0; i < n; i++) book.put(sc.next(), sc.nextInt());
System.out.println(String.join(" ", book.passed()));
System.out.printf(Locale.ROOT, "%.2f%n", book.average());`,`class GradeBook {
    private final Map<String, Integer> scores = new TreeMap<>();
    void put(String name, int score) { scores.put(name, score); }
    List<String> passed() {
        List<String> names = new ArrayList<>();
        for (String name : scores.keySet()) if (scores.get(name) >= 60) names.add(name);
        return names;
    }
    double average() {
        if (scores.isEmpty()) return 0.0;
        int total = 0;
        for (int score : scores.values()) total += score;
        return (double) total / scores.size();
    }
}`),hints:[`TreeMap 保持键顺序，同名 put 覆盖旧值。`,`平均值分母是 scores.size()，除法前转换成 double。`],explanation:`输入行数与唯一学生数可能不同。测试故意包含同名更新，验证统计来自当前状态而非历史操作次数。`,cases:[{name:`空簿`,input:`0`,output:`
0.00
`},{name:`一般记录`,input:`3
Nova 50
Astra 80
Luna 60`,output:`Astra Luna
63.33
`},{name:`同名更新`,input:`3
Astra 20
Nova 100
Astra 80`,output:`Astra Nova
90.00
`}]}},S=[p({id:`operators`,title:`表达式、转换与数值范围`,summary:`区分整数除法、溢出、逻辑短路与浮点显示。`,prerequisites:[`types`],objectives:[`解释整数运算与转换时机`,`使用短路保护后续求值`],sections:[[`运算先看操作数类型`,`两个整数相除得到向零截断的整数商，(double)(7/2) 无法补回已经丢失的小数。需要小数时应先转换一个操作数。Java 的 int 为 32 位有符号整数，溢出按规定截断到低位；这与 C 有符号溢出未定义的规则不同。`],[`逻辑短路也是执行选择`,`&& 左侧为 false 时不计算右侧，|| 左侧为 true 时不计算右侧。& 与 | 也可用于布尔值，但不会像双符号版本那样短路。为了避免空引用访问或除零，应把前置有效性检查放在需要它的操作之前。`]],pitfalls:[`整数除法后再转 double 不会恢复小数。`,`不要把 C 与 Java 的溢出规则混为一谈。`],observe:[`比较整数商与小数商，再检查条件保护的右侧是否执行。`],experiment:`将 denominator 改为 0，说明短路怎样避免右侧整数除法。`,code:h(`int numerator = 7;
int quotient = numerator / 2;
double exact = (double) numerator / 2;
int denominator = 2;
boolean safe = denominator != 0 && numerator / denominator > 2;
System.out.println(quotient + " " + exact + " " + safe);`),expectedOutput:`3 3.5 true
`,quiz:[f(`计算 7 除以 2 的小数结果应写？`,[`(double)7/2`,`(double)(7/2)`,`7/2`],0,`转换必须在除法前改变操作数类型，已经完成的整数除法不会因事后转换而恢复小数。`),f(`false && expression 会计算右侧吗？`,[`会`,`不会`,`取决于变量名`],1,`Java 的逻辑与具有短路规则，左侧为 false 时已能确定结果，不执行右侧。`)]}),p({id:`strings`,title:`String、不可变性与内容比较`,summary:`把字符内容、对象身份和新字符串创建分开理解。`,prerequisites:[`types`],view:`memory`,objectives:[`用 equals 比较内容`,`解释字符串不可变与拼接结果`],sections:[[`引用身份与文本内容不同`,`String 是引用类型，== 比较引用是否指向同一对象，equals 按字符串内容比较。字符串常量可能被共享，不能因某次 == 得到 true 就认为它比较内容。面对可能为 null 的变量，需要明确使用常量.equals 或 Objects.equals 等空值策略。`],[`修改表达式通常产生新值`,`String 不可变，toUpperCase、substring 或拼接会返回表示结果的字符串，原对象内容不被直接改写。大量循环拼接可考虑 StringBuilder。length 以 UTF-16 代码单元计数，不能一概视作用户看到的字符数量。`]],pitfalls:[`new String("Astra") 与字面量内容相同，不代表身份相同。`],observe:[`比较 a、b 的内容与对象编号，再观察 c 的新字符串。`],experiment:`令 b=a，比较 == 的变化，保持 equals 结果不变。`,code:h(`String a = new String("Astra");
String b = new String("Astra");
String c = a.toUpperCase(Locale.ROOT);
System.out.println((a == b) + " " + a.equals(b));
System.out.println(a + " " + c);`),expectedOutput:`false true
Astra ASTRA
`,quiz:[f(`比较两个 String 的文本内容通常使用？`,[`equals`,`==`,`对象地址大小`],0,`equals 按 String 的内容语义比较，== 比较引用身份，二者不能因为常量共享而混同。`),f(`调用 a.toUpperCase() 是否直接改写原 String？`,[`会`,`不会，String 不可变`,`只改第一个字符`],1,`String 内容不可变，转换返回结果字符串，原引用所指文本保持原来的内容。`)]}),p({id:`switch`,title:`switch 语句与表达式`,summary:`对有限选项匹配，理解传统贯穿和箭头分支。`,prerequisites:[`branch`],objectives:[`识别 case 与 default`,`区分箭头规则和传统冒号分支`],sections:[[`不同形式有不同控制规则`,`传统冒号 case 可能继续贯穿，需要 break 等控制；箭头规则不会这样贯穿。Java 17 可以用 switch 表达式返回一个值，多语句分支可通过 yield 提供结果。作为表达式时需要保证所有合法情况都能产生结果。`],[`选择结构应让覆盖清楚`,`离散选项适合 switch，范围判断常更适合 if。Java 的 switch 可处理部分整数类型、枚举和字符串等，但不能把所有对象都当成任意匹配系统。Java 17 的预览特性不作为课程默认依赖，避免部署时额外开启实验开关。`]],pitfalls:[`不要把生成器 yield 与 Java switch 表达式 yield 混为一谈。`],observe:[`定位匹配的 case，核对结果赋值与未执行分支。`],experiment:`把 level 改为没有列出的值，观察 default。`,code:h(`int level = 2;
String label;
switch (level) {
    case 1: label = "start"; break;
    case 2: label = "practice"; break;
    default: label = "review";
}
System.out.println(label);`),expectedOutput:`practice
`,quiz:[f(`传统冒号 case 没有 break 时可能发生？`,[`贯穿后续代码`,`自动重启 main`,`自动创建线程`],0,`传统 switch 的 case 是入口标签，没有控制转移时可能继续执行后面的代码。`),f(`switch 表达式的重要要求是？`,[`覆盖需要的情况并产生结果`,`只能输出而不能赋值`,`必须使用预览模式`],0,`表达式用于提供值，因此必须满足语言的覆盖与结果规则；Java 17 已有正式的 switch 表达式。`)]}),p({id:`break-continue`,title:`循环的局部退出与跳过`,summary:`用明确的控制点表达搜索终止与筛选。`,prerequisites:[`loops`],objectives:[`区分 break 与 continue`,`解释最近循环的控制范围`],sections:[[`break 退出，continue 推进下一轮`,`break 退出最近一层循环或 switch；continue 把控制送到最近循环下一轮。在 for 中仍会经过更新表达式，while 中则回到条件检查。更新写在 continue 之后可能被跳过，从而造成循环无法按预期推进。`],[`保持任务意图直接可见`,`搜索命中可以 break，不符合筛选条件可以 continue。Java 还提供带标签控制，但课程先优先使用小方法和返回值保持流程清楚。嵌套过深时，不应单靠更多标记把结构变得难以追踪。`]],pitfalls:[`continue 不是函数返回。`],observe:[`查看偶数被排除，以及到达 7 后不再访问后续值。`],experiment:`改变终止值，比较实际参与累加的元素。`,code:h(`int sum = 0;
for (int i = 1; i <= 10; i++) {
    if (i == 7) break;
    if (i % 2 == 0) continue;
    sum += i;
}
System.out.println(sum);`),expectedOutput:`9
`,quiz:[f(`for 中 continue 后通常先到哪里？`,[`更新表达式`,`整个程序结尾`,`重新初始化变量`],0,`for 的下一轮控制先执行更新部分，再判断条件，不会重新执行初始化。`),f(`break 默认退出哪一层？`,[`最近的循环或 switch`,`所有调用`,`所有嵌套循环`],0,`普通 break 的作用范围是最近的循环或 switch，外层是否继续由它自己的流程决定。`)]}),p({id:`recursion`,title:`方法递归与调用栈`,summary:`用基例、递减规模和逐层返回解释递归。`,prerequisites:[`functions`,`branch`],objectives:[`构造可终止递归`,`识别栈深度与数值范围`],sections:[[`递归需要一个进展证明`,`方法可以调用自身，但每次调用应向可达基例推进。阶乘在 n<=1 时返回 1，其他情况等待 n−1 的结果。输入范围必须说明，不能让未考虑的负数或过大数使设计脱离契约。`],[`调用栈保存各自局部状态`,`每次调用拥有独立参数与返回位置，最深层先返回，再逐层合并结果。Java 不保证把尾递归优化为循环，大深度可能 StackOverflowError。阶乘还会很快超出 int 或 long 范围，深度安全与数值安全需分别考虑。`]],pitfalls:[`递归层数和整数溢出是不同限制。`],observe:[`检查每个 factorial 调用的 n 和返回次序。`],experiment:`将输入改为 0，说明基例与数学定义的对应。`,code:`public class Main {
    static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    public static void main(String[] args) {
        int answer = factorial(4);
        System.out.println(answer);
    }
}`,expectedOutput:`24
`,quiz:[f(`每次递归调用的局部参数通常？`,[`各自独立`,`总是同一静态字段`,`自动写入文件`],0,`调用栈为每次调用保留自己的局部上下文，不能把不同层的同名形参合并。`),f(`Java 是否保证尾递归自动变成常量栈空间？`,[`保证`,`不保证`,`只要返回 int 就保证`],1,`Java 不提供这种通用保证，深度较大的问题应考虑迭代或显式栈，并验证资源需求。`)]}),p({id:`matrix`,title:`二维数组与不规则行`,summary:`Java 的数组元素仍可以是数组，行长度不必相同。`,prerequisites:[`arrays`,`nested`],view:`memory`,objectives:[`使用每行 length 遍历`,`理解数组的数组引用结构`],sections:[[`二维数组是引用到数组的数组`,`int[][] 的外层元素是 int[] 引用，各行可以独立创建，长度可以不同，也可能为 null。它不能直接等同于 C 连续二维数组的内存布局。访问 a[i][j] 先取得行引用，再访问该行下标。`],[`边界应按当前行计算`,`遍历不规则数组时，内层使用 a[i].length，而不是一律使用第一行长度。若契约允许 null 行，还需先处理空引用。数组长度固定，但行引用可以换成另一数组，因此逻辑形状与对象关系都应单独观察。`]],pitfalls:[`外层长度不是每行长度。`],observe:[`查看两行不同长度与实际累加次数。`],experiment:`加入空数组作为一行，再加入 null 行并明确处理策略。`,code:h(`int[][] rows = {{1, 2}, {3, 4, 5}};
int sum = 0;
for (int i = 0; i < rows.length; i++) {
    for (int k = 0; k < rows[i].length; k++) sum += rows[i][k];
}
System.out.println(sum);`),expectedOutput:`15
`,quiz:[f(`Java 的 int[][] 各行长度必须相同吗？`,[`必须`,`不必，它是数组的数组`,`必须都为 1`],1,`外层元素引用独立行数组，因此可以有不同长度，甚至在契约允许时存在 null 行。`),f(`内层遍历最合适的边界通常是？`,[`rows[i].length`,`rows.length`,`rows[0] 的数值`],0,`当前行的实际长度决定其有效下标，使用外层或固定第一行长度可能越界或遗漏。`)]}),p({id:`classes`,title:`类、对象与实例方法`,summary:`把属性与操作组合成有状态的对象，而非只在 main 中堆语句。`,prerequisites:[`functions`,`scope`],view:`memory`,minutes:35,objectives:[`创建具有字段和方法的类`,`区分对象与引用变量`,`解释 this`],sections:[[`类定义结构，实例具有身份`,`类声明字段和方法，new 创建实例并执行构造过程。Counter a 与 Counter b 是引用变量，可以指向不同对象，也可以共享一个对象。对象身份、字段内容与变量声明类型是三个不同层面的信息，追踪时应同时区分。`],[`实例方法操作接收者状态`,`a.add(2) 在 a 所指对象上调用方法，this 表示接收者。局部变量只在本次调用中有效，字段则属于对象，可被后续调用读取。把业务动作写成方法，为封装与状态约束建立基础，而不是仅仅换一种存变量的语法。`]],pitfalls:[`声明一个引用变量不等于已经创建对象。`,`null 没有可调用实例目标。`],observe:[`查看两个 Counter 的不同编号，再跟随 this 修改其中一个。`],experiment:`令 b=a，再调用 b.add，观察共享对象的结果。`,code:h(`Counter a = new Counter(3);
Counter b = new Counter(10);
a.add(2);
System.out.println(a.value + " " + b.value);`,`class Counter {
    int value;
    Counter(int value) { this.value = value; }
    void add(int step) { this.value += step; }
}`),expectedOutput:`5 10
`,quiz:[f(`Counter a; 已经创建 Counter 对象了吗？`,[`已经`,`没有，只声明引用变量`,`创建两个对象`],1,`声明引用只是建立变量，实际对象通常由 new 等机制创建，使用前还需满足初始化规则。`),f(`实例方法中的 this 表示？`,[`当前接收调用的对象`,`所有对象共用的类名`,`方法返回值`],0,`this 指向当前实例方法的接收者，用它可区分对象字段和同名局部参数。`)]}),p({id:`constructors`,title:`构造器、this 与初始化顺序`,summary:`让对象从创建开始就进入合法状态，理解构造器链。`,prerequisites:[`classes`],view:`memory`,objectives:[`定义构造器和重载`,`区分 this(...) 与 this.field`],sections:[[`构造器没有普通返回类型`,`构造器名称与类名一致，用于建立实例初始状态，可以按参数列表重载。若显式声明构造器，不能继续假定编译器仍提供无参默认构造器。初始化参数应足以建立业务所需不变量，避免半初始化对象到处流转。`],[`构造器链必须遵守调用规则`,`Java 17 中显式 this(...) 或 super(...) 必须位于构造器首条语句。this(...) 委托同类其他构造器，super(...) 委托父类构造器，二者不是普通字段访问。先完成父类构造，再建立子类状态，避免构造过程中调用可重写方法依赖未初始化字段。`]],pitfalls:[`void Student(...) 是普通方法，不是构造器。`],observe:[`从无参构造器委托到带参数构造器，观察字段何时赋值。`],experiment:`增加第二个参数，并让无参构造器提供一组明确默认值。`,code:h(`Student a = new Student();
Student b = new Student("Nova");
System.out.println(a.name + " " + b.name);`,`class Student {
    String name;
    Student() { this("Astra"); }
    Student(String name) { this.name = name; }
}`),expectedOutput:`Astra Nova
`,quiz:[f(`构造器应声明什么返回类型？`,[`void`,`类名`,`不声明返回类型`],2,`构造器不具有普通方法的返回类型，写 void 会把它变成同名普通方法。`),f(`Java 17 中显式 this(...) 应放哪里？`,[`构造器首条语句`,`任意位置`,`只能在 main 中`],0,`Java 17 的构造器链要求显式委托调用位于构造器首条语句，不能先执行普通业务操作。`)]}),p({id:`encapsulation`,title:`封装与对象不变量`,summary:`通过私有字段和业务方法控制合法状态，而非机械添加 getter/setter。`,prerequisites:[`constructors`,`branch`],view:`memory`,objectives:[`用 private 限制直接访问`,`设计表达业务规则的方法`],sections:[[`封装保护的是一致性`,`private 阻止普通外部代码直接访问字段，但封装的价值在于让状态变化遵循业务规则。账户余额不能为负时，deposit 与 withdraw 应检查各自前提。给每个字段机械提供任意 setter，可能重新打开本应关闭的非法路径。`],[`失败需要可理解的接口`,`操作可用返回值表示未完成，或对违反契约的输入抛异常，选择应一致清楚。读方法可返回必要视图，但若直接暴露内部可变容器，外部仍可绕过规则。接口应控制需要控制的变化，而不是只改变字段可见性。`]],pitfalls:[`private 加任意 setter 不自动构成好的封装。`],observe:[`调用 deposit 后只通过 balance() 读取，确认负金额不会修改状态。`],experiment:`增加 withdraw 方法，明确余额不足时返回值与状态。`,code:h(`Account account = new Account(10);
account.deposit(5);
account.deposit(-2);
System.out.println(account.balance());`,`class Account {
    private int balance;
    Account(int initial) { this.balance = initial; }
    void deposit(int amount) { if (amount >= 0) balance += amount; }
    int balance() { return balance; }
}`),expectedOutput:`15
`,quiz:[f(`封装最重要的目标是？`,[`维护对象合法状态与接口契约`,`给每个字段生成 setter`,`让代码文件更长`],0,`访问控制是手段，关键是让状态只能通过符合业务规则的接口变化并保持一致性。`),f(`返回内部可变列表可能带来什么？`,[`调用方绕过对象规则修改状态`,`自动深复制`,`保证线程安全`],0,`直接暴露内部可变容器可能使外部绕开业务方法，需决定是否返回只读视图或防御性复制。`)]}),p({id:`references`,title:`引用、别名与按值传递`,summary:`Java 始终按值传参，引用值的副本仍能访问同一对象。`,prerequisites:[`classes`,`functions`],view:`memory`,concept:`references`,minutes:35,objectives:[`解释共享对象修改`,`区分参数重新赋值与字段更新`],sections:[[`复制引用值不等于复制对象`,`Box b=a 后，两变量保存相同引用值，指向同一 Box。修改 b.value 能被 a 观察到。Java 不向普通程序暴露可做地址算术的原始指针，图中对象编号只用于本次运行的身份识别，不是内存物理地址。`],[`参数重新绑定不会替换调用方变量`,`方法接收引用值的副本，可以通过它修改共同对象，却不能仅靠给形参赋新对象来替换调用方变量。基本类型同样按值传递，只是复制的是基本值。把它说成“对象按引用传递”会掩盖这两种动作的差异。`]],pitfalls:[`Java 没有一套“对象按引用、整数按值”的双重传参规则。`],observe:[`观察 mutate 的字段修改可见，而 rebind 的新对象不替换 a。`],experiment:`让方法返回新对象并由调用方接收，比较显式替换与参数重绑定。`,code:`class Box { int value; Box(int value) { this.value = value; } }
public class Main {
    static void mutate(Box box) { box.value = 7; }
    static void rebind(Box box) { box = new Box(99); }
    public static void main(String[] args) {
        Box a = new Box(3);
        mutate(a);
        rebind(a);
        System.out.println(a.value);
    }
}`,expectedOutput:`7
`,quiz:[f(`Java 对象参数传递的是？`,[`引用值的副本`,`调用方变量本身`,`对象所有字段的深复制`],0,`Java 按值传递，引用类型参数得到引用值副本，因此可共享目标但不直接替换调用方变量。`),f(`在方法里 box=new Box(99) 会自动替换调用方 a 吗？`,[`会`,`不会，只重新绑定形参`,`取决于字段名`],1,`给形参重新赋值改变的是局部参数保存的引用，调用方变量不会因此自动改指向。`)]}),p({id:`static-final`,title:`static、final 与共享状态`,summary:`区分类级成员、实例成员和引用不可重绑。`,prerequisites:[`classes`,`references`],view:`memory`,objectives:[`识别静态字段共享`,`解释 final 引用与对象可变性`],sections:[[`static 属于类级状态`,`静态字段不随每个实例各复制一份，适合常量、共享计数或真正类级功能。实例字段属于具体对象。滥用可变静态状态会让测试与调用顺序耦合，不能为了在 main 中访问方便就把所有业务字段改成 static。`],[`final 限制赋值，不自动冻结对象`,`final 变量初始化后不能重新赋值；若保存对象引用，目标对象仍可能可变。static final 常用于常量，但把可变列表声明为 static final 并不会使列表内容不可修改。不可变设计还需控制字段类型与暴露方式。`]],pitfalls:[`final List 不等于不可变 List。`],observe:[`查看类上的 created 和实例 value，以及 final 列表内容更新。`],experiment:`尝试给 final 引用重新赋值，阅读编译诊断，再比较合法的内容修改。`,code:h(`Counter a = new Counter();
Counter b = new Counter();
final List<Integer> values = new ArrayList<>();
values.add(3);
System.out.println(Counter.created + " " + values);`,`class Counter {
    static int created = 0;
    Counter() { created++; }
}`),expectedOutput:`2 [3]
`,quiz:[f(`final 对象引用保证什么？`,[`不能重新赋值该变量`,`对象内部全部不可变`,`所有方法只读`],0,`final 约束变量的赋值，不会递归冻结引用目标，目标是否可变由其类型与接口决定。`),f(`static 字段通常属于？`,[`类级共享状态`,`每个方法临时独立状态`,`每个实例必有独立副本`],0,`静态字段与类关联，多个实例访问的是类级状态，不能当作每实例独立存储。`)]}),p({id:`inheritance`,title:`继承、重写与父类契约`,summary:`让子类型满足父类型预期，保留可替换性。`,prerequisites:[`encapsulation`,`constructors`],view:`memory`,objectives:[`使用 extends 与 @Override`,`理解构造与方法查找`],sections:[[`继承不只是减少重复代码`,`子类继承可访问成员并可重写实例方法，应该在父类接口预期内扩展行为。若调用父类型接口时子类突然要求更苛刻输入或破坏结果约定，虽然语法合法，设计仍可能不适合替换。拥有一个组件则通常适合组合。`],[`父类状态先完成构造`,`子类构造器先委托父类构造，super 可调用父类实现。private 字段不能在子类中直接访问，但父类方法仍可维护它们。@Override 能让编译器检查确实覆盖了兼容方法，避免拼写错误变成无意的新方法。`]],pitfalls:[`重载与重写不是同一个机制。`],observe:[`查看 Dog 的实际运行类型与继承字段，再跟随重写方法。`],experiment:`删掉 @Override 对应的方法名一致性，观察编译器怎样帮助发现错误。`,code:h(`Dog dog = new Dog("Astra");
System.out.println(dog.speak());`,`class Animal {
    final String name;
    Animal(String name) { this.name = name; }
    String speak() { return name + ": ..."; }
}
class Dog extends Animal {
    Dog(String name) { super(name); }
    @Override String speak() { return name + ": woof"; }
}`),expectedOutput:`Astra: woof
`,quiz:[f(`@Override 的价值之一是？`,[`检查方法确实重写兼容父方法`,`自动复制所有对象`,`禁止所有继承`],0,`注解让编译器验证覆盖关系，可发现拼写或签名不匹配导致的意外新方法。`),f(`继承关系应重点满足什么？`,[`子类型可在预期契约内替换父类型`,`字段越多越好`,`所有父类方法都删除`],0,`好的继承要求可替换性，调用方按父类型契约使用时应仍获得符合预期的行为。`)]}),p({id:`polymorphism`,title:`多态与动态方法分派`,summary:`用同一接口操作不同对象，让行为随实际类型变化。`,prerequisites:[`inheritance`,`references`],view:`memory`,minutes:35,objectives:[`区分声明类型与运行类型`,`解释重写方法的动态分派`],sections:[[`声明类型约束可用接口`,`Animal pet=new Dog() 中 pet 的声明类型是 Animal，运行对象类型是 Dog。编译时根据声明类型检查能否调用方法，运行时对重写的实例方法选择实际对象的实现。这使流程可以依赖稳定抽象，而非每处判断具体类名。`],[`动态分派不覆盖所有语言机制`,`字段访问、static 方法、重载选择与实例方法重写有不同规则。重载通常在编译期根据静态类型选择签名，不能把所有同名访问都称为动态多态。需要子类特有操作时应重新审视接口，而不是到处强制转换。`]],pitfalls:[`实例方法重写与字段隐藏的规则不同。`],observe:[`查看 Shape 声明下的两个实际类型，以及同一 area 调用产生的不同实现。`],experiment:`增加第三种 Shape，使主循环不添加类型分支也能处理。`,code:h(`Shape[] shapes = {new Square(3), new Rectangle(2, 4)};
int total = 0;
for (Shape shape : shapes) total += shape.area();
System.out.println(total);`,`interface Shape { int area(); }
class Square implements Shape {
    int side;
    Square(int side) { this.side = side; }
    public int area() { return side * side; }
}
class Rectangle implements Shape {
    int width, height;
    Rectangle(int w, int h) { width = w; height = h; }
    public int area() { return width * height; }
}`),expectedOutput:`17
`,quiz:[f(`重写实例方法的实现由什么决定？`,[`实际对象类型`,`引用变量名字`,`只由声明顺序`],0,`编译时检查可调用接口，运行时重写实例方法根据实际对象类型进行动态分派。`),f(`重载签名选择通常在哪个阶段决定？`,[`编译期按静态类型`,`总在运行时猜测`,`由对象地址大小决定`],0,`重载与重写是不同机制，重载签名通常依据编译期类型规则选择，再可能发生该签名的重写分派。`)]}),p({id:`abstract`,title:`抽象类与模板行为`,summary:`保留共享状态和部分流程，把变化点交给子类。`,prerequisites:[`inheritance`,`polymorphism`],view:`memory`,objectives:[`定义抽象方法`,`区分抽象类与可实例化具体类`],sections:[[`抽象类可以提供部分实现`,`abstract 类不能直接实例化，但可以有字段、构造器和已实现方法。抽象方法声明需要子类提供的行为，具体子类必须完成要求。它适合真正共享状态与部分流程的类型体系，不应只为了分类标签而创建空洞层级。`],[`模板流程与变化点要清楚`,`基类可定义统一流程，在其中调用抽象方法取得差异行为。若子类可以随意破坏流程，需考虑 final 或更小的接口边界。但抽象越多不意味着设计越好，简单组合在许多业务中更易维护。`]],pitfalls:[`抽象类可以有构造器，但不能直接 new 抽象类实例。`],observe:[`跟随 shared describe 流程进入子类提供的 value。`],experiment:`增加另一子类，保持 describe 的公共流程不变。`,code:h(`Metric metric = new ConstantMetric(7);
System.out.println(metric.describe());`,`abstract class Metric {
    abstract int value();
    String describe() { return "value=" + value(); }
}
class ConstantMetric extends Metric {
    int amount;
    ConstantMetric(int amount) { this.amount = amount; }
    @Override int value() { return amount; }
}`),expectedOutput:`value=7
`,quiz:[f(`抽象类能否包含已实现方法？`,[`能`,`不能`,`只能包含常量`],0,`抽象类可同时包含字段、构造器、抽象方法与普通实现，用来表达部分共用行为。`),f(`具体子类通常需要满足什么？`,[`实现继承的抽象方法要求`,`删除父类构造器`,`禁止拥有字段`],0,`非抽象具体子类必须完成其抽象方法义务，才能作为可实例化类型使用。`)]}),p({id:`interfaces`,title:`接口：面向能力编程`,summary:`用小而明确的契约连接可替换实现。`,prerequisites:[`polymorphism`,`abstract`],view:`memory`,objectives:[`实现接口并以接口类型引用`,`理解 default 与多接口能力`],sections:[[`接口定义调用方所依赖的能力`,`接口让调用方依赖需要的操作，而不是具体实现。一个类可以实现多个接口，适合表达可以保存、可以比较等能力。接口方法的输入输出与错误语义仍需说明，只有相同方法名并不足以证明业务可替换。`],[`默认方法不等于随意共享状态`,`接口可提供 default 和 static 方法等能力，default 可为实现提供通用行为，但冲突时需要明确解决。接口字段是常量语义，不适合存放每个对象的可变业务状态；需要状态时由实现类负责。`]],pitfalls:[`实现 public 接口方法时不能降低访问权限。`],observe:[`以 Store 类型引用 MemoryStore，跟随实际 save 实现。`],experiment:`新增另一个 Store 实现，让调用方保持不变。`,code:h(`Store store = new MemoryStore();
store.save("Astra");
System.out.println(store.size());`,`interface Store {
    void save(String text);
    int size();
}
class MemoryStore implements Store {
    private final List<String> items = new ArrayList<>();
    public void save(String text) { items.add(text); }
    public int size() { return items.size(); }
}`),expectedOutput:`1
`,quiz:[f(`调用方依赖接口的主要好处是？`,[`在契约内替换实现`,`自动消除所有错误`,`保证所有实现同样快`],0,`接口把调用需求与具体实现分开，只要实现满足行为契约，就可以替换而不改调用流程。`),f(`接口字段适合保存每个实例的可变状态吗？`,[`适合`,`不适合，应由实例实现管理`,`必须用来存余额`],1,`接口字段具有常量相关语义，不是每个实现对象的独立可变字段存储。`)]}),p({id:`composition`,title:`组合与依赖注入`,summary:`用显式构造参数连接对象，让职责边界可见。`,prerequisites:[`interfaces`,`encapsulation`],view:`memory`,objectives:[`以对象字段表达拥有关系`,`通过构造参数替换协作者`],sections:[[`对象可以委托而不继承`,`Notes 需要 Store 的保存能力，它拥有一个 Store，而不是 Store 的子类型。组合把职责分给协作者，业务方法委托明确任务。避免为了复用少量代码而强行继承，造成调用方获得本不应暴露的方法。`],[`依赖注入可以很直接`,`把所需 Store 传入构造器就是一种依赖注入，不必先引入复杂框架。测试可传入内存实现，正式应用可换成另一实现，但外部契约应稳定。构造器应处理不允许的空依赖，防止运行很久后才遇到空引用。`]],pitfalls:[`依赖注入不是必须安装某个框架才能使用。`],observe:[`沿 notes.store 的引用找到实际保存记录的对象。`],experiment:`用只统计保存次数的测试实现替换 Store，验证业务调用。`,code:h(`MemoryStore store = new MemoryStore();
Notes notes = new Notes(store);
notes.add("pointer");
System.out.println(store.size());`,`interface Store { void save(String text); }
class MemoryStore implements Store {
    final List<String> items = new ArrayList<>();
    public void save(String text) { items.add(text); }
    int size() { return items.size(); }
}
class Notes {
    private final Store store;
    Notes(Store store) { this.store = Objects.requireNonNull(store); }
    void add(String text) { store.save(text); }
}`),expectedOutput:`1
`,quiz:[f(`Notes 拥有 Store 更适合什么关系？`,[`组合`,`必须继承 Store`,`同名静态字段`],0,`“拥有并使用一个协作者”通常用组合表达，继承则要求真实的可替换类型关系。`),f(`用构造器传入依赖是否属于依赖注入？`,[`是`,`不是，必须有大型框架`,`只对字符串成立`],0,`依赖注入的核心是由外部提供协作者，构造器传参已能直接表达这一方式。`)]}),p({id:`equals`,title:`equals、hashCode 与值对象`,summary:`让业务相等与哈希容器保持一致，保留身份比较。`,prerequisites:[`references`,`encapsulation`],view:`memory`,objectives:[`实现内容相等`,`维护相等与哈希一致性`],sections:[[`业务相等需要明确字段规则`,`Object 默认 equals 接近身份语义，值对象可以按相关字段重写。相等关系应满足自反、对称、传递等要求，并与 null 比较为 false。继承层次中新增字段可能让对称性难以维护，值对象设计应谨慎选择扩展方式。`],[`相等对象必须具有相同哈希值`,`重写 equals 时通常也要重写 hashCode，使相等对象在 HashSet、HashMap 中能正确协作。作为键的关键字段不应在加入容器后改变。不同对象哈希相同并不代表相等，哈希碰撞仍需 equals 区分。`]],pitfalls:[`只重写 equals 不重写 hashCode 会破坏哈希容器契约。`],observe:[`比较两个独立 Point 的 equals、== 与 HashSet 去重数量。`],experiment:`改变一个字段，检查相等结果和去重数量。`,code:h(`Point a = new Point(2, 3);
Point b = new Point(2, 3);
Set<Point> points = new HashSet<>();
points.add(a); points.add(b);
System.out.println(a.equals(b) + " " + (a == b) + " " + points.size());`,`final class Point {
    final int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
    @Override public boolean equals(Object other) {
        if (!(other instanceof Point)) return false;
        Point p = (Point) other;
        return x == p.x && y == p.y;
    }
    @Override public int hashCode() { return Objects.hash(x, y); }
}`),expectedOutput:`true false 1
`,quiz:[f(`相等对象的 hashCode 应怎样？`,[`相同`,`必须不同`,`由变量名决定`],0,`哈希容器契约要求相等对象具有相同哈希值，反过来哈希相同不保证对象相等。`),f(`把可变字段用作哈希键的依据有什么风险？`,[`修改后可能破坏查找定位`,`自动深复制`,`保证去重更快`],0,`键加入容器后若参与哈希或相等的状态改变，原有存储位置可能不再匹配新的查找规则。`)]}),p({id:`immutable`,title:`不可变对象与防御性复制`,summary:`控制状态外露，区分 final、只读视图与真正快照。`,prerequisites:[`encapsulation`,`static-final`,`equals`],view:`memory`,objectives:[`设计不可变字段组合`,`按需求复制可变输入`],sections:[[`不可变是对象设计的整体性质`,`不可变对象在构造完成后可观察状态不再变化，需要限制字段更新、选择合适成员类型并防止子类破坏约束。final 引用只保证不重绑，若其列表仍可被外部修改，对象就不具备预期的不可变快照语义。`],[`复制与只读视图有不同含义`,`List.copyOf 创建不可修改列表，但元素若本身可变仍可能共享；unmodifiableList 常是对原列表的只读视图，底层变化可能仍可见。要明确需要外层快照还是递归独立数据，再决定防御性复制策略。`]],pitfalls:[`不可修改外层列表不保证元素深度不可变。`],observe:[`修改构造时传入的原列表，检查 Snapshot 的内容保持独立。`],experiment:`将元素换成可变对象，分析还需要哪些额外复制。`,code:h(`List<String> source = new ArrayList<>(List.of("C"));
Snapshot snapshot = new Snapshot(source);
source.add("Java");
System.out.println(snapshot.items());`,`final class Snapshot {
    private final List<String> values;
    Snapshot(List<String> input) { values = List.copyOf(input); }
    List<String> items() { return values; }
}`),expectedOutput:`[C]
`,quiz:[f(`List.copyOf 对内部可变元素是否自动深复制？`,[`是`,`不是`,`会自动转成字符串`],1,`它创建不可修改的外层列表，但元素引用仍可能共享，深度不可变需要额外设计。`),f(`final List 字段足以证明对象不可变吗？`,[`足以`,`不足以，还要防止内容变化和外露`,`只看字段数量`],1,`final 约束引用赋值，不限制目标内容；不可变性需要结合成员类型、构造和访问接口判断。`)]}),p({id:`generics`,title:`泛型：复用与类型约束`,summary:`用类型参数表达容器元素，避免不必要的强制转换。`,prerequisites:[`interfaces`,`references`],view:`memory`,objectives:[`定义泛型类`,`理解不变性与通配符方向`],sections:[[`类型参数保留调用处的约束`,`Box<T> 使同一结构适用于不同引用类型，编译器据类型实参检查存入和取出。泛型通常不能直接使用基本类型，应使用 Integer 等包装类型。Java 泛型主要通过擦除实现，运行时并不为每个类型实参创建一套独立泛型类。`],[`通配符表达读写边界`,`List<Integer> 不能直接当作 List<Number>。? extends Number 适合把元素作为 Number 读取，但不能随意加入任意 Number；? super Integer 可接收 Integer，读取时只保证 Object。先看接口需要生产还是消费数据，再选边界。`]],pitfalls:[`List<Integer> 不是 List<Number> 的普通子类型。`,`原始类型会丢失编译期类型检查能力。`],observe:[`观察 Box<String> 的声明类型与内部实际对象。`],experiment:`定义读取 ? extends Number 列表求和的方法，说明为何不向其中随意 add。`,code:h(`Box<String> box = new Box<>("Astra");
System.out.println(box.get());`,`class Box<T> {
    private final T value;
    Box(T value) { this.value = value; }
    T get() { return value; }
}`),expectedOutput:`Astra
`,quiz:[f(`List<Integer> 能直接赋给 List<Number> 吗？`,[`能`,`不能，泛型通常不这样协变`,`只能在空列表时`],1,`这种赋值会允许向整数列表加入其他 Number，因此 Java 泛型通常保持不变性。`),f(`? extends Number 的主要使用方向是？`,[`按 Number 读取`,`任意写入所有 Number`,`当作 int 数组`],0,`extends 通配符描述未知 Number 子类型，适合读取为上界，不能保证任意 Number 可写入。`)]}),p({id:`collections`,title:`List、泛型容器与遍历修改`,summary:`从固定数组走向可扩展集合，选择合适的修改方式。`,prerequisites:[`generics`,`traversal`],view:`memory`,objectives:[`使用 ArrayList 与 List 接口`,`避免遍历期间的不当结构修改`],sections:[[`接口与实现分开选择`,`List 表达有序、可重复的元素序列，ArrayList 是常见可扩展实现。get、set、add、remove 各有不同语义和成本，长度通过 size() 获取，不是数组 length。List.of 的结果不可修改，不能因为类型是 List 就假定能添加元素。`],[`删除策略要配合遍历机制`,`增强 for 中直接结构性修改普通 ArrayList 可能触发并发修改检查，即使没有多线程。可以使用 removeIf、合适迭代器 remove 或先收集再处理。选择方式应保证不遗漏元素，并让筛选意图清楚。`]],pitfalls:[`ArrayList<Integer>.remove(1) 通常按下标删除，而非删除数值 1。`],observe:[`查看扩容列表的内容变化与 removeIf 后剩余项。`],experiment:`加入连续多个负数，确认筛选不会跳过相邻项。`,code:h(`List<Integer> values = new ArrayList<>(List.of(3, -1, 2, -4));
values.removeIf(value -> value < 0);
values.add(5);
System.out.println(values);`),expectedOutput:`[3, 2, 5]
`,quiz:[f(`List 的元素数用什么读取？`,[`size()`,`length 字段`,`sizeof`],0,`集合接口通过 size() 提供元素数量，数组才有 length 字段，二者不是完全相同的结构。`),f(`List.of(...) 得到的列表一定能 add 吗？`,[`一定`,`不能，它不可修改`,`只看元素为整数`],1,`List 接口不保证所有实现可修改，List.of 创建不可修改列表，修改会失败。`)]}),p({id:`map-set`,title:`Map、Set 与稳定展示`,summary:`用映射计数、用集合去重，并把排序作为独立展示规则。`,prerequisites:[`collections`,`equals`],view:`memory`,objectives:[`使用 getOrDefault 计数`,`理解哈希与有序实现的差别`],sections:[[`映射和集合解决不同任务`,`Map 把键映射到值，Set 表示不重复成员。HashMap 与 HashSet 不保证按插入或排序顺序遍历；TreeMap 按比较规则维护键顺序，LinkedHashMap 可表达插入顺序。需要什么顺序应明确选择，不能依赖一次截图中的偶然顺序。`],[`键的相等与稳定性影响正确性`,`哈希容器依赖 equals/hashCode 协作，树结构还依赖比较规则。键在容器期间不宜改变参与定位的状态。频次统计可以用 getOrDefault 取得旧值再写回，新词与重复词需要不同的初始分支但可以用相同更新公式。`]],pitfalls:[`HashMap 的遍历顺序不是默认字典序。`],observe:[`查看计数更新，再观察 TreeMap 稳定按键展示。`],experiment:`将 TreeMap 换成 HashMap，讨论为什么自测不应依赖其显示顺序。`,code:h(`Map<String, Integer> counts = new TreeMap<>();
for (String word : List.of("star", "moon", "star")) {
    counts.put(word, counts.getOrDefault(word, 0) + 1);
}
System.out.println(counts);`),expectedOutput:`{moon=1, star=2}
`,quiz:[f(`需要按键排序遍历时可选择？`,[`TreeMap`,`假定 HashMap 总有序`,`Object[] 随机放置`],0,`TreeMap 根据比较规则维护键顺序，HashMap 不提供这种排序遍历保证。`),f(`哈希键在存入后修改定位相关字段可能？`,[`破坏后续查找`,`自动刷新所有桶`,`总能提高性能`],0,`哈希位置与相等判断依赖键状态，改变这些状态可能让容器无法按原规则找到记录。`)]}),p({id:`exceptions`,title:`异常、检查型错误与恢复边界`,summary:`保留失败原因，在有能力处理的位置捕获。`,prerequisites:[`functions`,`encapsulation`],objectives:[`使用 try-catch-finally`,`区分检查型与非检查型异常`],sections:[[`抛出后沿调用链查找处理者`,`异常中断当前正常路径，寻找匹配 catch。Java 的检查型异常通常需捕获或在方法签名声明 throws；RuntimeException 等非检查型异常不受同样的编译要求，但仍需要合理的业务处理。不要把所有错误简单转成默认成功值。`],[`清理与恢复是不同职责`,`catch 处理预期失败，finally 在退出结构时执行清理。finally 中 return 或再抛异常可能覆盖原结果，需谨慎。错误信息应帮助定位具体操作，不应吞掉异常后让学生误以为程序正常完成。`]],pitfalls:[`catch(Exception) 后完全忽略，会丢失重要诊断。`],observe:[`跟随 parseInt 失败进入 catch，再观察 finally。`],experiment:`将文本改为 "12"，比较成功路径与清理路径。`,code:h(`String text = "bad";
try {
    int value = Integer.parseInt(text);
    System.out.println(value);
} catch (NumberFormatException error) {
    System.out.println("invalid integer");
} finally {
    System.out.println("checked");
}`),expectedOutput:`invalid integer
checked
`,quiz:[f(`检查型异常通常要求什么？`,[`捕获或声明 throws`,`一律忽略`,`转为静态字段`],0,`编译器要求调用方按检查型异常规则处理传播，捕获或声明让错误路径成为接口的一部分。`),f(`finally 中 return 可能造成什么？`,[`覆盖原返回值或异常传播`,`自动修复错误`,`仅改变注释`],0,`finally 的控制转移可能取代正在进行的返回或异常，通常应保持清理逻辑简单。`)]}),p({id:`resources`,title:`try-with-resources 与关闭顺序`,summary:`让 AutoCloseable 资源按结构自动清理。`,prerequisites:[`exceptions`,`interfaces`],objectives:[`使用资源声明结构`,`解释逆序关闭与异常处理`],sections:[[`资源实现可关闭协议`,`try-with-resources 管理实现 AutoCloseable 的资源，在离开代码块时调用 close。可以声明多个资源，关闭顺序与创建顺序相反。与手写 finally 相比，这种结构更直接地表达资源的使用范围与清理义务。`],[`关闭失败不应掩盖正文失败`,`若正文和关闭都抛异常，语言按规则保留主要异常并记录受抑制异常，便于诊断。课程使用内存中的 StringReader 展示资源结构，不依赖宿主个人文件。真实网络和文件资源还需考虑权限、编码和业务重试等具体契约。`]],pitfalls:[`资源关闭不代表业务操作一定成功。`],observe:[`查看 reader 在 try 块中的可用范围，以及块退出后的输出。`],experiment:`定义两个简单 AutoCloseable，打印关闭顺序，验证逆序规则。`,code:h(`int first;
try (StringReader reader = new StringReader("Astra")) {
    first = reader.read();
    System.out.println((char) first);
}
System.out.println("closed");`),expectedOutput:`A
closed
`,quiz:[f(`多个资源通常按什么顺序关闭？`,[`声明的逆序`,`随机顺序`,`永不关闭`],0,`资源按创建声明的相反顺序关闭，适合存在依赖关系的分层资源清理。`),f(`try-with-resources 要求资源具备什么？`,[`AutoCloseable 协议`,`必须是数组`,`必须有 main`],0,`结构依赖 AutoCloseable 的 close 协议来执行退出清理，不局限于文件类型。`)]}),p({id:`lambdas`,title:`Lambda 与函数式接口`,summary:`把一小段行为作为参数，理解捕获约束。`,prerequisites:[`interfaces`,`generics`],objectives:[`使用函数式接口接收行为`,`说明 effectively final 捕获`],sections:[[`Lambda 提供接口实现的一种表达`,`函数式接口具有一个抽象方法，Lambda 根据目标类型提供对应行为。标准库的 Predicate、Function、Consumer 等区分判断、转换与消费。Lambda 不是任意脱离类型的匿名代码，参数与结果仍由目标接口检查。`],[`捕获的局部变量需要稳定绑定`,`Lambda 使用的外层局部变量必须 final 或有效 final，不能在捕获前后随意重新赋值。若捕获对象引用，目标对象仍可变，但滥用可变外部状态会使流程难以推理。示例追踪显示调用边界，标准库内部步骤以原子操作呈现。`]],pitfalls:[`可捕获对象可变，不等于捕获的局部引用可任意重新赋值。`],observe:[`查看 factor 与实际 applyAsInt 的结果。`],experiment:`改成另一种 IntUnaryOperator，并保持调用代码不变。`,code:`import java.util.function.IntUnaryOperator;
public class Main {
    public static void main(String[] args) {
        int factor = 3;
        IntUnaryOperator times = value -> value * factor;
        int answer = times.applyAsInt(4);
        System.out.println(answer);
    }
}`,expectedOutput:`12
`,quiz:[f(`Lambda 的目标类型通常是？`,[`函数式接口`,`任意整数`,`文件路径`],0,`Java Lambda 依据目标函数式接口获得参数与结果类型，不是没有类型约束的独立脚本。`),f(`捕获外层局部变量通常要求？`,[`final 或有效 final`,`必须 static`,`必须是字符串`],0,`稳定的局部绑定是捕获规则的重要条件；引用目标可变与引用变量能否重新赋值要区分。`)]}),p({id:`streams`,title:`Stream 数据流水线`,summary:`把来源、筛选、映射与终止操作组成清晰的数据处理。`,prerequisites:[`lambdas`,`collections`],objectives:[`组合 filter、map 与归约`,`理解惰性与一次消费`],sections:[[`中间操作描述，终止操作触发`,`Stream 流水线从数据源开始，经 filter 和 map 等中间操作描述处理，sum、collect 等终止操作触发消费。流不是另一个保存全部元素的 List，也不能把同一已消费流反复当成新流使用。`],[`避免为了简洁隐藏副作用`,`纯筛选和映射适合流，复杂状态更新可能普通循环更清楚。不要靠 peek 的副作用建立关键业务规则，也不要随意 parallel 就声称更快。教学回放展示用户语句边界，库内部流调度不会被伪装成逐条用户代码。`]],pitfalls:[`Stream 一般只能消费一次。`],observe:[`对照筛选后的偶数和平方结果，检查 sum。`],experiment:`用普通循环写出相同规则，比较可读性和中间状态。`,code:h(`List<Integer> values = List.of(1, 2, 3, 4);
int answer = values.stream()
    .filter(value -> value % 2 == 0)
    .mapToInt(value -> value * value)
    .sum();
System.out.println(answer);`),expectedOutput:`20
`,quiz:[f(`哪个操作通常触发流消费？`,[`sum 等终止操作`,`只写 filter`,`只取得 stream`],0,`中间操作建立处理描述，终止操作才请求并消费结果，形成完整执行流水线。`),f(`parallel 是否自动保证更快？`,[`保证`,`不保证，取决于任务和开销`,`保证更省内存`],1,`并行有调度与共享成本，还受任务规模和操作特性影响，不能仅凭使用并行接口承诺性能。`)]}),p({id:`records`,title:`record 与数据载体`,summary:`用 Java 17 的记录类表达固定字段的值语义。`,prerequisites:[`equals`,`immutable`],view:`memory`,objectives:[`声明记录组件`,`理解浅层不可变与生成方法`],sections:[[`record 减少数据类样板`,`record 为组件生成访问器、相等、哈希与表示等方法，适合以数据承载为主的类型。访问器通常是 x() 而非公开字段 x。记录类不能用作任意继承层级的基类，但可以实现接口，仍需根据职责选择普通类或记录类。`],[`组件引用不可重绑不等于深度冻结`,`记录组件对应字段具有 final 约束，若组件是可变列表，列表内容仍可能变化。需要快照时可在构造阶段进行防御性复制。组件类型与业务验证仍需清楚，自动生成方法不会替代输入合法性检查。`]],pitfalls:[`record 内含 List 不自动得到深度不可变对象。`],observe:[`比较两个相同组件的新记录的 equals 与身份。`],experiment:`添加校验构造器或列表组件，说明不可变边界。`,code:h(`Point a = new Point(2, 3);
Point b = new Point(2, 3);
System.out.println(a.x() + a.y());
System.out.println(a.equals(b) + " " + (a == b));`,`record Point(int x, int y) {}`),expectedOutput:`5
true false
`,quiz:[f(`record Point(int x,int y) 的常见访问器是？`,[`x() 与 y()`,`公开字段 x 与 y`,`get 所有字段的数组`],0,`记录组件生成同名访问器方法，调用形式为 x()，并非把私有组件字段直接公开。`),f(`record 组件为可变列表时，内容会自动冻结吗？`,[`会`,`不会，还需防御性设计`,`自动深复制三次`],1,`组件引用不可重绑不等于内部对象不可变，集合元素与外部别名都需要按业务设计。`)]}),p({id:`testing`,title:`契约、边界与对象测试`,summary:`让方法和对象行为可以复核，而非只凭默认演示判断。`,prerequisites:[`encapsulation`,`exceptions`,`collections`],objectives:[`设计状态变化前后的检查`,`区分 Java assert 与显式测试失败`],sections:[[`测试覆盖行为而非私有实现`,`从公开方法的契约设计正常、边界和失败场景。账户测试可检查初始余额、合法入账和拒绝负金额后状态保持。不要仅验证私有字段的具体布局，否则重构实现会破坏并未改变业务行为的测试。`],[`断言开关与正式测试工具`,`Java 的 assert 默认可能关闭，需要启用参数，因此必须生效的演示检查可显式抛 AssertionError。正式工程常用 JUnit 等测试工具；当前页面提供多输入实际执行自测，并明确其覆盖范围，不把有限用例当作正式自动评分证明。`]],pitfalls:[`Java assert 不是默认总会执行的输入校验机制。`],observe:[`三条显式检查分别验证零、负数和正数规则。`],experiment:`故意写错 magnitude 分支，检查失败信息与之前状态是否保留。`,code:`public class Main {
    static int magnitude(int n) { return n < 0 ? -n : n; }
    static void check(boolean ok) {
        if (!ok) throw new AssertionError("check failed");
    }
    public static void main(String[] args) {
        check(magnitude(0) == 0);
        check(magnitude(-5) == 5);
        check(magnitude(7) == 7);
        System.out.println("3 checks passed");
    }
}`,expectedOutput:`3 checks passed
`,quiz:[f(`Java assert 默认是否一定开启？`,[`一定`,`不一定，通常需启用`,`只由变量名决定`],1,`assert 受运行参数控制，不能拿可关闭的断言替代必须生效的外部输入校验。`),f(`对象测试更应关注？`,[`公开契约与可观察状态变化`,`所有私有变量命名`,`源码行数`],0,`测试公开行为能在保持业务语义的重构后继续有效，过度绑定内部布局会增加维护成本。`)]}),p({id:`project`,title:`综合项目：课程成绩服务`,summary:`用封装、映射与排序完成可测试的课程记录。`,prerequisites:[`encapsulation`,`map-set`,`generics`,`testing`],view:`memory`,minutes:45,objectives:[`以类管理唯一记录`,`分离输入、业务计算与格式化`,`处理空数据与更新`],sections:[[`先确定记录身份和更新规则`,`GradeBook 使用姓名作唯一键，put 更新当前成绩，passed 按姓名排序输出及格者，average 计算当前唯一记录平均值。重复姓名是更新而非新增人数，及格线包含 60，这些都是业务契约而非界面装饰。`],[`保持服务与展示边界`,`业务类不直接读取 Scanner 或打印，可用构造数据独立测试；主程序只负责输入和输出。空簿平均值约定为 0.0，数值格式用固定 Locale 保证小数点稳定。真实账户保存、权限与教师评分仍属于后续后端范围。`]],pitfalls:[`不要用输入行数作更新后记录数。`],observe:[`查看 scores 映射和对象方法调用，比较输入顺序与输出顺序。`],experiment:`增加同名更新与全不及格场景，解释排序和平均值。`,code:h(`GradeBook book = new GradeBook();
book.put("Astra", 80);
book.put("Nova", 50);
System.out.println(book.passed());
System.out.printf(Locale.ROOT, "%.2f%n", book.average());`,`class GradeBook {
    private final Map<String, Integer> scores = new TreeMap<>();
    void put(String name, int score) { scores.put(name, score); }
    List<String> passed() {
        List<String> result = new ArrayList<>();
        for (String name : scores.keySet()) if (scores.get(name) >= 60) result.add(name);
        return result;
    }
    double average() {
        if (scores.isEmpty()) return 0.0;
        int total = 0;
        for (int score : scores.values()) total += score;
        return (double) total / scores.size();
    }
}`),expectedOutput:`[Astra]
65.00
`,quiz:[f(`同名更新后平均值分母应使用？`,[`当前唯一记录数量`,`累计输入行数`,`固定为 100`],0,`本项目契约按姓名更新，人数应来自当前映射大小，而不是历史录入次数。`),f(`为什么格式化指定 Locale.ROOT？`,[`让小数点等输出规则稳定`,`让所有浮点计算精确`,`绕过输入验证`],0,`Locale 控制格式化的区域规则，指定统一区域有助于跨环境得到稳定可核对的文本。`)]})];for(let e of S)e.exercise=x[e.id],e.references=[{title:`dev.java 官方学习教程`,url:`https://dev.java/learn/`}];var C={language:`java`,title:`Java · 从方法走向面向对象设计`,description:`以类型、封装、继承、多态与接口为主线，连接集合、异常和可测试的对象协作。`,outcomes:[`理解引用按值传递与动态分派`,`设计保持不变量的对象`,`用泛型与集合组织数据`,`处理异常和资源并独立测试行为`],lessons:[..._(`java`),...S],chapters:[{id:`start`,title:`程序起点与类型`,description:`入口、输入输出、表达式和字符串`,icon:`terminal`,lessons:[`output`,`input`,`types`,`operators`,`strings`]},{id:`control`,title:`控制结构`,description:`顺序、判断、循环与分支退出`,icon:`branch`,lessons:[`sequence`,`branch`,`switch`,`loops`,`break-continue`,`nested`,`practice`]},{id:`methods`,title:`方法、作用域与数组`,description:`参数、递归、遍历和二维结构`,icon:`function`,lessons:[`functions`,`scope`,`recursion`,`arrays`,`traversal`,`matrix`]},{id:`objects`,title:`类与封装`,description:`对象身份、构造、引用和状态约束`,icon:`layers`,lessons:[`classes`,`constructors`,`encapsulation`,`references`,`static-final`]},{id:`polymorphism`,title:`继承、多态与接口`,description:`可替换行为、抽象与组合协作`,icon:`code`,lessons:[`inheritance`,`polymorphism`,`abstract`,`interfaces`,`composition`]},{id:`values`,title:`值语义与泛型容器`,description:`相等、不可变、泛型与集合`,icon:`database`,lessons:[`equals`,`immutable`,`generics`,`collections`,`map-set`,`records`]},{id:`errors`,title:`异常、资源与函数式表达`,description:`错误边界、自动关闭、Lambda 和 Stream`,icon:`play`,lessons:[`exceptions`,`resources`,`lambdas`,`streams`]},{id:`project`,title:`测试与综合项目`,description:`契约驱动检查与课程成绩服务`,icon:`book`,lessons:[`testing`,`project`]}]},w={format:`astra-teaching-pack`,version:1,lessons:[]},T=[`c`,`python`,`java`],oe=new TextEncoder;function se(){return{format:`astra-teaching-pack`,version:1,lessons:[]}}function E(e,t,n){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`${t}必须是对象。`);let r=e;if(Object.keys(r).some(e=>!n.includes(e)))throw Error(`${t}包含不支持的字段。`);return r}function D(e,t,n,r=!0){if(typeof e!=`string`||r&&!e.trim())throw Error(`${t}不能为空。`);if(oe.encode(e).byteLength>n)throw Error(`${t}超过大小限制。`);return e}function O(e,t){let n=E(e,`内容包`,[`format`,`version`,`lessons`]);if(n.format!==`astra-teaching-pack`||n.version!==1)throw Error(`内容包格式或版本不支持。`);if(!Array.isArray(n.lessons)||n.lessons.length>120)throw Error(`课程列表格式或数量不正确。`);let r=new Set;return{format:`astra-teaching-pack`,version:1,lessons:n.lessons.map((e,n)=>{let i=`第 ${n+1} 门课程`,a=E(e,i,[`language`,`lessonId`,`sections`,`examples`]),o=D(a.language,`${i}语言`,20),s=D(a.lessonId,`${i}标识`,100);if(!T.includes(o)||!t(o,s))throw Error(`${i}未匹配到现有课程。`);let c=`${o}:${s}`;if(r.has(c))throw Error(`内容包有重复课程：${c}。`);if(r.add(c),!Array.isArray(a.sections)||!a.sections.length||a.sections.length>30)throw Error(`${i}需要 1—30 个知识点。`);let l=a.sections.map((e,t)=>{let n=E(e,`知识点 ${t+1}`,[`title`,`body`]);return{title:D(n.title,`知识点 ${t+1} 标题`,300),body:D(n.body,`知识点 ${t+1} 正文`,24e3)}});if(!Array.isArray(a.examples)||a.examples.length>30)throw Error(`${i}例子不能超过 30 个。`);let u=new Set;return{language:o,lessonId:s,sections:l,examples:a.examples.map((e,t)=>{let n=E(e,`例子 ${t+1}`,[`id`,`title`,`description`,`code`,`input`,`expectedOutput`]),r=D(n.id,`例子 ${t+1} 标识`,64);if(!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(r)||u.has(r))throw Error(`例子标识无效或重复：${r}。`);return u.add(r),{id:r,title:D(n.title,`例子 ${t+1} 标题`,300),description:D(n.description,`例子 ${t+1} 说明`,12e3,!1),code:D(n.code,`例子 ${t+1} 代码`,65536),input:D(n.input,`例子 ${t+1} 输入`,65536,!1),expectedOutput:D(n.expectedOutput,`例子 ${t+1} 预期输出`,65536,!1)}})}})}}function ce(e,t){return Object.fromEntries(Object.keys(e).map(n=>[n,{...e[n],lessons:e[n].lessons.map(e=>{let r=t.lessons.find(t=>t.language===n&&t.lessonId===e.id);return r?{...e,sections:r.sections}:e})}]))}var k={c:ie,python:b,java:C},le=(e,t)=>k[e].lessons.find(e=>e.id===t),A=O(w,(e,t)=>!!le(e,t)),j=ce(k,A),ue=(e,t)=>A.lessons.find(n=>n.language===e&&n.lessonId===t),M=e=>e===`c`||e===`python`||e===`java`,N=e=>j[e],P=(e,t)=>j[e].lessons.find(e=>e.id===t),F=(e,t)=>j[e].chapters.find(e=>e.lessons.includes(t));function I(e){return j[e].chapters.flatMap(t=>t.lessons.map(t=>P(e,t)))}function L(e,t){let n=P(e,t);return n?Object.keys(j).filter(t=>t!==e).flatMap(e=>{let t=j[e].lessons.find(e=>e.concept===n.concept);return t?[{language:e,lesson:t}]:[]}):[]}function R(e){return M(e)?I(e):d.map(t=>({id:t.id,title:t.title,short:t.short,summary:t.summary,code:t.codes[e],input:t.input,files:void 0,view:`flow`}))}function z(e,t){return R(e).find(e=>e.id===t)}function B(t){let[r,i,a]=t.replace(/^#\/?/,``).split(`/`);if(r===`assistant`)return{page:`assistant`};if(r===`algorithms`)return i?n(i)||e.includes(i)?{page:r,algorithm:i}:{page:`algorithm-index`,missing:i}:{page:`algorithm-index`};if(r===`learn`||r===`lesson`||r===`trace`){let e=[`c`,`python`,`java`,...r===`trace`?[`javascript`,`cpp`]:[]].includes(i)?i:`c`,t=a||(r===`trace`?`functions`:`output`);if(r===`trace`)return z(e,t)?{page:r,language:e,lesson:t}:{page:`missing`,language:M(e)?e:`c`,lesson:t};let n=M(e)?e:`c`;return r===`learn`&&!a?{page:r,language:n}:P(n,t)?{page:r,language:n,lesson:t}:{page:`missing`,language:n,lesson:t}}return{page:`home`}}function V(e,t){return`#/learn/${e}${t?`/${t}`:``}`}function H(e,t,n=`lesson`){return`#/${n}/${e}/${t}`}function de(){try{let e=JSON.parse(localStorage.getItem(`astra-code-space-next-progress`)||`{}`);return{completed:Array.isArray(e.completed)?e.completed.filter(e=>typeof e==`string`):[],checks:fe(e.checks),...e.last&&M(e.last.language)&&P(e.last.language,e.last.lesson)?{last:{language:e.last.language,lesson:e.last.lesson}}:{}}}catch{return{completed:[],checks:{}}}}function fe(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e)){let[e,i]=n.split(`:`);if(!M(e))continue;let a=P(e,i);if(!a||!r||typeof r!=`object`)continue;let o=r,s={};if(o.quiz&&Array.isArray(o.quiz.answers)){let e=a.quiz.map((e,t)=>Number.isInteger(o.quiz.answers[t])&&Number(o.quiz.answers[t])>=0&&Number(o.quiz.answers[t])<e.options.length?o.quiz.answers[t]:null);s.quiz={answers:e,correct:e.filter((e,t)=>e===a.quiz[t].answer).length,total:a.quiz.length}}let c=o.practice,l=a.exercise;c&&l&&c.exercise===l.id&&c.revision===l.revision&&c.total===l.cases.length&&Number.isInteger(c.passed)&&c.passed>=0&&c.passed<=c.total&&(s.practice=c),(s.quiz||s.practice)&&(t[n]=s)}return t}function pe(e){try{return localStorage.setItem(`astra-code-space-next-progress`,JSON.stringify(e)),!0}catch{return!1}}var U={star:`<path d="m12 2 3 6.7 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.5l7-.8Z"/>`,arrow:`<path d="M4 12h16m-6-6 6 6-6 6"/>`,back:`<path d="M20 12H4m6-6-6 6 6 6"/>`,chevron:`<path d="m9 5 7 7-7 7"/>`,down:`<path d="m6 9 6 6 6-6"/>`,terminal:`<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 8 4 4-4 4m7 0h3"/>`,database:`<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>`,branch:`<path d="M6 3v12c0 4 12 4 12 0V8M6 8c0 5 12 5 12 0"/><circle cx="6" cy="3" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="21" r="2"/>`,function:`<path d="M6 20 12 4h5M8 12h9M15 17l6 5m0-5-6 5"/>`,array:`<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M9 6v12m7-12v12"/>`,spark:`<path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z"/>`,code:`<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>`,play:`<path d="m8 4 12 8-12 8Z"/>`,pause:`<path d="M8 5v14M16 5v14"/>`,stop:`<rect x="6" y="6" width="12" height="12"/>`,next:`<path d="m5 5 10 7-10 7ZM19 5v14"/>`,previous:`<path d="m19 5-10 7 10 7ZM5 5v14"/>`,reset:`<path d="M3 10a9 9 0 1 1 1 8M3 3v7h7"/>`,close:`<path d="m6 6 12 12M6 18 18 6"/>`,compare:`<path d="M3 7h18m-4-4 4 4-4 4M21 17H3m4-4-4 4 4 4"/>`,check:`<path d="m5 12 4 4L20 5"/>`,book:`<path d="M12 5C8 2 3 3 2 4v15c4-2 7-2 10 1 3-3 6-3 10-1V4c-4-2-7-2-10 1Zm0 0v15"/>`,clock:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,layers:`<path d="m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>`,info:`<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>`,expand:`<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>`,search:`<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>`,into:`<path d="M12 2v12m-5-5 5 5 5-5M5 21h14"/>`,over:`<path d="M3 15V9c0-8 18-8 18 0v6m-4-4 4 4 3-4M8 21h8"/>`,python:`<path d="M12 2C5 2 5 4 5 8h9v2H3c-3 0-3 10 0 10h4v-5h10V7c0-4-1-5-5-5ZM12 22c7 0 7-2 7-6h-9v-2h11c3 0 3-10 0-10h-4"/><path d="M9 5h.01M15 19h.01"/>`,coffee:`<path d="M5 9h12v8c0 5-12 5-12 0ZM17 10h2c5 0 5 7-2 7M3 22h16M9 2c-4 2 4 3 0 5m5-6c-4 2 4 3 0 5"/>`,keyboard:`<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M5 9h1m3 0h1m3 0h1m3 0h1M5 13h1m3 0h1m3 0h1m3 0h1M7 16h10"/>`};function W(e,t=``){return`<svg class="icon ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${U[e]||U.code}</svg>`}function G(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var K=`modulepreload`,me=function(e,t){return new URL(e,t).href},q={},J=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=me(t,n),t=s(t),t in q)return;q[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:K,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Y=document.getElementById(`app`);Y.innerHTML=`<header class="app-header"><a class="brand" href="${G(`../`)}" aria-label="代码空间首页">${W(`star`)}<span>ASTRA</span><i>/</i><strong>代码空间</strong></a><nav class="primary-nav" aria-label="主导航"><a href="${V(`python`)}" data-nav="python">Python</a><a href="${V(`c`)}" data-nav="c">C</a><a href="${V(`java`)}" data-nav="java">Java</a><span class="nav-separator"></span><a href="#/trace/c/functions" data-nav="trace">程序追踪</a><a href="#/algorithms" data-nav="algorithms">算法空间</a><a href="#/assistant" data-nav="assistant">助教工作台</a></nav><a class="return-astra" href="${G(`https://falling-feather.github.io/Astra/`)}">返回星序${W(`arrow`)}</a></header><main id="main-content" tabindex="-1"></main>`;var X=document.getElementById(`main-content`),Z,Q=0;async function $(e=!1){let t=++Q;Z?.(),Z=void 0;let r=B(location.hash);X.setAttribute(`aria-busy`,`true`),Y.dataset.page=r.page;for(let e of Y.querySelectorAll(`[data-nav]`)){let t=r.page===`algorithms`||r.page===`algorithm-index`?e.dataset.nav===`algorithms`:r.page===`assistant`?e.dataset.nav===`assistant`:r.page===`trace`?e.dataset.nav===`trace`:r.page===`learn`||r.page===`lesson`?e.dataset.nav===r.language:!1;e.classList.toggle(`active`,t),t?e.setAttribute(`aria-current`,r.page===`lesson`||r.page===`algorithms`?`location`:`page`):e.removeAttribute(`aria-current`)}try{if(r.page===`home`){let e=await J(()=>import(`./home-DMthWWdh.js`),[],import.meta.url);if(t!==Q)return;Z=e.mountHome(X)}else if(r.page===`assistant`){let e=await J(()=>import(`./assistant-Ct0MwSKp.js`),__vite__mapDeps([0,1,2]),import.meta.url);if(t!==Q)return;Z=e.mountAssistant(X)}else if(r.page===`learn`){let e=await J(()=>import(`./learn-BfS69p7z.js`),__vite__mapDeps([3,4,5]),import.meta.url);if(t!==Q)return;Z=e.mountLearn(X,r.language,r.lesson)}else if(r.page===`lesson`){let e=await J(()=>import(`./lesson-CYtU3twZ.js`),__vite__mapDeps([6,5,7,4,8,9,10,2,1]),import.meta.url);if(t!==Q)return;Z=e.mountLesson(X,r.language,r.lesson)}else if(r.page===`trace`){let e=await J(()=>import(`./trace-Dp2bqtLl.js`),__vite__mapDeps([11,8,9,10,2,5]),import.meta.url);if(t!==Q)return;Z=e.mountTrace(X,r.language,r.lesson)}else if(r.page===`missing`)X.innerHTML=`<section class="route-error"><h1>没有找到这节课程</h1><p>${G(r.lesson)} 不在当前语言的学习目录中。</p><a class="button primary" href="${V(r.language)}">查看完整目录</a></section>`;else if(r.page===`algorithm-index`){let e=await J(()=>import(`./algorithm-index-DaBx8rf2.js`),__vite__mapDeps([12,13]),import.meta.url);if(t!==Q)return;Z=e.mountAlgorithmIndex(X,r.missing)}else if(r.page===`algorithms`){let e=r.algorithm;if(n(e)){let n=await J(()=>import(`./contest-DKMn_O7S.js`),__vite__mapDeps([14,13,15,7,9,10,5]),import.meta.url);if(t!==Q)return;Z=n.mountContest(X,e)}else{let n=await J(()=>import(`./algorithms-BZsoSmEK.js`),__vite__mapDeps([16,13,15,7,9,10,5]),import.meta.url);if(t!==Q)return;Z=n.mountAlgorithms(X,e)}}}catch(e){if(t!==Q)return;console.error(`CodeSpace page could not be mounted`,e),X.innerHTML=`<div class="route-error"><h1>学习内容未能载入</h1><p>请检查本地服务，或刷新后重试。</p><a class="button primary" href="#/">返回代码空间</a></div>`}X.setAttribute(`aria-busy`,`false`);let i=X.querySelector(`h1`)?.textContent?.trim();document.title=r.page===`home`?`代码空间 · 星序 Astra`:`${r.page===`trace`?`程序追踪`:i||`学习内容`} · 代码空间`,window.scrollTo({top:0,behavior:`instant`});let a=r.page===`learn`&&r.lesson?X.querySelector(`.course-directory-lesson.is-current`):null;a?.scrollIntoView({block:`nearest`,behavior:`instant`}),e&&(a??X).focus({preventScroll:!0})}window.addEventListener(`hashchange`,()=>void $(!0)),window.addEventListener(`pagehide`,()=>Z?.(),{once:!0}),window.addEventListener(`pageshow`,e=>{e.persisted&&$()}),document.querySelector(`.skip-link`).addEventListener(`click`,e=>{e.preventDefault(),X.focus()}),$();export{r as C,t as S,e as T,se as _,H as a,o as b,F as c,ue as d,z as f,R as g,L as h,V as i,N as l,I as m,G as n,de as o,M as p,W as r,pe as s,J as t,P as u,O as v,i as w,a as x,ee as y};