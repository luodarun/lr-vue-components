import { once, on } from "lr-ui/src/utils/dom";
import Vue from "vue";

const handleClick = e => {
  var selfContextMenuDiv = window.document.querySelector(".selfContextMenu");
  selfContextMenuDiv && window.document.body.removeChild(selfContextMenuDiv);
};
export default {
  bind(el, binding, vnode) {
    on(el, "contextmenu", e => {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        window.event.returnValue = false;
      }
      var selfContextMenuDiv = window.document.querySelector(
        ".selfContextMenu"
      );
      selfContextMenuDiv &&
        window.document.body.removeChild(selfContextMenuDiv);
      let divVNode = new Vue({
        render(h) {
          return binding.value.render(h, vnode.context);
        }
      }).$mount();
      let div = divVNode.$el;
      div.className = "selfContextMenu";
      div.style.position = "absolute";
      div.style.top = e.pageY + "px";
      div.style.left = e.pageX + 10 + "px";
      div.style.boxShadow = "0 2px 12px 0 rgba(0, 0, 0, 0.22)";
      window.document.body.appendChild(div);
      once(window.document.body, "click", handleClick);
    });
  }
};
