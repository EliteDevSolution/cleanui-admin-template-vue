<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">C3</span>
        <a href="http://c3js.org/" target="_blank" class="btn btn-sm btn-light">
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
              <strong>Simple Line</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="line" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Spline</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="spline" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Step</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="step" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Area</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="area" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Scatter</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="scatter" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Bar</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="bar" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Stacked Bar</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="stackedBar" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Combination</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="combination" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Sub Chart</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="subChart" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Zoom</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="zoom" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Pie Chart</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="pie" class="height-300"></vue-c3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Donut Chart</strong>
            </h5>
            <div class="mb-5">
              <vue-c3 :handler="donut" class="height-300"></vue-c3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
import 'c3/c3.min.css'
export default {
  components: {
    VueC3,
  },
  data: function () {
    return {
      line: new Vue(),
      spline: new Vue(),
      scatter: new Vue(),
      bar: new Vue(),
      stackedBar: new Vue(),
      combination: new Vue(),
      subChart: new Vue(),
      zoom: new Vue(),
      pie: new Vue(),
      donut: new Vue(),
      step: new Vue(),
      area: new Vue(),
      colors: {
        primary: '#01a8fe',
        def: '#acb7bf',
        success: '#46be8a',
        danger: '#fb434a',
      },
    }
  },
  computed: {
    lineOptions() {
      return {
        data: {
          columns: [
            ['Primary', 100, 165, 140, 270, 200, 140, 220],
            ['Success', 110, 80, 100, 85, 125, 90, 100],
          ],
        },
        color: {
          pattern: [this.colors.primary, this.colors.success],
        },
        axis: {
          x: {
            tick: {
              outer: !1,
            },
          },
          y: {
            max: 300,
            min: 0,
            tick: {
              outer: !1,
              count: 7,
              values: [0, 50, 100, 150, 200, 250, 300],
            },
          },
        },
        grid: {
          x: {
            show: !1,
          },
          y: {
            show: !0,
          },
        },
      }
    },
    splineOptions() {
      return {
        data: {
          columns: [
            ['Primary', 100, 165, 140, 270, 200, 140, 220],
            ['Danger', 110, 80, 100, 85, 125, 90, 100],
          ],
          type: 'spline',
        },
        color: {
          pattern: [this.colors.primary, this.colors.danger],
        },
        axis: {
          x: {
            tick: {
              outer: !1,
            },
          },
          y: {
            max: 300,
            min: 0,
            tick: {
              outer: !1,
              count: 7,
              values: [0, 50, 100, 150, 200, 250, 300],
            },
          },
        },
        grid: {
          x: {
            show: !1,
          },
          y: {
            show: !0,
          },
        },
      }
    },
    scatterOptions() {
      return {
        data: {
          xs: {
            Danger: 'Danger_x',
            Primary: 'Primary_x',
          },
          columns: [
            [
              'Danger_x',
              3.5,
              3,
              3.2,
              3.1,
              3.6,
              3.9,
              3.4,
              3.4,
              2.9,
              3.1,
              3.7,
              3.4,
              3,
              3,
              4,
              4.2,
              3.9,
              3.5,
              3.8,
              3.8,
              3.4,
              3.7,
              3.6,
              3.3,
              3.4,
              3,
              3.4,
              3.5,
              3.4,
              3.2,
              3.1,
              3.4,
              4.1,
              4.2,
              3.1,
              3.2,
              3.5,
              3.6,
              3,
              3.4,
              3.5,
              2.3,
              3.2,
              3.5,
              3.8,
              3,
              3.8,
              3.2,
              3.7,
              3.3,
            ],
            [
              'Primary_x',
              3.2,
              3.2,
              3.1,
              2.3,
              2.8,
              2.8,
              3.3,
              2.4,
              2.9,
              2.7,
              2,
              3,
              2.2,
              2.9,
              2.9,
              3.1,
              3,
              2.7,
              2.2,
              2.5,
              3.2,
              2.8,
              2.5,
              2.8,
              2.9,
              3,
              2.8,
              3,
              2.9,
              2.6,
              2.4,
              2.4,
              2.7,
              2.7,
              3,
              3.4,
              3.1,
              2.3,
              3,
              2.5,
              2.6,
              3,
              2.6,
              2.3,
              2.7,
              3,
              2.9,
              2.9,
              2.5,
              2.8,
            ],
            [
              'Danger',
              0.2,
              0.2,
              0.2,
              0.2,
              0.2,
              0.4,
              0.3,
              0.2,
              0.2,
              0.1,
              0.2,
              0.2,
              0.1,
              0.1,
              0.2,
              0.4,
              0.4,
              0.3,
              0.3,
              0.3,
              0.2,
              0.4,
              0.2,
              0.5,
              0.2,
              0.2,
              0.4,
              0.2,
              0.2,
              0.2,
              0.2,
              0.4,
              0.1,
              0.2,
              0.2,
              0.2,
              0.2,
              0.1,
              0.2,
              0.2,
              0.3,
              0.3,
              0.2,
              0.6,
              0.4,
              0.3,
              0.2,
              0.2,
              0.2,
              0.2,
            ],
            [
              'Primary',
              1.4,
              1.5,
              1.5,
              1.3,
              1.5,
              1.3,
              1.6,
              1,
              1.3,
              1.4,
              1,
              1.5,
              1,
              1.4,
              1.3,
              1.4,
              1.5,
              1,
              1.5,
              1.1,
              1.6,
              1.3,
              1.5,
              1.2,
              1.3,
              1.4,
              1.4,
              1.2,
              1.5,
              1,
              1.1,
              1,
              1.2,
              1.6,
              1.5,
              1.6,
              1.5,
              1.3,
              1.3,
              1.3,
              1.2,
              1.4,
              1.2,
              1,
              1.3,
              1.2,
              1.3,
              1.3,
              1.1,
              1.3,
            ],
          ],
          type: 'scatter',
        },
        color: {
          pattern: [this.colors.danger, this.colors.primary],
        },
        axis: {
          x: {
            label: 'Width',
            tick: {
              outer: !1,
              fit: !1,
            },
          },
          size: {
            height: 400,
          },
          padding: {
            right: 40,
          },
          y: {
            label: 'Height',
            tick: {
              outer: !1,
              count: 5,
              values: [0, 0.4, 0.8, 1.2, 1.6],
            },
          },
        },
        grid: {
          x: {
            show: !1,
          },
          y: {
            show: !0,
          },
        },
      }
    },
    barOptions() {
      return {
        data: {
          columns: [
            ['Danger', 30, 200, 100, 400, 150, 250],
            ['Default', 130, 100, 140, 200, 150, 50],
            ['Primary', 130, -150, 200, 300, -200, 100],
          ],
          type: 'bar',
        },
        bar: {
          width: {
            max: 20,
          },
        },
        color: {
          pattern: [this.colors.danger, this.colors.def, this.colors.primary],
        },
        grid: {
          y: {
            show: !0,
          },
          x: {
            show: !1,
          },
        },
      }
    },
    stackedBarOptions() {
      return {
        data: {
          columns: [
            ['Primary', -30, 200, 300, 400, -150, 250, -30, 200, 300, 400, -150, 250],
            ['Default', 130, 100, -400, 100, -150, 50, 130, 100, -400, 100, -150, 50],
            ['Danger', -230, 200, 200, -300, 250, 250, -230, 200, 200, -300, 250, 250],
            ['Success', 100, -250, 150, 200, -300, -100, 100, -250, 150, 200, -300, -100],
          ],
          type: 'bar',
          groups: [['Primary', 'Default', 'Danger', 'Success']],
        },
        color: {
          pattern: [this.colors.primary, this.colors.def, this.colors.danger, this.colors.success],
        },
        bar: {
          width: {
            max: 45,
          },
        },
        grid: {
          y: {
            show: !0,
            lines: [
              {
                value: 0,
              },
            ],
          },
        },
      }
    },
    combinationOptions() {
      return {
        data: {
          columns: [
            ['Primary', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
            ['Default', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
            ['Success', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250],
            ['Danger', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
            ['Primary', 130, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150],
            ['Danger2', 90, 70, 20, 50, 60, 120, 90, 70, 20, 50, 60, 120],
          ],
          type: 'bar',
          types: {
            Success: 'spline',
            Danger: 'line',
            Danger2: 'area',
          },
          groups: [['Primary', 'Default']],
        },
        color: {
          pattern: [this.colors.primary, this.colors.def, this.colors.success, this.colors.danger, this.colors.danger],
        },
        grid: {
          x: {
            show: !1,
          },
          y: {
            show: !0,
          },
        },
      }
    },
    subChartOptions() {
      return {
        data: {
          columns: [
            ['Primary', 100, 165, 140, 270, 200, 140, 220, 210, 190, 100, 170, 250],
            ['Success', 110, 80, 100, 85, 125, 90, 100, 130, 120, 90, 100, 115],
          ],
          type: 'spline',
        },
        color: {
          pattern: [this.colors.primary, this.colors.danger],
        },
        subchart: {
          show: true,
        },
      }
    },
    zoomOptions() {
      return {
        data: {
          columns: [
            [
              'Sample',
              30,
              200,
              100,
              400,
              150,
              250,
              150,
              200,
              170,
              240,
              350,
              150,
              100,
              400,
              150,
              250,
              150,
              200,
              170,
              240,
              100,
              150,
              250,
              150,
              200,
              170,
              240,
              30,
              200,
              100,
              400,
              150,
              250,
              150,
              200,
              170,
              240,
              350,
              150,
              100,
              400,
              350,
              220,
              250,
              300,
              270,
              140,
              150,
              90,
              150,
              50,
              120,
              70,
              40,
            ],
          ],
          colors: {
            Sample: this.colors.primary,
          },
        },
        zoom: {
          enabled: !0,
        },
      }
    },
    pieOptions() {
      return {
        data: {
          columns: [['Primary', 30], ['Success', 120]],
          type: 'pie',
        },
        color: {
          pattern: [this.colors.primary, this.colors.success],
        },
      }
    },
    donutOptions() {
      return {
        data: {
          columns: [['Danger', 30], ['Success', 120]],
          type: 'donut',
        },
        color: {
          pattern: [this.colors.danger, this.colors.success],
        },
        donut: {
          title: 'Connections',
        },
      }
    },
    stepOptions() {
      return {
        data: {
          columns: [['Primary', 300, 350, 300, 0, 0, 100], ['Success', 130, 100, 140, 200, 150, 50]],
          types: {
            Primary: 'step',
            Success: 'area-step',
          },
        },
        color: {
          pattern: [this.colors.primary, this.colors.success],
        },
      }
    },
    areaOptions() {
      return {
        data: {
          columns: [['Primary', 300, 350, 300, 0, 0, 0], ['Success', 130, 100, 140, 200, 150, 50]],
          types: {
            Primary: 'area',
            Success: 'area-spline',
          },
        },
        color: {
          pattern: [this.colors.primary, this.colors.success],
        },
      }
    },
  },
  mounted() {
    this.line.$emit('init', this.lineOptions)
    this.spline.$emit('init', this.splineOptions)
    this.scatter.$emit('init', this.scatterOptions)
    this.bar.$emit('init', this.barOptions)
    this.stackedBar.$emit('init', this.stackedBarOptions)
    this.combination.$emit('init', this.combinationOptions)
    this.subChart.$emit('init', this.subChartOptions)
    this.zoom.$emit('init', this.zoomOptions)
    this.pie.$emit('init', this.pieOptions)
    this.donut.$emit('init', this.donutOptions)
    this.step.$emit('init', this.stepOptions)
    this.area.$emit('init', this.areaOptions)
  },
}
</script>
