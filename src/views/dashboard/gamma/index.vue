<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <cui-chart-12 />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <cui-chart-12v1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <cui-general-13v1 />
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-5v1 />
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-header border-0 pb-0">
            <div class="cui__utils__heading mb-0">
              <strong>RECENT INVITES</strong>
            </div>
          </div>
          <div class="card-body">
            <cui-list-10 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-2 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-2v1 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-2v2 />
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header border-0 pb-0">
                <div class="cui__utils__heading mb-0">
                  <strong>Inbound Bandwidth</strong>
                </div>
              </div>
              <div class="card-body">
                <strong class="font-size-36 text-dark">246Gb</strong>
              </div>
              <vue-chartist
                class="height-250"
                type="Line"
                :data="inboundBandwidthData"
                :options="boundChartistOptions"
              />
            </div>
          </div>
          <div class="col-xl-12">
            <div class="graphCard card">
              <div class="card-header border-0 pb-0">
                <div class="cui__utils__heading mb-0">
                  <strong>Outbound Bandwidth</strong>
                </div>
              </div>
              <div class="card-body">
                <strong class="font-size-36 text-dark">52Gb</strong>
              </div>
              <div class="utils__chartist utils__chartist--success">
                <vue-chartist
                  class="height-250"
                  type="Line"
                  :data="outboundBandwidthData"
                  :options="boundChartistOptions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header border-0 pb-0">
            <div class="cui__utils__heading mb-0">
              <strong class="text-uppercase font-size-16">Support cases</strong>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-6">
                <div class="mb-3">
                  <a-table
                    :columns="supportCasesTableColumns"
                    :dataSource="supportCasesTableData"
                    :pagination="false"
                    class="kit__utils__table"
                  >
                    <span
                      slot="amount"
                      slot-scope="data"
                      :class="[data === 'Negative' ? 'text-danger' : 'text-primary', 'font-weight-bold']"
                    >{{data}}</span>
                  </a-table>
                </div>
              </div>
              <div class="col-xl-6">
                <div
                  class="h-100 d-flex flex-column justify-content-center align-items-center"
                  :class="$style.chartPieExample"
                >
                  <div class="mb-4">
                    <vue-chartist
                      type="Pie"
                      :data="supportCasesPieData"
                      :options="supportCasesPieOptions"
                    />
                  </div>
                  <div class="text-center mb-4">
                    <span class="mr-2">
                      <span class="kit__utils__donut kit__utils__donut--success"></span>
                      Ready
                    </span>
                    <span class="mr-2">
                      <span class="kit__utils__donut kit__utils__donut--primary"></span>
                      In Progress
                    </span>
                    <span class="mr-2">
                      <span class="kit__utils__donut kit__utils__donut--danger"></span>
                      Defected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header border-0 pb-0">
            <div class="cui__utils__heading mb-0">
              <strong class="text-uppercase font-size-16">Finance Stats</strong>
            </div>
          </div>
          <div class="card-body">
            <cui-list-11 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueChartist from 'v-chartist'
import CuiChart12 from '@/components/kit/widgets/Charts/12'
import CuiChart12v1 from '@/components/kit/widgets/Charts/12v1'
import CuiGeneral5v1 from '@/components/kit/widgets/General/5v1'
import CuiGeneral2 from '@/components/kit/widgets/General/2'
import CuiGeneral2v1 from '@/components/kit/widgets/General/2v1'
import CuiGeneral2v2 from '@/components/kit/widgets/General/2v2'
import CuiGeneral13v1 from '@/components/kit/widgets/General/13v1'
import CuiList10 from '@/components/kit/widgets/Lists/10'
import CuiList11 from '@/components/kit/widgets/Lists/11'

import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import {
  inboundBandwidthData,
  outboundBandwidthData,
  supportCasesTableData,
  supportCasesPieData,
} from './data.json'

const boundChartistOptions = {
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
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const supportCasesPieOptions = {
  donut: true,
  donutWidth: 35,
  showLabel: false,
  fullWidth: true,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const supportCasesTableColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    key: 'amount',
    dataIndex: 'amount',
    scopedSlots: { customRender: 'amount' },
  },
]

export default {
  components: {
    'vue-chartist': VueChartist,
    CuiChart12,
    CuiChart12v1,
    CuiGeneral5v1,
    CuiGeneral2,
    CuiGeneral2v1,
    CuiGeneral2v2,
    CuiGeneral13v1,
    CuiList10,
    CuiList11,
  },
  data: function () {
    return {
      boundChartistOptions,
      supportCasesPieOptions,
      supportCasesTableColumns,
      inboundBandwidthData,
      outboundBandwidthData,
      supportCasesTableData,
      supportCasesPieData,
    }
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
