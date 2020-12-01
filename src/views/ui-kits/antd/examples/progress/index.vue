<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <div class="mb-3">
        <a-progress :percent="30" />
      </div>
      <div class="mb-3">
        <a-progress :percent="50" status="active" />
      </div>
      <div class="mb-3">
        <a-progress :percent="70" status="exception" />
      </div>
      <div class="mb-3">
        <a-progress :percent="100" />
      </div>
      <div class="mb-3">
        <a-progress :percent="50" :showInfo="false" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdProgressExample',
}
</script>
