<template>
  <div>
    <div class="card-body">
      <div class="text-dark font-size-18 font-weight-bold mb-1">Income Progress</div>
      <div class="text-gray-6 mb-2">Revenue by location and date</div>
      <div class="font-weight-bold font-size-36 text-dark mb-2">$390,012.01</div>
      <div class="d-flex align-items-center">
        <div class="bg-gray-4 text-white mr-3" :class="$style.progressIcon">
          <i class="fe fe-menu font-size-18" />
        </div>
        <div class="flex-grow-1">
          <div class="text-dark font-size-18 font-weight-bold text-nowrap mb-2">78% from $500,000.00</div>
          <div class="progress">
            <div class="progress-bar bg-success" style="width: 70%" />
          </div>
        </div>
      </div>
    </div>
    <vue-chartist
      class="height-200 ct-hidden-points"
      :class="$style.chart"
      type="Line"
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
  name: 'KitChart6',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      low: 0,
      chartPadding: {
        right: 0,
        left: 0,
        top: 5,
        bottom: 0,
      },
      fullWidth: true,
      showPoint: true,
      lineSmooth: false,
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
      showArea: true,
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
@import "./style.module.scss";
</style>
