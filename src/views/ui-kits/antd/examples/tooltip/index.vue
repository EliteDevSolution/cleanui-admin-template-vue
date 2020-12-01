<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Basic</strong>
        </h5>
        <div class="mb-5">
          <a-tooltip placement="topLeft">
            <template slot="title">prompt text</template>
            <a-button>Align edge</a-button>
          </a-tooltip>
        </div>
      </div>
      <div class="col-lg-6">
        <h5 class="mb-3">
          <strong>Aligned</strong>
        </h5>
        <div class="mb-5">
          <a-tooltip arrowPointAtCenter placement="topLeft">
            <template slot="title">prompt text</template>
            <a-button>Arrow points to center</a-button>
          </a-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdTooltipExample',
}
</script>
