# 表单验证 & 重置表单

## 引入

```vue
<script setup>
import { validateForm } from "@/hooks";
const { formRef, validateFormChange, resetFieldsForm } = validateForm();
validateFormChange().then().catch();
resetFieldsForm();
</script>
```

## 返回值

| 返回               | 说明                   | 类型     |
| ------------------ | ---------------------- | -------- |
| formRef            | form 表单的 Dom        | VDom     |
| validateFormChange | 验证表单是否成功的方法 | function |
| resetFieldsForm    | form 表单重置          | string   |

::: tip

由于 hooks 是函数，所以可重复创建多个且不冲突，只要更改名字即可。如下：
:::

```vue
<script setup>
const {
  formRef: form1,
  validateFormChange: validateFormChange1,
  resetFieldsForm: resetFieldsForm1,
} = validateForm();
const {
  formRef: form2,
  validateFormChange: validateFormChange2,
  resetFieldsForm: resetFieldsForm2,
} = validateForm();
</script>
```
