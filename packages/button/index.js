import LrButton from "./src/button";

/* istanbul ignore next */
LrButton.install = function(Vue) {
  Vue.component(LrButton.name, LrButton);
};

export default LrButton;
