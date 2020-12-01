<template>
  <div>
    <div class="row">
      <div class="col-xl-8 col-lg-12">
        <h5 class="text-dark mb-4">Google Analytics Home</h5>
        <div class="card">
          <kit-chart-2 />
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <kit-chart-9 />
              </div>
            </div>
            <h5 class="text-dark mb-4">How do you acquire users?</h5>
            <div class="card">
              <div class="card-body">
                <kit-chart-5 />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <kit-chart-10 />
              </div>
            </div>
            <h5 class="text-dark mb-4">How are your active users trending over time?</h5>
            <div class="card">
              <div class="card-body">
                <kit-chart-1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12">
        <h5 class="text-dark mb-4">Ask analytics Intelligence</h5>
        <div class="card">
          <div class="card-body">
            <kit-list-15 />
          </div>
        </div>
        <h5 class="text-dark mb-4">What are your top devices?</h5>
        <div class="card">
          <div class="card-body">
            <kit-list-12 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KitChart1 from '@/components/kit/widgets/Charts/1/index'
import KitChart2 from '@/components/kit/widgets/Charts/2/index'
import KitChart5 from '@/components/kit/widgets/Charts/5/index'
import KitChart9 from '@/components/kit/widgets/Charts/9/index'
import KitChart10 from '@/components/kit/widgets/Charts/10/index'
import KitList12 from '@/components/kit/widgets/Lists/12/index'
import KitList15 from '@/components/kit/widgets/Lists/15/index'

export default {
  components: {
    KitChart1,
    KitChart2,
    KitChart5,
    KitChart9,
    KitChart10,
    KitList12,
    KitList15,
  },
}
</script>
