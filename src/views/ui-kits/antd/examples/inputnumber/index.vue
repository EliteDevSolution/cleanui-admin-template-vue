<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-input-number :min="1" :max="10" v-model="value" @change="onChange" />
      value：{{value}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdInputNumberExample',
  data() {
    return {
      value: 3,
    }
  },
  methods: {
    onChange(value) {
      console.log('changed', value)
    },
  },
}
</script>
