import LrAutocomplete from "./src/autocomplete";

/* istanbul ignore next */
LrAutocomplete.install = function(Vue) {
  Vue.component(LrAutocomplete.name, LrAutocomplete);
};

export default LrAutocomplete;
