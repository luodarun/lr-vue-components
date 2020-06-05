## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<lr-container>`：外层容器。当子元素中包含 `<lr-header>` 或 `<lr-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<lr-header>`：顶栏容器。

`<lr-aside>`：侧边栏容器。

`<lr-main>`：主要区域容器。

`<lr-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<lr-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<lr-container>`。
:::

### 常见页面布局

:::demo
```html
<lr-container>
  <lr-header>Header</lr-header>
  <lr-main>Main</lr-main>
</lr-container>

<lr-container>
  <lr-header>Header</lr-header>
  <lr-main>Main</lr-main>
  <lr-footer>Footer</lr-footer>
</lr-container>

<lr-container>
  <lr-aside width="200px">Aside</lr-aside>
  <lr-main>Main</lr-main>
</lr-container>

<lr-container>
  <lr-header>Header</lr-header>
  <lr-container>
    <lr-aside width="200px">Aside</lr-aside>
    <lr-main>Main</lr-main>
  </lr-container>
</lr-container>

<lr-container>
  <lr-header>Header</lr-header>
  <lr-container>
    <lr-aside width="200px">Aside</lr-aside>
    <lr-container>
      <lr-main>Main</lr-main>
      <lr-footer>Footer</lr-footer>
    </lr-container>
  </lr-container>
</lr-container>

<lr-container>
  <lr-aside width="200px">Aside</lr-aside>
  <lr-container>
    <lr-header>Header</lr-header>
    <lr-main>Main</lr-main>
  </lr-container>
</lr-container>

<lr-container>
  <lr-aside width="200px">Aside</lr-aside>
  <lr-container>
    <lr-header>Header</lr-header>
    <lr-main>Main</lr-main>
    <lr-footer>Footer</lr-footer>
  </lr-container>
</lr-container>

<style>
  .lr-header, .lr-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .lr-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .lr-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .lr-container {
    margin-bottom: 40px;
  }
  
  .lr-container:nth-child(5) .lr-aside,
  .lr-container:nth-child(6) .lr-aside {
    line-height: 260px;
  }
  
  .lr-container:nth-child(7) .lr-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<lr-container style="height: 500px; border: 1px solid #eee">
  <lr-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <lr-scrollbar>
    <lr-menu :default-openeds="['1', '3']">
      <lr-submenu index="1">
        <template slot="title"><i class="lr-icon-message"></i>导航一</template>
        <lr-menu-item-group>
          <template slot="title">分组一</template>
          <lr-menu-item index="1-1">选项1</lr-menu-item>
          <lr-menu-item index="1-2">选项2</lr-menu-item>
        </lr-menu-item-group>
        <lr-menu-item-group title="分组2">
          <lr-menu-item index="1-3">选项3</lr-menu-item>
        </lr-menu-item-group>
        <lr-submenu index="1-4">
          <template slot="title">选项4</template>
          <lr-menu-item index="1-4-1">选项4-1</lr-menu-item>
        </lr-submenu>
      </lr-submenu>
      <lr-submenu index="2">
        <template slot="title"><i class="lr-icon-menu"></i>导航二</template>
        <lr-menu-item-group>
          <template slot="title">分组一</template>
          <lr-menu-item index="2-1">选项1</lr-menu-item>
          <lr-menu-item index="2-2">选项2</lr-menu-item>
        </lr-menu-item-group>
        <lr-menu-item-group title="分组2">
          <lr-menu-item index="2-3">选项3</lr-menu-item>
        </lr-menu-item-group>
        <lr-submenu index="2-4">
          <template slot="title">选项4</template>
          <lr-menu-item index="2-4-1">选项4-1</lr-menu-item>
        </lr-submenu>
      </lr-submenu>
      <lr-submenu index="3">
        <template slot="title"><i class="lr-icon-setting"></i>导航三</template>
        <lr-menu-item-group>
          <template slot="title">分组一</template>
          <lr-menu-item index="3-1">选项1</lr-menu-item>
          <lr-menu-item index="3-2">选项2</lr-menu-item>
        </lr-menu-item-group>
        <lr-menu-item-group title="分组2">
          <lr-menu-item index="3-3">选项3</lr-menu-item>
        </lr-menu-item-group>
        <lr-submenu index="3-4">
          <template slot="title">选项4</template>
          <lr-menu-item index="3-4-1">选项4-1</lr-menu-item>
        </lr-submenu>
      </lr-submenu>
    </lr-menu>
    </lr-scrollbar>
  </lr-aside>
  
  <lr-container>
    <lr-header style="text-align: right; font-size: 12px">
      <lr-dropdown>
        <i class="lr-icon-setting" style="margin-right: 15px"></i>
        <lr-dropdown-menu slot="dropdown">
          <lr-dropdown-item>查看</lr-dropdown-item>
          <lr-dropdown-item>新增</lr-dropdown-item>
          <lr-dropdown-item>删除</lr-dropdown-item>
        </lr-dropdown-menu>
      </lr-dropdown>
      <span>王小虎</span>
    </lr-header>
    
    <lr-main>
      <lr-table :data="tableData">
        <lr-table-column prop="date" label="日期" width="140">
        </lr-table-column>
        <lr-table-column prop="name" label="姓名" width="120">
        </lr-table-column>
        <lr-table-column prop="address" label="地址">
        </lr-table-column>
      </lr-table>
    </lr-main>
  </lr-container>
</lr-container>

<style>
  .lr-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .lr-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `lr-header` 或 `lr-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
