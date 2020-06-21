import InfiniteScroll from "./src";

InfiniteScroll.install = function(vue) {
  vue.component(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
