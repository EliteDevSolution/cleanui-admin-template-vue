<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Antd Tables</span>
        <a
          href="https://ant.design/components/table"
          rel="noopener noreferrer"
          target="_blank"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up" />
        </a>
      </h5>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="mb-4">
          <strong>Basic Usage</strong>
        </h5>
        <tables-antd-basic />
        <h5 class="mb-4">
          <strong>Row Selection</strong>
        </h5>
        <tables-antd-row-selection />
        <h5 class="mb-4">
          <strong>Filter and Sorter</strong>
        </h5>
        <tables-antd-filter-sorter />
        <h5 class="mb-4">
          <strong>Custom Filter Panel</strong>
        </h5>
        <tables-antd-custom-filter />
        <h5 class="mb-4">
          <strong>Expandable Row</strong>
        </h5>
        <tables-antd-expandable-row />
        <h5 class="mb-4">
          <strong>Fixed Header and Columns</strong>
        </h5>
        <tables-antd-fixed />
        <h5 class="mb-4">
          <strong>Table sizes</strong>
        </h5>
        <tables-antd-size />
      </div>
    </div>
  </div>
</template>
<script>
import TablesAntdBasic from './examples/basic/index'
import TablesAntdRowSelection from './examples/row-selection/index'
import TablesAntdFilterSorter from './examples/filter-sorter/index'
import TablesAntdCustomFilter from './examples/custom-filter/index'
import TablesAntdExpandableRow from './examples/expandable-row/index'
import TablesAntdFixed from './examples/fixed-header-columns/index'
import TablesAntdSize from './examples/size/index'

export default {
  components: {
    TablesAntdBasic,
    TablesAntdRowSelection,
    TablesAntdFilterSorter,
    TablesAntdCustomFilter,
    TablesAntdExpandableRow,
    TablesAntdFixed,
    TablesAntdSize,
  },
}
</script>
