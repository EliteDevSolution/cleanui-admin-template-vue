<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Basic</strong>
        </h5>
        <div class="mb-5">
          <a-input placeholder="Basic usage" />
        </div>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Search</strong>
        </h5>
        <div class="mb-5">
          <a-input-search placeholder="input search text" enterButton />
        </div>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Textarea</strong>
        </h5>
        <div class="mb-5">
          <a-textarea placeholder="Basic usage" :rows="4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdInputExample',
}
</script>
