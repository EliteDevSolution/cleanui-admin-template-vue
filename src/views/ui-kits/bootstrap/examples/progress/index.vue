<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Progress</strong>
    </h5>
    <div class="mb-5">
      <b-progress :value="value" :max="max" show-progress animated class="mb-3"></b-progress>
      <b-progress class="mb-3" :max="max" show-value>
        <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
        <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
        <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
      </b-progress>
      <b-button class="mb-3" @click="rendomValue">Click me</b-button>
    </div>
    <h5 class="mb-4">
      <strong>Advanced Usage</strong>
    </h5>
    <div class="mb-5">
      <h6>No label</h6>
      <b-progress :value="value" :max="max" class="mb-3"></b-progress>
      <h6>Value label</h6>
      <b-progress :value="value" :max="max" show-value class="mb-3"></b-progress>
      <h6>Progress label</h6>
      <b-progress :value="value" :max="max" show-progress class="mb-3"></b-progress>
      <h6>Value label with precision</h6>
      <b-progress :value="value" :max="max" :precision="2" show-value class="mb-3"></b-progress>
      <h6>Progress label with precision</h6>
      <b-progress :value="value" :max="max" :precision="2" show-progress class="mb-3"></b-progress>
    </div>
    <div class="mb-5">
      <h6>Default width</h6>
      <b-progress :value="value" class="mb-3"></b-progress>
      <h6>Custom widths</h6>
      <b-progress :value="value" class="w-75 mb-3"></b-progress>
      <b-progress :value="value" class="w-50 mb-3"></b-progress>
      <b-progress :value="value" class="w-25 mb-3"></b-progress>
    </div>
    <div class="mb-5">
      <div v-for="(bar, index) in bars" v-bind:key="index" class="mb-3">
        <h6>{{ bar.variant }}</h6>
        <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapProgressExample',
  data() {
    return {
      value: 45,
      max: 100,
      bars: [
        { variant: 'success', value: 10 },
        { variant: 'info', value: 75 },
        { variant: 'warning', value: 43 },
        { variant: 'danger', value: 56 },
        { variant: 'primary', value: 28 },
        { variant: 'secondary', value: 21 },
        { variant: 'dark', value: 87 },
      ],
      timer: null,
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    rendomValue() {
      this.value = Math.random() * this.max
    },
  },
}
</script>
