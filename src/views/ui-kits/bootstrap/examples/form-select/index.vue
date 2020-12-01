<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Usage</strong>
    </h5>
    <div class="mb-5">
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
      <div class="mt-3">
        Selected:
        <strong>{{ selected }}</strong>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapFormSelectExample',
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>
