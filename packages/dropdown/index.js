import LrDropdown from "./src/dropdown";

/* istanbul ignore next */
LrDropdown.install = function(Vue) {
  Vue.component(LrDropdown.name, LrDropdown);
};

export default LrDropdown;
