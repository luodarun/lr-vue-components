## EllipsisFont 缩略行
常用的溢出省略文本行。

### 基础用法

:::demo

```html
<lr-row style="width: 200px;">
  <lr-ellipsis-font :num="10" type="1">这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</lr-ellipsis-font>  
  <lr-ellipsis-font :num="2" type="2">这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</lr-ellipsis-font>  
  <lr-ellipsis-font :num="40" type="3">这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</lr-ellipsis-font>  
</lr-row>
```
:::

### 有浮框的行

:::demo

```html
<lr-row style="width: 200px;">
  <lr-ellipsis-font :num="1" type="2" tooltipFlag>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</lr-ellipsis-font>  
</lr-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型,1代表按照字数来省略，2代表行数，3代表高度   | string  |   1 / 2 / 3            |    2     |
| num     | 与类型相关的数量   | number    |    |     1    |
| tooltipFlag     | 是否有浮框   | boolean    | — | false   |
