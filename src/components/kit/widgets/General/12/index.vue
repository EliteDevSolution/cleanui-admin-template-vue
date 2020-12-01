<template>
  <div>
    <div class="d-flex mb-1">
      <div class="text-dark text-uppercase font-weight-bold mr-auto">
        New users
      </div>
      <div class="text-gray-6">
        +60% Goal Reached
      </div>
    </div>
    <div class="d-flex mb-2">
      <div class="text-success font-size-24 font-weight-bold mr-auto">+3,125</div>
      <div class="text-gray-4 font-size-24">5,000</div>
    </div>
    <div class="progress">
      <div
        class="progress-bar bg-success"
        style="width: 60%"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral12',
}
</script>
