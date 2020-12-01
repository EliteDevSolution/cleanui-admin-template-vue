<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Layout</strong>
    </h5>
    <div class="mb-5">
      <div class="kit__utils__docs">
        <div class="container-fluid">
          <div class="row">
            <div class="col">.col</div>
          </div>
          <div class="row">
            <div class="col">.col</div>
            <div class="col">.col</div>
            <div class="col">.col</div>
            <div class="col">.col</div>
          </div>
          <div class="row">
            <div class="col-3">.col-3</div>
            <div class="col-auto">.col-auto - variable width content</div>
            <div class="col-3">.col-3</div>
          </div>
          <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
          </div>
          <div class="row">
            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
            <div class="col-sm-4">.col-sm-4</div>
          </div>
          <div class="row">
            <div class="col-sm-6 order-sm-2 offset-sm-1">.col-sm-6 .order-sm-2 .offset-sm-1</div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 offset-md-3">.col-sm-12 .col-md-6 .offset-md-3</div>
          </div>
          <div class="row">
            <div class="col-sm-auto offset-sm-1">.col-sm-auto .offset-sm-1</div>
            <div class="col-sm-auto offset-sm-1">.col-sm-auto .offset-sm-1</div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="mb-4">
      <strong>Containers</strong>
    </h5>
    <div class="mb-5">
      <div class="kit__utils__docs">
        <div class="themed-container container">.container</div>
        <div class="themed-container container-sm">.container-sm</div>
        <div class="themed-container container-md">.container-md</div>
        <div class="themed-container container-lg">.container-lg</div>
        <div class="themed-container container-xl">.container-xl</div>
        <div class="themed-container container-fluid">.container-fluid</div>
      </div>
    </div>
    <h5 class="mb-4">
      <strong>Row Columns</strong>
    </h5>
    <div class="mb-5">
      <div class="kit__utils__docs">
        <div class="container-fluid">
          <div class="row row-cols-2">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
          <div class="row row-cols-3">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
          <div class="row row-cols-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
          <div class="row row-cols-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col-6">Column</div>
            <div class="col">Column</div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapLayoutExample',
}
</script>
