# Node.js 和 pnpm 版本的便携管理

在现代前端开发中，项目依赖的工具链日益复杂，不同项目可能要求不同的 Node.js、包管理工具或其他 CLI 工具的版本。手动切换版本不仅效率低下，还容易引发环境冲突。本文将介绍几种常见的工具版本管理方案，帮助开发者实现**环境隔离和版本切换自动化**。

## Node.js 版本管理：`n`

`n` 是一个轻量级 Node.js 版本管理工具，通过命令行实现快速安装、切换和删除 Node.js 版本。它无需复杂的配置，适合新手和追求简洁的开发者。

```bash
# 安装 n
npm install -g n

# 安装指定 Node.js 版本
n install 18.12.1

# 切换版本（交互式选择）
n

# 删除版本
n rm 14.17.0

# 查看已安装版本
n ls
```

## 使用 Corepack 管理 pnpm 版本

Corepack 是 Node.js 内置的包管理工具版本管理器（从 Node.js 16.9.0 开始默认启用），可统一管理 pnpm、yarn 等工具的版本，无需全局安装。

```bash
# 启用 Corepack
corepack enable

# 为项目指定 pnpm 版本（自动下载并锁定版本）
corepack use pnpm@latest

# 或在 package.json 中声明
{
  "packageManager": "pnpm@8.14.0"
}
```

---

参考链接：

- [n](https://github.com/tj/n)
- [CorePack](https://pnpm.io/installation#using-corepack)