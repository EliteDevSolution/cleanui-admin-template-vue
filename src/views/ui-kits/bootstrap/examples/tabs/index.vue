<template>
  <div class="row">
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Custom Tabs</strong>
      </h5>
      <div class="mb-5">
        <b-tabs class="nav-tabs-line">
          <b-tab title="Active" active>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>No Bottom Border</strong>
      </h5>
      <div class="mb-5">
        <b-tabs class="nav-tabs-line nav-tabs-noborder">
          <b-tab title="Active" active>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Custom Tabs Bold</strong>
      </h5>
      <div class="mb-5">
        <b-tabs class="nav-tabs-line nav-tabs-line-bold">
          <b-tab title="Active" active>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Custom Tabs Bold with Icons</strong>
      </h5>
      <div class="mb-5">
        <b-tabs class="nav-tabs-line">
          <b-tab active>
            <span slot="title">
              <i class="fe fe-activity mr-1" />
              Activity
            </span>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab>
            <span slot="title">
              <i class="fe fe-clock mr-1" />
              Link
            </span>
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <span slot="title">
              <i class="fe fe-trash mr-1" />
              Link
            </span>
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab disabled>
            <span slot="title">
              <i class="fe fe-plus-circle mr-1" />
              Disabled
            </span>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Default Tabs</strong>
      </h5>
      <div class="mb-5">
        <b-tabs>
          <b-tab title="Active" active>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Default Pills</strong>
      </h5>
      <div class="mb-5">
        <b-tabs pills>
          <b-tab title="Active" active>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Justified Pills</strong>
      </h5>
      <div class="mb-5">
        <b-tabs pills justified>
          <b-tab title="Active" active>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-4">
        <strong>Default Pills with Icons</strong>
      </h5>
      <div class="mb-5">
        <b-tabs pills>
          <b-tab active>
            <span slot="title">
              <i class="fe fe-activity mr-1" />
              Activity
            </span>
            <div class="p-4 mt-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab>
            <span slot="title">
              <i class="fe fe-clock mr-1" />
              Link
            </span>
            <div class="p-4 mt-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <span slot="title">
              <i class="fe fe-trash mr-1" />
              Link
            </span>
            <div class="p-4 mt-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab disabled>
            <span slot="title">
              <i class="fe fe-plus-circle mr-1" />
              Disabled
            </span>
            <div class="p-4 mt-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div class="col-lg-12">
      <h5 class="mb-4">
        <strong>Vertical Pills</strong>
      </h5>
      <div class="mb-5">
        <b-tabs pills vertical>
          <b-tab title="Active" active>
            <div class="p-4 border rounded">Tab 1 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 border rounded">Tab 2 Contents</div>
          </b-tab>
          <b-tab title="Link">
            <div class="p-4 border rounded">Tab 3 Contents</div>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <div class="p-4 border rounded">Tab 4 Contents</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapTabsExample',
}
</script>
