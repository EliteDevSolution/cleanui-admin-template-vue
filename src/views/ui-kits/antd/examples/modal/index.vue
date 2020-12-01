<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic & Confirm</strong>
    </h5>
    <div class="mb-5">
      <a-button type="primary" @click="showModal" class="mb-3 mr-3">Open Modal</a-button>
      <a-modal title="Basic Modal" v-model="visible" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
      <a-button @click="showConfirm" class="mb-3 mr-3">Confirm</a-button>
      <a-button @click="showDeleteConfirm" type="dashed" class="mb-3 mr-3">Delete</a-button>
    </div>
    <h5 class="mb-3">
      <strong>Notification Modals</strong>
    </h5>
    <div class="mb-5">
      <a-button @click="info" class="mb-3 mr-3">Info</a-button>
      <a-button @click="success" class="mb-3 mr-3">Success</a-button>
      <a-button @click="error" class="mb-3 mr-3">Error</a-button>
      <a-button @click="warning" class="mb-3 mr-3">Warning</a-button>
    </div>
  </div>
</template>
<script>
import { Modal } from 'ant-design-vue'
export default {
  name: 'KitAntdModalExample',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    showConfirm() {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        content: h => <div style="color:red;">Some descriptions</div>,
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
        class: 'test',
      })
    },

    showDeleteConfirm() {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
      })
    },

    info() {
      const h = this.$createElement
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() { },
      })
    },

    success() {
      Modal.success({
        title: 'This is a success message',
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
      })
    },

    error() {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      })
    },

    warning() {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      })
    },
  },
}
</script>
