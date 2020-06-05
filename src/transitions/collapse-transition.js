import { addClass, removeClass } from "lr-ui/src/utils/dom";

class Transition {
  constructor() {
    this.beforeEnter = function(el) {
      addClass(el, "collapse-transition");
      if (!el.dataset) el.dataset = {};

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = "0";
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    };

    this.enter = function(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = "hidden";
    };

    this.afterEnter = function(el) {
      // for safari: remove class then reset height is necessary
      removeClass(el, "collapse-transition");
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    };

    this.beforeLeave = function(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    };

    this.leave = function(el) {
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        addClass(el, "collapse-transition");
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    };

    this.afterLeave = function(el) {
      removeClass(el, "collapse-transition");
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
  }
}
const LrCollapseTransition = {
  name: "LrCollapseTransition",
  functional: true,
  render(h, { children }) {
    const data = {
      on: new Transition()
    };

    return h("transition", data, children);
  }
};

LrCollapseTransition.install = function(vue) {
  vue.component(LrCollapseTransition.name, LrCollapseTransition);
};

export default LrCollapseTransition;
