<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-switch defaultChecked @change="onChange" class="mb-3 mr-3" />
      <a-switch checkedChildren="Off" unCheckedChildren="On" defaultChecked class="mb-3 mr-3" />
      <a-switch loading defaultChecked class="mb-3 mr-3" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdSwitchExample',
  data() {
    return {
    }
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`)
    },
  },
}
</script>
