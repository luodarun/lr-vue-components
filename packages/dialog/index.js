import LrDialog from "./src/component";

/* istanbul ignore next */
LrDialog.install = function(Vue) {
  Vue.component(LrDialog.name, LrDialog);
};

export default LrDialog;
