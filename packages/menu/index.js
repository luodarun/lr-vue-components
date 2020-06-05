import LrMenu from "./src/menu";

LrMenu.install = function(vue) {
  vue.component(LrMenu.name, LrMenu);
};

export default LrMenu;
