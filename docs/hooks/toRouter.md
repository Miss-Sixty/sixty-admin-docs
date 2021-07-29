# 跳转指定页面

## 引入

```vue
<template>
  <button @click="toRouter(name, params, query)">click</button>
</template>

<script setup>
import { toRouter } from "@/hooks";
</script>
```

## 参数

| 参数   | 说明               | 类型   | 默认值 |
| ------ | ------------------ | ------ | ------ |
| name   | 跳转路由的名字     | string | -      |
| params | 传递的 params 参数 | object | -      |
| query  | 传递的 query 参数  | object | -      |

::: warning
如果使用 query 传参则需要在接收参数时使用 JSON.parse(route.query.data) 来接收参数。这样做的目的是为了避免参数的数字类型被浏览器格式化为字符串类型。
:::
