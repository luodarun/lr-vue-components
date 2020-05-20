import LrTag from "./src/tag";

/* istanbul ignore next */
LrTag.install = function(Vue) {
  Vue.component(LrTag.name, LrTag);
};

export default LrTag;
