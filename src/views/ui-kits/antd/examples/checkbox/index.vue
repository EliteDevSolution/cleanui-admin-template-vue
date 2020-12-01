<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Checkbox Group</strong>
        </h5>
        <a-checkbox-group :options="plainOptions" v-model="value" @change="onChange" />
        <br />
        <br />
        <a-checkbox-group :options="plainOptions" :defaultValue="['Apple']" @change="onChange" />
        <br />
        <br />
        <a-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
        <br />
        <br />
        <a-checkbox-group
          :options="optionsWithDisabled"
          disabled
          :defaultValue="['Apple']"
          @change="onChange"
        >
          <span style="color: red" slot="label" slot-scope="{value}">{{value}}</span>
        </a-checkbox-group>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Basic</strong>
        </h5>
        <a-checkbox @change="onChange">Checkbox</a-checkbox>
      </div>
    </div>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
]
export default {
  name: 'KitAntdCheckboxExample',
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value: [],
    }
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues)
      console.log('value = ', this.value)
    },
  },
}
</script>
