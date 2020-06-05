import LrSubmenu from "../menu/src/submenu";

/* istanbul ignore next */
LrSubmenu.install = function(Vue) {
  Vue.component(LrSubmenu.name, LrSubmenu);
};

export default LrSubmenu;
