<template>
  <label
    class="lr-radio"
    :class="[
      border && radioSize ? 'lr-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      class="lr-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="lr-radio__inner"></span>
      <input
        ref="radio"
        class="lr-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      />
    </span>
    <span class="lr-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from "lr-ui/src/mixins/emitter";

export default {
  name: "LrRadio",

  mixins: [Emitter],

  inject: {
    lrForm: {
      default: ""
    },

    lrFormItem: {
      default: ""
    }
  },

  componentName: "LrRadio",

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data() {
    return {
      focus: false
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "LrRadioGroup") {
          parent = parent.$parent;
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("LrRadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      }
    },
    _lrFormItemSize() {
      return (this.lrFormItem || {}).lrFormItemSize;
    },
    radioSize() {
      const temRadioSize =
        this.size || this._lrFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize;
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled ||
            this.disabled ||
            (this.lrForm || {}).disabled
        : this.disabled || (this.lrForm || {}).disabled;
    },
    tabIndex() {
      return this.isDisabled || (this.isGroup && this.model !== this.label)
        ? -1
        : 0;
    }
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup &&
          this.dispatch("LrRadioGroup", "handleChange", this.model);
      });
    }
  }
};
</script>
