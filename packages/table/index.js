import LrTable from "./src/table";

/* istanbul ignore next */
LrTable.install = function(Vue) {
  Vue.component(LrTable.name, LrTable);
};

export default LrTable;
