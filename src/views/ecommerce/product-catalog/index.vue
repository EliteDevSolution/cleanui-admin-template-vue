<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Ecommerce: Product Catalog</strong>
    </div>
    <div class="row">
      <div class="col-xl-4 col-lg-6" v-for="(product, index) in products" :key="index">
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
import CuiGeneral16 from '@/components/kit/widgets/General/16/index'
import products from './data.json'

export default {
  components: {
    CuiGeneral16,
  },
  data: function () {
    return {
      products,
    }
  },
}
</script>
