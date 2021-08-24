# Clipboard 文本复制

## 说明

二次封装 [clipboard-copy](https://github.com/feross/clipboard-copy)

## 代码演示

```vue
<template>
  <el-input
    v-model="input"
    placeholder="请输入内容"
    type="textarea"
    :rows="3"
  />
  <el-button
    v-clipboard="input"
    v-clipboard:success="successChange"
    v-clipboard:error="errorChange"
    type="primary"
    style="margin-top: 20px"
  >
    点击复制
  </el-button>
</template>
<script setup>
const input = ref("连雨不知春去，一晴方觉夏深。");
const successChange = (res) => ElMessage.success(res);
const errorChange = (res) => ElMessage.error(res);
</script>
```

## 指令

| 参数                | 说明         | 类型     | 默认值 |
| ------------------- | ------------ | -------- | ------ |
| v-clipboard         | 复制的文字   | string   | -      |
| v-clipboard:success | 复制成功回调 | function |
| v-clipboard:error   | 复制失败回调 | function |
