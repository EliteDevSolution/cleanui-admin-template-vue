<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Layout</strong>
    </h5>
    <div class="mb-5">
      <b-list-group>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </div>
    <h5 class="mb-4">
      <strong>Anchors and buttons</strong>
    </h5>
    <div class="mb-5">
      <div class="mb-5">
        <b-list-group>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#" active>Link with active state</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
        </b-list-group>
      </div>
      <b-list-group>
        <b-list-group-item>Awesome link</b-list-group-item>
        <b-list-group-item active>Link with active state</b-list-group-item>
        <b-list-group-item>Action links are easy</b-list-group-item>
        <b-list-group-item disabled>Disabled link</b-list-group-item>
      </b-list-group>
    </div>
    <h5 class="mb-4">
      <strong>Horizontal</strong>
    </h5>
    <div class="mb-5">
      <b-list-group horizontal>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapListGroupExample',
}
</script>
