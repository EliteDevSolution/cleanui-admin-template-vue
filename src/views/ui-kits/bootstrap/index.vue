<template>
  <div>
    <div class="mb-4">
      <button
        v-for="(item, index) in data"
        :key="item.name"
        type="button"
        class="btn btn-light mr-2 mb-2"
        :class="[selectedExampleIndex === index ? 'bg-primary text-white' : 'text-primary']"
        @click="setExample(index)"
      >{{item.name}}</button>
    </div>
    <div class="card">
      <div class="card-header">
        <h5>
          <strong class="mr-3">{{example.name}}</strong>
          <a :href="example.link" target="_blank" class="btn btn-sm btn-light mr-3">
            Component Docs & Examples
            <i class="fe fe-corner-right-up"></i>
          </a>
          <a href="https://bootstrap-vue.js.org/" target="_blank" class="btn btn-sm btn-light mr-3">
            Bootstrap Docs
            <i class="fe fe-corner-right-up"></i>
          </a>
        </h5>
        <p class="mb-0">{{example.description}}</p>
      </div>
      <div class="card-body">
        <component :is="example.component"></component>
      </div>
    </div>
  </div>
</template>
<script>
import KitBootstrapAlertExample from '@/views/ui-kits/bootstrap/examples/alert/index'
import KitBootstrapBadgesExample from '@/views/ui-kits/bootstrap/examples/badges/index'
import KitBootstrapBreadcrumbExample from '@/views/ui-kits/bootstrap/examples/breadcrumb/index'
import KitBootstrapButtonsExample from '@/views/ui-kits/bootstrap/examples/buttons/index'
import KitBootstrapButtonGroupExample from '@/views/ui-kits/bootstrap/examples/button-group/index'
import KitBootstrapButtonToolbarExample from '@/views/ui-kits/bootstrap/examples/button-toolbar/index'
import KitBootstrapCardsExample from '@/views/ui-kits/bootstrap/examples/cards/index'
import KitBootstrapCarouselExample from '@/views/ui-kits/bootstrap/examples/carousel/index'
import KitBootstrapCollapseExample from '@/views/ui-kits/bootstrap/examples/collapse/index'
import KitBootstrapDropdownsExample from '@/views/ui-kits/bootstrap/examples/dropdowns/index'
import KitBootstrapEmbedExample from '@/views/ui-kits/bootstrap/examples/embed/index'
import KitBootstrapFormExample from '@/views/ui-kits/bootstrap/examples/form/index'
import KitBootstrapFormCheckboxExample from '@/views/ui-kits/bootstrap/examples/form-checkbox/index'
import KitBootstrapFormFileExample from '@/views/ui-kits/bootstrap/examples/form-file/index'
import KitBootstrapFormGroupExample from '@/views/ui-kits/bootstrap/examples/form-group/index'
import KitBootstrapFormInputExample from '@/views/ui-kits/bootstrap/examples/form-input/index'
import KitBootstrapFormRadioExample from '@/views/ui-kits/bootstrap/examples/form-radio/index'
import KitBootstrapFormSelectExample from '@/views/ui-kits/bootstrap/examples/form-select/index'
import KitBootstrapFormTextareaExample from '@/views/ui-kits/bootstrap/examples/form-textarea/index'
import KitBootstrapImageExample from '@/views/ui-kits/bootstrap/examples/image/index'
import KitBootstrapInputGroupExample from '@/views/ui-kits/bootstrap/examples/input-group/index'
import KitBootstrapJumbotronExample from '@/views/ui-kits/bootstrap/examples/jumbotron/index'
import KitBootstrapLayoutExample from '@/views/ui-kits/bootstrap/examples/layout/index'
import KitBootstrapLinkExample from '@/views/ui-kits/bootstrap/examples/link/index'
import KitBootstrapListGroupExample from '@/views/ui-kits/bootstrap/examples/list-group/index'
import KitBootstrapMediaExample from '@/views/ui-kits/bootstrap/examples/media/index'
import KitBootstrapModalExample from '@/views/ui-kits/bootstrap/examples/modal/index'
import KitBootstrapNavExample from '@/views/ui-kits/bootstrap/examples/nav/index'
import KitBootstrapNavbarExample from '@/views/ui-kits/bootstrap/examples/navbar/index'
import KitBootstrapPaginationExample from '@/views/ui-kits/bootstrap/examples/pagination/index'
import KitBootstrapPaginationNavExample from '@/views/ui-kits/bootstrap/examples/pagination-nav/index'
import KitBootstrapPopoverExample from '@/views/ui-kits/bootstrap/examples/popover/index'
import KitBootstrapProgressExample from '@/views/ui-kits/bootstrap/examples/progress/index'
import KitBootstrapSpinnerExample from '@/views/ui-kits/bootstrap/examples/spinner/index'
import KitBootstrapTableExample from '@/views/ui-kits/bootstrap/examples/table/index'
import KitBootstrapTabsExample from '@/views/ui-kits/bootstrap/examples/tabs/index'
import KitBootstrapToastExample from '@/views/ui-kits/bootstrap/examples/toast/index'
import KitBootstrapTooltipExample from '@/views/ui-kits/bootstrap/examples/tooltip/index'

