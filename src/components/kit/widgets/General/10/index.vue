<template>
  <div class="d-flex flex-wrap align-items-start">
    <div class="kit__utils__avatar kit__utils__avatar--size64 mr-3">
      <img src="resources/images/avatars/3.jpg" alt="Mary Stanform" />
    </div>
    <div>
      <div class="text-uppercase font-size-12">Administrator</div>
      <div class="text-dark font-weight-bold font-size-18 mb-2">Helen Maggie</div>
      <button type="button" class="btn btn-success" :class="$style.btnWithAddon">
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
  name: 'KitGeneral10',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
