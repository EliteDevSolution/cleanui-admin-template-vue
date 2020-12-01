<template>
  <div>
    <h5 class="mb-4">
      <strong>
        Small image with
        <code>fluid</code>
      </strong>
    </h5>
    <div class="mb-5">
      <b-img src="https://picsum.photos/300/150/?image=80" fluid alt="Fluid image"></b-img>
    </div>
    <h5 class="mb-4">
      <strong>
        Small image with
        <code>fluid-grow</code>:
      </strong>
    </h5>
    <div class="mb-5">
      <b-img src="https://picsum.photos/800/400/?image=80" fluid-grow alt="Fluid-grow image"></b-img>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapImageExample',
}
</script>
