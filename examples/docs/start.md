# 快速上手
<!-- {.md} -->

----
<!-- {.md} -->

## 安装
<!-- {.md} -->

```
npm install lr-vue-components --save
```
<!-- {.md} -->

## 全局组件使用
<!-- {.md} -->

```js
import LrUI from 'lr-vue-components' // 引入组件库
```
<!-- {.md} -->

引入<!-- {.md} -->布局样式

```js
import 'lr-vue-components/lib/theme-chalk/index.css'
```
最后，全局使用组件库<!-- {.md} -->
```js
Vue.use(LrUI)
```
<!-- {.md} -->

## 单个组件按需使用
<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景
<!-- {.md} -->

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "lr-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

```js

import { Button } from 'lr-vue-components'
components: {
  [Button.name]: Button
}

```
<!-- {.md} -->

在模板中，用<!-- {.md} --> `<lr-button></lr-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <lr-button>按我</lr-button>
  </div>
</template>
```
<!-- {.md} -->


