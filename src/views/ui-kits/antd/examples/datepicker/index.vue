<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>DatePicker</strong>
        </h5>
        <div class="mb-5">
          <a-date-picker class="mb-2" @change="onChange" />
        </div>
        <h5 class="mb-3">
          <strong>Month Picker</strong>
        </h5>
        <div class="mb-5">
          <a-month-picker class="mb-2" @change="onChange" placeholder="Select month" />
        </div>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Range Picker</strong>
        </h5>
        <div class="mb-5">
          <a-range-picker class="mb-2" @change="onChange" />
        </div>
        <h5 class="mb-3">
          <strong>Week Picker</strong>
        </h5>
        <div class="mb-5">
          <a-week-picker class="mb-2" @change="onChange" placeholder="Select week" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdDatePickerExample',
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
  },
}
</script>
