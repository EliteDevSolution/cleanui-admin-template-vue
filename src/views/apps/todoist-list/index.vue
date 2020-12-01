<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="mb-4">
          <a-input placeholder="Search task">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </div>
        <div :class="$style.categories">
          <vue-custom-scrollbar style="height: 100%">
            <div class="d-flex flex-column">
              <div
                :class="[$style.category, $style.title]"
                class="text-dark font-size-18 font-weight-bold"
              >
                <span class="text-truncate">Overall</span>
              </div>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Today</span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Next 7 days</span>
              </a>
              <div
                :class="[$style.category, $style.title]"
                class="text-dark font-size-18 font-weight-bold"
              >
                <span class="text-truncate">To Do Lists</span>
              </div>
              <a
                href="javascript: void(0);"
                :class="[$style.category, $style.current]"
                class="text-dark font-size-18 font-weight-bold"
              >
                <span class="text-truncate">
                  Welcome
                  <span role="img" aria-label="hello">&#128075;</span>
                </span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Homework (1)</span>
              </a>
              <a
                href="javascript: void(0);"
                :class="$style.category"
                class="text-dark font-size-18"
              >
                <span class="text-truncate">Fitness</span>
              </a>
            </div>
          </vue-custom-scrollbar>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="card">
          <div class="card-header card-header-flex align-items-center">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0 mr-2 font-size-18">
                <span class="text-truncate">
                  Welcome
                  <span role="img" aria-label="hello">&#128075;</span>
                </span>
              </h5>
            </div>
            <div>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Unlock Account</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-unlock" />
                </a>
              </a-tooltip>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Mark as important</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-star" />
                </a>
              </a-tooltip>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>Delete user</span>
                </template>
                <a href="javascript: void(0);" class="btn btn-sm btn-light mr-2">
                  <i class="fe fe-trash" />
                </a>
              </a-tooltip>
            </div>
          </div>
          <div class="card-body">
            <h6 class="text-uppercase text-dark font-size-18 font-weight-bold mb-2">Current tasks</h6>
            <p class="mb-3">Welocme to Todoist! Let&apos;s get you started with a few tips</p>
            <Tree
              :data="current"
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
            <button
              type="button"
              class="btn btn-primary btn-with-addon text-nowrap"
              v-on:click="toggleInput"
            >
              <span class="btn-addon">
                <i class="btn-addon-icon fe fe-plus-circle" />
              </span>
              Add Task
            </button>
            <input
              v-if="showInput"
              class="form-control mt-3"
              placeholder="Add task here and press enter..."
              type="text"
              v-on:keyup.enter="addTask"
            />
            <h6 class="text-uppercase text-dark font-size-18 font-weight-bold mb-2 mt-4">Completed</h6>
            <p class="mb-3">Welocme to Todoist! Let&apos;s get you started with a few tips</p>
            <Tree
              :data="completed"
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
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <kit-chart-4 />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <kit-chart-4v1 />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <kit-chart-4v2 />
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <kit-table-6 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { DraggableTree } from 'vue-draggable-nested-tree'
import KitTable6 from '@/components/kit/widgets/Tables/6/index'
import KitChart4 from '@/components/kit/widgets/Charts/4/index'
import KitChart4v1 from '@/components/kit/widgets/Charts/4v1/index'
import KitChart4v2 from '@/components/kit/widgets/Charts/4v2/index'
export default {
  components: {
    vueCustomScrollbar,
    Tree: DraggableTree,
    KitTable6,
    KitChart4,
    KitChart4v1,
    KitChart4v2,
  },
  data: function () {
    return {
      current: [
        {
          name: 'Level 1',
          children: [{ name: 'Level 2' }],
        },
        {
          name: 'Level 1',
          expanded: true,
          children: [{ name: 'Level 2' }, { name: 'Level 2' }, { name: 'Level 2' }],
        },
      ],
      completed: [
        { name: 'Level 0', checked: true },
        { name: 'Level 0', checked: true },
        { name: 'Level 0', checked: true },
      ],
      showInput: false,
    }
  },
  methods: {
    getTriggerEl(nodeVm) {
      return nodeVm.$el.querySelector('.dd-handle')
    },
    toggleInput() {
      this.showInput = !this.showInput
    },
    addTask(e) {
      const task = e.target.value
      if (task !== '') {
        this.current.push({ name: task })
      }
    },
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
<style>
</style>
