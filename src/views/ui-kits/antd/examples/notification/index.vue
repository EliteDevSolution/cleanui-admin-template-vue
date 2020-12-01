<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-button @click="() => openNotificationWithIcon('success')" class="mb-3 mr-3">Success</a-button>
      <a-button @click="() => openNotificationWithIcon('info')" class="mb-3 mr-3">Info</a-button>
      <a-button @click="() => openNotificationWithIcon('warning')" class="mb-3 mr-3">Warning</a-button>
      <a-button @click="() => openNotificationWithIcon('error')" class="mb-3 mr-3">Error</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdNotificationExample',
  methods: {
    openNotificationWithIcon(type) {
      this.$notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      })
    },
  },
}
</script>
