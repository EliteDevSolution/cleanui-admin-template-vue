<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <a-carousel :afterChange="onChange">
      <div style="height: 160px; text-align: center; line-height: 160px; background: #364d79">
        <h3 style="line-height: 160px; color: #fff">1</h3>
      </div>
      <div style="height: 160px; text-align: center; line-height: 160px; background: #364d79">
        <h3 style="line-height: 160px; color: #fff">2</h3>
      </div>
      <div style="height: 160px; text-align: center; line-height: 160px; background: #364d79">
        <h3 style="line-height: 160px; color: #fff">3</h3>
      </div>
      <div style="height: 160px; text-align: center; line-height: 160px; background: #364d79">
        <h3 style="line-height: 160px; color: #fff">4</h3>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  name: 'KitAntdCarouselExample',
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c)
    },
  },
}
</script>
