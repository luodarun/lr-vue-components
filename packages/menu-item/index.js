import LrMenuItem from "../menu/src/menu-item";

LrMenuItem.install = function(vue) {
  vue.component(LrMenuItem.name, LrMenuItem);
};
export default LrMenuItem;
