# 全局资源

## 图标

本项目提供了 SVG 图标的支持，推荐去[阿里巴巴矢量图标库](https://www.iconfont.cn/)下载高质量 SVG 图标。

要使用 SVG 图标也很简单，首先将 svg 文件放到 `@/icons/svg` 目录下，然后在页面中就可以通过 `<svg-icon />` 组件使用了，name 就是 svg 文件名，如下：

```html
<svg-icon name="斑马" />
```

另外，如果系统安装了 [sketch](https://www.sketch.com/) ，那么项目也提供了自动导入 sketch 中的所有图标的[方法](https://developer.sketch.com/cli/export-assets)。只需将 sketch 文件放入到 `@/assets/sketch` 中，执行命令：
<CodeGroup>
<CodeGroupItem title="YARN" active>

```bash
yarn export:svg
```

</CodeGroupItem>
  <CodeGroupItem title="NPM" >

```bash
npm run export:svg
```

  </CodeGroupItem>
</CodeGroup>

就会在 `@icons/sketchSvg` 文件夹中自动生成所有的 sketch 图标。

## 图片

框架用到的图片资源都放在 `@/assets/imgs/` 目录下，可自行新建文件夹方便进行管理。

## 样式

样式存放目录为 `@/styles/` ，因为 Vue 的文件特性，单页的样式都写在单个 `.vue` 文件里，所以我们建议该目录只存放全局样式，方便统一管理。

此目录下还有一个特殊目录，即 `@/styles/resources/` ，这是全局 SCSS 资源目录，首先这个目录里只支持 `.scss` 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。

:::tip 说明
全局 SCSS 资源并不是全局样式，是 @mixin 、变量、@function 这些东西
:::
