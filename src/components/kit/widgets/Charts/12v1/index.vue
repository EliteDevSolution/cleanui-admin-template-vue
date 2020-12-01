<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="pr-3">
        <h2 class="font-size-18 font-weight-bold mb-1 text-dark">Feedbacks</h2>
        <p class="font-size-15 mb-3">Profit</p>
      </div>
      <div class="text-success font-weight-bold font-size-24">
        160,100
      </div>
    </div>
    <div class="mb-3">
      <a-progress
        type="line"
        :percent="55"
        :showInfo="false"
        :strokeWidth="12"
        strokeColor="#46be8a"
      />
    </div>
    <div class="d-flex text-gray-5 justify-content-between font-size-14">
      <span class="text-uppercase">Change</span>
      <span class="text-uppercase">55%</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitChart12v1',
}
</script>
