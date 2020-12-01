<template>
  <div>
    <h5 class="mb-4">
      <strong>Basic Usage</strong>
    </h5>
    <div class="mb-5">
      <b-button variant="primary" class="mb-3 mr-3" v-b-modal.modal-1>Launch demo modal</b-button>
      <b-button variant="primary" class="mb-3 mr-3" v-b-modal.modal-2>Vertically centered modal</b-button>
      <b-modal id="modal-1" title="BootstrapVue">
        <p
          class="my-4"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-modal>
      <b-modal id="modal-2" centered title="BootstrapVue">
        <p
          class="my-4"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapModalExample',
}
</script>
