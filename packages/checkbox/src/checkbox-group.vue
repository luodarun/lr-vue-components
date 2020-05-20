<script>
import Emitter from "lr-ui/src/mixins/emitter";

export default {
  name: "LrCheckboxGroup",

  componentName: "LrCheckboxGroup",

  mixins: [Emitter],

  inject: {
    lrFormItem: {
      default: ""
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _lrFormItemSize() {
      return (this.lrFormItem || {}).lrFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._lrFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value(value) {
      this.dispatch("LrFormItem", "lr.form.change", [value]);
    }
  }
};
</script>

<template>
  <div class="lr-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
