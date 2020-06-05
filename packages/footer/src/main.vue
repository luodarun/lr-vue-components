<template>
  <footer class="lr-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "LrFooter",

  componentName: "LrFooter",

  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>
