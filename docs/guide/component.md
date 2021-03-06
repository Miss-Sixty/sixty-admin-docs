# 组件

## 全局组件

:::tip 说明
全局组件无需手动引入，框架会自动注册
:::

全局组件存放在 `@/components/` 目录下，需要注意各个组件按文件夹区分。每个组件的文件夹内至少保留一个文件名为 `index` 的组件入口，例如 `index.vue` 。

组件必须设置 `name` 并保证其唯一，自动注册会将组件的 `name` 设为组件名，可参考 `SvgIcon` 组件写法。虽然文件夹名称和组件 `name` 无关联，但建议与 `name` 保持一致。

## 局部组件

建议局部组件跟随页面走，你可以在每个页面文件夹下，建立一个 `components` 文件夹用于存放局部组件。

按照这个规则，后续不管是修改还是调试，代码相对会比较清晰。