<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Bootstrap Tables</span>
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
          <strong>Basic Styling</strong>
        </h5>
        <table-bootstrap-basic class="mb-4" />
        <h5 class="mb-4">
          <strong>Row Styling</strong>
        </h5>
        <table-bootstrap-row-styling class="mb-4" />
        <h5 class="mb-4">
          <strong>Responsive</strong>
        </h5>
        <table-bootstrap-responsive class="mb-4" />
        <h5 class="mb-4">
          <strong>Stacked</strong>
        </h5>
        <table-bootstrap-stacked class="mb-4" />
        <h5 class="mb-4">
          <strong>Row Select</strong>
        </h5>
        <table-bootstrap-select class="mb-4" />
        <h5 class="mb-4">
          <strong>Row details</strong>
        </h5>
        <table-bootstrap-row-details class="mb-4" />
        <h5 class="mb-4">
          <strong>Sorting</strong>
        </h5>
        <table-bootstrap-sorting class="mb-4" />
        <h5 class="mb-4">
          <strong>Complete</strong>
        </h5>
        <table-bootstrap-complete class="mb-4" />
      </div>
    </div>
  </div>
</template>
<script>
import TableBootstrapBasic from './examples/basic/index'
import TableBootstrapRowStyling from './examples/row-styling/index'
import TableBootstrapResponsive from './examples/responsive/index'
import TableBootstrapStacked from './examples/stacked/index'
import TableBootstrapSelect from './examples/select/index'
import TableBootstrapRowDetails from './examples/details/index'
import TableBootstrapSorting from './examples/sorting/index'
import TableBootstrapComplete from './examples/complete/index'
export default {
  components: {
    TableBootstrapComplete,
    TableBootstrapBasic,
    TableBootstrapRowStyling,
    TableBootstrapResponsive,
    TableBootstrapStacked,
    TableBootstrapSelect,
    TableBootstrapRowDetails,
    TableBootstrapSorting,
  },
}
</script>
