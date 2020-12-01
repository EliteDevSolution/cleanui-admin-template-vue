<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Basic</strong>
        </h5>
        <div class="mb-5">
          <a-radio-group :options="plainOptions" :defaultValue="value1" />
        </div>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Buttons</strong>
        </h5>
        <div class="mb-5">
          <a-radio-group defaultValue="a">
            <a-radio-button value="a">Hangzhou</a-radio-button>
            <a-radio-button value="b">Shanghai</a-radio-button>
            <a-radio-button value="c">Beijing</a-radio-button>
            <a-radio-button value="d">Chengdu</a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange']
export default {
  name: 'KitAntdRadioExample',
  data() {
    return {
      plainOptions,
      value1: 'Apple',
    }
  },
}
</script>
