import Surface from "./src/index.vue";

Surface.install = Vue => {
  Vue.component(Surface.name, Surface);
};

export default Surface;
