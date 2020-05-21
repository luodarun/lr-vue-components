import { getBrowserType } from "lr-ui/src/utils/util";
export default {
  functional: true,
  name: "LrEllipsisFont",
  render(h, context) {
    let row = context.props.row || 1;
    let fontSize = context.props.fontSize || 16;
    if (row > 1) {
      const browType = getBrowserType();
      if (browType === "Chrome") {
        // 谷歌
        // return 'MultiChrome'
        return h(
          "div",
          {
            class: "ellipse-font-wrap multer-ellipsis",
            style: {
              "-webkit-line-clamp": row
            }
          },
          [context.children]
        );
      } else {
        return h(
          "div",
          {
            class: "ellipse-font-wrap multer-ellipsis-no",
            style: {
              fontSize: fontSize + "px",
              maxHeight: fontSize * row * 1.25 + "px",
              lineHeight: fontSize * 1.25 + "px"
            }
          },
          [
            h("div", {
              class: "before",
              style: {
                height: fontSize * row * 1.25 + "px",
                width: fontSize * 1.25 + "px"
              }
            }),
            h(
              "div",
              {
                class: "text",
                style: {
                  marginLeft: 0 - fontSize * 1.25 + "px"
                }
              },
              [context.children]
            ),
            h(
              "div",
              {
                class: "after",
                style: {
                  width: fontSize * 1.25 + "px",
                  height: fontSize * 1.25 + "px"
                }
              },
              "..."
            )
          ]
        );
      }
    } else {
      return h(
        "div",
        {
          class: "ellipse-font-wrap single-ellipsis"
        },
        [context.children]
      );
    }
  }
};
