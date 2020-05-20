import LrOption from "../select/src/option";

/* istanbul ignore next */
LrOption.install = function(Vue) {
  Vue.component(LrOption.name, LrOption);
};

export default LrOption;
