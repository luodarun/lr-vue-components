export default {
  name: "LrCol",

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: "div"
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutterAndSpacing() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "LrRow") {
        parent = parent.$parent;
      }
      return parent
        ? { gutter: parent.gutter, spacing: parent.spacing }
        : { gutter: 0, spacing: 0 };
    },
    selfParent() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "LrRow") {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  render(h) {
    let classList = [];
    let style = {};

    if (this.gutterAndSpacing.gutter) {
      style.paddingLeft = this.gutterAndSpacing.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;
    }
    if (this.selfParent && this.gutterAndSpacing.spacing) {
      let childLength = this.selfParent.$slots.default
        ? (this.selfParent.$slots.default.length + 1) / 2 || 0
        : 0;
      let childLength2 = this.selfParent.$children
        ? this.selfParent.$children.length || 0
        : 0;
      if (childLength > 1) {
        style.width = `calc(${(this.span * 100) / 24}% - ${(this
          .gutterAndSpacing.spacing *
          (childLength - 1)) /
          childLength}px)`;
        style.marginRight =
          childLength2 !== childLength
            ? `${this.gutterAndSpacing.spacing}px`
            : "";
      }
    }
    ["span", "offset", "pull", "push"].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== "span"
            ? `lr-col-${prop}-${this[prop]}`
            : `lr-col-${this[prop]}`
        );
      }
    });

    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`lr-col-${size}-${this[size]}`);
      } else if (typeof this[size] === "object") {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== "span"
              ? `lr-col-${size}-${prop}-${props[prop]}`
              : `lr-col-${size}-${props[prop]}`
          );
        });
      }
    });
    return h(
      this.tag,
      {
        class: ["lr-col", classList],
        style
      },
      this.$slots.default
    );
  }
};
