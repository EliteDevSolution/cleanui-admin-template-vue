<template>
  <div>
    <b-form-group label="Selection mode:" label-cols-md="4">
      <b-form-select v-model="selectMode" :options="modes" class="mb-3 form-control"></b-form-select>
    </b-form-group>

    <b-table
      selectable
      :select-mode="selectMode"
      selectedVariant="success"
      :items="items"
      :fields="fields"
      @row-selected="rowSelected"
      responsive="sm"
    >
      <!-- Example scoped slot for illustrative purposes only -->
      <template slot="selected" slot-scope="{ rowSelected }">
        <span v-if="rowSelected">✔</span>
      </template>
    </b-table>
    {{ selected }}
  </div>
</template>

<script>
export default {
  name: 'TableBootstrapSelect',
  data() {
    return {
      modes: ['multi', 'single', 'range'],
      fields: ['selected', 'isActive', 'age', 'first_name', 'last_name'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
      selectMode: 'multi',
      selected: [],
    }
  },
  methods: {
    rowSelected(items) {
      this.selected = items
    },
  },
}
</script>
