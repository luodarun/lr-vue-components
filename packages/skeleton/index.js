import Skeleton from "./src/skeleton.vue";

Skeleton.install = function(vue) {
  vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;
