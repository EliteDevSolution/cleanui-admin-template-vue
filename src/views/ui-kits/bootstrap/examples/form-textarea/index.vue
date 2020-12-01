<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Usage</strong>
    </h5>
    <div class="mb-5">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapFormTextareaExample',
  data() {
    return {
      text: '',
    }
  },
}
</script>
