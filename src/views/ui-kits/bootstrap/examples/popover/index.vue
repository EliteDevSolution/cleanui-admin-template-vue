<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Popovers</strong>
    </h5>
    <div class="mb-5">
      <b-button
        variant="primary"
        class="mb-3 mr-3"
        v-b-popover.hover="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
        title="Popover Title"
      >Launch Popover</b-button>
    </div>
    <h5 class="mb-4">
      <strong>Position</strong>
    </h5>
    <div class="mb-5">
      <b-button
        variant="light"
        class="mb-3 mr-3"
        v-b-popover.hover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
        title="Popover on bottom"
      >Popover on bottom</b-button>
      <b-button
        variant="light"
        class="mb-3 mr-3"
        v-b-popover.hover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
        title="Popover on top"
      >Popover on top</b-button>
      <b-button
        variant="light"
        class="mb-3 mr-3"
        v-b-popover.hover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
        title="Popover on left"
      >Popover on left</b-button>
      <b-button
        variant="light"
        class="mb-3 mr-3"
        v-b-popover.hover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
        title="Popover on right"
      >Popover on right</b-button>
    </div>
  </div>
  <!-- <div class="text-center my-3">
    <b-button v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-button>
  </div>-->
</template>
<script>
export default {
  name: 'KitBootstrapPopoverExample',
}
</script>
