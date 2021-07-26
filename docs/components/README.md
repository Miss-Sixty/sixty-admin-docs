# 工具栏

<img :src="$withBase('/imgs/1615967968349.jpg')">

## 引入

```vue
<script>
import ToolsBar from "@/components/ToolsBar";
export default {
  components: {
    ToolsBar
  }
};
</script>
```

## 组件自带搜索

::: warning 提示
引入 onSearchChange 是因为考虑到分页的问题，所有后自动跳到第一页。
请求数据函数名必须为 getListData(){}
:::

```vue
<template>
  <tools-bar :keywords.sync="keywords" keywordsText="搜索编号/门店名/电话/地址" @onSearch="onSearchChange" />
</template>

<script>
import { onSearchChange } from "@/mixins/page";
export default {
  mixins: ["onSearchChange"],
  data() {
    return {
      keywords: null
    };
  },
  methods: {
    getListData() {}
  }
};
</script>
```

### Props

| 参数         | 说明           | 类型 | 默认值         |
| ------------ | -------------- | ---- | -------------- |
| keywordsText | 搜索框默认文字 | text | 请输入搜索内容 |

### Events

| 事件名   | 说明     | 回调参数       |
| -------- | -------- | -------------- |
| onSearch | 回车触发 | _event: Event_ |

## 组件自带下拉框 筛选启用/禁用

::: warning 提示
引入 onSearchChange 是因为考虑到分页的问题，所有后自动跳到第一页。
请求数据函数名必须为 getListData(){}
:::

```vue
<template>
  <tools-bar :status.sync="status" @onSearch="onSearchChange" />
</template>

<script>
import { onSearchChange } from "@/mixins/page";
export default {
  mixins: ["onSearchChange"],
  data() {
    return {
      status: null
    };
  },
  methods: {
    getListData() {}
  }
};
</script>
```

### Events

| 事件名   | 说明     | 回调参数       |
| -------- | -------- | -------------- |
| onSearch | 回车触发 | _event: Event_ |

## 组件自带下拉框 筛选上架/下架

::: warning 提示
引入 onSearchChange 是因为考虑到分页的问题，所有后自动跳到第一页。
请求数据函数名必须为 getListData(){}
:::

```vue
<template>
  <tools-bar :visible.sync="visible" @onSearch="onSearchChange" />
</template>

<script>
import { onSearchChange } from "@/mixins/page";
export default {
  mixins: ["onSearchChange"],
  data() {
    return {
      visible: null
    };
  },
  methods: {
    getListData() {}
  }
};
</script>
```

### Events

| 事件名   | 说明     | 回调参数       |
| -------- | -------- | -------------- |
| onSearch | 回车触发 | _event: Event_ |

## 添加按钮

```vue
<template>
  <tools-bar add @add-change="showModel('addOrEdit')" addPermission="cosmetologyAlbum@create" />
</template>
```

### Events

| 事件名     | 说明         | 回调参数       |
| ---------- | ------------ | -------------- |
| add-change | 点击按钮触发 | _event: Event_ |

## slot

### default

默认 slot 在 toolsbar 左侧显示，一般用来添加额外的搜索框或下拉选择框。

```vue
<template>
  <tools-bar>
    <Select v-model="model">
      <Option :value="1" label="面包" />
      <Option :value="2" label="可乐" />
    </Select>
  </tools-bar>
</template>
```

### btn

btn 为 toolsbar 右侧显示，一般用来添加额外的按钮

```vue
<template>
  <tools-bar>
    <Button type="primary" slot="btn">Primary</Button>
  </tools-bar>
</template>
```
