<template>
  <div class="menu-wrapper">
    <template v-for="(item, index) in menu">
      <lr-menu-item
        v-if="validatenull(item.children)"
        :key="index"
        :index="
          item.path.split('/').length > 2 ? item.path : item.path + '/index'
        "
        @click="open(item)"
      >
        <img v-if="item.iconType === 'img'" :src="item.icon" class="icon" />
        <i v-else :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </lr-menu-item>
      <lr-submenu
        v-else-if="!validatenull(item.children)"
        :key="index"
        :index="item.path"
      >
        <template slot="title">
          <img v-if="item.iconType === 'img'" :src="item.icon" class="icon" />
          <i v-else :class="item.icon"></i>
          <span
            slot="title"
            :class="{ 'lr-menu--display': collapse && first }"
            >{{ item.name }}</span
          >
        </template>
        <template v-for="(child, cindex) in item.children">
          <lr-menu-item
            v-if="validatenull(child.children)"
            :key="cindex"
            :index="child.path"
            @click="open(child)"
          >
            <img v-if="child.iconType === 'img'" :src="child.icon" />
            <i v-else :class="child.icon"></i>
            <span slot="title">{{ child.name }}</span>
          </lr-menu-item>
          <sidebar-item
            v-else
            :key="cindex"
            :menu="[child]"
            :props="props"
            :screen="screen"
            :collapse="collapse"
          ></sidebar-item>
        </template>
      </lr-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    menu: {
      type: Array,
      default: () => {
        return [];
      }
    },
    collapse: {
      type: Boolean
    }
  },
  methods: {
    validatenull(array) {
      return !array || array.length === 0;
    },
    open(item) {
      this.$listeners.open(item);
    }
  }
};
</script>
