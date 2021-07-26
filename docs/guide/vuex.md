# Vuex

## 介绍

Vuex 同样实现了自动注册，开发只需关注 `@/store/modules/` 文件夹里的文件即可，请根据模块区分文件。

## 目录结构

```shell
├── store                  # 全局 store 管理
│   ├── modules            # store 文件
│       ├── menu.js        # 生成导航菜单的路由数据，不建议修改此文件。
│       ├── setting.js     # 存放配置相关数据，不建议修改此文件。
│       ├── user.js        # 负责实现用户的登录、登出，以及用户信息处理。
│   ├── index.js           # 自动注入全局组件
```

新建模版：

```js
// user.js
const state = {};
const getters = {};
const actions = {};
const mutations = {};
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
```

文件默认开启命名空间，文件名会默认注册为模块名，使用方法：

```js
this.$store.state.user.xxx;
this.$store.getters["user/xxx"];
this.$store.dispatch("user/xxx");
this.$store.commit("user/xxx");
```

## user

负责实现用户的登录、登出，以及用户信息处理。

::: warning 注意
这个文件是需要二次开发的，应根据自身项目需求来修改对应的代码。
:::
