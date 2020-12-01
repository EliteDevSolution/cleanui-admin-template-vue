<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <a-row class="mb-3">
      <a-col :span="12">
        <div class="bg-light" style="padding: 10px">col-12</div>
      </a-col>
      <a-col :span="12">
        <div class="bg-light" style="padding: 10px">col-12</div>
      </a-col>
    </a-row>
    <a-row class="mb-3">
      <a-col :span="8">
        <div class="bg-light" style="padding: 10px">col-8</div>
      </a-col>
      <a-col :span="8">
        <div class="bg-light" style="padding: 10px">col-8</div>
      </a-col>
      <a-col :span="8">
        <div class="bg-light" style="padding: 10px">col-8</div>
      </a-col>
    </a-row>
    <a-row class="mb-3">
      <a-col :span="6">
        <div class="bg-light" style="padding: 10px">col-6</div>
      </a-col>
      <a-col :span="6">
        <div class="bg-light" style="padding: 10px">col-6</div>
      </a-col>
      <a-col :span="6">
        <div class="bg-light" style="padding: 10px">col-6</div>
      </a-col>
      <a-col :span="6">
        <div class="bg-light" style="padding: 10px">col-6</div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'KitAntdGridExample',
}
</script>
