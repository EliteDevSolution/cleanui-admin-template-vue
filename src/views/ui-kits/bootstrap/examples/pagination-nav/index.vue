<template>
  <div>
    <h5 class="mb-4">
      <strong>Basic Usage</strong>
    </h5>
    <div class="mb-5">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapPaginationNavExample',
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
}
</script>
