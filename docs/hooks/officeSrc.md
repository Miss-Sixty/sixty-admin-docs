# 返回 office 文件在线地址

## 引入

```vue
<script setup>
import { officeSrc } from "@/hooks";
const src = officeSrc(`xxx.docx`);
</script>
```

## 参数

| 参数 | 说明                   | 类型   | 接收类型                     | 默认值 |
| ---- | ---------------------- | ------ | ---------------------------- | ------ |
| src  | 需要在线查看的文件地址 | string | 所有 office 可识别的文件格式 | word   |
