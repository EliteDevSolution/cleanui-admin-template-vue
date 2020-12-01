<template>
  <div>
    <h5 class="mb-4">
      <strong>Styled</strong>
    </h5>
    <div class="mb-5">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    </div>
    <h5 class="mb-4">
      <strong>Default Usage</strong>
    </h5>
    <div class="mb-5">
      <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
      <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapFormFileExample',
  data() {
    return {
      file: null,
      file2: null,
    }
  },
}
</script>
