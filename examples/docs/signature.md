## Signature 电子签名

简单的电子签名。

### 基础用法

:::demo

```html
<template>
  <LrSignature ref="LrSignature" />
  <img v-if="url" :src="url" alt="测试签名" />
  <div>
    <lr-button @click="save">生成</lr-button>
    <lr-button @click="reset">清空</lr-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: ''
      }
    },
    methods: {
      save() {
        this.url = this.$refs.LrSignature.sureSignature();
      },
      reset() {
        this.$refs.LrSignature.clearSignature();
      }
    },
  };
</script>
```

:::

### Attributes

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| width | 宽度     | String  | -      | 100%      |
| height    | 高度 | String | -      | 100%  |

### signature Event

| 参数                | 说明                            | 回调函数   |
| ------------------- | ------------------------------- | ------ |
| clearSignature                | 清除内容                      | - |
| sureSignature         | 生成图片                      | (value: base64字节流)  |
