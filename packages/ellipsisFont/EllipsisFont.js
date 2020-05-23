import { getBrowserType, formatStr } from "lr-ui/src/utils/util";
import LrTooltip from "lr-ui/packages/tooltip";
import {
  addResizeListener,
  removeResizeListener
} from "lr-ui/src/utils/resize-event";
export default {
  name: "LrEllipsisFont",
  components: { LrTooltip },
  props: {
    type: {
      type: String,
      default: "2"
    },
    num: {
      type: Number,
      default: 1
    },
    tooltipFlag: {
      type: Boolean,
      default: false
    },
    needOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      browType: getBrowserType(),
      showDown: false,
      isOpen: false
    };
  },
  mounted() {
    addResizeListener(this.$el, this.handleEllipsis);
  },
  beforeDestroy() {
    if (this.$el && this.handleEllipsis)
      removeResizeListener(this.$el, this.handleEllipsis);
  },
  methods: {
    handleEllipsis() {
      if (
        (this.type === "2" && this.num > 1 && this.browType !== "Chrome") ||
        this.type !== "2" ||
        this.needOpen
      ) {
        formatStr(
          this.$refs.ellipsisContent,
          this.type,
          this.num,
          this.needOpen,
          this.isOpen,
          this.$slots.default[0].text
        );
      }
    },
    mouseEnterHandler() {
      this.showDown = true;
    },
    mouseLeaveHandler() {
      this.showDown = false;
    },
    handleDownClick() {
      this.isOpen = !this.isOpen;
      formatStr(
        this.$refs.ellipsisContent,
        this.type,
        this.num,
        this.needOpen,
        this.isOpen,
        this.$slots.default[0].text
      );
    }
  },
  render(h) {
    let tempNodes = [],
      tempClassList = [];
    if (this.needOpen) {
      if (this.isOpen) {
        tempClassList.push("lr-icon-up");
      } else {
        if (this.showDown) {
          tempClassList.push("lr-icon-down");
        } else {
          tempClassList.push("lr-icon-ellipsis1");
        }
      }
    }
    if (this.type !== "2" || this.needOpen) {
      if (this.needOpen) {
        tempNodes.push(
          h(
            "div",
            {
              class: "lr-ellipsis-font",
              on: {
                mouseenter: this.mouseEnterHandler,
                mouseleave: this.mouseLeaveHandler
              }
            },
            [
              h(
                "div",
                {
                  ref: "ellipsisContent"
                },
                this.$slots.default
              ),
              h("i", {
                class: ["lr-ellipsis-font__icon", tempClassList],
                on: {
                  click: this.handleDownClick
                }
              })
            ]
          )
        );
      } else {
        tempNodes.push(
          h(
            "div",
            {
              class: "lr-ellipsis-font",
              on: {
                mouseenter: this.mouseEnterHandler,
                mouseleave: this.mouseLeaveHandler
              }
            },
            [
              h(
                "div",
                {
                  ref: "ellipsisContent"
                },
                this.$slots.default
              )
            ]
          )
        );
      }
    } else {
      if (this.num > 1) {
        if (this.browType === "Chrome") {
          tempNodes.push(
            h(
              "div",
              {
                class: "lr-ellipsis-font ellipsis-font-wrap multer-ellipsis",
                style: {
                  "-webkit-line-clamp": this.num
                },
                on: {
                  mouseenter: this.mouseEnterHandler,
                  mouseleave: this.mouseLeaveHandler
                }
              },
              this.$slots.default
            )
          );
        } else {
          tempNodes.push(
            h(
              "div",
              {
                class: "lr-ellipsis-font",
                on: {
                  mouseenter: this.mouseEnterHandler,
                  mouseleave: this.mouseLeaveHandler
                }
              },
              this.$slots.default
            )
          );
        }
      } else {
        tempNodes.push(
          h(
            "div",
            {
              class: "lr-ellipsis-font ellipsis-font-wrap single-ellipsis",
              on: {
                mouseenter: this.mouseEnterHandler,
                mouseleave: this.mouseLeaveHandler
              }
            },
            this.$slots.default
          )
        );
      }
    }
    if (this.tooltipFlag) {
      let text =
        this.$slots.default.length > 0 ? this.$slots.default[0].text : "";
      return h(
        LrTooltip,
        {
          props: {
            content: text
          }
        },
        tempNodes
      );
    } else {
      return tempNodes[0];
    }
    // if (!this.tooltipFlag && this.needOpen) {
    // } else {
    //   return tempNodes[0];
    // }
  }
};
