<template>
  <div class="card-body position-relative overflow-hidden">
    <div class="font-size-36 font-weight-bold text-dark mb-n2">$240.56</div>
    <div class="text-uppercase">Outcome</div>
    <div :class="$style.chartContainer">
      <vue-chartist
        :class="$style.chart"
        class="ct-hidden-points"
        :data="chartData"
        :options="chartOptions"
        type="Line"
      />
    </div>
  </div>
</template>
<script>
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

export default {
  name: 'KitChart11v1',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    return {
      chartOptions: {
        axisX: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        axisY: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        showArea: true,
        high: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        fullWidth: true,
        height: '110px',
        showPoint: true,
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      chartData: {
        series: [
          [
            42,
            80,
            67,
            84,
            74,
            82,
            64,
          ],
        ],
      },
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
