<script>
export default {
  name: "LrTag",
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: "light",
      validator(val) {
        return ["dark", "light", "plain"].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.$emit("close", event);
    },
    handleClick(event) {
      this.$emit("click", event);
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render(h) {
    const { type, tagSize, hit, effect } = this;
    const classes = [
      "lr-tag",
      type ? `lr-tag--${type}` : "",
      tagSize ? `lr-tag--${tagSize}` : "",
      effect ? `lr-tag--${effect}` : "",
      hit && "is-hit"
    ];
    const tagLr = (
      <span
        class={classes}
        style={{ backgroundColor: this.color }}
        on-click={this.handleClick}
      >
        {this.$slots.default}
        {this.closable && (
          <i
            class="lr-tag__close lr-icon-close"
            on-click={this.handleClose}
          ></i>
        )}
      </span>
    );

    return this.disableTransitions ? (
      tagLr
    ) : (
      <transition name="lr-zoom-in-center">{tagLr}</transition>
    );
  }
};
</script>
