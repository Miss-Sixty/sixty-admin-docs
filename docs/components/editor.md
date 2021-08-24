# Editor 富文本编辑器

<img :src="$withBase('/imgs/editor.jpg')">

## 说明

二次封装 [wangEditor](https://www.wangeditor.com/)

## 代码演示

```vue
<template>
  <wang-editor v-model="text" />
</template>
<script setup>
import { ref } from "vue";
const text = ref(`
<h1>为何选择 wangEditor</h1>
<ul>
    <li>简洁、轻量级、文档齐全</li>
    <li>万星项目 Github Star 1w+</a></li>
    <li>npm 周下载量 1w+</li>
    <li>CDN 月下载量百万+</li>
</ul>`);
</script>
```

## Props

| 参数    | 说明       | 类型   | 默认值 |
| ------- | ---------- | ------ | ------ |
| v-model | 富文本内容 | string | -      |
