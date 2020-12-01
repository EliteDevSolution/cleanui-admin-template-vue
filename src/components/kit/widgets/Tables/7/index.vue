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
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">{{text}}</a>
        </template>
        <template slot="value" slot-scope="text">
          <span class="font-weight-bold">{{text}}</span>
        </template>
        <template slot="users" slot-scope="users">
          <div :class="[users.length ? '' : 'd-none', 'kit__utils__avatarGroup']">
            <div
              class="kit__utils__avatar kit__utils__avatar--rounded"
              v-for="user in users"
              :key="user"
            >
              <img :src="user" alt="User" />
            </div>
            <button type="button" class="kit__utils__avatarGroupAdd">
              <i class="fe fe-plus" />
            </button>
          </div>
        </template>
        <template slot="action">
          <div class="text-nowrap">
            <button type="button" class="btn btn-outline-success mr-2 mb-2">Accept</button>
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
    title: 'ACTION NAME',
    dataIndex: 'actionName',
    className: 'text-gray-6',
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
    className: 'text-gray-6',
    scopedSlots: { customRender: 'value' },
  },
  {
    title: 'DESCRIPTION',
    dataIndex: 'description',
    className: 'text-gray-6',
  },
  {
    dataIndex: 'users',
    scopedSlots: { customRender: 'users' },
  },
  {
    dataIndex: 'action',
    className: 'text-right',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  name: 'KitTable7',
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
