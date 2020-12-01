<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <kit-general-2 />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <kit-general-2v1 />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <kit-general-2v2 />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h6 class="text-uppercase text-dark font-weight-bold mb-3">To Do</h6>
            <p class="mb-3">Welcome to Todoist! Let&apos;s get you started with a few tips</p>
            <Tree
              :data="checklist"
              draggable="draggable"
              :get-trigger-el="getTriggerEl"
              cross-tree="cross-tree"
              class="dd mb-4"
            >
              <div slot-scope="{data, store}" class="dd-item">
                <template v-if="!data.isDragPlaceHolder">
                  <div class="dd-handle dd3-handle"></div>
                  <button
                    v-if="data.children &amp;&amp; data.children.length"
                    :class="['dd-item-toggle', data.open ? 'collapse' : 'expand']"
                    @click="store.toggleOpen(data)"
                    type="button"
                  >{{data.open ? 'Collapse' : 'Expand'}}&nbsp;</button>
                  <div class="dd3-content">
                    <a-checkbox :default-checked="data.checked">{{data.name}}</a-checkbox>
                  </div>
                </template>
              </div>
            </Tree>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="card">
          <div class="card-body">
            <h6 class="text-uppercase text-dark font-weight-bold mb-3">Recent help requests</h6>
            <div class="kit__utils__table mb-4">
              <a-table :columns="columns" :dataSource="data" :pagination="false">
                <template slot="email" slot-scope="text">
                  <a href="javascript: void(0);" class="text-blue">{{text}}</a>
                </template>
                <template slot="actions">
                  <button type="button" class="btn btn-outline-success">Resolve</button>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <kit-table-7 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DraggableTree } from 'vue-draggable-nested-tree'
import KitGeneral2 from '@/components/kit/widgets/General/2/index'
import KitGeneral2v1 from '@/components/kit/widgets/General/2v1/index'
import KitGeneral2v2 from '@/components/kit/widgets/General/2v2/index'
import KitTable7 from '@/components/kit/widgets/Tables/7/index'
import data from './data.json'
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    class: 'bg-transparent text-gray-6',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    class: 'bg-transparent text-gray-6',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    class: 'bg-transparent',
    scopedSlots: { customRender: 'email' },
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    class: 'text-right bg-transparent text-gray-6',
    scopedSlots: { customRender: 'actions' },
  },
]
export default {
  components: {
    KitGeneral2,
    KitGeneral2v1,
    KitGeneral2v2,
    KitTable7,
    Tree: DraggableTree,
  },
  data: function () {
    return {
      data,
      columns,
      checklist: [
        { name: 'IT Manager', checked: true },
        {
          name: 'Regional Managers',
          expanded: true,
          children: [
            { name: 'Branch Manager', checked: true },
            { name: 'QA Engineer', checked: true },
            { name: 'Network Administrator', checked: false },
            { name: 'Project Manager', checked: false },
            { name: 'Team Leader', checked: true },
          ],
        },
      ],
    }
  },
  methods: {
    getTriggerEl(nodeVm) {
      return nodeVm.$el.querySelector('.dd-handle')
    },
  },
}
</script>
