# 路由和侧边栏

路由和侧边栏是组织起一个后台应用的关键骨架。

本项目侧边栏和路由是绑定在一起的，整个页面路由是后端控制返回数据，通过 `@/router/permission.js` (路由拦截) 来处理路由的动态添加和处理侧边栏。如果前端路由未找到对应的页面信息则会跳转到 404 页面。所以这样就需要在配置路由的时候遵循一些约定的规则。

## 配置项

首先我们了解一下本项目配置路由时提供了哪些配置项。

::: tip 提示
所有的导航配置项均放在路由的 meta 对象中
:::

```js
meta : {
    hidden: true                //如果设置为 true，项目将不会显示在侧边栏中（默认为 false）
    auth: ['admin','editor']    //该路由进入的权限，支持多个权限叠加，只要满足一个，即可进入
                                //如果用户没有该权限，则该路由不会在侧边栏导航中展示
    title:  'title'             //该路由在侧边栏导航和面包屑导航中展示的标题
    icon: 'icon-x'              //侧边栏导航中显示的图标（只支持svg图标）
    activeMenu: '/news/list',   //当路由设置了该属性，则会高亮相对应的侧边栏，一般会搭配 hidden: true 一起使用
    breadcrumb: true            //该路由是否在面包屑导航中展示（默认为 true）
    link: '',                   //内嵌网页链接，如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue
    copyright: false            //该路由是否显示底部版权信息，比全局设置里的 showCopyright 优先级高，不设置则继承全局里的设置

    TODO
    // noCache: true                如果设置为true，页面将不会被缓存（默认为false）
  }
```

示例：

```js
import Layout from "@/layout";

export default {
  path: "/permission",
  component: Layout,
  redirect: "/permission/page",
  name: "Permission",
  meta: {
    title: "权限验证",
    icon: "settings-5-fill",
  },
  children: [
    {
      path: "/permission/page",
      name: "permissionPage",
      component: () => import("@/views/permission"),
      meta: {
        title: "这是测试页",
        hidden: true,
        activeMenu: "/permission",
      },
    },
  ],
};
```

## 嵌套路由

如果需要嵌套多层路由，则可以引入 `EmptyLayout` 组件，查看代码可以看到这是一个空白的 layout 页面。

```html
<template>
  <router-view />
</template>
```

为什么需要这个呢？因为嵌套路由生成出来的导航栏目也是嵌套结构的，但导航栏目里的模块页面一般是不需要嵌套的，所以除了顶级路由需要设置 `component: Layout` ，嵌套有 `children` 属性的子项路由，均可设置 `component: EmptyLayout` 。当然如果你的页面确实有嵌套展示的需求，可不按照这种方式操作。

## 全局前置守卫

路由的前置导航守卫是框架实现路由跳转的核心，在前置守卫里会接管侧边栏导航路由生成、无效路由跳转 404 页面等处理。所以理解框架的前置守卫处理逻辑，对业务开发或框架二次开发有很大帮助。

## 全局后置守卫

页面标题设置被放在了后置守卫里面，这样做是因为当点击跳转页面的时候，页面还没跳过去但是页面标题已经改变。这就会出现一个问题，就是当我们阻止跳转后，此时的页面还是原来的页面，但是页面名称已经变为跳转后的名称。为了避免这个问题，我们觉得放在后置守卫中是比较合适的选择。
