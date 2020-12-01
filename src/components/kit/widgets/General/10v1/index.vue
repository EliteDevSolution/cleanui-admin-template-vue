<template>
  <div class="d-flex flex-wrap flex-column align-items-center">
    <div class="kit__utils__avatar kit__utils__avatar--size64 mb-3">
      <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
    </div>
    <div class="text-center">
      <div class="text-dark font-weight-bold font-size-18">Mary Stanform</div>
      <div class="text-uppercase font-size-12 mb-3">Support team</div>
      <button type="button" class="btn btn-primary" :class="$style.btnWithAddon">
        <span :class="$style.btnAddon">
          <i class="fe fe-plus-circle" :class="$style.btnAddonIcon" />
        </span>
        Request Access
      </button>
    </div>
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
