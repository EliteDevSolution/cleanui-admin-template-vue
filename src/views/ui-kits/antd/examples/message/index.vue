<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-button @click="success" class="mr-3 mb-3">Success</a-button>
      <a-button @click="info" class="mr-3 mb-3">Info</a-button>
      <a-button @click="error" class="mr-3 mb-3">Error</a-button>
      <a-button @click="warning" class="mr-3 mb-3">Warning</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdMessageExample',
  methods: {
    info() {
      this.$message.info('This is a normal message')
    },
    success() {
      this.$message.success('This is a message of success')
    },
    error() {
      this.$message.error('This is a message of error')
    },
    warning() {
      this.$message.warning('This is message of warning')
    },
  },
}
</script>
