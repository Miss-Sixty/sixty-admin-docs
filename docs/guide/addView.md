# 新增页面

新增页面需要前端和后端相互配合，前端把指定的路由配置信息提供给后端，由后端更新路由接口返回的数据信息。

也可在后台的管理员列表中手动的添加路由信息，但并不推荐这样做，因为测试数据和正式数据不互通，所以手动添加的路由信息在正式版上并不会生效。如果想让更新的页面生效就必须在正式版再次手动添加路由信息，这是一件重复的添加工作。所以建议前后端共同维护一份路由文件，避免不必要的工作。

## 添加一级页面演示

::: warning 导航栏接口数据
后端需要把数据结构写成一级路由，且只能有一层 children 对象。

第一层 children 里如果有一个对象，则页面导航树自动为一级。可通过添加 meta 属性来让它显示为二级菜单结构。

第一层 children 里如果有多个对象，则页面导航树自动变为二级菜单。
:::
**如：新增一个 「直播管理 liveManage」 页面**

- 1.在 index.js 中写入

```js
export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/liveManage",
    children: [
      {
        path: "/liveManage",
        name: "liveManage",
        component: () => import("@/views/liveManage")
      }
    ]
  }
];
```

## 多级页面添加演示

**如：新增一个 「商品管理 shopManage」 页面**
::: warning 导航栏接口数据
后端需要把数据结构写成一级路由嵌套 children 对象，children 对象中写二级路由信息。
:::

- 1.商品管理页为多级页面，所以需要在后端维护的路由文件添加 如下代码

```js
[
  {
    path: "/shopManage",
    component: Layout,
    redirect: "/shopList",
    children: [
      {
        path: "/shopList",
        name: "shopList",
        component:"@/views/shopManage/shopList"
      },
       {
        path: "/shopList2",
        name: "shopList2",
        component:"@/views/shopManage/shopList2"
      }
  }
]
```

## 新增 view

新增完路由之后不要忘记在 @/views 文件下 创建对应的文件夹，一般一个路由对应一个文件，该模块下的功能组件就建议在本文件夹下创建一个 components 文件夹，各个功能模块维护自己的 components 组件。

## 新增 api

最后在 @/api 文件夹下创建本模块对应的 api 服务。

## 新增组件

在全局的 @/components 只会写一些全局的组件，如富文本，Echarts，封装的上传视频组件等等能被公用的组件。每个页面或者模块特定的业务组件则会写在当前 views 下面。如：@/views/liveManage/components/xxx.vue。这样拆分使结构更加清晰，大大减轻了维护成本。

请记住拆分组件最大的好处不是公用而是可维护性！

## 新增样式

页面的样式和组件是一个道理，全局的 @/styles 放置全局公用的样式，每一个页面的样式就写在当前 views 下面，请记住加上 scoped 或者命名空间，避免造成全局的样式污染。
