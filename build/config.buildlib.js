const path = require("path");
const components = require("../components.json");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  outputDir: resolve("../lib"),
  configureWebpack: {
    entry: components,
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
