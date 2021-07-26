# Vue 指令

目前项目中用到了 2 个指令，一个是用来判断权限的指令 permission ，另一个是页面加载中指令 loading

## permission 权限指令

::: warning 导航栏接口数据
因为权限指令精细到了按钮，所以页面大面积使用 permission 权限指令，各个页面和按钮都经历了一次大改。300+接口无法避免会出现未预知的错误，这个需要在使用中逐渐去完善修改。
:::

### 使用方法

```html
<!-- 按钮 -->
<button
  v-permission="'deliveryOrder@detail'"
  size="small"
  @click="showModel('lookInfo', row)"
  icon="md-eye"
/>

<!-- toolsBar 添加按钮 -->
<tools-bar addPermission="beautician@create" add @add-change="showModel('addOrEdit')" />

<!-- 表格 switch -->
<table-switch
  permission="beautician@updateStatus"
  slot-scope="{ row }"
  slot="status"
  :value="row"
  @resetList="getListData"
  :api="beauticiansStatus"
/>
```

## loading

::: warning 注意事项
因 iview-ui 的代码结构原因，有些地方无法使用此指令 如：Modal、Drawer 这种第一层 html 不承载显示内容的组件。
:::

### 使用方法

```html
<!-- 开启loading -->
<div v-loading="true">显示内容</div>

<!-- 显示loading文字 -->
<div v-loading="true" loading-text="数据加载中...">显示内容</div>
```
