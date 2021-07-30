# imgUpload 单图上传

<img :src="$withBase('/imgs/imgUpload.png')">

## 说明

专门针对单张图片的上传场景二次封装 upload 组件。

## 代码演示

```vue
<template>
  <img-upload
    v-model:url="url"
    action="/mock/upload"
    width="250"
    height="150"
    tip
    no-del
    @on-success="onSuccess"
  />
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://picsum.photos/250/150");
const onSuccess = (res) => (url.value = res.data);
</script>
```

## Props

| 参数        | 说明                        | 类型            | 默认值                                                                    |
| ----------- | --------------------------- | --------------- | ------------------------------------------------------------------------- |
| accept      | 限制接受的文件类型          | string          | -                                                                         |
| action      | 必选参数，上传的地址        | string          | -                                                                         |
| headers     | 设置上传的请求头部          | object          | -                                                                         |
| data        | 上传时附带的额外参数        | object          | -                                                                         |
| name        | 上传的文件字段名            | string          | file                                                                      |
| url         | 上传的图片地址              | string          | -                                                                         |
| size        | 上传文件大小限制，单位为 MB | number          | 2MB                                                                       |
| width       | 展示宽度                    | string,number   | 150                                                                       |
| height      | 展示高度                    | string,number   | 150                                                                       |
| placeholder | 占位图                      | string          | -                                                                         |
| message     | 文件类型错误的提示文案      | string          | -                                                                         |
| tip         | 是否显示提示栏              | boolean, string | `${message.value}且大小不超过 ${size}MB ，建尺寸为 ${width}*${height} 。` |
| placeholder | 占位图                      | string          | -                                                                         |
| ext         | 支持的文件类型              | array           | ['image/jpeg', 'image/png']                                               |
| noDel       | 是否隐藏删除按钮            | boolean         | false                                                                     |

## Events

| 参数       | 说明               | 返回值     |
| ---------- | ------------------ | ---------- |
| on-success | 上传图片成功的回调 | 接口返回值 |
