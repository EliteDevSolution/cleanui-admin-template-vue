<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Tabbed Cards</span>
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
              <h5 class="mb-0">Basic</h5>
            </div>
            <a-tabs defaultActiveKey="1" class="kit-tabs">
              <a-tab-pane tab="History" key="1" />
              <a-tab-pane tab="Information" key="2" />
              <a-tab-pane tab="Actions" key="3" />
            </a-tabs>
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
              <h5 class="mb-0">With Dropdown</h5>
            </div>
            <a-tabs defaultActiveKey="1" class="kit-tabs">
              <a-tab-pane tab="Messages" key="1" />
            </a-tabs>
            <div class="d-inline-flex align-items-center">
              <a-dropdown placement="bottomRight" :trigger="['click']">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript: void(0);"
                  role="button"
                >Dropdown</a>
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
              <h5 class="mb-0">Bold Border</h5>
            </div>
            <a-tabs defaultActiveKey="1" class="kit-tabs-bold">
              <a-tab-pane tab="History" key="1" />
              <a-tab-pane tab="Information" key="2" />
            </a-tabs>
            <div class="d-inline-flex align-items-center">
              <div class="d-inline-flex align-items-center">
                <a-dropdown placement="bottomRight" :trigger="['click']">
                  <a
                    class="nav-link dropdown-toggle"
                    href="javascript: void(0);"
                    role="button"
                  >Dropdown</a>
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
          <div class="card-header card-header-flex">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0">Pills</h5>
            </div>
            <a-tabs defaultActiveKey="1" class="kit-tabs-pills">
              <a-tab-pane key="1">
                <a slot="tab" class="nav-link" href="javascript: void(0);">History</a>
              </a-tab-pane>
              <a-tab-pane key="2">
                <a slot="tab" class="nav-link" href="javascript: void(0);">Information</a>
              </a-tab-pane>
              <a-tab-pane key="3">
                <a slot="tab" class="nav-link" href="javascript: void(0);">Actions</a>
              </a-tab-pane>
            </a-tabs>
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
            <div class="d-flex flex-row align-items-center mr-auto">
              <h5 class="mb-0">
                <i class="fe fe-activity mr-1 font-size-18 text-muted" />
                With Icon
              </h5>
            </div>
            <a-tabs defaultActiveKey="1" class="kit-tabs-bold">
              <a-tab-pane key="1">
                <span slot="tab">
                  <i class="fe fe-align-left mr-1" />
                  Left
                </span>
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">
                  <i class="fe fe-align-center mr-1" />
                  Center
                </span>
              </a-tab-pane>
              <a-tab-pane key="3">
                <span slot="tab">
                  <i class="fe fe-align-right mr-1" />
                  Right
                </span>
              </a-tab-pane>
            </a-tabs>
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
            <a-tabs defaultActiveKey="1" class="kit-tabs-bold">
              <a-tab-pane tab="Notifications" key="1" />
            </a-tabs>
            <div class="d-inline-flex align-items-center">
              <a-dropdown placement="bottomRight" :trigger="['click']">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript: void(0);"
                  role="button"
                >Dropdown</a>
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
      </div>
    </div>
  </div>
</template>
