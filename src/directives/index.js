import mousewheel from "./mousewheel";
import repeatClick from "./repeat-click";
import selfContextMenu from "./selfContextMenu";
const mousewheelWrap = { name: "mousewheel", context: mousewheel };
const repeatClickWrap = { name: "repeatClick", context: repeatClick };
const selfContextMenuWrap = {
  name: "selfContextMenu",
  context: selfContextMenu
};
const directives = [mousewheelWrap, repeatClickWrap, selfContextMenuWrap];
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
