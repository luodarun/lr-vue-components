## Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图。

### 基础用法

:::demo

```html
<template>
  <LrSkeleton active :paragraph="paragraph" />
</template>

<script>
  export default {
    data() {
      return {
        paragraph: {
          type: 'row',
          rows: [
            {
              type: 'rect',
              style: {
                width: '50%',
                height: '16px',
              },
            },
            {
              type: 'rect',
              rowStyle: {
                marginTop: '24px',
              },
              style: {
                width: '100%',
                height: '16px',
              },
            },
            {
              type: 'rect',
              rowStyle: {
                marginTop: '16px',
              },
              style: {
                width: '50%',
                height: '16px',
              },
            },
            {
              type: 'rect',
              rowStyle: {
                marginTop: '16px',
              },
              style: {
                width: '61%',
                height: '16px',
              },
            },
          ],
        },
      };
    },
  };
</script>
```

:::

:::demo

```html
<template>
  <LrSkeleton active :paragraph="paragraph" />
</template>

<script>
  export default {
    data() {
      return {
        paragraph: {
          type: 'col',
          cols: [
            {
              type: 'row',
              style: {
                width: '15%',
              },
              rows: [
                {
                  type: 'circle',
                  style: {
                    width: '50px',
                    height: '50px',
                  },
                },
              ],
            },
            {
              colStyle: {
                marginLeft: '15px',
                width: '100%',
              },
              type: 'row',
              rows: [
                {
                  type: 'rect',
                  style: {
                    width: '50%',
                    height: '16px',
                  },
                },
                {
                  type: 'rect',
                  rowStyle: {
                    marginTop: '24px',
                  },
                  style: {
                    width: '100%',
                    height: '16px',
                  },
                },
                {
                  type: 'rect',
                  rowStyle: {
                    marginTop: '16px',
                  },
                  style: {
                    width: '50%',
                    height: '16px',
                  },
                },
                {
                  type: 'rect',
                  rowStyle: {
                    marginTop: '16px',
                  },
                  style: {
                    width: '61%',
                    height: '16px',
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
</script>
```

:::

### Attributes

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| paragraph | 骨架数据     | Object  | -      | -      |
| active    | 是否开启动画 | Boolean | -      | false  |

### paragraph Object

| 参数                | 说明                            | 类型   | 可选值                         | 默认值 |
| ------------------- | ------------------------------- | ------ | ------------------------------ | ------ |
| type                | 父容器类型                      | string | col / row / rectangle / circle | -      |
| cols / rows         | 子模块数组                      | Array  | -                              | -      |
| style               | 矩形/圆形 主体的样式            | Object | -                              | -      |
| rowStyle / colStyle | 矩形/圆形的主体其外部盒子的样式 | Object | -                              | -      |
