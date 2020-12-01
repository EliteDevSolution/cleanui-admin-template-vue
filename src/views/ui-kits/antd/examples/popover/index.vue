<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-popover title="Title" class="mr-3 mb-3">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button type="primary">Default Popover</a-button>
      </a-popover>
      <a-popover title="Title" placement="topLeft" arrowPointAtCenter class="mr-3 mb-3">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button type="primary">Default Popover</a-button>
      </a-popover>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdPopoverExample',
}
</script>
