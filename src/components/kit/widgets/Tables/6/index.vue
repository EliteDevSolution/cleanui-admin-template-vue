<template>
  <div>
    <div class="mb-2" :class="$style.textDivider">
      <h4 class="font-size-24 font-weight-bold" :class="$style.textDividerContent">Waiting actions</h4>
    </div>
    <div class="mb-4">
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="false"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :class="$style.table"
      >
        <template slot="userName" slot-scope="user">
          <div>
            <div>{{user.name}}</div>
            <div class="text-gray-4">{{user.position}}</div>
          </div>
        </template>
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">{{text}}</a>
        </template>
        <template slot="value" slot-scope="text">
          <span class="font-weight-bold">{{text}}</span>
        </template>
        <template slot="action">
          <div class="text-nowrap">
            <button type="button" class="btn btn-outline-danger mr-2 mb-2">Decline</button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
const columns = [
  {
    title: 'USER NAME',
    dataIndex: 'userName',
    className: 'text-gray-6',
    scopedSlots: { customRender: 'userName' },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    className: 'text-gray-6',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'VALUE',
    dataIndex: 'value',
    key: 'value',
    className: 'text-right text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
  {
    dataIndex: 'action',
    className: 'text-right',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  name: 'KitTable6',
  data: function () {
    return {
      columns,
      data,
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
