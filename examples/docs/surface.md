## CountUp 数字滚动

基本系统模板

### 用法


:::demo

```html
<lr-surface class="demo-surface" :menu="menu">
  <template v-slot:topUser>
    <div class="demo-surface-user">admin</div>
  </template>
</lr-surface>
<script>
  export default {
    data() {
      return {
        menu: [
      {
        path: "/wel",
        component: "views/home/index",
        children: [],
        menuNumber: null,
        dynamicIcon: "img/icon/guangxi/index_1.png",
        moduleName: "首页",
        icon: "img/icon/guangxi/index.png",
        sortNum: 0,
        id: "9ddaac162fb04bd6ac830eb099b5e5e0",
        name: "首页",
        isMenu: true,
        isNeedCache: true
      },
      {
        path: "/visualization",
        component: "",
        children: [
          {
            path: "/visualization/matter",
            component: "views/visualization/matter",
            children: [],
            menuNumber: null,
            dynamicIcon: "",
            moduleName: "监管事项分析",
            icon: "",
            sortNum: 0,
            id: "e5d517ef8d124eaf980fbac550c3f74f",
            name: "监管事项分析",
            isMenu: true,
            isNeedCache: true
          },
          {
            path: "/visualization/behavior",
            component: "views/visualization/behavior",
            children: [],
            menuNumber: null,
            dynamicIcon: "",
            moduleName: "监管行为分析",
            icon: "",
            sortNum: 1,
            id: "1192359901381267457",
            name: "监管行为分析",
            isMenu: true,
            isNeedCache: true
          }
        ],
        menuNumber: null,
        dynamicIcon: "img/icon/guangxi/visualization_1.png",
        moduleName: "可视化展示",
        icon: "img/icon/guangxi/visualization.png",
        sortNum: 2,
        id: "13ed1d7901a342408679831c67eac20a",
        name: "可视化展示",
        isMenu: true
      },
      {
        path: "/search",
        component: "",
        children: [
          {
            path: "/search/colligate",
            component: "views/search/colligate",
            children: [],
            menuNumber: null,
            dynamicIcon: "",
            moduleName: "综合查询",
            icon: "",
            sortNum: 2,
            id: "f341bd68ea7e416aab94a3c045c2e6b7",
            name: "综合查询",
            isMenu: true,
            isNeedCache: true
          },
          {
            path: "/search/mulStatQuery",
            component: "views/search/mulStatQuery",
            children: [],
            menuNumber: null,
            dynamicIcon: "",
            moduleName: "多维度查询",
            icon: "",
            sortNum: 3,
            id: "1255704537229750273",
            name: "多维度查询",
            isMenu: true,
            isNeedCache: true
          }
        ],
        menuNumber: null,
        dynamicIcon: "img/icon/guangxi/search_1.png",
        moduleName: "监管数据查询",
        icon: "img/icon/guangxi/search.png",
        sortNum: 1,
        id: "2dedefcff46941858baf3242c8045595",
        name: "监管数据查询",
        isMenu: true
      }
    ]
      };
    },
  };
</script>
```

:::
