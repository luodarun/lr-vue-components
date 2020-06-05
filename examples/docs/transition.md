## 内置过渡动画

### fade 淡入淡出

:::demo 提供 `lr-fade-in-linear` 和 `lr-fade-in` 两种效果。
```html
<template>
  <div>
    <lr-button @click="show = !show">Click Me</lr-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="lr-fade-in-linear">
        <div v-show="show" class="transition-box">.lr-fade-in-linear</div>
      </transition>
      <transition name="lr-fade-in">
        <div v-show="show" class="transition-box">.lr-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom 缩放

:::demo 提供 `lr-zoom-in-center`，`lr-zoom-in-top` 和 `lr-zoom-in-bottom` 三种效果。
```html
<template>
  <div>
    <lr-button @click="show2 = !show2">Click Me</lr-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="lr-zoom-in-center">
        <div v-show="show2" class="transition-box">.lr-zoom-in-center</div>
      </transition>

      <transition name="lr-zoom-in-top">
        <div v-show="show2" class="transition-box">.lr-zoom-in-top</div>
      </transition>

      <transition name="lr-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.lr-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse 展开折叠

使用 `lr-collapse-transition` 组件实现折叠展开效果。

:::demo
```html
<template>
  <div>
    <lr-button @click="show3 = !show3">Click Me</lr-button>

    <div style="margin-top: 20px; height: 200px;">
      <lr-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">lr-collapse-transition</div>
          <div class="transition-box">lr-collapse-transition</div>
        </div>
      </lr-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::
