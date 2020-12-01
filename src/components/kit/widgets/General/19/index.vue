<template>
  <div>
    <div class="rounded overflow-hidden position-relative">
      <img class="img-fluid" src="resources/images/content/photos/6.jpeg" alt="Lion" />
      <div class="font-weight-bold text-white" :class="$style.headerText">
        Clean. Simple.
        <br />Responsive
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="text-center pl-4 pr-5 flex-shrink-0" :class="$style.user">
        <div
          class="kit__utils__avatar kit__utils__avatar--rounded kit__utils__avatar--size84 border border-5 border-white d-inline-block"
        >
          <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
        </div>
        <div class="font-size-14 font-weight-bold">Helen Maggie</div>
        <a href="#" class="font-size-14 text-gray-5">@hellen_m</a>
      </div>
      <p class="pt-3 mb-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur blanditiis debitis deleniti
        distinctio ducimus et ex incidunt maxime minima minus nemo nisi quos repellendus, temporibus ullam veniam
        voluptas voluptate.w
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral19',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
