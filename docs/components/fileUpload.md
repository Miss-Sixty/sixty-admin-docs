# FileUpload 文件上传

<img :src="$withBase('/imgs/fileUpload.jpg')">

## 说明

专门针对上传文件的场景二次封装 element-plus 的 upload 组件。

## 代码演示

```vue
<template>
  <file-upload
    drag
    :files="files"
    action="/mock/upload"
    tip
    @on-success="onSuccess"
  />
</template>

<script setup>
import { ref } from "vue";
const files = ref([
  {
    name: "测试文件.zip",
    url: "http://xxx",
  },
  {
    name: "测试文件2.zip",
    url: "http://xxx",
  },
]);
const onSuccess = (res, file, fileList) => {
  console.log(res);
  console.log(file);
  console.log(fileList);
};
</script>
```

## Props

| 参数         | 说明                           | 类型            | 默认值                                                                   |
| ------------ | ------------------------------ | --------------- | ------------------------------------------------------------------------ |
| accept       | 限制接受的文件类型             | string          | -                                                                        |
| action       | 必选参数，上传的地址           | string          | -                                                                        |
| headers      | 设置上传的请求头部             | object          | -                                                                        |
| data         | 上传时附带的额外参数           | object          | -                                                                        |
| name         | 上传的文件字段名               | string          | file                                                                     |
| files        | 回显图片地址列表               | array           | -                                                                        |
| size         | 上传文件大小限制，单位为 MB    | number          | 5MB                                                                      |
| tip          | 是否显示提示栏                 | boolean, string | `${message.value}且大小不超过 ${size}MB ，文件数量不超过 ${limit} 个 。` |
| message      | 文件类型错误的提示文案         | string          | -                                                                        |
| ext          | 支持的文件类型                 | array           | -                                                                        |
| delIcon      | 是否显示删除按钮               | boolean         | false                                                                    |
| limit        | 限制上传数量,为 false 时无限制 | boolean,number  | 3                                                                        |
| showFileList | 是否显示文件列表               | boolean         | true                                                                     |
| drag         | 是否支持拖拽文件上传           | boolean         | false                                                                    |

## Events

| 参数       | 说明               | 返回值                                           |
| ---------- | ------------------ | ------------------------------------------------ |
| on-success | 上传图片成功的回调 | （接口返回值，当前上传图片 file ，所有图片列表） |
