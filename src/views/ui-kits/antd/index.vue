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
          <a
            :href="example.link"
            rel="noopener noreferrer"
            target="_blank"
            class="btn btn-sm btn-light mr-3"
          >
            Component Docs & Examples
            <i class="fe fe-corner-right-up"></i>
          </a>
          <a
            href="https://antdv.com/docs/vue/introduce/"
            rel="noopener noreferrer"
            target="_blank"
            class="btn btn-sm btn-light mr-3"
          >
            Ant Design Docs
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
import KitAntdButtonExample from '@/views/ui-kits/antd/examples/button/index'
import KitAntdIconExample from '@/views/ui-kits/antd/examples/icon/index'
import KitAntdLayoutExample from '@/views/ui-kits/antd/examples/layout/index'
import KitAntdAvatarExample from '@/views/ui-kits/antd/examples/avatar/index'
import KitAntdBadgeExample from '@/views/ui-kits/antd/examples/badge/index'
import KitAntdCollapseExample from '@/views/ui-kits/antd/examples/collapse/index'
import KitAntdCommentExample from '@/views/ui-kits/antd/examples/comment/index'
import KitAntdCarouselExample from '@/views/ui-kits/antd/examples/carousel/index'
import KitAntdCardExample from '@/views/ui-kits/antd/examples/card/index'
import KitAntdCalendarExample from '@/views/ui-kits/antd/examples/calendar/index'
import KitAntdListExample from '@/views/ui-kits/antd/examples/list/index'
import KitAntdPopoverExample from '@/views/ui-kits/antd/examples/popover/index'
import KitAntdTreeExample from '@/views/ui-kits/antd/examples/tree/index'
import KitAntdTooltipExample from '@/views/ui-kits/antd/examples/tooltip/index'
import KitAntdTimelineExample from '@/views/ui-kits/antd/examples/timeline/index'
import KitAntdTagExample from '@/views/ui-kits/antd/examples/tag/index'
import KitAntdTabsExample from '@/views/ui-kits/antd/examples/tabs/index'
import KitAntdTableExample from '@/views/ui-kits/antd/examples/table/index'
import KitAntdAutoCompleteExample from '@/views/ui-kits/antd/examples/autocomplete/index'
import KitAntdCheckboxExample from '@/views/ui-kits/antd/examples/checkbox/index'
import KitAntdCascaderExample from '@/views/ui-kits/antd/examples/cascader/index'
import KitAntdDatePickerExample from '@/views/ui-kits/antd/examples/datepicker/index'
import KitAntdFormExample from '@/views/ui-kits/antd/examples/form/index'
import KitAntdGridExample from '@/views/ui-kits/antd/examples/grid/index'
import KitAntdInputNumberExample from '@/views/ui-kits/antd/examples/inputnumber/index'
import KitAntdInputExample from '@/views/ui-kits/antd/examples/input/index'
import KitAntdRateExample from '@/views/ui-kits/antd/examples/rate/index'
import KitAntdRadioExample from '@/views/ui-kits/antd/examples/radio/index'
import KitAntdSwitchExample from '@/views/ui-kits/antd/examples/switch/index'
import KitAntdSliderExample from '@/views/ui-kits/antd/examples/slider/index'
import KitAntdSelectExample from '@/views/ui-kits/antd/examples/select/index'
import KitAntdTreeSelectExample from '@/views/ui-kits/antd/examples/treeselect/index'
import KitAntdTransferExample from '@/views/ui-kits/antd/examples/transfer/index'
import KitAntdTimePickerExample from '@/views/ui-kits/antd/examples/timepicker/index'
import KitAntdUploadExample from '@/views/ui-kits/antd/examples/upload/index'
import KitAntdAlertExample from '@/views/ui-kits/antd/examples/alert/index'
import KitAntdDrawerExample from '@/views/ui-kits/antd/examples/drawer/index'
import KitAntdModalExample from '@/views/ui-kits/antd/examples/modal/index'
import KitAntdMessageExample from '@/views/ui-kits/antd/examples/message/index'
import KitAntdNotificationExample from '@/views/ui-kits/antd/examples/notification/index'
import KitAntdProgressExample from '@/views/ui-kits/antd/examples/progress/index'
import KitAntdPopconfirmExample from '@/views/ui-kits/antd/examples/popconfirm/index'
import KitAntdSpinExample from '@/views/ui-kits/antd/examples/spin/index'
import KitAntdSkeletonExample from '@/views/ui-kits/antd/examples/skeleton/index'
import KitAntdAffixExample from '@/views/ui-kits/antd/examples/affix/index'
import KitAntdBreadcrumbExample from '@/views/ui-kits/antd/examples/breadcrumb/index'
import KitAntdDropdownExample from '@/views/ui-kits/antd/examples/dropdown/index'
import KitAntdMenuExample from '@/views/ui-kits/antd/examples/menu/index'
import KitAntdPaginationExample from '@/views/ui-kits/antd/examples/pagination/index'
import KitAntdStepsExample from '@/views/ui-kits/antd/examples/steps/index'
import KitAntdAnchorExample from '@/views/ui-kits/antd/examples/anchor/index'
import KitAntdBackTopExample from '@/views/ui-kits/antd/examples/backtop/index'
import KitAntdDividerExample from '@/views/ui-kits/antd/examples/divider/index'

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
    'kit-antd-button-example': KitAntdButtonExample,
    'kit-antd-icon-example': KitAntdIconExample,
    'kit-antd-layout-example': KitAntdLayoutExample,
    'kit-antd-avatar-example': KitAntdAvatarExample,
    'kit-antd-badge-example': KitAntdBadgeExample,
    'kit-antd-collapse-example': KitAntdCollapseExample,
    'kit-antd-comment-example': KitAntdCommentExample,
    'kit-antd-carousel-example': KitAntdCarouselExample,
    'kit-antd-card-example': KitAntdCardExample,
    'kit-antd-calendar-example': KitAntdCalendarExample,
    'kit-antd-list-example': KitAntdListExample,
    'kit-antd-popover-example': KitAntdPopoverExample,
    'kit-antd-tree-example': KitAntdTreeExample,
    'kit-antd-tooltip-example': KitAntdTooltipExample,
    'kit-antd-timeline-example': KitAntdTimelineExample,
    'kit-antd-tag-example': KitAntdTagExample,
    'kit-antd-tabs-example': KitAntdTabsExample,
    'kit-antd-table-example': KitAntdTableExample,
    'kit-antd-autocomplete-example': KitAntdAutoCompleteExample,
    'kit-antd-checkbox-example': KitAntdCheckboxExample,
    'kit-antd-cascader-example': KitAntdCascaderExample,
    'kit-antd-datepicker-example': KitAntdDatePickerExample,
    'kit-antd-form-example': KitAntdFormExample,
    'kit-antd-grid-example': KitAntdGridExample,
    'kit-antd-inputnumber-example': KitAntdInputNumberExample,
    'kit-antd-input-example': KitAntdInputExample,
    'kit-antd-rate-example': KitAntdRateExample,
    'kit-antd-radio-example': KitAntdRadioExample,
    'kit-antd-switch-example': KitAntdSwitchExample,
    'kit-antd-slider-example': KitAntdSliderExample,
    'kit-antd-select-example': KitAntdSelectExample,
    'kit-antd-treeselect-example': KitAntdTreeSelectExample,
    'kit-antd-transfer-example': KitAntdTransferExample,
    'kit-antd-timepicker-example': KitAntdTimePickerExample,
    'kit-antd-upload-example': KitAntdUploadExample,
    'kit-antd-alert-example': KitAntdAlertExample,
    'kit-antd-drawer-example': KitAntdDrawerExample,
    'kit-antd-modal-example': KitAntdModalExample,
    'kit-antd-message-example': KitAntdMessageExample,
    'kit-antd-notification-example': KitAntdNotificationExample,
    'kit-antd-progress-example': KitAntdProgressExample,
    'kit-antd-popconfirm-example': KitAntdPopconfirmExample,
    'kit-antd-spin-example': KitAntdSpinExample,
    'kit-antd-skeleton-example': KitAntdSkeletonExample,
    'kit-antd-affix-example': KitAntdAffixExample,
    'kit-antd-breadcrumb-example': KitAntdBreadcrumbExample,
    'kit-antd-dropdown-example': KitAntdDropdownExample,
    'kit-antd-menu-example': KitAntdMenuExample,
    'kit-antd-pagination-example': KitAntdPaginationExample,
    'kit-antd-steps-example': KitAntdStepsExample,
    'kit-antd-anchor-example': KitAntdAnchorExample,
    'kit-antd-backtop-example': KitAntdBackTopExample,
    'kit-antd-divider-example': KitAntdDividerExample,
  },
}
</script>
