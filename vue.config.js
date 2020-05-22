const devConfig = require("./build/config.dev");
const buildlib = require("./build/config.buildlib");
const builddocs = require("./build/config.builddocs");
if (process.env.VUE_APP_SLEFTYPE === "development") {
  module.exports = devConfig;
} else if (process.env.VUE_APP_SLEFTYPE === "lib") {
  module.exports = buildlib;
} else if (process.env.VUE_APP_SLEFTYPE === "docs") {
  module.exports = builddocs;
}
