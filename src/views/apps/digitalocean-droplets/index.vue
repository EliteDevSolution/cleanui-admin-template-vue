<template>
  <div>
    <div class="d-flex flex-wrap align-items-center">
      <div class="kit__utils__avatar kit__utils__avatar--size64 flex-shrink-0 mr-5 mb-3">
        <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
      </div>
      <div class="mr-auto mb-3">
        <div class="text-dark font-weight-bold font-size-24">
          <span class="mr-3">Mediatec Software</span>
          <span
            class="align-middle text-primary text-uppercase font-size-12 badge badge-light"
          >Default</span>
        </div>
        <div>Operational / Developer tooling / Update your project information under Settings</div>
      </div>
      <a
        class="btn btn-light btn-lg text-blue font-size-14"
        href="javascript: void(0);"
      >Move Resources →</a>
    </div>
    <a-tabs defaultActiveKey="1" class="kit-tabs-bordered mb-2">
      <a-tab-pane tab="Resources" key="1" />
      <a-tab-pane tab="Activity" key="2" />
      <a-tab-pane tab="Settings" key="3" />
    </a-tabs>
    <div class="row mb-4">
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <kit-chart-4 />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <kit-chart-4v1 />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <kit-chart-4v2 />
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <kit-chart-4v3 />
          </div>
        </div>
      </div>
    </div>
    <h6 class="mb-4 text-uppercase">
      <strong>Droplets (2)</strong>
    </h6>
    <div class="mb-5">
      <div class="card mb-3">
        <div class="card-body py-2">
          <div class="d-flex align-items-center flex-wrap">
            <div class="d-flex flex-nowrap align-items-center width-200 flex-shrink-1 mr-2">
              <div class="kit__utils__donut kit__utils__donut--danger mr-2 flex-shrink-0"></div>
              <a
                href="javascript: void(0);"
                class="font-weight-bold text-blue text-nowrap"
              >mediatec-main-server</a>
            </div>
            <div class="flex-grow-1 mr-2">FRA1 / 1GB / 25GB Disk</div>
            <div class="flex-grow-1 mr-auto">46.101.103.230</div>
            <div class="d-inline-block">
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
      </div>
      <div class="card mb-3">
        <div class="card-body py-2">
          <div class="d-flex align-items-center flex-wrap">
            <div class="d-flex flex-nowrap align-items-center width-200 flex-shrink-1 mr-2">
              <div class="kit__utils__donut kit__utils__donut--success mr-2 flex-shrink-0"></div>
              <a
                href="javascript: void(0);"
                class="font-weight-bold text-blue text-nowrap"
              >mediatec-cdn</a>
            </div>
            <div class="flex-grow-1 mr-2">FRA1 / 1GB / 25GB Disk</div>
            <div class="flex-grow-1 mr-auto">46.101.103.230</div>
            <div class="d-inline-block">
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
      </div>
    </div>
    <h6 class="mb-4 text-uppercase">
      <strong>Create something new</strong>
    </h6>
    <div class="row">
      <div class="col-lg-4">
        <kit-list-5 />
      </div>
      <div class="col-lg-4">
        <kit-list-5 />
      </div>
      <div class="col-lg-4">
        <kit-list-5 />
      </div>
    </div>
  </div>
</template>
<script>
import KitChart4 from '@/components/kit/widgets/Charts/4/index'
import KitChart4v1 from '@/components/kit/widgets/Charts/4v1/index'
import KitChart4v2 from '@/components/kit/widgets/Charts/4v2/index'
import KitChart4v3 from '@/components/kit/widgets/Charts/4v3/index'
import KitList5 from '@/components/kit/widgets/Lists/5/index'

export default {
  components: {
    KitChart4,
    KitChart4v1,
    KitChart4v2,
    KitChart4v3,
    KitList5,
  },
}

</script>
