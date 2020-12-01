<template>
  <div>
    <h5 class="mb-4">
      <strong>Basic Usage</strong>
    </h5>
    <div class="mb-5">
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
        <b-pagination
          size="lg"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
        <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapPaginationExample',
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
      ],
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
}
</script>
