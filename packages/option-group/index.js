import LrOptionGroup from "../select/src/option-group";

/* istanbul ignore next */
LrOptionGroup.install = function(Vue) {
  Vue.component(LrOptionGroup.name, LrOptionGroup);
};

export default LrOptionGroup;
