# 循环填写数据

::: warning
此方法大多用在需覆盖两个对象相同 key 数据的场景，如回显数据。
:::

## 引入

```vue
<script setup>
import { forInData } from "@/hooks";
forInData(data, formData, array);
</script>
```

## 参数

| 参数     | 说明                   | 类型   |
| -------- | ---------------------- | ------ |
| data     | 获取到的原数据         | object |
| formData | 循环写入 data 中的数据 | object |
| array    | 循环写入排除的 key     | array  |
