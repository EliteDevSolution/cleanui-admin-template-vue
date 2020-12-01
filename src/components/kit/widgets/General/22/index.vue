<template>
  <div class="row">
    <div class="col-lg-3">
      <div class="mb-xl-0 mb-3" :class="$style.item">
        <span :class="$style.icon">
          <i class="fe fe-home" />
        </span>
        <div :class="$style.desc">
          <span :class="$style.title">Block Title</span>
          <p>Waiting for review</p>
        </div>
        <div :class="$style.line" class="bg-success" />
      </div>
    </div>
    <div class="col-lg-3">
      <div class="mb-xl-0 mb-3" :class="$style.item">
        <span :class="$style.icon">
          <i class="fe fe-command" />
        </span>
        <div :class="$style.desc">
          <span :class="$style.title">Block Title</span>
          <p>Waiting for review</p>
        </div>
        <div :class="$style.line" class="bg-primary" />
      </div>
    </div>
    <div class="col-lg-3">
      <div class="mb-xl-0 mb-3" :class="$style.item">
        <span :class="$style.icon">
          <i class="fe fe-star" />
        </span>
        <div :class="$style.desc">
          <span :class="$style.title">Block Title</span>
          <p>Waiting for review</p>
        </div>
        <div :class="$style.line" class="bg-warning" />
      </div>
    </div>
    <div class="col-lg-3">
      <div class="mb-xl-0 mb-3" :class="$style.item">
        <span :class="$style.icon">
          <i class="fe fe-database" />
        </span>
        <div :class="$style.desc">
          <span :class="$style.title">Block Title</span>
          <p>Waiting for review</p>
        </div>
        <div :class="$style.line" class="bg-gray-5" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral22',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
