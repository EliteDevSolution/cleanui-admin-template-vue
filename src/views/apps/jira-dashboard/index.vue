<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card kit__utils__cardMarked kit__utils__cardMarked--primary">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Introduction</h5>
            </div>
            <div class="d-flex flex-column justify-content-center">
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
          <div class="card-body">
            <h3 class="text-dark font-size-18 font-weight-bold mb-3">Welcome to Jira</h3>
            <p>
              New to Jira? Check out the
              <a
                href="javascript: void(0);"
                class="text-blue"
              >Jira User's Guide.</a>
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
        </div>
        <div class="card kit__utils__cardMarked kit__utils__cardMarked--primary">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Revenue</h5>
            </div>
            <div class="d-flex flex-column justify-content-center">
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
          <div class="card-body">
            <kit-general-1 />
          </div>
        </div>
        <div class="card">
          <kit-general-6 />
        </div>
        <div class="card">
          <kit-general-6v1 />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card kit__utils__cardMarked kit__utils__cardMarked--primary">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Introduction</h5>
            </div>
            <div class="d-flex flex-column justify-content-center">
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
          <div class="card-body">
            <p>
              You currently have no
              <a href="javascript: void(0);" class="text-blue">issues</a> assigned
              to you. Enjoy your day!
            </p>
          </div>
        </div>
        <div class="card kit__utils__cardMarked kit__utils__cardMarked--primary">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Activity Stream</h5>
            </div>
            <div class="d-flex flex-column justify-content-center">
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
          <div class="card-body">
            <kit-list-11 />
          </div>
        </div>
        <div class="card kit__utils__cardMarked kit__utils__cardMarked--primary">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Statistics</h5>
            </div>
            <div class="d-flex flex-column justify-content-center">
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
          <div class="card-body">
            <kit-table-1 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KitGeneral1 from '@/components/kit/widgets/General/1/index'
import KitGeneral6 from '@/components/kit/widgets/General/6/index'
import KitGeneral6v1 from '@/components/kit/widgets/General/6v1/index'
import KitList11 from '@/components/kit/widgets/Lists/11/index'
import KitTable1 from '@/components/kit/widgets/Tables/1/index'

export default {
  components: {
    KitGeneral1,
    KitGeneral6,
    KitGeneral6v1,
    KitList11,
    KitTable1,
  },
}
</script>
