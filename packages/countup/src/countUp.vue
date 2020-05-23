<template>
  <span />
</template>

<script>
import { CountUp } from "countup.js";
import { isFunction } from "lr-ui/src/utils/types";
export default {
  name: "LrCountUp",
  props: {
    endVal: {
      type: Number,
      required: true
    },
    delay: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      instance: null
    };
  },
  watch: {
    endVal: {
      handler(value) {
        if (this.instance && isFunction(this.instance.update)) {
          this.instance.update(value);
        }
      },
      deep: false
    }
  },
  methods: {
    create() {
      if (this.instance) {
        return;
      }
      const dom = this.$el;
      const instance = new CountUp(dom, this.endVal, this.options);
      if (instance.error) {
        // error
        return;
      }
      this.instance = instance;
      if (this.delay < 0) {
        this.$emit("ready", instance, CountUp);
        return;
      }
      setTimeout(
        () => instance.start(() => this.$emit("ready", instance, CountUp)),
        this.delay
      );
    },
    destroy() {
      this.instance = null;
    },
    printValue(value) {
      if (this.instance && isFunction(this.instance.printValue)) {
        return this.instance.printValue(value);
      }
    },
    start(callback) {
      if (this.instance && isFunction(this.instance.start)) {
        return this.instance.start(callback);
      }
    },
    pauseResume() {
      if (this.instance && isFunction(this.instance.pauseResume)) {
        return this.instance.pauseResume();
      }
    },
    reset() {
      if (this.instance && isFunction(this.instance.reset)) {
        return this.instance.reset();
      }
    },
    update(newEndVal) {
      if (this.instance && isFunction(this.instance.update)) {
        return this.instance.update(newEndVal);
      }
    }
  },
  mounted() {
    this.create();
  },
  beforeDestroy() {
    this.destroy();
  }
};
</script>
