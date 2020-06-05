import LrDropdownItem from "../dropdown/src/dropdown-item";

/* istanbul ignore next */
LrDropdownItem.install = function(Vue) {
  Vue.component(LrDropdownItem.name, LrDropdownItem);
};

export default LrDropdownItem;
