<template>
  <div>
    <div class="d-flex flex-wrap mb-3">
      <div :class="$style.item">
        <div class="font-size-18 text-dark font-weight-bold">
          +$12,367.36 <span class="text-success font-size-12 align-text-top">+25%</span>
        </div>
        <div class="text-uppercase text-gray-4">Total sales</div>
      </div>
      <div :class="$style.item">
        <div class="font-size-18 text-dark font-weight-bold">
          +$5,367.36 <span class="text-danger font-size-12 align-text-top">-76%</span>
        </div>
        <div class="text-uppercase text-gray-4">Avg. Per Day</div>
      </div>
    </div>
    <vue-chartist
      class="height-300"
      type="Bar"
      :data="data"
      :options="options"
    />
  </div>
</template>
<script>
import data from './data.json'
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
export default {
  name: 'KitChart1',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function() {
    const options = {
      seriesBarDistance: 10,
      horizontalBars: true,
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }
    return {
      options,
      data,
    }
  },
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
