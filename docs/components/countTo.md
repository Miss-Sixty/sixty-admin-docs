# CountTo 数字过渡

<img :src="$withBase('/imgs/countTo.jpg')">

## 说明

二次封装 [vue-countTo](https://github.com/PanJiaChen/vue-countTo)
兼容 vue3 的代码来源于[xiaofan9](https://github.com/xiaofan9/vue-count-to)

## 代码演示

```vue
<template>
  <count-to
    ref="example"
    :start-val="_startVal"
    :end-val="_endVal"
    :duration="_duration"
    :decimals="_decimals"
    :separator="_separator"
    :prefix="_prefix"
    :suffix="_suffix"
    :autoplay="false"
  />
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  setStartVal: 0,
  setEndVal: 2021,
  setDuration: 3000,
  setDecimals: 2,
  setSeparator: ",",
  setSuffix: " rmb",
  setPrefix: "¥ ",
});
</script>
```

## Props

| 参数         | 说明         | 类型   | 默认值 |
| ------------ | ------------ | ------ | ------ |
| setStartVal  | 开始数字     | number | -      |
| setEndVal    | 结束数字     | number | -      |
| setDuration  | 过渡时间     | number | -      |
| setDecimals  | 小数点后几位 | number | -      |
| setSeparator | 数字分隔符   | number | -      |
| setSuffix    | 数字尾部文字 | number | -      |
| setPrefix    | 数字头部文字 | number | -      |

## 函数

| 参数        | 说明         | 返回值 |
| ----------- | ------------ | ------ |
| start       | 开始过渡     | -      |
| pauseResume | 暂停当前过渡 | -      |
