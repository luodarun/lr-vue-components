<template>
  <span class="lr-icon" @click="onClick" :style="{ fontSize: size + 'px' }">
    <svg v-if="symbol" class="lr-icon__symbol" aria-hidden="true">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
    <i
      v-else
      class="lr-icon__font"
      :class="'lr-icon-' + name"
      :style="{ color: color }"
    ></i>
  </span>
</template>
<script>
import "./iconfont.js";
export default {
  name: "LrIcon",
  props: {
    // 是否为多色字体图标symbol模式
    symbol: {
      type: Boolean,
      default: true
    },
    // 字体图标名称
    name: {
      type: String,
      required: true
    },
    // 字体图标尺寸
    size: {
      type: Number
    },
    // 字体图标颜色（针对于非symbol多色字体图标）
    color: {
      type: String
    }
  },
  computed: {
    fontSize() {
      const viewportWidth = 750;
      const ratio = viewportWidth / 100;

      return this.size / ratio;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
