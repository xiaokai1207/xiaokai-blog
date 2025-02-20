# 使用 VuePress + GitHub Actions 搭建个人博客网站踩坑记录

`vuepress` 2.0 版本发布后，支持使用脚手架傻瓜式生成个人博客网站以及github actions 部署代码，本博客网站就是使用的这一套部署的。

我在搭建过程中遇到了一些坑，记录在这里。

## 项目正常启动

直接使用下面这个命令生成的模板项目跑不起来。

```
pnpm create vuepress vuepress-starter
```

需要注意安装依赖 sass，脚手架生成的 `package.json` 里没有 `sass` 这个依赖

```
"devDependencies": {
    "sass": "1.85.0"
  }
```

## github actions 部署

在部署脚本里，要注意 `pnpm` 和 `nodejs` 版本，最好和你本地成功跑起来项目的一致，不然线上部署的时候可能会报错。

```yml

name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: 安装 pnpm
        uses: pnpm/action-setup@v2
        with:
          # 注意 pnpm 版本，和你本地一致
          version: 7.33.5

      - name: 安装依赖
        run: pnpm install --no-frozen-lockfile


      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          # # 注意 node 版本，和你本地一致
          node-version: 20.18.3
          cache: pnpm


      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          pnpm run docs:build
          > docs/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: docs/.vuepress/dist
```

github pages 配置如下：

![Clipboard_Screenshot_1739978671.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3090df8ddf7e4835880271087dc32dff~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5YmN56uv6Zi_5p6X:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjgyMzIwMTU5MjE4Mjc4MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1740065078&x-orig-sign=6Qdrv%2B%2BO%2BZ8vnt86N4sS1hERPOI%3D)

Source 要选择 Deploy from a branch，branch 选 gh-pages，root 目录。

## 资源路径

一定要配置基础路径，不然部署后访问静态资源都是 404。

```js
// docs/.vuepress/config.js
export default defineUserConfig({
  base: '/xiaokai-blog/',
})
```

原因是静态资源都是放到 `https://xiaokai1207.github.io/xiaokai-blog/` 这个目录下的，如果不配置 base 的话，就访问到 `https://xiaokai1207.github.io/` 这个目录下去了。

---

参考链接：

- [vuepress](https://vuepress.vuejs.org/guide/getting-started.html#try-it-online)
