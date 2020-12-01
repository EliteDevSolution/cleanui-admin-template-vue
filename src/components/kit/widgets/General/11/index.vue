<template>
  <div>
    <div class="bg-danger height-200 d-flex flex-column">
      <div class="card-header card-header-flex border-bottom-0">
        <div class="d-flex flex-column justify-content-center">
          <h5 class="mb-0 text-white">Basic Card</h5>
        </div>
        <div class="ml-auto d-flex flex-column justify-content-center">
          <div class="dropdown d-inline-block">
            <a-dropdown placement="bottomRight" :trigger="['click']">
              <button
                type="button"
                class="btn btn-light dropdown-toggle dropdown-toggle-noarrow"
              >
                <i class="fe fe-more-horizontal" />
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
      <div class="mt-4 text-center">
        <div class="text-white font-size-36 font-weight-bold">$657,345</div>
      </div>
    </div>
    <div class="card card-borderless">
      <a-tabs defaultActiveKey="1" :class="$style.tabs">
        <a-tab-pane tab="History" key="1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </a-tab-pane>
        <a-tab-pane tab="Actions" key="2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </a-tab-pane>
        <a-tab-pane key="3">
          <a-dropdown slot="tab" placement="bottomRight" :trigger="['click']">
            <a
              class="nav-link dropdown-toggle"
              href="javascript: void(0);"
              role="button"
            >
              Dropdown
            </a>
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral11',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
