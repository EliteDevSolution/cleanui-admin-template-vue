<template>
  <div>
    <div class="kit__utils__heading">
      <h5>Pricing Tables</h5>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <kit-list-21 />
      </div>
      <div class="col-lg-4">
        <kit-list-21v1 />
      </div>
      <div class="col-lg-4">
        <kit-list-21v2 />
      </div>
    </div>
  </div>
</template>
<script>
import KitList21 from '@/components/kit/widgets/Lists/21'
import KitList21v1 from '@/components/kit/widgets/Lists/21v1'
import KitList21v2 from '@/components/kit/widgets/Lists/21v2'

export default {
  components: {
    KitList21,
    KitList21v1,
    KitList21v2,
  },
}
</script>
