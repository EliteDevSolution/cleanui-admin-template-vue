<template>
  <div>
    <vue-chartist
      class="height-200 mb-3"
      type="Bar"
      :data="data"
      :options="options"
      :listener="listener"
    />
    <div class="d-flex flex-wrap">
      <div class="mr-5 mb-2">
        <div class="text-nowrap text-uppercase text-gray-4">
          <div :class="[$style.donut, $style.success]" />Gross revenue
        </div>
        <div class="font-weight-bold font-size-18 text-dark">+$125,367.36</div>
      </div>
      <div class="mr-5 mb-2">
        <div class="text-nowrap text-uppercase text-gray-4">
          <div :class="[$style.primary, $style.donut]" />Gross Earnings
        </div>
        <div class="font-weight-bold font-size-18 text-dark">+$125,367.36</div>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
export default {
  name: 'KitChart3',
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
    const listener = {
      draw: item => {
        if (item.type === 'bar') {
          item.group.elem('line', {
            x1: item.x1,
            x2: item.x2,
            y1: item.y2,
            y2: 0,
            stroke: '#e4e9f0',
            'stroke-width': '10',
          })
        }
      },
    }
    return {
      data,
      options,
      listener,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
