# 页头

<img :src="$withBase('/imgs/pageHeader.png')">

## 代码演示

```vue
<template>
  <page-header
    title="页头"
    content="这里是内容区，可使用插槽替换内容。也可隐藏或替换左箭头和文字。"
  />
</template>
```

## Props

| 参数     | 说明           | 类型   | 默认值         |
| -------- | -------------- | ------ | -------------- |
| icon     | 左边 icon      | string | list-unordered |
| iconText | 左边文字       | string | 返回           |
| title    | 标题           | string | -              |
| backName | 跳转路由的名字 | string | -              |
| content  | 内容           | string | -              |

## Events

| 参数 | 说明                 | 默认值 |
| ---- | -------------------- | ------ |
| back | 左边图标文字点击事件 | -      |
