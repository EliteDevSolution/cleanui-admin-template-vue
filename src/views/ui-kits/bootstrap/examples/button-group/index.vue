<template>
  <div class="row">
    <div class="col-lg-12 mb-5">
      <h5 class="mb-4">
        <strong>Default Group</strong>
      </h5>
      <b-button-group class="mr-2 mb-2">
        <b-button variant="success">Left</b-button>
        <b-button variant="success">Middle</b-button>
        <b-button variant="success">Right</b-button>
      </b-button-group>
      <b-button-group class="mr-2 mb-2">
        <b-button variant="clear" class="btn-rounded">Left</b-button>
        <b-button variant="clear">Middle</b-button>
        <b-button variant="danger" class="btn-rounded">Right</b-button>
      </b-button-group>
    </div>
    <div class="col-lg-12 mb-5">
      <h5 class="mb-4">
        <strong>Nesting Group</strong>
      </h5>
      <b-button-group class="mb-3 mr-3">
        <b-button variant="primary">1</b-button>
        <b-button variant="primary">2</b-button>
        <b-dropdown variant="primary" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
      <b-button-group class="mb-3 mr-3">
        <b-button variant="info">1</b-button>
        <b-button variant="info">2</b-button>
        <b-dropdown variant="info" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
      <b-button-group class="mb-3 mr-3">
        <b-button variant="clear">1</b-button>
        <b-button variant="clear">2</b-button>
        <b-dropdown variant="clear" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </div>
    <div class="col-lg-12 mb-3">
      <h5 class="mb-4">
        <strong>Vertical Group</strong>
      </h5>
      <b-button-group vertical class="mb-3 mr-2">
        <b-button variant="danger">Button</b-button>
        <b-dropdown variant="danger" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="danger">Button</b-button>
        <b-dropdown variant="danger" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
      <b-button-group vertical class="mb-3 mr-2">
        <b-dropdown variant="default" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="default">Button</b-button>
        <b-dropdown variant="default" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="default">Button</b-button>
      </b-button-group>
      <b-button-group vertical class="mb-3 mr-2">
        <b-dropdown variant="clear" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="clear">Button</b-button>
        <b-dropdown variant="clear" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="clear">Button</b-button>
      </b-button-group>
      <b-button-group vertical class="mb-3 mr-2">
        <b-dropdown variant="primary" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="primary">Button</b-button>
        <b-dropdown variant="primary" text="Dropdown">
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another Action</b-dropdown-item>
          <b-dropdown-item>Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
        <b-button variant="primary">Button</b-button>
      </b-button-group>
    </div>
  </div>
  <!-- <div>
    <div>
      <b-button-group>
        <b-button>Button 1</b-button>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
      </b-button-group>
    </div>
  </div>-->
</template>
<script>
export default {
  name: 'KitBootstrapButtonGroupExample',
}
</script>
