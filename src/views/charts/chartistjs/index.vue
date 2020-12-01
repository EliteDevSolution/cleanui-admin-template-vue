<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Chartist.js</span>
        <a
          href="https://gionkunz.github.io/chartist-js/"
          target="_blank"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up" />
        </a>
      </h5>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>CSS Styling & Animations</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="chartist-animated height-300 mt-4"
                type="Line"
                :data="animationData"
                :options="animatonOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Holes in data</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Line"
                :data="lineHoleData"
                :options="lineHoleOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Line</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300 mt-4"
                type="Line"
                :data="lineData"
                :options="lineData"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Area</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300 mt-4"
                type="Line"
                :data="areaData"
                :options="areaOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Scatter</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Line"
                :data="scatterData"
                :options="scatterOptions"
                :responsive-options="scatterResponsiveOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Horizontal Bar</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Bar"
                :data="horizontalData"
                :options="horizontalOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Bi-polar Line</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Line"
                :data="biPolarLineData"
                :options="biPolarLineOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Bi-polar Bar</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Bar"
                :data="biPolarBarData"
                :options="biPolarBarOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Stacked Bar</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Bar"
                :data="stackedBarData"
                :options="stackedBarOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Overlapping Bar</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Bar"
                :data="overlappingBarData"
                :options="overlappingBarOptions"
                :responsive-options="overlappingResponsiveOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Simple Pie</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Pie"
                :data="simplePieData"
                :options="simplePieOptions"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Pie w/ Labels</strong>
            </h5>
            <div class="mb-5">
              <vue-chartist
                class="height-300"
                type="Pie"
                :data="labelsPieData"
                :options="labelsPieOptions"
                :responsive-options="labelsPieResponsiveOptions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

export default {
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const simplePieSum = function sum(a, b) {
      return a + b
    }
    const simplePieData = {
      series: [5, 3, 4],
    }
    const scatterTimes = function scatter(n) {
      return Array(...new Array(n))
    }
    const scatterData = scatterTimes(52)
      .map(Math.random)
      .reduce(
        (scatter, rnd, index) => {
          const data = scatter
          data.labels.push(index + 1)
          data.series.forEach(series => {
            series.push(Math.random() * 100)
          })
          return data
        },
        {
          labels: [],
          series: scatterTimes(4).map(() => []),
        },
      )
    const lineHoleData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      series: [
        [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
        [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
        [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
        [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: undefined }, { x: 6, y: 4 }, { x: 7, y: null }, { x: 8, y: 4 }, { x: 9, y: 4 }],
      ],
    }
    const lineHoleOptions = {
      fullWidth: true,
      chartPadding: {
        right: 10,
      },
      low: 0,
    }

    return {
      lineHoleData,
      lineHoleOptions,
      animationData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
          [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
          [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8],
        ],
      },
      animatonOptions: {
        axisX: {
          labelInterpolationFnc(value, index) {
            return index % 2 !== 0 ? !1 : value
          },
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      lineData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]],
      },
      lineOptions: {
        fullWidth: true,
        chartPadding: {
          right: 0,
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      areaData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]],
      },
      areaOptions: {
        low: 0,
        showArea: true,
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      horizontalData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]],
      },
      horizontalOptions: {
        seriesBarDistance: 10,
        reverseData: !0,
        horizontalBars: !0,
        axisY: {
          offset: 70,
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      biPolarLineData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [1, 2, 3, 1, -2, 0, 1, 0],
          [-2, -1, -2, -1, -2.5, -1, -2, -1],
          [0, 0, 0, 1, 2, 2.5, 2, 1],
          [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
        ],
      },
      biPolarLineOptions: {
        high: 3,
        low: -3,
        showArea: !0,
        showLine: !1,
        showPoint: !1,
        fullWidth: !0,
        axisX: {
          showLabel: false,
          showGrid: false,
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },

      biPolarBarData: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
      },
      biPolarBarOptions: {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc(value, index) {
            return index % 2 === 0 ? value : null
          },
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      stackedBarData: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [[8e5, 12e5, 14e5, 13e5], [2e5, 4e5, 5e5, 3e5], [1e5, 2e5, 4e5, 6e5]],
      },
      stackedBarOptions: {
        stackBars: !0,
        axisY: {
          labelInterpolationFnc(value) {
            return `${value / 1e3}k`
          },
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },

      overlappingBarData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]],
      },
      overlappingBarOptions: {
        seriesBarDistance: 10,
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      overlappingResponsiveOptions: [
        [
          '',
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc(value) {
                return value[0]
              },
            },
          },
        ],
      ],
      labelsPieData: {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40],
      },
      labelsPieOptions: {
        labelInterpolationFnc(value) {
          return value[0]
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      labelsPieResponsiveOptions: [
        [
          'screen and (min-width: 640px)',
          {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc(value) {
              return value
            },
          },
        ],
        [
          'screen and (min-width: 1024px)',
          {
            labelOffset: 80,
            chartPadding: 20,
          },
        ],
      ],
      simplePieData,
      simplePieOptions: {
        labelInterpolationFnc(value) {
          return `${Math.round((value / simplePieData.series.reduce(simplePieSum)) * 100)}%`
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      scatterResponsiveOptions: [
        [
          'screen and (min-width: 640px)',
          {
            axisX: {
              labelInterpolationFnc(value, index) {
                return index % 4 === 0 ? `W${value}` : null
              },
            },
          },
        ],
      ],
      scatterOptions: {
        showLine: false,
        axisX: {
          labelInterpolationFnc(value, index) {
            return index % 13 === 0 ? `W${value}` : null
          },
        },
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      scatterData,
    }
  },
}
</script>
<style lang="scss">
@import "./style.module.scss";
</style>
