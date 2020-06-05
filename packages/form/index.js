import LrForm from "./src/form";

/* istanbul ignore next */
LrForm.install = function(Vue) {
  Vue.component(LrForm.name, LrForm);
};

export default LrForm;
