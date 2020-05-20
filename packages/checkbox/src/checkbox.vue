<template>
  <label
    class="lr-checkbox"
    :class="[
      border && checkboxSize ? 'lr-checkbox--' + checkboxSize : '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked }
    ]"
    role="checkbox"
    aria-checked="isChecked"
    :aria-disabled="isDisabled"
    :id="id"
  >
    <span
      class="lr-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-focus': focus
      }"
      aria-checked="mixed"
    >
      <span class="lr-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="lr-checkbox__original"
        type="checkbox"
        aria-hidden="true"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      />
      <input
        v-else
        class="lr-checkbox__original"
        type="checkbox"
        aria-hidden="true"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      />
    </span>
    <span class="lr-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from "lr-ui/src/mixins/emitter";

export default {
  name: "LrCheckbox",

  mixins: [Emitter],

  inject: {
    lrForm: {
      default: ""
    },
    lrFormItem: {
      default: ""
    }
  },

  componentName: "LrCheckbox",

  data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },

  computed: {
    model: {
      get() {
        return this.isGroup
          ? this.store
          : this.value !== undefined
          ? this.value
          : this.selfModel;
      },

      set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined &&
            val.length < this._checkboxGroup.min &&
            (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined &&
            val.length > this._checkboxGroup.max &&
            (this.isLimitExceeded = true);

          this.isLimitExceeded === false &&
            this.dispatch("LrCheckboxGroup", "input", [val]);
        } else {
          this.$emit("input", val);
          this.selfModel = val;
        }
      }
    },

    // eslint-disable-next-line vue/return-in-computed-property
    isChecked() {
      if ({}.toString.call(this.model) === "[object Boolean]") {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },

    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "LrCheckboxGroup") {
          parent = parent.$parent;
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },

    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },

    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled() {
      const { max, min } = this._checkboxGroup;
      return (
        (!!(max || min) && this.model.length >= max && !this.isChecked) ||
        (this.model.length <= min && this.isChecked)
      );
    },

    isDisabled() {
      return this.isGroup
        ? this._checkboxGroup.disabled ||
            this.disabled ||
            (this.elForm || {}).disabled ||
            this.isLimitDisabled
        : this.disabled || (this.elForm || {}).disabled;
    },

    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    checkboxSize() {
      const temCheckboxSize =
        this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup
        ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize
        : temCheckboxSize;
    }
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String,
    border: Boolean,
    size: String
  },

  methods: {
    addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange(ev) {
      if (this.isLimitExceeded) return;
      let value;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit("change", value, ev);
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch("LrCheckboxGroup", "change", [
            this._checkboxGroup.value
          ]);
        }
      });
    }
  },

  created() {
    this.checked && this.addToStore();
  },
  watch: {
    value(value) {
      this.dispatch("LrFormItem", "el.form.change", value);
    }
  }
};
</script>
