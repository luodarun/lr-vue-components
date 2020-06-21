<template>
  <div class="lr-skeleton-wrapper">
    <div class="lr-skeleton-content">
      <item :paragraph="paragraph" :active="active"></item>
    </div>
  </div>
</template>

<script>
import item from "./item";
export default {
  name: "LrSkeleton",
  components: { item },
  props: {
    active: {
      default: false
    },
    paragraph: {}
  }
};
</script>
