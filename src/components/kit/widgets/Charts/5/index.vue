<template>
  <div>
    <div class="text-dark font-size-18 font-weight-bold mb-1">Year Profit</div>
    <div class="text-gray-6 mb-2">Revenue by location and date</div>
    <vue-chartist
      class="height-200"
      :class="$style.chart"
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
  name: 'KitChart5',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      stackBars: true,
      fullWidth: true,
      chartPadding: {
        right: 0,
        left: 0,
        top: 5,
        bottom: 0,
      },
      low: 0,
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      seriesBarDistance: 5,
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }

    return {
      data,
      options,
    }
  },
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
