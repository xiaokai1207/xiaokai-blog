# Node.js 基础

## 1.什么是 Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。它让 JavaScript 可以脱离浏览器运行在服务器端，使 JavaScript 可以进行网络编程，实现很多原本在服务器端才能实现的功能。

### Node.js 的特点

- 单线程
  - 单线程意味着 Node.js 在同一时间只能执行一个任务，不能同时执行多个任务。
  - 单线程的优点是：
    - 简单易学
    - 避免了多线程的复杂性
    - 避免了线程切换的开销
    - 避免了死锁和竞态条件
    
- 非阻塞 I/O
  - 非阻塞 I/O 意味着 Node.js 在执行 I/O 操作时，不会阻塞主线程，而是会立即返回结果。
  - 非阻塞 I/O 的优点是：
    - 提高了程序的并发能力
    - 减少了线程切换的开销
    - 减少了死锁和竞态条件
- 事件驱动
  - 事件驱动意味着 Node.js 在执行任务时，会根据事件的发生来决定任务的执行顺序。
  - 事件驱动的优点是：
    - 提高了程序的并发能力
    - 减少了线程切换的开销
    - 减少了死锁和竞态条件
- 轻量且高效
  - Node.js 的轻量和高效体现在它的内存管理和垃圾回收机制上。

### Node.js 的应用场景

- 服务器端开发
- 命令行工具
- 数据处理和分析
- 实时应用
- 微服务架构
- 构建工具
- 测试和自动化

## 2.Node.js 的安装

### 安装 Node.js

Node.js 的安装非常简单，只需要从官网下载安装包并安装即可。[nodejs 官网](https://nodejs.org)。但我更推荐使用多版本管理工具来安装和管理 Node.js 版本。

### 多版本管理工具 Volta

Volta 是一个 Node.js 的多版本管理工具，它可以帮助我们方便地安装和管理多个 Node.js 版本，其他类似的工具还有 nvm、n 等。

### 为什么选择 Volta

- 版本管理简单：Volta 可以帮助我们方便地安装和管理多个 Node.js 版本，且不需要复杂的配置
- 跨平台：Volta 支持 Windows、macOS 和 Linux 等多个平台
- 项目隔离：Volta 可以帮助我们方便地管理不同项目的 Node.js 版本

最重要的一点就是项目隔离，比如我需要一个项目使用 Node.js 14，另一个项目使用 Node.js 16，使用 Volta 就可以很方便地管理，不需要手动切换，只需要在 package.json 中指定即可。

```json
"volta": {
  "node": "16.20.2"
}
```

## 3.创建并管理项目

### 使用 npm 初始化项目

npm 是 Node.js 的包管理工具，我们通常使用它来初始化项目。

1. 创建项目目录

```bash
mkdir my-project
cd my-project
```

2. 初始化项目

```bash
npm init
```

执行这个命令后，会提示我们输入项目信息，比如项目名称、版本、描述等，我们可以直接回车使用默认值。

最终会生成一个 package.json 文件，里面记录了项目的基本信息和依赖。

### 安装依赖

项目创建完成后，通常需要安装一些依赖，比如 express、axios 等。这里我们以 express 为例。

```bash
npm install express
```

执行这个命令后，会在 node_modules 目录下安装 express 及其依赖。

## 4.编写与调试 nodejs 程序

接下来，我们编写一个简单的 express 程序，并使用 npm 进行调试。

### 创建一个简单的服务器

在项目根目录下创建一个 index.js 文件，并编写以下代码：

```js
const express = require('express');
const app = express();

// 定义一个路由
app.get('/', (req, res) => {
  res.send('Hello Node.js');
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

这段代码定义了一个简单的 express 服务器，当访问根路由时，会返回 "Hello Node.js"。

### 运行项目

在项目目录中运行以下命令：

```bash
node index.js
```

打开浏览器，访问 http://localhost:3000，可以看到页面返回了 "Hello Node.js"。

### 使用 npm 脚本调试

为了方便调试，我们可以在 package.json 中添加一个 start 脚本，这样我们只需要运行 `npm start` 就可以启动服务器。

```json
"scripts": {
  "start": "node index.js"
}
```

现在，我们可以运行 `npm start` 来启动服务器，这与直接运行 `node index.js` 的效果是一样的，但更符合 npm 的项目管理规范。

## 5.使用 pnpm 管理项目

pnpm 是 Node.js 的包管理工具，它可以帮助我们方便地管理项目依赖。

### 为什么选择 pnpm

和 npm 一样，pnpm 也是 Node.js 的包管理工具，但它有以下优点：

1. 更高效的磁盘空间利用
   - pnpm 使用硬链接和符号链接来共享依赖包
   - 相同的依赖包在硬盘上只会被存储一次
   - 大大节省磁盘空间，特别是在管理多个项目时
2. 更快的安装速度
   - 由于使用硬链接，不需要重复复制相同的包
   - 安装过程更快，特别是在已经缓存了依赖的情况下
   - 并行安装提升效率
3. 严格的依赖管理
   - 使用符号链接创建非扁平的 node_modules 结构
   - 防止访问未声明的依赖（幽灵依赖）
   - 更符合 Node.js 模块解析算法的设计理念
4. 更好的单体仓库(Monorepo)支持
   - 内置的工作空间(workspace)功能
   - 支持不同项目之间共享依赖
   - 更容易管理多包项目
5. 更安全的依赖管理
   - 避免依赖提升带来的问题 
   - 更好的版本控制和冲突处理
   - 降低安全风险
6. 向后兼容
   - 完全兼容 npm 的功能
   - 可以直接替换 npm 使用
   - 支持现有的 package.json 配置

### 安装 pnpm

如果使用 Volta 管理项目，只需要运行以下命令即可安装 pnpm：

```bash
volta install pnpm
```

如果不使用 Volta 管理项目，可以运行以下命令安装 pnpm：

```bash
npm install -g pnpm
```

建议以后都使用 pnpm 来管理项目，因为 pnpm 的优点实在太多了，尤其是对于多包项目(Monorepo)的支持，在前端开发中非常常见。

## 6.模块化

在 node.js 中，模块化是开发应用程序的基石。模块化可以帮助我们更好地组织代码，提高代码的复用性和可维护性。

node.js 的模块化分为 CommonJS 和 ES Modules 两种规范。
