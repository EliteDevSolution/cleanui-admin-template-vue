<template>
  <div class="card overflow-hidden">
    <div v-if="isNew" :class="$style.new">
      New
    </div>
    <div class="card-body">
      <a
        href="#"
        v-on:click="toggleFavorite"
        :class="[$style.favorite, favorite ? 'text-dark' : 'text-gray-3']"
      >
        <i class="fe fe-heart font-size-21"></i>
      </a>
      <div :class="$style.image" class="border-bottom height-250 mb-3">
        <img class="img-fluid" :src="image" :alt="name" />
      </div>
      <div class="font-size-24 font-weight-bold text-dark mb-2">
        {{price}}
        <del v-if="oldPrice" class="align-text-top font-size-14 mr-2">
          {{oldPrice}}
        </del>
      </div>
      <div>
        <a href="javascript:void(0);" class="text-blue font-size-18">
          {{name}}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitGeneral16',
  props: ['isNew', 'isFavorite', 'image', 'name', 'price', 'oldPrice'],
  data: function() {
    return {
      favorite: this.isFavorite,
    }
  },
  methods: {
    toggleFavorite: function (event) {
      event.preventDefault()
      this.favorite = !this.favorite
    },
  },
}
</script>
<style lang="scss" module>
  @import "./style.module.scss";
</style>
