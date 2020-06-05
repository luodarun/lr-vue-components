<template>
  <label
    class="lr-radio-button"
    :class="[
      size ? 'lr-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="lr-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span
      class="lr-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from "lr-ui/src/mixins/emitter";

export default {
  name: "LrRadioButton",

  mixins: [Emitter],

  inject: {
    lrForm: {
      default: ""
    },
    lrFormItem: {
      default: ""
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  data() {
    return {
      focus: false
    };
  },
  computed: {
    value: {
      get() {
        return this._radioGroup.value;
      },
      set(value) {
        this._radioGroup.$emit("input", value);
      }
    },
    _radioGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "LrRadioGroup") {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    activeStyle() {
      return {
        backgroundColor: this._radioGroup.fill || "",
        borderColor: this._radioGroup.fill || "",
        boxShadow: this._radioGroup.fill
          ? `-1px 0 0 0 ${this._radioGroup.fill}`
          : "",
        color: this._radioGroup.textColor || ""
      };
    },
    _lrFormItemSize() {
      return (this.lrFormItem || {}).lrFormItemSize;
    },
    size() {
      return (
        this._radioGroup.radioGroupSize ||
        this._lrFormItemSize ||
        (this.$ELEMENT || {}).size
      );
    },
    isDisabled() {
      return (
        this.disabled ||
        this._radioGroup.disabled ||
        (this.lrForm || {}).disabled
      );
    },
    tabIndex() {
      return this.isDisabled || (this._radioGroup && this.value !== this.label)
        ? -1
        : 0;
    }
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.dispatch("LrRadioGroup", "handleChange", this.value);
      });
    }
  }
};
</script>
