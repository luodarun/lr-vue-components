import { once, on } from "lr-ui/src/utils/dom";

export default {
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    const { callbackFn, delayTime } = binding.value;
    const handler = () => vnode.context[callbackFn].apply();
    const clear = () => {
      if (Date.now() - startTime < delayTime) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, "mousedown", e => {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, "mouseup", clear);
      clearInterval(interval);
      interval = setInterval(handler, delayTime);
    });
  }
};
