# ECharts 图表

<img :src="$withBase('/imgs/charts.jpg')">

## 说明

二次封装 [Apache ECharts](https://echarts.apache.org/zh/index.html)

## 代码演示

```vue
<template>
  <e-charts :option="option" height="250px" />
</template>
<script setup>
import { reactive } from "vue";
const lisoptiont = reactive({
  grid: {
    left: "6%",
    right: "6%",
    bottom: "10%",
    top: "15%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
  ],
});
</script>
```

## Props

| 参数      | 说明         | 类型    | 默认值 |
| --------- | ------------ | ------- | ------ |
| height    | 图表高度     | string  | 350px  |
| width     | 图表宽度     | string  | 100%   |
| option    | 图表参数     | object  | -      |
| deepWatch | 是否深度监听 | boolean | false  |
| loading   | 加载提醒     | boolean | -      |

::: tip
动态改变图表数据有两种方法，一种是开启动态监听。
另一种方法则须在图表数据改变后重新赋值 options 来达到重新渲染图表的目的，比深度监听性能更高。
:::
