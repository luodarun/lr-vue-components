import LrDropdownMenu from "../dropdown/src/dropdown-menu";

/* istanbul ignore next */
LrDropdownMenu.install = function(Vue) {
  Vue.component(LrDropdownMenu.name, LrDropdownMenu);
};

export default LrDropdownMenu;
