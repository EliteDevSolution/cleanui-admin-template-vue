<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" />
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'KitAntdTimePickerExample',
  methods: {
    moment,
    onChange(time, timeString) {
      console.log(time, timeString)
    },
  },
}
</script>
