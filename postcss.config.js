const saladConfig = require("./packages/theme-chalk/salad.config.json");
module.exports = {
  plugins: {
    autoprefixer: {},
    "saladcss-bem": saladConfig.features.bem,
    precss: {}
  }
};
