import Signature from "./src/signature";

Signature.install = function(vue) {
  vue.component(Signature.name, Signature);
};

export default Signature;
