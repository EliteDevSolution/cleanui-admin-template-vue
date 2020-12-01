<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Carousel</strong>
    </h5>
    <div class="mb-5">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        background="#ababab"
        img-width="1024"
        img-height="500"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="https://via.placeholder.com/1300x500/161537/161537"></b-carousel-slide>
        <b-carousel-slide img-src="https://via.placeholder.com/1300x500/161537/161537"></b-carousel-slide>
        <b-carousel-slide img-src="https://via.placeholder.com/1300x500/161537/161537"></b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://via.placeholder.com/1300x500/161537/161537"
            alt="image slot"
          />
        </b-carousel-slide>
      </b-carousel>
    </div>
    <h5 class="mb-4">
      <strong>With Indicators</strong>
    </h5>
    <div class="mb-5">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="500"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="https://via.placeholder.com/1300x500/161537/161537"></b-carousel-slide>
        <b-carousel-slide img-src="https://via.placeholder.com/1300x500/161537/161537"></b-carousel-slide>
        <b-carousel-slide img-src="https://via.placeholder.com/1300x500/161537/161537"></b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://via.placeholder.com/1300x500/161537/161537"
            alt="image slot"
          />
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapCarouselExample',
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
