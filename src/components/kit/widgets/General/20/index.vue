<template>
  <div :class="$style.carousel">
    <a-carousel>
      <div
        class="height-150 pt-4 pl-4 overflow-hidden position-relative bg-light line-height-1 d-block"
      >
        <h2 class="font-size-24 font-weight-bold">To Do</h2>
        <a class="font-size-18" href="#">Upgrade / Finish</a>
        <i class="fe fe-settings text-gray-4" :class="$style.icon" />
      </div>
      <div
        class="height-150 pt-4 pl-4 overflow-hidden position-relative bg-light line-height-1 d-block"
      >
        <h2 class="font-size-24 font-weight-bold">Sales Growth</h2>
        <a class="font-size-18" href="#">View Report</a>
        <i class="fe fe-server text-gray-4" :class="$style.icon" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral20',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
