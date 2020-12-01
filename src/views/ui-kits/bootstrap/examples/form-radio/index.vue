<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Usage</strong>
    </h5>
    <div class="mb-5">
      <b-form-group label="Individual radios">
        <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
      </b-form-group>
      <div class="mt-3">
        Selected:
        <strong>{{ selected }}</strong>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapFormRadioExample',
  data() {
    return {
      selected: '',
    }
  },
}
</script>
