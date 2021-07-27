# 分页

<img :src="$withBase('/imgs/pagination.png')">

## 说明

二次封装 Pagination 组件，数据的分页控制，多和表格配合使用。

## 代码演示

```vue
<template>
  <six-pagination
    v-model:pageSize="tableData.pageSize"
    v-model:currentPage="tableData.currentPage"
    :total="tableData.total"
    @on-change="getListData"
  />
</template>
<script setup>
import { reactive } from "vue";
const tableData = reactive({
  pageSize: 10, //每页数量
  total: 0, //总条数
  currentPage: 1, //当前页
});
</script>
```

## Props

| 参数        | 说明             | 类型   | 默认值 |
| ----------- | ---------------- | ------ | ------ |
| pageSize    | 每页显示条目个数 | number | -      |
| total       | 总条目数         | number | -      |
| currentPage | 当前页数         | number | -      |

## Events

| 参数      | 说明                         | 默认值 |
| --------- | ---------------------------- | ------ |
| on-change | 每页条数或当前页改变时会触发 | -      |
