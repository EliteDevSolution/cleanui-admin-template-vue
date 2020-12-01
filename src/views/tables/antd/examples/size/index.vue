<template>
  <div id="components-table-demo-size">
    <h5>Middle size table</h5>
    <a-table :columns="columns" :dataSource="data" size="middle" />
    <h5>Small size table</h5>
    <a-table :columns="columns" :dataSource="data" size="small" />
  </div>
</template>
<script>
const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}]
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}]

export default {
  name: 'TablesAntdSize',
  data() {
    return {
      data,
      columns,
    }
  },
}
</script>
<style>
  #components-table-demo-size h5 { margin-bottom: 16px; }
</style>
