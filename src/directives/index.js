import mousewheel from "./mousewheel";
import repeatClick from "./repeat-click";
import selfContextMenu from "./selfContextMenu";
import infiniteScroll from "./infiniteScroll";
const mousewheelWrap = { name: "mousewheel", context: mousewheel };
const repeatClickWrap = { name: "repeatClick", context: repeatClick };
const selfContextMenuWrap = {
  name: "selfContextMenu",
  context: selfContextMenu
};
const infiniteScrollWrap = {
  name: "infiniteScroll",
  context: infiniteScroll
};
const directives = [
  mousewheelWrap,
  repeatClickWrap,
  selfContextMenuWrap,
  infiniteScrollWrap
];
const install = Vue => {
  directives.forEach(directive => {
    Vue.directive(directive.name, directive.context);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { mousewheelWrap, repeatClickWrap, selfContextMenuWrap };
export default {
  install
};
