<template>
  <div class="pt-3" :class="$style.container">
    <div class="bg-success" :class="$style.status"></div>
    <div class="d-flex flex-nowrap align-items-center pb-3 pl-4 pr-4">
      <div class="mr-auto">
        <div class="text-uppercase font-weight-bold font-size-24 text-dark">+$10,264</div>
        <div class="font-size-18">4512-XXXX-1678-7528</div>
      </div>
      <div class="ml-1 text-success">
        <i class="fe fe-arrow-left-circle font-size-40"></i>
      </div>
    </div>
    <div class="py-3 pl-4" :class="$style.footer">From Tesla Cars, Inc</div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
