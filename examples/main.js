import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import hljs from "highlight.js";
import LrUI from "../packages/index";
import "../packages/theme-chalk/src/index.scss";
import demoBlock from "./components/demo-block.vue";
// const Demos = [];

// require.context该方法有3个参数：
// 1,需要搜索的文件夹目录（必传）
// 2,是否需要搜索它的子孙目录，默认为false
// 3,匹配文件名的正则表达式
Vue.component("demo-block", demoBlock);

Vue.use(LrUI);

Vue.config.productionTip = false;
router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
