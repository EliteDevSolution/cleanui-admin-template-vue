<template>
  <div>
    <div class="text-nowrap text-dark font-size-50 font-weight-bold">
      $29,931
      <sup class="text-uppercase text-gray-6 font-size-30">paid</sup>
    </div>
    <div class="mb-4">
      <a-table :columns="columns" :dataSource="data" :pagination="false" :class="$style.table">
        <template slot="avatar" slot-scope="link">
          <div class="kit__utils__avatar">
            <img :src="link" alt="User" />
          </div>
        </template>
        <template slot="userName" slot-scope="user">
          <div>
            <div>{{user.name}}</div>
            <div class="text-gray-4">{{user.position}}</div>
          </div>
        </template>
        <template slot="location" slot-scope="text">
          <a href="javascript: void(0);" class="text-blue">{{text}}</a>
        </template>
        <template slot="action">
          <div class="text-nowrap">
            <button type="button" class="btn btn-light">
              <span class="text-blue">Add</span>
            </button>
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
    dataIndex: 'avatar',
    className: 'bg-transparent text-gray-6 width-50',
    scopedSlots: { customRender: 'avatar' },
  },
  {
    title: 'USER NAME',
    dataIndex: 'userName',
    className: 'bg-transparent text-gray-6',
    scopedSlots: { customRender: 'userName' },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    className: 'bg-transparent text-gray-6',
    scopedSlots: { customRender: 'location' },
  },
  {
    dataIndex: 'action',
    className: 'bg-transparent text-right',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  name: 'KitTable5',
  data: function () {
    return {
      columns,
      data,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
