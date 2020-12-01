<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="mb-4">
          <a-input placeholder="Search mail...">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </div>
        <div :class="$style.categories">
          <vue-custom-scrollbar style="height: 100%">
            <div class="d-flex flex-column">
              <a
                href="javascript: void(0);"
                :class="[$style.category, $style.current]"
                class="text-dark font-size-18 font-weight-bold"
              >
                <span class="text-truncate">Inbox</span>
                <span>(2)</span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Snoozed</span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Sent</span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18 font-weight-bold"
              >
                <span class="text-truncate">Drafts</span>
                <span>(1)</span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Spam</span>
              </a>
            </div>
          </vue-custom-scrollbar>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="card">
          <div class="card-header card-header-flex">
            <a-tabs defaultActiveKey="1" class="kit-tabs-bold mr-auto">
              <a-tab-pane tab="History" key="1" />
              <a-tab-pane key="2">
                <span slot="tab">
                  Social
                  <span class="ml-2 badge badge-primary text-uppercase">4 new</span>
                </span>
              </a-tab-pane>
              <a-tab-pane tab="Actions" key="3" />
            </a-tabs>
            <div class="d-inline-flex align-items-center">
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Unlock Account</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-unlock" />
                </a>
              </a-tooltip>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Mark as important</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-star" />
                </a>
              </a-tooltip>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Delete user</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-trash" />
                </a>
              </a-tooltip>
            </div>
          </div>
          <div class="card-body">
            <div class="kit__utils__table mb-4">
              <a-table
                :columns="columns"
                :dataSource="data"
                :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
              >
                <i
                  slot="favorites"
                  slot-scope="value"
                  :class="[value === true ? 'icmn-star-full text-warning' : 'icmn-star-full text-default']"
                />
                <a slot="from" slot-scope="text" href="javascript: void(0);">{{text}}</a>
                <i
                  slot="attachments"
                  slot-scope="value"
                  v-if="value=== true"
                  class="icmn-attachment text-default"
                />
              </a-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'
import vueCustomScrollbar from 'vue-custom-scrollbar'
const columns = [
  {
    title: '',
    dataIndex: 'favorites',
    scopedSlots: { customRender: 'favorites' },
  },
  {
    title: 'From',
    dataIndex: 'from',
    sorter: (a, b) => a.from.length - b.from.length,
    scopedSlots: { customRender: 'from' },
  },
  {
    title: 'Message',
    dataIndex: 'message',
  },
  {
    title: '',
    dataIndex: 'attachments',
    scopedSlots: { customRender: 'attachments' },
  },
  {
    title: '',
    dataIndex: 'time',
  },
]
export default {
  components: { vueCustomScrollbar },
  data: function () {
    return {
      data,
      columns,
      selectedRowKeys: [],
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
