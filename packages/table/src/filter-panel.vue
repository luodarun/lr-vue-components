<template>
  <transition name="lr-zoom-in-top">
    <div
      class="lr-table-filter"
      v-if="multiple"
      v-clickoutside="handleOutsideClick"
      v-show="showPopper"
    >
      <div class="lr-table-filter__content">
        <lr-scrollbar wrap-class="lr-table-filter__wrap">
          <lr-checkbox-group
            class="lr-table-filter__checkbox-group"
            v-model="filteredValue"
          >
            <lr-checkbox
              v-for="filter in filters"
              :key="filter.value"
              :label="filter.value"
              >{{ filter.text }}</lr-checkbox
            >
          </lr-checkbox-group>
        </lr-scrollbar>
      </div>
      <div class="lr-table-filter__bottom">
        <button
          @click="handleConfirm"
          :class="{ 'is-disabled': filteredValue.length === 0 }"
          :disabled="filteredValue.length === 0"
        >
          筛选
        </button>
        <button @click="handleReset">重置</button>
      </div>
    </div>
    <div
      class="lr-table-filter"
      v-else
      v-clickoutside="handleOutsideClick"
      v-show="showPopper"
    >
      <ul class="lr-table-filter__list">
        <li
          class="lr-table-filter__list-item"
          :class="{
            'is-active': filterValue === undefined || filterValue === null
          }"
          @click="handleSelect(null)"
        >
          全部
        </li>
        <li
          class="lr-table-filter__list-item"
          v-for="filter in filters"
          :label="filter.value"
          :key="filter.value"
          :class="{ 'is-active': isActive(filter) }"
          @click="handleSelect(filter.value)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
import Popper from "lr-ui/src/utils/vue-popper";
import { PopupManager } from "lr-ui/src/utils/popup";
import Clickoutside from "lr-ui/src/utils/clickoutside";
import Dropdown from "./dropdown";
import LrCheckbox from "lr-ui/packages/checkbox";
import LrCheckboxGroup from "lr-ui/packages/checkbox-group";
import LrScrollbar from "lr-ui/packages/scrollbar";

export default {
  name: "LrTableFilterPanel",

  mixins: [Popper],

  directives: {
    Clickoutside
  },

  components: {
    LrCheckbox,
    LrCheckboxGroup,
    LrScrollbar
  },

  props: {
    placement: {
      type: String,
      default: "bottom-end"
    }
  },

  methods: {
    isActive(filter) {
      return filter.value === this.filterValue;
    },

    handleOutsideClick() {
      setTimeout(() => {
        this.showPopper = false;
      }, 16);
    },

    handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },

    handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },

    handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== "undefined" && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },

    confirmFilter(filteredValue) {
      this.table.store.commit("filterChange", {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },

  data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },

  computed: {
    filters() {
      return this.column && this.column.filters;
    },

    filterValue: {
      get() {
        return (this.column.filteredValue || [])[0];
      },
      set(value) {
        if (this.filteredValue) {
          if (typeof value !== "undefined" && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },

    filteredValue: {
      get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },

    multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },

  mounted() {
    this.popperElm = this.$el; // 创建浮窗
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener("scroll", () => {
      this.updatePopper();
    });

    this.$watch("showPopper", value => {
      if (this.column) this.column.filterOpened = value;
      if (value) {
        Dropdown.open(this);
      } else {
        Dropdown.close(this);
      }
    });
  },
  watch: {
    showPopper(val) {
      if (
        val === true &&
        parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex
      ) {
        this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      }
    }
  }
};
</script>
