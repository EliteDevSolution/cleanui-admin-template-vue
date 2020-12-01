<template>
  <div>
    <h5 class="mb-3">
      <strong>Icons Usage</strong>
    </h5>
    <div class="mb-5">
      <a-icon type="home" class="mr-3 mb-3 font-size-24" />
      <a-icon type="setting" theme="filled" class="mr-3 mb-3 font-size-24" />
      <a-icon type="smile" theme="outlined" class="mr-3 mb-3 font-size-24" />
      <a-icon type="sync" spin class="mr-3 mb-3 font-size-24" />
      <a-icon type="smile" :rotate="180" class="mr-3 mb-3 font-size-24" />
      <a-icon type="loading" class="mr-3 mb-3 font-size-24" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdIconExample',
}
</script>
