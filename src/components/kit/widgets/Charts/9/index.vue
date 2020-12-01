<template>
  <div>
    <div>
      <div class="text-dark font-size-18 font-weight-bold mb-1">Year Profit</div>
      <div class="text-gray-6 mb-2">Revenue by location and date</div>
      <div class="d-flex flex-wrap align-items-center">
        <div class="mr-3 mt-3 mb-3 position-relative">
          <doughnut-chart
            :chartdata="data"
            :options="options"
            :height="140"
            :width="140"
            ref="doughnut"
          />
          <div class="text-gray-5 font-size-28" :class="$style.tooltip" ref="tooltip"></div>
        </div>
        <div v-html="customLegend"></div>
      </div>
    </div>
  </div>
</template>
<script>
import DoughnutChart from './DoughnutChart.vue'
import data from './data.json'
export default {
  name: 'KitChart9',
  components: {
    DoughnutChart,
  },
  data: function () {
    const options = {
      animation: false,
      responsive: true,
      cutoutPercentage: 70,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
        custom: tooltipData => {
          const tooltipEl = this.$refs.tooltip
          tooltipEl.style.opacity = 1
          if (tooltipData.opacity === 0) {
            tooltipEl.style.opacity = 0
          }
        },
        callbacks: {
          label: (tooltipItem, itemData) => {
            const dataset = itemData.datasets[0]
            const value = dataset.data[tooltipItem.index]
            this.$refs.tooltip.innerHTML = value
          },
        },
      },
      legendCallback: chart => {
        const { labels } = chart.data
        let legendMarkup = []
        const dataset = chart.data.datasets[0]
        legendMarkup.push('<div class="flex-shrink-0">')
        let legends = labels.map((label, index) => {
          const color = dataset.backgroundColor[index]
          return `<div class="d-flex align-items-center flex-nowrap mt-2 mb-2"><div class="tablet mr-3" style="background-color: ${color}"></div>${label}</div>`
        })
        legends = legends.join('')
        legendMarkup.push(legends)
        legendMarkup.push('</div>')
        legendMarkup = legendMarkup.join('')
        return legendMarkup
      },
    }
    return {
      data,
      options,
      customLegend: '',
    }
  },
  mounted() {
    const legend = this.$refs.doughnut.generateLegend()
    this.customLegend = legend
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
