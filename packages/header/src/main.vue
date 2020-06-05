<template>
  <header class="lr-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "LrHeader",

  componentName: "LrHeader",

  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>