import data from './data.json'

export default {
  data: function () {
    const selectedExampleIndex = 0
    const example = data[selectedExampleIndex]

    return {
      data,
      selectedExampleIndex,
      example,
    }
  },
  methods: {
    setExample: function (index) {
      this.selectedExampleIndex = index
      this.example = data[index]
    },
  },
  components: {
    'kit-bootstrap-alert-example': KitBootstrapAlertExample,
    'kit-bootstrap-badges-example': KitBootstrapBadgesExample,
    'kit-bootstrap-breadcrumb-example': KitBootstrapBreadcrumbExample,
    'kit-bootstrap-buttons-example': KitBootstrapButtonsExample,
    'kit-bootstrap-button-group-example': KitBootstrapButtonGroupExample,
    'kit-bootstrap-button-toolbar-example': KitBootstrapButtonToolbarExample,
    'kit-bootstrap-cards-example': KitBootstrapCardsExample,
    'kit-bootstrap-carousel-example': KitBootstrapCarouselExample,
    'kit-bootstrap-collapse-example': KitBootstrapCollapseExample,
    'kit-bootstrap-dropdowns-example': KitBootstrapDropdownsExample,
    'kit-bootstrap-embed-example': KitBootstrapEmbedExample,
    'kit-bootstrap-form-example': KitBootstrapFormExample,
    'kit-bootstrap-form-checkbox-example': KitBootstrapFormCheckboxExample,
    'kit-bootstrap-form-file-example': KitBootstrapFormFileExample,
    'kit-bootstrap-form-group-example': KitBootstrapFormGroupExample,
    'kit-bootstrap-form-input-example': KitBootstrapFormInputExample,
    'kit-bootstrap-form-radio-example': KitBootstrapFormRadioExample,
    'kit-bootstrap-form-select-example': KitBootstrapFormSelectExample,
    'kit-bootstrap-form-textarea-example': KitBootstrapFormTextareaExample,
    'kit-bootstrap-image-example': KitBootstrapImageExample,
    'kit-bootstrap-input-group-example': KitBootstrapInputGroupExample,
    'kit-bootstrap-jumbotron-example': KitBootstrapJumbotronExample,
    'kit-bootstrap-layout-example': KitBootstrapLayoutExample,
    'kit-bootstrap-link-example': KitBootstrapLinkExample,
    'kit-bootstrap-list-group-example': KitBootstrapListGroupExample,
    'kit-bootstrap-media-example': KitBootstrapMediaExample,
    'kit-bootstrap-modal-example': KitBootstrapModalExample,
    'kit-bootstrap-nav-example': KitBootstrapNavExample,
    'kit-bootstrap-navbar-example': KitBootstrapNavbarExample,
    'kit-bootstrap-pagination-example': KitBootstrapPaginationExample,
    'kit-bootstrap-pagination-nav-example': KitBootstrapPaginationNavExample,
    'kit-bootstrap-popover-example': KitBootstrapPopoverExample,
    'kit-bootstrap-progress-example': KitBootstrapProgressExample,
    'kit-bootstrap-spinner-example': KitBootstrapSpinnerExample,
    'kit-bootstrap-table-example': KitBootstrapTableExample,
    'kit-bootstrap-tabs-example': KitBootstrapTabsExample,
    'kit-bootstrap-toast-example': KitBootstrapToastExample,
    'kit-bootstrap-tooltip-example': KitBootstrapTooltipExample,
  },
}
</script>
