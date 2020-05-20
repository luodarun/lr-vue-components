<template>
  <transition name="lr-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="lr-autocomplete-suggestion lr-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region"
    >
      <lr-scrollbar
        tag="ul"
        wrap-class="lr-autocomplete-suggestion__wrap"
        view-class="lr-autocomplete-suggestion__list"
      >
        <li v-if="!parent.hideLoading && parent.loading">
          <i class="lr-icon-loading"></i>
        </li>
        <slot v-else> </slot>
      </lr-scrollbar>
    </div>
  </transition>
</template>
<script>
import Popper from "lr-ui/src/utils/vue-popper";
import Emitter from "lr-ui/src/mixins/emitter";
import LrScrollbar from "lr-ui/packages/scrollbar";

export default {
  components: { LrScrollbar },
  mixins: [Popper, Emitter],

  componentName: "LrAutocompleteSuggestions",

  data() {
    return {
      parent: this.$parent,
      dropdownWidth: ""
    };
  },

  props: {
    options: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },

  methods: {
    select(item) {
      this.dispatch("LrAutocomplete", "item-click", item);
    }
  },

  updated() {
    this.$nextTick(_ => {
      this.popperJS && this.updatePopper();
    });
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input;
    this.referenceList = this.$el.querySelector(
      ".lr-autocomplete-suggestion__list"
    );
    this.referenceList.setAttribute("role", "listbox");
    this.referenceList.setAttribute("id", this.id);
  },

  created() {
    this.$on("visible", (val, inputWidth) => {
      this.dropdownWidth = inputWidth + "px";
      this.showPopper = val;
    });
  }
};
</script>
