<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Ecommerce: Orders</strong>
    </div>
    <div class="card">
      <div class="card-header card-header-flex">
        <div class="d-flex flex-column justify-content-center mr-auto">
          <h5 class="mb-0">Latest Orders</h5>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <a class="btn btn-primary" href="javascript: void(0);">New Order</a>
        </div>
      </div>
      <div class="card-body">
        <a-table :columns="columns" :dataSource="data">
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
          <template slot="customer" slot-scope="text">
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
            <template v-else>
              <a class="btn btn-sm btn-light" href="javascript: void(0);">{{text}}</a>
            </template>
          </template>
          <template slot="progress" slot-scope="bar">
            <div class="progress">
              <div
                :class="['progress-bar', bar.color]"
                :style="{width: bar.value + '%'}"
                role="progressbar"
              ></div>
            </div>
          </template>
          <template slot="value" slot-scope="text">
            <span class="font-weight-bold">{{text}}</span>
          </template>
          <a
            slot="id"
            slot-scope="text"
            href="javascript: void(0);"
            class="btn btn-sm btn-light"
          >{{text}}</a>
          <span slot="total" slot-scope="text">${{text}}</span>
          <span slot="tax" slot-scope="text">${{text}}</span>
          <span slot="shipping" slot-scope="text">${{text}}</span>
          <span
            slot="status"
            slot-scope="text"
            :class="[text === 'Processing' ? 'font-size-12 badge badge-primary' : 'font-size-12 badge badge-default']"
          >{{text}}</span>
          <span slot="action">
            <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
              <i class="fe fe-edit mr-2" />
              View
            </a>
            <a href="javascript: void(0);" class="btn btn-sm btn-light">
              <small>
                <i class="fe fe-trash mr-2" />
              </small>
              Remove
            </a>
          </span>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    scopedSlots: { customRender: 'id' },
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Purchase Date',
    dataIndex: 'date',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    sorter: (a, b) => a.customer.length - b.customer.length,
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customer',
    },
    onFilter: (value, record) => record.customer.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: 'Grand Total',
    dataIndex: 'total',
    sorter: (a, b) => a.total - b.total,
    scopedSlots: { customRender: 'total' },
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    sorter: (a, b) => a.tax - b.tax,
    scopedSlots: { customRender: 'tax' },
  },
  {
    title: 'Shipping',
    dataIndex: 'shipping',
    sorter: (a, b) => a.shipping - b.shipping,
    scopedSlots: { customRender: 'shipping' },
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.length - b.status.length,
    scopedSlots: { customRender: 'status' },
  },
  {
    title: 'Action',
    scopedSlots: { customRender: 'action' },
  },
]
export default {
  data: function () {
    return {
      searchText: '',
      searchInput: null,
      data,
      columns,
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
</style>
