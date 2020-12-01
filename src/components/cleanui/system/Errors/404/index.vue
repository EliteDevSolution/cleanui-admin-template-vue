<template>
  <div class="p-5 font-size-30">
    <div class="font-weight-bold mb-3">Page not found</div>
    <div>This page is deprecated, deleted, or does not exist at all</div>
    <div class="font-weight-bold font-size-70 mb-1">404 —</div>
    <router-link to="/" class="btn btn-outline-primary width-100">Go Back</router-link>
  </div>
</template>
<script>
export default {
  name: 'CuiError404',
}
</script>
