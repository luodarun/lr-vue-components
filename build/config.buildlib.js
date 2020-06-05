const path = require("path");
const components = require("./get-components")();
// const components = require("../components.json");
function dealEntry(components) {
  let componentsObj = {};
  for (let i = 0; i < components.length; i++) {
    componentsObj[components[i]] = `./packages/${components[i]}/index.js`;
  }
  componentsObj.CollapseTransition = "./src/transitions/collapse-transition.js";
  componentsObj.RepeatClick = "./src/directives/repeat-click.js";
  componentsObj.SelfContextMenu = "./src/directives/selfContextMenu.js";
  componentsObj.index = "./packages/index.js";
  return componentsObj;
}
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  outputDir: resolve("../lib"),
  configureWebpack: {
    entry: dealEntry(components),
    output: {
      filename: "[name].js",
      libraryTarget: "commonjs2",
      libraryExport: "default",
      library: "lib"
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("../examples"))
      .set("lr-ui", resolve("../"));
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("html");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
  }
};
