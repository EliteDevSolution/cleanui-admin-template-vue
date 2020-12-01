<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-popconfirm
        title="Are you sure delete this task?"
        @confirm="confirm"
        @cancel="cancel"
        okText="Yes"
        cancelText="No"
      >
        <a-button type="primary">Confirm Deletion</a-button>
      </a-popconfirm>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdPopconfirmExample',
  methods: {
    confirm(e) {
      console.log(e)
      this.$message.success('Click on Yes')
    },
    cancel(e) {
      console.log(e)
      this.$message.error('Click on No')
    },
  },
}
</script>
