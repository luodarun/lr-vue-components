<template>
  <div>
    <div
      v-if="paragraph.type === 'row'"
      :class="paragraph.containerClass"
      class="lr-skeleton-row-container"
    >
      <div
        class="lr-skeleton lr-skeleton-row"
        :style="row.rowStyle"
        v-for="(row, index) in paragraph.rows"
        :key="index"
      >
        <item :paragraph="row" :active="active"></item>
      </div>
    </div>
    <div
      v-else-if="paragraph.type === 'col'"
      :class="paragraph.containerClass"
      class="lr-skeleton-col-container"
    >
      <div
        class="lr-skeleton lr-skeleton-col"
        :style="col.colStyle"
        v-for="(col, index) in paragraph.cols"
        :key="index"
      >
        <item :paragraph="col" :active="active"></item>
      </div>
    </div>
    <div
      v-else-if="paragraph.type === 'rect'"
      :class="paragraph.containerClass"
      class="lr-skeleton-rect-container"
    >
      <div
        class="lr-skeleton lr-skeleton-rect"
        :class="{ 'lr-skeleton-ani': active }"
        :style="paragraph.style"
      ></div>
    </div>
    <div
      v-else-if="paragraph.type === 'circle'"
      :class="paragraph.containerClass"
      class="lr-skeleton-circle-container"
    >
      <div
        class="lr-skeleton lr-skeleton-circle"
        :class="{ 'lr-skeleton-ani': active }"
        :style="paragraph.style"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "item",
  props: {
    paragraph: Object,
    active: Boolean
  }
};
</script>
