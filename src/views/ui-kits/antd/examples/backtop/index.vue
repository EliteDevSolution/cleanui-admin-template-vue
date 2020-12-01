<template>
  <div id="components-back-top-demo-custom" class="height-700">
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    Scroll down to see the bottom-right
    <strong style="color: #1088e9"> blue </strong>
    button.
  </div>
</template>
<script>
export default {
  name: 'KitAntdBackTopExample',
}
</script>
<style scoped>
  #components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
    z-index: 100000;
  }
  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
