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
