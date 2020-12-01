<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-6">
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Account Information</strong>
            </div>
            <div class="text-muted">Block with important Account information</div>
          </div>
          <div class="card-body">
            <cui-general-19 />
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Work Progress</strong>
            </div>
            <div class="text-muted">Block with important Work Progress information</div>
          </div>
          <div class="card-body">
            <div>
              <strong>{{progressGroup.first.name}}</strong>
              <p class="text-muted mb-1">{{progressGroup.first.description}}</p>
              <div class="mb-3">
                <a-progress
                  :percent="progressGroup.first.progress"
                  :status="progressGroup.first.status"
                />
              </div>
              <strong>{{progressGroup.second.name}}</strong>
              <p class="text-muted mb-1">{{progressGroup.second.description}}</p>
              <div class="mb-3">
                <a-progress
                  :percent="progressGroup.second.progress"
                  :status="progressGroup.second.status"
                />
              </div>
              <strong>{{progressGroup.third.name}}</strong>
              <p class="text-muted mb-1">{{progressGroup.third.description}}</p>
              <div class="mb-3">
                <a-progress
                  :percent="progressGroup.third.progress"
                  :status="progressGroup.third.status"
                />
              </div>
              <strong>{{progressGroup.fourth.name}}</strong>
              <p class="text-muted mb-1">{{progressGroup.fourth.description}}</p>
              <div class="mb-3">
                <a-progress
                  :percent="progressGroup.fourth.progress"
                  :status="progressGroup.fourth.status"
                />
              </div>
              <strong>{{progressGroup.fives.name}}</strong>
              <p class="text-muted mb-1">{{progressGroup.fives.description}}</p>
              <div class="mb-3">
                <a-progress :percent="progressGroup.fives.progress" />
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Employees</strong>
            </div>
            <div class="text-muted">Block with Employees important information</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="card bg-light border-0 mb-0">
                  <cui-general-23 />
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 mb-0">
                  <cui-general-23v1 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Task Table</strong>
            </div>
            <div class="text-muted">Block with important Task Table information</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <a-table
                  :columns="taskTableColumns"
                  :dataSource="taskTableData"
                  :pagination="false"
                  :rowSelection="rowSelection"
                  class="kit__utils__table"
                >
                  <a slot="name" slot-scope="text" href="javascript: void(0);">{{text}}</a>
                  <a slot="username" slot-scope="username" href="javascript: void(0);">{{username}}</a>
                  <a-dropdown slot="actions">
                    <a-button size="small">
                      Actions
                      <a-icon type="down" />
                    </a-button>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </a-table>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Information Cards</strong>
            </div>
            <div class="text-muted">Block with important Information Cards information</div>
          </div>
          <div class="card-body">
            <div class="card bg-primary border-0 mb-4">
              <div class="card-body">
                <cui-general-24 />
              </div>
            </div>
            <div class="card bg-light border-0 mb-0">
              <div class="card-body">
                <cui-general-24v1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-6">
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Server Info</strong>
            </div>
            <div class="text-muted">Block with important Server Info information</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="overflow-hidden rounded card border-0 mb-0">
                  <cui-general-20 />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="overflow-hidden rounded card border-0 mb-0">
                  <cui-general-20v1 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Server Statistics</strong>
            </div>
            <div class="text-muted">Block with important Server Statistics information</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <cui-general-21 />
                <cui-general-21v1 />
              </div>
              <div class="col-lg-6">
                <cui-general-21v2 />
                <cui-general-21v3 />
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Server Configuration</strong>
            </div>
            <div class="text-muted">Block with important Server Configuration information</div>
          </div>
          <div class="card-body">
            <div class="mb-5">
              <a-slider :marks="rangeMarks" :defaultValue="rangeSlider.first" />
            </div>
            <div class="mb-4">
              <a-slider range :marks="rangeMarks" :defaultValue="rangeSlider.second" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Week Revenue Statistics, Billions</strong>
            </div>
            <span class="mr-2">
              <span class="kit__utils__donut kit__utils__donut--primary"></span>
              Nuts
            </span>
            <span class="mr-2">
              <span class="kit__utils__donut kit__utils__donut--success"></span>
              Apples
            </span>
            <span class="mr-2">
              <span class="kit__utils__donut kit__utils__donut--yellow"></span>
              Peaches
            </span>
          </div>
          <div class="card-body">
            <vue-chartist
              class="height-300 mt-4"
              type="Line"
              :data="weekChartistData"
              :options="weekChartistOptions"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Month Site Visits Growth, %</strong>
            </div>
            <span class="mr-2">
              <span class="kit__utils__donut kit__utils__donut--primary"></span>
              Income
            </span>
            <span class="mr-2">
              <span class="kit__utils__donut kit__utils__donut--success"></span>
              Outcome
            </span>
          </div>
          <div class="card-body">
            <vue-chartist
              class="height-300 mt-4"
              type="Bar"
              :data="monthCartistData"
              :options="monthChartistOptions"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Chat</strong>
            </div>
            <div class="text-muted">Block with important Chat information</div>
          </div>
          <div class="card-body">
            <cui-general-14 />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="mb-4">
              <cui-general-22 />
            </div>
            <a-table
              :columns="tableColumns"
              :dataSource="tableData"
              :pagination="false"
              class="kit__utils__table"
            >
              <div
                slot="filterDropdown"
                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                class="custom-filter-dropdown"
              >
                <a-input
                  v-ant-ref="c => searchInput = c"
                  :placeholder="`Search ${column.dataIndex}`"
                  :value="selectedKeys[0]"
                  @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                  @pressEnter="() => handleSearch(selectedKeys, confirm)"
                  style="width: 188px; margin-bottom: 8px; display: block;"
                />
                <a-button
                  type="primary"
                  @click="() => handleSearch(selectedKeys, confirm)"
                  icon="search"
                  size="small"
                  style="width: 90px; margin-right: 8px"
                >Search</a-button>
                <a-button
                  @click="() => handleReset(clearFilters)"
                  size="small"
                  style="width: 90px"
                >Reset</a-button>
              </div>
              <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{ color: filtered ? '#108ee9' : undefined }"
              />
              <template slot="customRender" slot-scope="text">
                <span v-if="searchText">
                  <template
                    v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                  >
                    <mark
                      v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                      :key="i"
                      class="highlight"
                    >{{fragment}}</mark>
                    <template v-else>{{fragment}}</template>
                  </template>
                </span>
                <template v-else>{{text}}</template>
              </template>
            </a-table>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="cui__utils__heading mb-0">
              <strong>Calendar</strong>
            </div>
            <div class="text-muted">Block with important Calendar information</div>
          </div>
          <div class="card-body">
            <a-calendar>
              <ul class="events" slot="dateCellRender" slot-scope="value">
                <li v-for="item in getListData(value)" :key="item.content">
                  <a-badge :status="item.type" :text="item.content" />
                </li>
              </ul>
              <template slot="monthCellRender" slot-scope="value">
                <div v-if="getMonthData(value)" class="notes-month">
                  <section>{{getMonthData(value)}}</section>
                  <span>Backlog number</span>
                </div>
              </template>
            </a-calendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CuiGeneral19 from '@/components/kit/widgets/General/19'
