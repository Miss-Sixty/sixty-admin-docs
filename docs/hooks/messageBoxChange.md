# 弹窗提醒确认

二次封装了 ElMessageBox 的弹窗提醒。

## 引入

```vue
<script setup>
import { messageBoxChange } from "@/hooks";

messageBoxChange().then().catch();
</script>
```

## 方法

| 参数             | 说明                     | 类型     | 默认值 |
| ---------------- | ------------------------ | -------- | ------ |
| messageBoxChange | 执行后弹出确认和取消弹窗 | function | -      |
