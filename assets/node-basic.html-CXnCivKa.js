import{_ as n,c as e,b as i,o as s}from"./app-BMXUQzZL.js";const a={};function o(d,l){return s(),e("div",null,l[0]||(l[0]=[i(`<h1 id="node-js-基础" tabindex="-1"><a class="header-anchor" href="#node-js-基础"><span>Node.js 基础</span></a></h1><h2 id="什么是-node-js" tabindex="-1"><a class="header-anchor" href="#什么是-node-js"><span>什么是 Node.js</span></a></h2><p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。它让 JavaScript 可以脱离浏览器运行在服务器端，使 JavaScript 可以进行网络编程，实现很多原本在服务器端才能实现的功能。</p><h3 id="node-js-的特点" tabindex="-1"><a class="header-anchor" href="#node-js-的特点"><span>Node.js 的特点</span></a></h3><ul><li><p>单线程</p><ul><li>单线程意味着 Node.js 在同一时间只能执行一个任务，不能同时执行多个任务。</li><li>单线程的优点是： <ul><li>简单易学</li><li>避免了多线程的复杂性</li><li>避免了线程切换的开销</li><li>避免了死锁和竞态条件</li></ul></li></ul></li><li><p>非阻塞 I/O</p><ul><li>非阻塞 I/O 意味着 Node.js 在执行 I/O 操作时，不会阻塞主线程，而是会立即返回结果。</li><li>非阻塞 I/O 的优点是： <ul><li>提高了程序的并发能力</li><li>减少了线程切换的开销</li><li>减少了死锁和竞态条件</li></ul></li></ul></li><li><p>事件驱动</p><ul><li>事件驱动意味着 Node.js 在执行任务时，会根据事件的发生来决定任务的执行顺序。</li><li>事件驱动的优点是： <ul><li>提高了程序的并发能力</li><li>减少了线程切换的开销</li><li>减少了死锁和竞态条件</li></ul></li></ul></li><li><p>轻量且高效</p><ul><li>Node.js 的轻量和高效体现在它的内存管理和垃圾回收机制上。</li></ul></li></ul><h3 id="node-js-的应用场景" tabindex="-1"><a class="header-anchor" href="#node-js-的应用场景"><span>Node.js 的应用场景</span></a></h3><ul><li>服务器端开发</li><li>命令行工具</li><li>数据处理和分析</li><li>实时应用</li><li>微服务架构</li><li>构建工具</li><li>测试和自动化</li></ul><h2 id="node-js-的安装" tabindex="-1"><a class="header-anchor" href="#node-js-的安装"><span>Node.js 的安装</span></a></h2><h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js"><span>安装 Node.js</span></a></h3><p>Node.js 的安装非常简单，只需要从官网下载安装包并安装即可。<a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs 官网</a>。但我更推荐使用多版本管理工具来安装和管理 Node.js 版本。</p><h3 id="多版本管理工具-volta" tabindex="-1"><a class="header-anchor" href="#多版本管理工具-volta"><span>多版本管理工具 Volta</span></a></h3><p>Volta 是一个 Node.js 的多版本管理工具，它可以帮助我们方便地安装和管理多个 Node.js 版本，其他类似的工具还有 nvm、n 等。</p><h3 id="为什么选择-volta" tabindex="-1"><a class="header-anchor" href="#为什么选择-volta"><span>为什么选择 Volta</span></a></h3><ul><li>版本管理简单：Volta 可以帮助我们方便地安装和管理多个 Node.js 版本，且不需要复杂的配置</li><li>跨平台：Volta 支持 Windows、macOS 和 Linux 等多个平台</li><li>项目隔离：Volta 可以帮助我们方便地管理不同项目的 Node.js 版本</li></ul><p>最重要的一点就是项目隔离，比如我需要一个项目使用 Node.js 14，另一个项目使用 Node.js 16，使用 Volta 就可以很方便地管理，不需要手动切换，只需要在 package.json 中指定即可。</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;volta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16.20.2&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const r=n(a,[["render",o],["__file","node-basic.html.vue"]]),p=JSON.parse('{"path":"/node/node-basic.html","title":"Node.js 基础","lang":"ch-CN","frontmatter":{},"headers":[{"level":2,"title":"什么是 Node.js","slug":"什么是-node-js","link":"#什么是-node-js","children":[{"level":3,"title":"Node.js 的特点","slug":"node-js-的特点","link":"#node-js-的特点","children":[]},{"level":3,"title":"Node.js 的应用场景","slug":"node-js-的应用场景","link":"#node-js-的应用场景","children":[]}]},{"level":2,"title":"Node.js 的安装","slug":"node-js-的安装","link":"#node-js-的安装","children":[{"level":3,"title":"安装 Node.js","slug":"安装-node-js","link":"#安装-node-js","children":[]},{"level":3,"title":"多版本管理工具 Volta","slug":"多版本管理工具-volta","link":"#多版本管理工具-volta","children":[]},{"level":3,"title":"为什么选择 Volta","slug":"为什么选择-volta","link":"#为什么选择-volta","children":[]}]}],"git":{"updatedTime":1741168076000,"contributors":[{"name":"chriswlwang","username":"chriswlwang","email":"chriswlwang@tencent.com","commits":1,"url":"https://github.com/chriswlwang"}]},"filePathRelative":"node/node-basic.md","excerpt":"\\n<h2>什么是 Node.js</h2>\\n<p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。它让 JavaScript 可以脱离浏览器运行在服务器端，使 JavaScript 可以进行网络编程，实现很多原本在服务器端才能实现的功能。</p>\\n<h3>Node.js 的特点</h3>\\n<ul>\\n<li>\\n<p>单线程</p>\\n<ul>\\n<li>单线程意味着 Node.js 在同一时间只能执行一个任务，不能同时执行多个任务。</li>\\n<li>单线程的优点是：\\n<ul>\\n<li>简单易学</li>\\n<li>避免了多线程的复杂性</li>\\n<li>避免了线程切换的开销</li>\\n<li>避免了死锁和竞态条件</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>非阻塞 I/O</p>\\n<ul>\\n<li>非阻塞 I/O 意味着 Node.js 在执行 I/O 操作时，不会阻塞主线程，而是会立即返回结果。</li>\\n<li>非阻塞 I/O 的优点是：\\n<ul>\\n<li>提高了程序的并发能力</li>\\n<li>减少了线程切换的开销</li>\\n<li>减少了死锁和竞态条件</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>事件驱动</p>\\n<ul>\\n<li>事件驱动意味着 Node.js 在执行任务时，会根据事件的发生来决定任务的执行顺序。</li>\\n<li>事件驱动的优点是：\\n<ul>\\n<li>提高了程序的并发能力</li>\\n<li>减少了线程切换的开销</li>\\n<li>减少了死锁和竞态条件</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>轻量且高效</p>\\n<ul>\\n<li>Node.js 的轻量和高效体现在它的内存管理和垃圾回收机制上。</li>\\n</ul>\\n</li>\\n</ul>"}');export{r as comp,p as data};