import CuiGeneral23 from '@/components/kit/widgets/General/23'
import CuiGeneral23v1 from '@/components/kit/widgets/General/23v1'
import CuiGeneral24 from '@/components/kit/widgets/General/24'
import CuiGeneral24v1 from '@/components/kit/widgets/General/24v1'
import CuiGeneral14 from '@/components/kit/widgets/General/14'
import CuiGeneral20 from '@/components/kit/widgets/General/20'
import CuiGeneral20v1 from '@/components/kit/widgets/General/20v1'
import CuiGeneral21 from '@/components/kit/widgets/General/21'
import CuiGeneral21v1 from '@/components/kit/widgets/General/21v1'
import CuiGeneral21v2 from '@/components/kit/widgets/General/21v2'
import CuiGeneral21v3 from '@/components/kit/widgets/General/21v3'
import CuiGeneral22 from '@/components/kit/widgets/General/22'
import VueChartist from 'v-chartist'
import { taskTableData, tableData, rangeSlider, weekChartistData, monthCartistData, progressGroup } from './data.json'

const taskTableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    scopedSlots: { customRender: 'username' },
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    scopedSlots: { customRender: 'actions' },
  },
]

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        }, 0)
      }
    },
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    sorter: (a, b) => a.salary - b.salary,
  },
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  },
}

const rangeMarks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
}

const weekChartistOptions = {
  fullWidth: true,
  showArea: false,
  chartPadding: {
    right: 30,
    left: 0,
  },
}

const monthChartistOptions = {
  seriesBarDistance: 10,
}

export default {
  components: {
    'vue-chartist': VueChartist,
    CuiGeneral19,
    CuiGeneral23,
    CuiGeneral23v1,
    CuiGeneral24,
    CuiGeneral24v1,
    CuiGeneral14,
    CuiGeneral20,
    CuiGeneral20v1,
    CuiGeneral21,
    CuiGeneral21v1,
    CuiGeneral21v2,
    CuiGeneral21v3,
    CuiGeneral22,
  },
  data: function () {
    return {
      progressGroup,
      taskTableColumns,
      taskTableData,
      rowSelection,
      tableData,
      tableColumns,
      searchText: '',
      searchInput: null,
      rangeMarks,
      rangeSlider,
      weekChartistData,
      weekChartistOptions,
      monthCartistData,
      monthChartistOptions,
    }
  },
  methods: {
    handleSearch(selectedKeys, confirm) {
      confirm()
      this.searchText = selectedKeys[0]
    },

    handleReset(clearFilters) {
      clearFilters()
      this.searchText = ''
    },
    getListData(value) {
      let listData
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ]; break
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ]; break
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ]; break
        default:
      }
      return listData || []
    },
    getMonthData(value) {
      if (value.month() === 8) {
        return 1394
      }
    },
  },
}
</script>

<style scoped>
.custom-filter-dropdown {
  padding: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
