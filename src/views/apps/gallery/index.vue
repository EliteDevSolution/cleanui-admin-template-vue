<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap mb-4">
        <a-checkbox>Models</a-checkbox>
        <a-checkbox>Fashion</a-checkbox>
        <a-checkbox>Cars</a-checkbox>
        <a-checkbox defaultChecked>Wallpapers</a-checkbox>
      </div>
      <div :class="$style.items">
        <div :class="$style.item" v-for="(item, index) in data" :key="index">
          <div :class="$style.itemContent">
            <div :class="$style.itemControl">
              <div :class="$style.itemControlContainer">
                <a-button-group>
                  <a-button icon="edit" />
                  <a-button icon="delete" />
                </a-button-group>
              </div>
            </div>
            <img :src="item.path" alt="Image" />
          </div>
          <div class="text-gray-6">
            <div>{{item.name}}</div>
            <div>{{item.size}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'

export default {
  data: function () {
    return {
      data,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
