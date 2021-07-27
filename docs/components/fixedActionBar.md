# FixedActionBar 固定底部操作栏

<img :src="$withBase('/imgs/fixedActionBar.png')">

## 说明

避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页

## 代码演示

```vue
<template>
  <fixed-action-bar>
    <el-button type="primary">确认提交</el-button>
    <el-button>取消</el-button>
  </fixed-action-bar>
</template>
```

## Slot

| 名称    | 说明     |
| ------- | -------- |
| default | 操作区域 |
