<template>
  <aside class="lr-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "LrAside",

  componentName: "LrAside",

  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
</script>
