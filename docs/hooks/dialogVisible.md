# 打开子组件弹窗

::: warning
此方法大多用在子组件是弹窗的情况。
:::

## 引入

```vue
// 父组件
<template>
  <child-view ref="child" />
</template>

<script setup>
import { dialogVisible } from "@/hooks";
const { refName: child, showDialog } = dialogVisible();
</script>

// 子组件
<template>
  <div>我是子组件</div>
</template>

<script setup>
showDialog(data,type){
  console.log(data,type)
}
</script>
```

## 父组件返回值

| 参数       | 说明              | 类型     | 默认值 |
| ---------- | ----------------- | -------- | ------ |
| refName    | 子组件 Dom 的名字 | string   | -      |
| showDialog | 子组件的方法      | function | -      |

## 子组件方法

::: warning
子组件里必须要有 showDialog 函数，否则父组件会因找不到子组件的方法而报错。
:::

| 参数       | 说明               | 类型     | 默认值 |
| ---------- | ------------------ | -------- | ------ |
| showDialog | 父组件会执行的方法 | function | -      |
