import LrTableColumn from "../table/src/table-column";

/* istanbul ignore next */
LrTableColumn.install = function(Vue) {
  Vue.component(LrTableColumn.name, LrTableColumn);
};

export default LrTableColumn;
