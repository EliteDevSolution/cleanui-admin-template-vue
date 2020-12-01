<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Basic Cards</span>
        <a
          href="https://getbootstrap.com/docs/4.3/components/card/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up" />
        </a>
      </h5>
    </div>
    <div class="row">
      <div class="col-xl-6 col-lg-12">
        <div class="card">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Basic Card</h5>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div class="card">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <div class="d-flex flex-row justify-content-center">
                <h5 class="mb-0 mr-2">With Description</h5>
                <span class="text-muted">Some description here...</span>
              </div>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header card-header-flex height-100">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">
                <strong>Extra Size</strong>
              </h5>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <a-dropdown placement="bottomRight" :trigger="['click']">
                <button type="button" class="btn btn-outline-success">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div class="card card-borderless">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Borderless</h5>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div class="card">
          <div class="card-header card-header-flex card-header-borderless">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Borderless Head</h5>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div class="card bg-light">
          <div class="card-header">
            <h5 class="mb-0">Gray Background</h5>
          </div>
          <div class="card-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-12">
        <div class="card">
          <div class="card-header card-header-flex align-items-center">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">With Actions</h5>
            </div>
            <div>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Unlock Account</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-unlock" />
                </a>
              </a-tooltip>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Mark as important</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-star" />
                </a>
              </a-tooltip>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Delete user</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-trash" />
                </a>
              </a-tooltip>
            </div>
          </div>
          <div class="card-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div class="card">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">With Footer</h5>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
          <div class="card-footer">
            <a href="javascript: void(0);" class="btn btn-success mr-2">
              <i class="fe fe-unlock mr-2" />
              Unlock Account
            </a>
            <a href="javascript: void(0);" class="btn btn-link">Cancel</a>
          </div>
        </div>
        <div class="card">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">With Scroll</h5>
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
            <div class="height-200">
              <vue-custom-scrollbar style="height: 100%">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
              </vue-custom-scrollbar>
            </div>
          </div>
          <div class="card-footer">
            <a href="javascript: void(0);" class="btn btn-primary mr-2">Save</a>
            <a href="javascript: void(0);" class="btn btn-link">Cancel</a>
          </div>
        </div>
        <div class="card">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <div class="d-flex flex-row justify-content-center">
                <h5 class="mb-0 mr-2">
                  <i class="fe fe-phone-call mr-2 font-size-18 text-muted" />
                  With Icon
                </h5>
                <span class="text-muted">Some description here...</span>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div class="card card-solid bg-success">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <div class="d-flex flex-row justify-content-center">
                <h5 class="mb-0 mr-2">Solid Card</h5>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div class="card card-solid bg-danger">
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <div class="d-flex flex-row justify-content-center">
                <h5 class="mb-0 mr-2">Solid Card</h5>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: { vueCustomScrollbar },
}
</script>
