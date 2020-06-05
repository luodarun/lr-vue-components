import LrFormItem from "../form/src/form-item";

/* istanbul ignore next */
LrFormItem.install = function(Vue) {
  Vue.component(LrFormItem.name, LrFormItem);
};

export default LrFormItem;
