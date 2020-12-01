<template>
  <ul class="list-unstyled" :class="$style.list">
    <li :class="$style.item" class="text-muted">
      <div class="text-uppercase mb-1">Organic search</div>
      <div>
        <div class="text-nowrap d-inline-block">
          <div :class="[$style.donut, $style.danger]" />
          <span class="font-weight-bold text-gray-6">1,125,367</span>
        </div>
        +25%
      </div>
    </li>
    <li :class="$style.item" class="text-muted">
      <div class="text-uppercase mb-1">Google</div>
      <div>
        <div class="text-nowrap d-inline-block">
          <div :class="[$style.donut, $style.primary]" />
          <span class="font-weight-bold text-gray-6">28,235</span>
        </div>
        +85%
      </div>
    </li>
    <li :class="$style.item" class="text-muted">
      <div class="text-uppercase mb-1">Microsoft</div>
      <div>
        <div class="text-nowrap d-inline-block">
          <div :class="[$style.donut, $style.success]" />
          <span class="font-weight-bold text-gray-6">874,125</span>
        </div>
        +16%
      </div>
    </li>
    <li :class="$style.item" class="text-muted">
      <div class="text-uppercase mb-1">Yandex</div>
      <div>
        <div class="text-nowrap d-inline-block">
          <div :class="[$style.donut, $style.orange]" />
          <span class="font-weight-bold text-gray-6">28,235</span>
        </div>
        +154%
      </div>
    </li>
    <li :class="$style.item" class="text-muted">
      <div class="text-uppercase mb-1">Bing Search</div>
      <div>
        <div class="text-nowrap d-inline-block">
          <div :class="[$style.donut, $style.default]" />
          <span class="font-weight-bold text-gray-6">3,267</span>
        </div>
        +87%
      </div>
    </li>
    <li :class="$style.item" class="text-muted">
      <div class="text-uppercase mb-1">Chinese aw inc</div>
      <div>
        <div class="text-nowrap d-inline-block">
          <div :class="[$style.donut, $style.default]" />
          <span class="font-weight-bold text-gray-6">51,008</span>
        </div>
        +28%
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'KitList18',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
