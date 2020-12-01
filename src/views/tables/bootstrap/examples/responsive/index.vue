<template>
  <div>
    <b-table responsive :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'TableBootstrapResponsive',
  data() {
    return {
      items: [
        {
          'heading 1': 'table cell',
          'heading 2': 'table cell',
          'heading 3': 'table cell',
          'heading 4': 'table cell',
          'heading 5': 'table cell',
          'heading 6': 'table cell',
          'heading 7': 'table cell',
          'heading 8': 'table cell',
          'heading 9': 'table cell',
          'heading 10': 'table cell',
        },
        {
          'heading 1': 'table cell',
          'heading 2': 'table cell',
          'heading 3': 'table cell',
          'heading 4': 'table cell',
          'heading 5': 'table cell',
          'heading 6': 'table cell',
          'heading 7': 'table cell',
          'heading 8': 'table cell',
          'heading 9': 'table cell',
          'heading 10': 'table cell',
        },
        {
          'heading 1': 'table cell',
          'heading 2': 'table cell',
          'heading 3': 'table cell',
          'heading 4': 'table cell',
          'heading 5': 'table cell',
          'heading 6': 'table cell',
          'heading 7': 'table cell',
          'heading 8': 'table cell',
          'heading 9': 'table cell',
          'heading 10': 'table cell',
        },
      ],
    }
  },
}
</script>
