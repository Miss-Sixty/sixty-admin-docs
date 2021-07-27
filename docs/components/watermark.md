# 水印组件

给页面的某个区域加上水印。

<img :src="$withBase('/imgs/watermark.png')">

## 引入

::: tip 提示
公共组件已自动全局引入，可直接使用
:::

## 代码演示

### 前置水印

水印组件默认实现为前置水印，即设想水印会显示在内容的上方，zIndex 默认设置为 9，如果你不希望水印遮挡上层内容，可以调整该值到小于上层内容的 zIndex。

```vue
<template>
  <watermark>
    <div>水印内容</div>
  </watermark>
</template>
```

## Props
### 基础参数
| 参数         | 说明           | 类型 | 默认值         |
| ------------ | -------------- | ---- | -------------- |
| width | 水印的宽度 | number | 120 |
| height | 水印的高度 | number | 64 |
| rotate | 水印绘制时，旋转的角度，单位 ° | number | -22 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | string | - |
| zIndex | 追加的水印元素的 z-index | number | 9 |
| content | 水印文字内容 | string | - |
| fontColor | 水印文字颜色 | string | rgba(0,0,0,.15) |
| fontSize | 文字大小 | string, number | 16 |

### 高级参数
| 参数         | 说明           | 类型 | 默认值         |
| ------------ | -------------- | ---- | -------------- |
| markStyle | 水印层的样式 | object | - |
| markClassName | 水印层的类名 | string | - |
| gapX | 水印之间的水平间距 | number | 212 |
| gapY | 水印之间的垂直间距 | number | 222 |
| offsetLeft | 水印在 canvas 画布上绘制的水平偏移量, 正常情况下，水印绘制在中间位置, 即 offsetTop = gapX / 2 | number | offsetTop = gapX / 2 |
| offsetTop | 水印在 canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置, 即 offsetTop = gapY / 2 | number | offsetTop = gapY / 2 |

## 水印 API 可视化
这里借用 [`Ant Design`](https://procomponents.ant.design/components/water-mark/#%E6%B0%B4%E5%8D%B0-api-%E5%8F%AF%E8%A7%86%E5%8C%96) 中的图片来解释各个参数的含义
<img :src="$withBase('/imgs/watermark-api.png')">
