# 分页

<img :src="$withBase('/imgs/1615969386362.jpg')">

## 引入

```vue
<script>
import Pagination from "@/components/Pagination";
export default {
  components: {
    Pagination
  }
};
</script>
```

## 使用方法

`total`为数据总条数，为后端返回的数据，不可随意设置。`page.sync`为第几页，`size`为每页条数，可根据需要自由设置。

```vue
<template>
  <pagination
    :page.sync="paginate.current_page"
    :total="paginate.total"
    :size="paginate.page_size"
    @on-change="getListData"
  />
</template>

<script>
data(){
  return{
     //分页
      paginate: {
        total: 0, //总数量
        current_page: 1, //当前页码
        page_size: 10 //每页数量
      },
  }
}
</script>
```

## API

### Props

| 参数      | 说明       | 类型   | 默认值 |
| --------- | ---------- | ------ | ------ |
| total     | 数据总条数 | number | 0      |
| page.sync | 第几页     | number | 1      |
| size      | 每页几条   | number | 10     |

### Events

| 事件名    | 说明         | 回调参数       |
| --------- | ------------ | -------------- |
| on-change | 页数改变触发 | _event: Event_ |
