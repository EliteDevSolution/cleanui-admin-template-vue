<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Tooltip</strong>
    </h5>
    <div class="mb-5">
      <p>
        Somewhere in here is a
        <span
          class="kit__utils__link"
          v-b-tooltip.hover
          title="Tooltip content"
        >tooltip</span>
        .
      </p>
    </div>
    <h5 class="mb-4">
      <strong>Directions</strong>
    </h5>
    <div class="mb-5">
      <button
        type="button"
        class="btn btn-light mb-3 mr-3"
        v-b-tooltip.hover.top="'Tooltip content'"
      >Tooltip on top</button>
      <button
        type="button"
        class="btn btn-light mb-3 mr-3"
        v-b-tooltip.hover.right="'Tooltip content'"
      >Tooltip on right</button>
      <button
        type="button"
        class="btn btn-light mb-3 mr-3"
        v-b-tooltip.hover.bottom="'Tooltip content'"
      >Tooltip on bottom</button>
      <button
        type="button"
        class="btn btn-light mb-3 mr-3"
        v-b-tooltip.hover.left="'Tooltip content'"
      >Tooltip on left</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapTooltipExample',
}
</script>
