<template>
  <ul class="list-unstyled">
    <li :class="$style.item">
      <div :class="$style.itemTime" class="mr-3">16:00</div>
      <div :class="$style.itemSeparator">
        <div :class="[$style.donut, $style.danger]" class="mr-3"/>
      </div>
      <div>
        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore
        magna elit enim at minim veniam quis nostrud
      </div>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemTime" class="mr-3">15:28</div>
      <div :class="$style.itemSeparator">
        <div :class="[$style.donut, $style.danger]" class="mr-3"/>
      </div>
      <div>David Beckham was registered as administrator</div>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemTime" class="mr-3">14:26</div>
      <div :class="$style.itemSeparator">
        <div :class="[$style.donut, $style.danger]" class="mr-3"/>
      </div>
      <div>
        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore
      </div>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemTime" class="mr-3">13:22</div>
      <div :class="$style.itemSeparator">
        <div :class="[$style.donut, $style.danger]" class="mr-3"/>
      </div>
      <div>
        Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore
        magna elit enim at minim veniam quis nostrud
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'KitList19',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
