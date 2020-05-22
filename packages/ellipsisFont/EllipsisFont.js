import { getBrowserType, formatStr } from "lr-ui/src/utils/util";
import LrTooltip from "lr-ui/packages/tooltip";
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
      browType: getBrowserType()
    };
  },
  mounted() {
    if (
      (this.type === "2" && this.num > 1 && this.browType !== "Chrome") ||
      this.type !== "2"
    ) {
      formatStr(this.$el, this.type, this.num);
    }
  },
  render(h) {
    let tempNodes = [];
    if (this.type !== "2") {
      tempNodes.push(
        h(
          "div",
          {
            class: "lr-ellipse-font"
          },
          this.$slots.default
        )
      );
    } else {
      if (this.num > 1) {
        if (this.browType === "Chrome") {
          tempNodes.push(
            h(
              "div",
              {
                class: "lr-ellipse-font ellipse-font-wrap multer-ellipsis",
                style: {
                  "-webkit-line-clamp": this.num
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
                class: "lr-ellipse-font"
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
              class: "lr-ellipse-font ellipse-font-wrap single-ellipsis"
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
