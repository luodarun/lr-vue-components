<template>
  <lr-container class="self-container">
    <lr-aside width="210px" class="self-aside">
      <LayoutSlider @open="open" />
    </lr-aside>
    <lr-container>
      <lr-header class="self-header" height="auto">
        <LayoutTop>
          <template v-slot:topTopUser>
            <div class="topTopUser-wrap">
              <div class="topTopUser-wrap-div">
                <slot name="topUser"></slot>
              </div>
              <div class="topTopUser-wrap-icon">
                <i @click="drawer = true" class="lr-icon-ellipsis1"></i>
              </div>
            </div>
          </template>
          <template v-slot:topTagViews>
            <slot name="topViews"></slot>
          </template>
        </LayoutTop>
      </lr-header>
      <lr-main class="self-main">
        <transition name="fade-transform" mode="out-in">
          <slot name="mainView"></slot>
        </transition>
      </lr-main>
      <lr-footer class="self-footer">
        <LayoutFooter />
      </lr-footer>
    </lr-container>
    <span>
      <lr-drawer
        :modal-append-to-body="false"
        title="我是系统"
        :visible.sync="drawer"
        :direction="direction"
      >
        <span>我来啦!</span>
      </lr-drawer>
    </span>
  </lr-container>
</template>
<script>
import LayoutFooter from "./footer";
import LayoutSlider from "./slider";
import LayoutTop from "./top";
import LrContainer from "../../container";
import LrAside from "../../aside";
import LrHeader from "../../header";
import LrMain from "../../main";
import LrFooter from "../../footer";
import LrDrawer from "lr-ui/packages/drawer";

export default {
  name: "LrSurface",
  components: {
    LayoutFooter,
    LayoutSlider,
    LayoutTop,
    LrContainer,
    LrAside,
    LrHeader,
    LrMain,
    LrFooter,
    LrDrawer
  },
  provide() {
    return {
      menu: this.menu,
      keyCollapse: this.keyCollapse
    };
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    keyCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    open(item) {
      this.$emit("open", item);
    }
  }
};
</script>
