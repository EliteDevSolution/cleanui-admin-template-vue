<template>
  <div>
    <h5 class="mb-3">
      <strong>Pagination Usage</strong>
    </h5>
    <div class="mb-5">
      <a-pagination v-model="current" :total="50" />
    </div>
    <div class="mb-5">
      <a-pagination :defaultCurrent="6" :total="500" />
    </div>
    <div class="mb-5">
      <a-pagination
        showSizeChanger
        :pageSize.sync="pageSize"
        @showSizeChange="onShowSizeChange"
        :total="500"
        v-model="current"
      />
    </div>
    <div class="mb-5">
      <a-pagination showQuickJumper :defaultCurrent="2" :total="500" />
    </div>
    <div class="mb-5">
      <a-pagination size="small" :total="50" />
    </div>
    <div class="mb-5">
      <a-pagination size="small" :total="50" showSizeChanger showQuickJumper />
    </div>
    <div class="mb-5">
      <a-pagination size="small" :total="50" :showTotal="total => `Total ${total} items`" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdPaginationExample',
  data() {
    return {
      current: 2,
    }
  },
}
</script>
