## CountUp 数字滚动

常用的数字滚动效果。

### 基础用法

基础的数字滚动用法。

:::demo

```html
<div class="count-up-demo">
  <lr-row :gutter="20">
    <lr-col :span="6">
      <i class="lr-icon-notification" />
      <p>广播数</p>
      <lr-count-up :delay="delay" :endVal="endVal1" />
    </lr-col>
    <lr-col :span="6">
      <i class="lr-icon-tagso" />
      <p>收藏数</p>
      <lr-count-up :delay="delay" :endVal="endVal2" />
    </lr-col>
    <lr-col :span="6">
      <i class="lr-icon-like2" />
      <p>点赞数</p>
      <lr-count-up :delay="delay" :endVal="endVal3" />
    </lr-col>
    <lr-col :span="6">
      <i class="lr-icon-message1" />
      <p>浏览数</p>
      <lr-count-up :delay="delay" :endVal="endVal4" />
    </lr-col>
  </lr-row>
</div>
<script>
  export default {
    data() {
      return {
        delay: 1000,
        endVal1: 1000,
        endVal2: 10000,
        endVal3: 300,
        endVal4: 5000,
      };
    },
  };
</script>
```

:::

### Attributes

| 参数    | 说明              | 类型   | 可选值 | 默认值 |
| ------- | ----------------- | ------ | ------ | ------ |
| delay   | 延迟时间          | number | —      | 0      |
| endVal  | 目标值            | number | —      | 0      |
| options | 更多配置,详情见下 | —      | —      | —      |

### CountUp 详细配置

| 参数          | 说明               | 类型    | 可选值 | 默认值 |
| ------------- | ------------------ | ------- | ------ | ------ |
| startVal      | 起始值             | number  | —      | 0      |
| decimalPlaces | 小数精确度         | number  | —      | 0      |
| duration      | 动画持续时间       | number  | —      | 2      |
| prefix        | 前缀               | string  | —      | —      |
| suffix        | 后缀               | string  | —      | —      |
| useEasing     | 是否缓动           | boolean | —      | true   |
| useGrouping   | 是否开启三位分节法 | boolean | —      | true   |
| separator     | 分节法分隔符       | string  | —      | ,      |
| decimal       | 小数点替代符       | string  | —      | .      |

### CountUp Events

| 事件名称 | 说明                 | 回调参数                                    |
| -------- | -------------------- | ------------------------------------------- |
| ready    | 组件初始化完成是触发 | (instance: CountUp 对象, CountUp: 构造函数) |

### CountUp Methods

| 方法名      | 说明                 | 参数           |
| ----------- | -------------------- | -------------- |
| start       | 开始滚动             | —              |
| update      | 更新目标值并开始滚动 | endVal: number |
| pauseResume | 暂停/继续滚动        | —              |
| printValue  | 设置值               | value: number  |
| reset       | 重置为初始值         | —              |
