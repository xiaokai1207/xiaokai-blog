import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/xiaokai-blog/',
  head: [
    ['link', { rel: 'icon', href: '/xiaokai-blog/assets/fm.ico' }],
  ],
  lang: 'ch-CN',
  title: '前端大师',
  description: '探索前端技术的无限可能',
  theme: defaultTheme({
    logo: '/assets/logo.png',
    navbar: [
      '/',
      {
        text: '前端基础',
        link: '/basic/basic1.html',
      },
      {
        text: 'Node.js',
        link: '/node/node-basic.html',
      },
      {
        text: '跨端技术',
        link: '/crossEnd/hybrid.html',
      },
      {
        text: '杂项',
        link: '/other/blog.html',
      },
      // {
      //   text: 'Category',
      //   link: '/category/',
      // },
      // {
      //   text: 'Tag',
      //   link: '/tag/',
      // },
      // {
      //   text: 'Timeline',
      //   link: '/timeline/',
      // },
    ],

    sidebar: {
      '/basic/': [
        {
          text: '浏览器渲染原理',
          children: [
            '/basic/basic1.html',
            '/basic/basic2.html',
          ],
        },
      ],
      '/node/': [
        {
          text: 'Node.js',
          children: [
            '/node/node-basic.html',
          ],
        },
      ],
      '/crossEnd/': [
        {
          text: '跨端技术',
          children: [
            '/crossEnd/hybrid.html',
            '/crossEnd/jsbridge.html',
          ],
        },
      ],
      '/other/': [
        {
          text: '杂项',
          children: [
            '/other/blog.html',
            '/other/versionManage.html',
          ],
        },
      ],
    }
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title, 
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
