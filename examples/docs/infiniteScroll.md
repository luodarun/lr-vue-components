## InfiniteScroll 懒加载虚拟列表

滚动至底部时，加载更多数据。

### 基础用法
:::demo
```html
<template>
 <div style="height: 500px;">
    <LrInfiniteScroll
      :listData="data"
      :getItemFn="loadFn"
      :estimatedItemSize="100"
      :loading="loadFlag"
    >
      <template v-slot="slotProps">
        <p><span style="color:red">{{slotProps.item.id}}</span>{{slotProps.item.value}}</p>
      </template>
    </LrInfiniteScroll>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {"id":0,"value":0},
          {"id":1,"value":1},
          {"id":2,"value":2},
          {"id":3,"value":3},
          {"id":4,"value":4},
          {"id":5,"value":5},
          {"id":6,"value":6},
          {"id":7,"value":7},
          {"id":8,"value":8},
          {"id":9,"value":9}
        ],
        loadFlag: false
      }
    },
    methods: {
      loadFn () {
        this.loadFlag = true;
        setTimeout(() => {
          let testData = [], tempLength = this.data.length;
        for (let i = 0; i < 10; i++) {
          testData.push({ id: i + tempLength, value: i + tempLength });
        }
        this.data = this.data.concat(testData);
        this.loadFlag = false;
        }, 1000);
      }
    }
  }
</script>
```
:::


### Attributes

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| listData | 必选参数，列表绑定数组           | Arrary      | - |- |
| getItemFn   | 必选参数，数组加载方法   | Function       |   - |-   |
| estimatedItemSize | 必选参数，子项高度| Number | - |- |
| height| 容器高度 | String   |- |100% |
| bufferScale| 缓存区比例 | Number   |- |1 |

### slot

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| default | 列表子项           | -      | - |- |
| loadBlock   | 加载效果模块   | -       |   - |-   |
