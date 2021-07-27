# ConfirmSwitch 弹窗确认 Switch

<img :src="$withBase('/imgs/confirmSwitch.png')">

## 说明

二次封装 Switch 组件，使其拥有二次确认的功能。通常用在表格的禁用/启用中

## 代码演示

```vue
<template>
  <confirm-switch
    :id="row.id"
    :api="swichtChange"
    :text="`确定要「${row.status ? '禁用' : '启用'}」该数据吗？`"
    :status="row.status"
    @on-success="row.status = !row.status"
  />
</template>
```

## Props

| 参数          | 说明                               | 类型                    | 默认值               |
| ------------- | ---------------------------------- | ----------------------- | -------------------- |
| api           | 请求接口函数                       | funciton                | -                    |
| status        | 关闭/打开                          | boolean, string, number | -                    |
| id            | 请求接口函数传入 id                | string                  | -                    |
| data          | 自定义传入接口函数内容，和 id 冲突 | string                  | -                    |
| text          | 二次确认弹窗内容                   | string                  | 确定要更改该数据吗？ |
| activeText    | switch 打开时的文字描述            | string                  | -                    |
| inactiveText  | switch 关闭时的文字描述            | string                  | -                    |
| activeValue   | switch 打开时的值                  | string                  | true                 |
| inactiveValue | switch 关闭时的值                  | string                  | false                |

## Events

| 参数       | 说明                       | 默认值 |
| ---------- | -------------------------- | ------ |
| on-success | 传入接口函数请求成功后回调 | -      |
