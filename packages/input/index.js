import LrInput from "./src/input";

/* istanbul ignore next */
LrInput.install = function(Vue) {
  Vue.component(LrInput.name, LrInput);
};

export default LrInput;
