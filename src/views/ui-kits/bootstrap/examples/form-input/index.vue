<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Usage</strong>
    </h5>
    <div class="mb-5">
      <b-container fluid>
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3">
            <label :for="`type-${type}`">Type {{ type }}:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapFormInputExample',
  data() {
    return {
      types: [
        'text',
        'password',
        'email',
        'number',
        'url',
        'tel',
        'date',
        'time',
        'range',
        'color',
      ],
    }
  },
}
</script>
