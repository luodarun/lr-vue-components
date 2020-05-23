import CountUp from "./src/countUp";

/* istanbul ignore next */
CountUp.install = function(Vue) {
  Vue.component(CountUp.name, CountUp);
};

export default CountUp;
