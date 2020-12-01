<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Ecommerce: Product Details</strong>
    </div>
    <div class="card overflow-hidden">
      <div :class="$style.new">New</div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-4">
            <a
              href="#"
              v-on:click="toggleFavorite"
              :class="[$style.favorite, favorite ? 'text-dark' : 'text-gray-3']"
            >
              <i class="fe fe-heart font-size-21"></i>
            </a>
            <div :class="$style.image" class="height-250 mb-3">
              <img :src="images[activeImgIndex]" alt="Product" />
            </div>
            <div class="d-flex flex-wrap mb-3">
              <a
                v-for="(image, index) in images"
                :key="index"
                href="#"
                v-on:click="setImage(index)"
                :class="[index === activeImgIndex ? 'border-primary' : '', $style.thumb]"
                class="width-100 height-100 border mr-2 mb-2"
              >
                <img :src="image" alt="Product" />
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="font-size-24 font-weight-bold text-dark mb-2">
              $199.28
              <del class="align-text-top font-size-14">$299.28</del>
            </div>
            <div class="pb-3 mb-4 border-bottom">
              <a href="javascript:void(0);" class="text-blue font-size-18">
                TP-Link AC1750 Smart WiFi Router - Dual
                <br />Band Gigabit Wireless Internet Routers for
                <br />Home
              </a>
            </div>
            <div class="mb-4 width-300">
              <a-select defaultValue="Red" style="width: 100%">
                <a-select-option value="red">Red</a-select-option>
                <a-select-option value="black">Black</a-select-option>
                <a-select-option value="cyan">Cyan</a-select-option>
                <a-select-option value="blue">Blue</a-select-option>
              </a-select>
            </div>
            <a
              href="javascript: void(0);"
              class="width-200 btn btn-success btn-with-addon mr-auto mb-3 text-nowrap d-none d-md-block"
            >
              <span class="btn-addon">
                <i class="btn-addon-icon fe fe-plus-circle"></i>
              </span>
              Add To Card
            </a>
            <a-tabs defaultActiveKey="1" class="kit-tabs-bordered">
              <a-tab-pane tab="Information" key="1" />
              <a-tab-pane tab="Description" key="2" />
            </a-tabs>
            <div class="card-body px-0">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cui__utils__heading">
      <h5>Related Products</h5>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="(product, index) in data.products" :key="index">
        <cui-general-16
          :isNew="product.isNew"
          :isFavorite="product.isFavorite"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :oldPrice="product.oldPrice"
        />
      </div>
    </div>
  </div>
</template>
<script>
import data from './data.json'
import CuiGeneral16 from '@/components/kit/widgets/General/16/index'

export default {
  components: {
    CuiGeneral16,
  },
  data: function () {
    return {
      data,
      images: data.images,
      favorite: true,
      activeImgIndex: 0,
    }
  },
  methods: {
    toggleFavorite: function (event) {
      event.preventDefault()
      this.favorite = !this.favorite
    },
    setImage: function (index) {
      event.preventDefault()
      this.activeImgIndex = index
    },
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
