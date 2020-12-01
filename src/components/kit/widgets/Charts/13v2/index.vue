<template>
  <div>
    <div class="card-body">
      <div class="font-weight-bold font-size-36 font-weight-bold text-pink">13,846$</div>
    </div>
    <vue-chartist class="height-200 ct-hidden-points" type="Line" :data="data" :options="options" />
  </div>
</template>
<script>
import data from './data.json'
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import Chartist from 'chartist'
export default {
  name: 'KitChart13v2',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false,
      }),
      showPoint: true,
      showLine: true,
      showArea: true,
      fullWidth: true,
      showLabel: false,
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      chartPadding: 0,
      low: 0,
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }

    return {
      data,
      options,
    }
  },
}
</script>
