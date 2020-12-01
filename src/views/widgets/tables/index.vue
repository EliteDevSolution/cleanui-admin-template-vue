<template>
  <div class="row">
    <div class="col-xl-6 col-lg-12">
      <div>
        <h2 class="badge-example">Table / 1</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-1 />
          </div>
        </div>
      </div>
      <div>
        <h2 class="badge-example">Table / 2</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-2 />
          </div>
        </div>
      </div>
      <div>
        <h2 class="badge-example">Table / 3</h2>
        <div class="card">
          <kit-table-3 />
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-lg-12">
      <div>
        <h2 class="badge-example">Table / 4</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-4 />
          </div>
        </div>
      </div>
      <div>
        <h2 class="badge-example">Table / 5</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-5 />
          </div>
        </div>
      </div>
      <div>
        <h2 class="badge-example">Table / 6</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-6 />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div>
        <h2 class="badge-example">Table / 7</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-7 />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div>
        <h2 class="badge-example">Table / 8</h2>
        <div class="card">
          <div class="card-body">
            <kit-table-8 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import KitTable1 from '@/components/kit/widgets/Tables/1'
import KitTable2 from '@/components/kit/widgets/Tables/2'
import KitTable3 from '@/components/kit/widgets/Tables/3'
import KitTable4 from '@/components/kit/widgets/Tables/4'
import KitTable5 from '@/components/kit/widgets/Tables/5'
import KitTable6 from '@/components/kit/widgets/Tables/6'
import KitTable7 from '@/components/kit/widgets/Tables/7'
import KitTable8 from '@/components/kit/widgets/Tables/8'

export default {
  components: {
    KitTable1,
    KitTable2,
    KitTable3,
    KitTable4,
    KitTable5,
    KitTable6,
    KitTable7,
    KitTable8,
  },
}
</script>
