<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-bell" :class="$style.icon"></i>
    </div>
    <div slot="overlay">
      <div class="card cui__utils__shadow width-350">
        <div class="card-body pb-2">
          <list3 />
        </div>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
import List3 from '@/components/kit/widgets/Lists/3'

export default {
  components: {
    List3,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
