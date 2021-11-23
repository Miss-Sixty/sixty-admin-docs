# 项目说明

::: warning ⭐⭐⭐⭐⭐
因该项目所使用的技术栈和语法大多数都发布不久或刚定稿，缺少一定的稳定性且参有不确定的 bug，故不建议在公司项目中使用。
:::

## 介绍

Sixty-Admin 是基于 Vue3 和 Element Plus 的中后台管理系统。

## 前序准备

你需要在本地安装 node 和 git。本项目技术栈基于 ES2015+、Vue3、Vue-router、Vite、Pinia、axios 和 Element Plus ，了解这些知识会使你在开发项目时轻松许多。

## 目录结构

```shell
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
│
├── src                        # 源代码
│   ├── api                    # 数据请求
│   ├── assets                 # 图片 等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # Vue指令
│   ├── hooks                  # 钩子函数
│   ├── icons                  # 项目 svg 图标
│   ├── layout                 # 页面视图架构
│   ├── plugins                # Element Plus 按需引入components
│   ├── router                 # 路由
│       ├── permission.js      # 路由拦截
│   ├── store                  # 全局 store 管理
│       ├── index.js           # 自动注入全局组件
│   ├── styles                 # 全局样式
│       ├── resources/         # 自动加载全局 scss
│   ├── utils                  # 全局 js 公用方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│
├── .eslintignore              # eslint 忽略配置项
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # 上传 git 忽略文件
├── .prettierrc                # 代码美化
├── babel.config.js            # babel-loader 配置
├── package.json               # package.json
├── README.md                  # 文档
└── vue.config.js              # vue-cli 配置
```

## 安装

- **步骤 1**: 克隆项目

```bash
git clone https://github.com/Miss-Sixty/sixty-admin.git
```

- **步骤 2**: 进入项目目录

```bash
cd sixty-admin
```

- **步骤 3**: 安装依赖

<CodeGroup>
      <CodeGroupItem title="PNPM" active>

```bash
pnpm install
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN" active>

```bash
yarn
```

</CodeGroupItem>
  <CodeGroupItem title="NPM" >

```bash
npm install
```

  </CodeGroupItem>
</CodeGroup>

- **步骤 4**: 启动项目

<CodeGroup>
    <CodeGroupItem title="PNPM" active>

```bash
pnpm dev
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN" active>

```bash
yarn dev
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm run dev
```

  </CodeGroupItem>
</CodeGroup>

## Contribution

本文档项目基于 VuePress 开发。
