<template>
  <div>
    <div class="cui__utils__heading">
      <strong>Ecommerce: Dashboard</strong>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-12">
        <div class="card">
          <a-tabs defaultActiveKey="2" class="kit-tabs-bordered">
            <a-tab-pane tab="Orders" key="1" />
            <a-tab-pane tab="Revenue" key="2" />
          </a-tabs>
          <div class="card-body">
            <cui-chart-3 />
          </div>
        </div>
        <div class="card">
          <a-tabs defaultActiveKey="1" class="kit-tabs-bordered">
            <a-tab-pane tab="Bestsellers" key="1" />
            <a-tab-pane tab="Most Viewed" key="2" />
            <a-tab-pane tab="Highest Rated" key="3" />
          </a-tabs>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6" v-for="(product, index) in products" :key="index">
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
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <div class="card text-white bg-success">
          <div class="card-body">
            <cui-general-2v3 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-2 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-2v1 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-general-2v2 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-list-11 />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <cui-list-12 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CuiChart3 from '@/components/kit/widgets/Charts/3/index'
import CuiGeneral2 from '@/components/kit/widgets/General/2/index'
import CuiGeneral2v1 from '@/components/kit/widgets/General/2v1/index'
import CuiGeneral2v2 from '@/components/kit/widgets/General/2v2/index'
import CuiGeneral2v3 from '@/components/kit/widgets/General/2v3/index'
import CuiGeneral16 from '@/components/kit/widgets/General/16/index'
import CuiList11 from '@/components/kit/widgets/Lists/11/index'
import CuiList12 from '@/components/kit/widgets/Lists/12/index'
import products from './data.json'

export default {
  components: {
    CuiChart3,
    CuiGeneral2,
    CuiGeneral2v1,
    CuiGeneral2v2,
    CuiGeneral2v3,
    CuiGeneral16,
    CuiList11,
    CuiList12,
  },
  data: function () {
    return {
      products,
    }
  },
}
</script>
