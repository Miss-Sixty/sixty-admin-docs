# 样式

## CSS Modules

在样式开发过程中，有两个问题比较突出：

- 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；

- 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标示，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。

好在 vue 为我们提供了 scoped 可以很方便的解决上述问题。 它顾名思义给 css 加了一个域的概念。

```css
/* 编译前 */
.example {
  color: red;
}

/* 编译后 */
.example[_v-f3f3eg9] {
  color: red;
}
```

只要加上 `<style scoped>` 这样 css 就只会作用在当前组件内了。详细文档见 [vue-loader](https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles)

::: tip
使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。
:::

## 目录结构

lrr-pc-admin 所有全局样式都在 @/src/css 目录下设置

```sh
├── styles
│   ├── iview-ui.scss            # 全局自定义 iview-ui 样式
│   ├── index.scss               # 全局通用样式
│   ├── transition.scss          # vue transition 动画
│   └── var.scss                 # 全局变量
```

常见的工作流程是，全局样式都写在 src/styles 目录下，每个页面自己对应的样式都写在自己的 .vue 文件之中

```css
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
</style>
```

<!--
## 自定义 element-ui 样式

由于 element-ui 的样式我们是在全局引入的，所以你想在某个页面里面覆盖它的样式就不能加 scoped，但你又想只覆盖这个页面的 element 样式。这里提供两种修改方式

- 第一种 你可以在它的父级加一个 class，用命名空间来解决问题（不加 scoped）。

```css
.article-page {
  /* 你的命名空间 */
  .el-tag {
    /* element-ui 元素*/
    margin-right: 0px;
  }
}
```

- 第二种 可以使用`::v-deep`来解决问题（添加 scoped）。

```css
::v-deep.el-tag {
  /* element-ui 元素*/
  margin-right: 0px;
}
``` -->
