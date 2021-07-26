module.exports = {
  lang: 'zh-CN',
  title: 'Sixty-Admin',
  description: '一款开箱即用的 Vue3 中后台管理系统框架',
  themeConfig: {
    navbar: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '项目演示', link: 'https://github.com' },
    ],
    repo: 'https://github.com/Miss-Sixty/sixty-admin',
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          children: [
            '/guide/README.md',
            '/guide/coding-standard.md',
            '/guide/theme.md',
            '/guide/global-resources.md',
            '/guide/component.md',
            '/guide/vuex.md',
            '/guide/router.md',
            '/guide/permission.md',
            '/guide/layout.md',
            '/guide/router.md',
            '/guide/directive.md',
            '/guide/addView.md',
            '/guide/css.md',
          ],
        },
      ],

      '/components/': [
        {
          text: '组件',
          children: ['/components/README.md', '/components/pagination.md'],
        },
      ],
    },
    editLink: false,
  },
}
