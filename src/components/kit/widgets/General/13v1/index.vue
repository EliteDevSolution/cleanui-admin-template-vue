<template>
  <div>
    <div
      class="height-200 d-flex flex-column"
      :class="$style.head"
      style="background-image: url(resources/images/content/flowers.jpg)"
    >
      <div class="card-header card-header-flex border-bottom-0">
        <div class="d-flex flex-column justify-content-center">
          <h5 class="mb-0 text-white">Basic Card</h5>
        </div>
        <div class="ml-auto d-flex flex-column justify-content-center">
          <div class="dropdown d-inline-block">
            <a-dropdown placement="bottomRight" :trigger="['click']">
              <button type="button" class="btn btn-light">
                <i class="fe fe-more-vertical" />
              </button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">Action</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">Another action</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">Something else here</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <a href="javascript:;">Separated link</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </div>
      <div class="mt-auto mb-3">
        <div class="text-white font-size-24 font-weight-bold pl-4">David Beckham</div>
      </div>
    </div>
    <div class="card card-borderless">
      <div class="card-header border-bottom-0">
        <div class="d-flex mb-1">
          <div class="text-dark text-uppercase font-weight-bold mr-auto">New users</div>
          <div class="text-gray-6">+60% Goal Reached</div>
        </div>
        <div class="d-flex mb-2">
          <div class="text-success font-size-24 font-weight-bold mr-auto">+3,125</div>
          <div class="text-gray-4 font-size-24">5,000</div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-success" style="width: 50%" />
        </div>
      </div>
      <div class="card-body pt-1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industrys standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral13v1',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
