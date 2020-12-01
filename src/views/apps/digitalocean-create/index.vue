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
    <h6 class="mb-4 text-uppercase">
      <strong>Choose an image</strong>
    </h6>
    <div class="row mb-5">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card text-center">
          <div class="card-header pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Ubuntu</div>
          </div>
          <div class="card-body pt-3 pb-3">
            <div class="text-center text-gray-5">18.04 x86</div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card text-center bg-light border-blue">
          <div class="card-header pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Freebsd</div>
          </div>
          <div class="card-body pt-3 pb-3">
            <div class="text-center text-gray-5">18.04 x86</div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card text-center">
          <div class="card-header pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Fedora</div>
          </div>
          <div class="card-body pt-3 pb-3">
            <div class="text-center text-gray-5">18.04 x86</div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card text-center">
          <div class="card-header pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Debian</div>
          </div>
          <div class="card-body pt-3 pb-3">
            <div class="text-center text-gray-5">18.04 x86</div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="mb-4 text-uppercase">
      <strong>Choose plan</strong>
    </h6>
    <div class="row">
      <div class="col-md-4">
        <div class="card bg-light border-blue">
          <div class="card-body pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Starter</div>
            <div class="text-center text-blue">
              <div class="font-weight-bold font-size-24">Standard Plan</div>
              <div>$0.060 /hour</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Performance</div>
            <div class="text-center text-blue">
              <div class="font-weight-bold font-size-24">General Purpose</div>
              <div>$0.060 /hour</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body pt-3 pb-3">
            <div class="text-uppercase text-dark font-weight-bold">Pro</div>
            <div class="text-center text-blue">
              <div class="font-weight-bold font-size-24">CPU Optimized</div>
              <div>$0.060 /hour</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="mb-5">
      Each Droplet adds more free data transfer to your account, starting at 1TB/month and scaling
      with Droplet usage and size. Additional outbound data transfer is billed at $.01/GB.
      <a
        href="javascript: void(0);"
        class="text-blue"
      >Read more</a>.
    </p>
    <h6 class="mb-4 text-uppercase">
      <strong>Add backups</strong>
    </h6>
    <p class="mb-4">
      Automatic system-level backups. Use the backup images to revert the server or create new
      Droplets. Backups cost 20% of the Droplet price.
    </p>
    <a
      class="btn btn-light btn-lg text-primary font-size-14 d-inline-block mb-5"
      href="javascript: void(0);"
    >Enable Backups</a>
    <h6 class="mb-4 text-uppercase">
      <strong>Add block storage</strong>
    </h6>
    <p class="mb-4">
      Block storage lets you add independent storage volumes that can be accessed like local disk
      and moved from one Droplet to another within the same region.
    </p>
    <a
      class="btn btn-light btn-lg text-primary font-size-14 d-inline-block mb-5 text-primary"
      href="javascript: void(0);"
    >Add Volume</a>
    <h6 class="mb-4 text-uppercase">
      <strong>Choose a hostname</strong>
    </h6>
    <p class="mb-4">
      Block storage lets you add independent storage volumes that can be accessed like local disk
      and moved from one Droplet to another within the same region.
    </p>
    <div class="row">
      <div class="col-md-5">
        <a-input class="width-100p mb-5" placeholder="Please enter droplet hostname..." />
      </div>
    </div>
    <a
      href="javascript: void(0);"
      class="btn btn-lg btn-success width-100p font-size-16"
    >Create Droplet</a>
  </div>
</template>
