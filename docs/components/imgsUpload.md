# imgsUpload 图片上传

<img :src="$withBase('/imgs/imgUpload.jpg')">

## 说明

专门针对上传图片的场景二次封装 element-plus 的 upload 组件。

## 代码演示

```vue
<template>
  <imgs-upload v-model="url" action="/mock/upload" @on-success="onSuccess" />
</template>

<script setup>
import { ref } from "vue";
const url = ref(["https://picsum.photos/250/150"]);
const onSuccess = (res) => (url.value = res.data);
</script>
```

## Props

| 参数       | 说明                           | 类型            | 默认值                                                                    |
| ---------- | ------------------------------ | --------------- | ------------------------------------------------------------------------- |
| accept     | 限制接受的文件类型             | string          | -                                                                         |
| action     | 必选参数，上传的地址           | string          | -                                                                         |
| headers    | 设置上传的请求头部             | object          | -                                                                         |
| data       | 上传时附带的额外参数           | object          | -                                                                         |
| name       | 上传的文件字段名               | string          | file                                                                      |
| modelValue | 回显图片地址列表               | array           | -                                                                         |
| size       | 上传文件大小限制，单位为 MB    | number          | 2MB                                                                       |
| width      | 展示宽度                       | string,number   | 150                                                                       |
| height     | 展示高度                       | string,number   | 150                                                                       |
| tip        | 是否显示提示栏                 | boolean, string | `${message.value}且大小不超过 ${size}MB ，建尺寸为 ${width}*${height} 。` |
| message    | 文件类型错误的提示文案         | string          | -                                                                         |
| ext        | 支持的文件类型                 | array           | -                                                                         |
| delIcon    | 是否显示删除按钮               | boolean         | false                                                                     |
| limit      | 限制上传数量,为 false 时无限制 | boolean,number  | 3                                                                         |

## Events

| 参数       | 说明               | 返回值                                           |
| ---------- | ------------------ | ------------------------------------------------ |
| on-success | 上传图片成功的回调 | （接口返回值，当前上传图片 file ，所有图片列表） |
