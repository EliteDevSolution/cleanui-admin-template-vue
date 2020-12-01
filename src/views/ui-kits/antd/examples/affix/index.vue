<template>
  <div class="height-700 d-flex">
    <a-affix :offsetTop="this.top" class="align-self-start mr-3">
      <a-button type="primary" @click="()=>{this.top += 10}">Affix top</a-button>
    </a-affix>
    <br />
    <a-affix :offsetBottom="this.bottom" class="align-self-end">
      <a-button type="primary"  @click="()=>{this.bottom += 10}">Affix bottom</a-button>
    </a-affix>
  </div>
</template>
<script>
export default {
  name: 'KitAntdAffixExample',
  data() {
    return {
      top: 10,
      bottom: 10,
    }
  },
}
</script>
