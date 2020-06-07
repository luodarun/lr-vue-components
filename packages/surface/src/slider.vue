<template>
  <lr-scrollbar class="page-component__menu">
    <lr-menu
      :default-active="nowTagValue"
      unique-opened
      mode="vertical"
      :show-timeout="400"
      :collapse="keyCollapse"
    >
      <menuItem
        :menu="menu"
        v-on="$listeners"
        :collapse="keyCollapse"
      ></menuItem>
    </lr-menu>
  </lr-scrollbar>
</template>
<script>
import menuItem from "./menuItem";

export default {
  name: "LayoutSlider",
  components: { menuItem },
  inject: ["menu", "keyCollapse"],
  computed: {
    nowTagValue: function() {
      return this.$route.fullPath;
    }
  }
};
</script>
