<template>
  <div>
    <h5 class="mb-4">
      <strong>Using Props</strong>
    </h5>
    <div class="mb-5">
      <b-input-group size="lg" prepend="$" append=".00">
        <b-form-input></b-form-input>
      </b-input-group>
    </div>
    <h5 class="mb-4">
      <strong>Using Slots</strong>
    </h5>
    <div class="mb-5">
      <b-input-group class="mt-3">
        <b-input-group-text slot="append">
          <strong class="text-danger">!</strong>
        </b-input-group-text>
        <b-form-input></b-form-input>
      </b-input-group>
    </div>
    <h5 class="mb-4">
      <strong>Using Components</strong>
    </h5>
    <div class="mb-5">
      <b-input-group prepend="Username" class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="primary">Update</b-button>
          <b-button variant="primary">Add</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapInputGroupExample',
}
</script>
