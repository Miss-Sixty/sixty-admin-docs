module.exports = {
  lang: "zh-CN",
  title: "Sixty-Admin 后台管理系统",
  description: "一款开箱即用的 Vue3 中后台管理系统框架",
  base: "/sixty-admin-docs/",
  themeConfig: {
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/" },
      { text: "项目演示", link: "https://miss-sixty.github.io/sixty-admin/" },
    ],
    repo: "https://github.com/Miss-Sixty/sixty-admin",
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          children: [
            "/guide/todo.md",
            "/guide/README.md",
            "/guide/coding-standard.md",
            "/guide/layout.md",
            "/guide/theme.md",
            "/guide/global-resources.md",
            "/guide/component.md",
            "/guide/vuex.md",
            "/guide/router.md",
            "/guide/permission.md",
            "/guide/directive.md",
            "/guide/addView.md",
            "/guide/css.md",
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          children: ["/components/README.md", "/components/pagination.md"],
        },
      ],
    },
    lastUpdatedText: "最后更新",
    contributorsText: "贡献者",
    editLinkText: "在 GitHub 上编辑此页",
    docsRepo: "https://github.com/Miss-Sixty/sixty-admin-docs",
    docsDir: "docs",
  },
};
