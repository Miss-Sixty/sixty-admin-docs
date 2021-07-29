# 获取网页宽高

## 引入

```vue
<script setup>
import useWindowResize from "@/hooks/useWindowResize";
const { width, height } = useWindowResize(time);
</script>
```

## 参数

| 参数 | 说明       | 类型   | 默认值 |
| ---- | ---------- | ------ | ------ |
| time | 防抖毫秒数 | number | 200    |

## 返回值

| 返回   | 说明       | 类型   |
| ------ | ---------- | ------ |
| width  | 屏幕的宽度 | number |
| height | 屏幕的高度 | number |
