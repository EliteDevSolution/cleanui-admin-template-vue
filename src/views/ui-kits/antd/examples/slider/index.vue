<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-slider id="test" :defaultValue="30" :disabled="disabled" />
      <a-slider range :defaultValue="[20, 50]" :disabled="disabled" />
      <br />
      <a-switch
        :checked="disabled"
        @change="handleDisabledChange"
        unCheckedChildren="enabled"
        checkedChildren="disabled"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdSliderExample',
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    handleDisabledChange(disabled) {
      this.disabled = disabled
    },
  },
}
</script>
