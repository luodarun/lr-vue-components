const fs = require("fs-extra");
const path = require("path");

const uppercamelcase = require("uppercamelcase");
// 拿到packages目录下的所以含组件的文件名字
const Components = require("./get-components")();
const packageJson = require("../package.json");

const version = process.env.VERSION || packageJson.version;

const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`;

function buildPackagesEntry() {
  const uninstallComponents = ["MessageBox", "Message"];
  const importList = Components.map(
    name => `import ${uppercamelcase(name)} from './${name}'`
  );
  importList.push(
    "import CollapseTransition from '../src/transitions/collapse-transition'",
    "import directives from '../src/directives/index'"
  );
  const exportList = Components.map(name => `${uppercamelcase(name)}`);
  const installList = exportList.filter(
    // exportList中有的全部给了
    name => !~uninstallComponents.indexOf(uppercamelcase(name))
  );
  installList.push("CollapseTransition", "directives");
  exportList.push("CollapseTransition", "directives");
  const content = `${tips}
${importList.join("\n")};
  const version = '${version}';
  const components = [
    ${installList.join(",\n    ")}
  ];
  const install = Vue => {
    components.forEach(Component => {
      Vue.use(Component)
    });
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$message = Message;
  };
  /* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  ${exportList.join(",\n  ")}
}
export default {
  install,
  version
}`;
  fs.writeFileSync(path.join(__dirname, "../packages/index.js"), content);
}

buildPackagesEntry();
