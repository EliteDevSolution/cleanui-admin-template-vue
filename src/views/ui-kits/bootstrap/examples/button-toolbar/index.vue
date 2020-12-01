<template>
  <div>
    <h5 class="mb-4">
      <strong>Basic Usage</strong>
    </h5>
    <div class="mb-5">
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-button variant="primary">&laquo;</b-button>
          <b-button variant="primary">&lsaquo;</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button variant="primary">Edit</b-button>
          <b-button variant="primary">Undo</b-button>
          <b-button variant="primary">Redo</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button variant="primary">&rsaquo;</b-button>
          <b-button variant="primary">&raquo;</b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
    <h5 class="mb-4">
      <strong>Sizing</strong>
    </h5>
    <div class="mb-5">
      <b-button-toolbar aria-label="Toolbar with button groups and input groups">
        <b-button-group size="sm" class="mr-1">
          <b-button variant="primary">Save</b-button>
          <b-button variant="primary">Cancel</b-button>
        </b-button-group>
        <b-input-group size="sm" prepend="$" append=".00">
          <b-form-input value="100" class="text-right"></b-form-input>
        </b-input-group>
      </b-button-toolbar>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapButtonToolbarExample',
}
</script>
