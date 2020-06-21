## 内置指令

### 点击事件重复回调

:::demo

```html
<template>
  <div v-repeatClick="repeatClickProps" class="directives-box"></div>
</template>

<script>
  export default {
    data() {
      return {
        repeatClickProps: {
          callbackFn: 'testRepeatClick',
          delayTime: 1000,
        },
      };
    },
    methods: {
      testRepeatClick() {
        console.log('111111');
      },
    },
  };
</script>

<style>
  .directives-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```

:::

### 自定义右键菜单

:::demo

```html
<template>
  <div v-selfContextMenu="menuProps" class="directives-box"></div>
</template>

<script>
  export default {
    data: () => {
      return {
        test: '自定义菜单',
        menuProps: {
          render: (h, _this) => {
            return h(
              'div',
              {
                style: {
                  width: '120px',
                  background: '#fff',
                },
                on: {
                  click: () => {
                    _this.testSelfContextMenu();
                  },
                },
              },
              '自定义菜单'
            );
          },
        },
      };
    },
    methods: {
      testSelfContextMenu() {
        console.log(this.test);
      },
    },
  };
</script>

<style>
  .directives-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```

:::

### InfiniteScroll 无限滚动

在要实现滚动加载的列表上上添加`v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。
:::demo
```html
<template>
  <ul class="infinite-list" infinite-scroll-sourceArray="count" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>
```
:::
