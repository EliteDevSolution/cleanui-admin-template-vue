<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-3">
      <a-rate v-model="value" />
    </div>
    <div class="mb-3">
      <a-rate :defaultValue="2.5" allowHalf />
    </div>
    <div class="mb-3">
      <a-rate character="W" allowHalf />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdRateExample',
  data() {
    return {
      value: 2,
    }
  },
}
</script>
