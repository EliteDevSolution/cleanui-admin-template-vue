<template>
  <div>
    <h5 class="mb-4">
      <strong>Default Table</strong>
    </h5>
    <div class="mb-5">
      <b-table striped hover :items="items"></b-table>
    </div>
    <h5 class="mb-4">
      <strong>Inverse Table</strong>
    </h5>
    <div class="mb-5">
      <b-table dark hover :items="items"></b-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapTableExample',
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
}
</script>
