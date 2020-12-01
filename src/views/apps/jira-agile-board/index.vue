<template>
  <div>
    <div class="d-flex align-items-center mb-4">
      <div class="kit__utils__avatarGroup mr-4 flex-shrink-0">
        <div class="kit__utils__avatar kit__utils__avatar--size46 kit__utils__avatar--rounded">
          <img src="resources/images/avatars/1.jpg" alt="Mary Stanform" />
        </div>
        <div class="kit__utils__avatar kit__utils__avatar--size46 kit__utils__avatar--rounded">
          <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
        </div>
        <div class="kit__utils__avatar kit__utils__avatar--size46 kit__utils__avatar--rounded">
          <img src="resources/images/avatars/3.jpg" alt="Mary Stanform" />
        </div>
        <div class="kit__utils__avatar kit__utils__avatar--size46 kit__utils__avatar--rounded">
          <img src="resources/images/avatars/4.jpg" alt="Mary Stanform" />
        </div>
        <button class="kit__utils__avatarGroupAdd">
          <i class="fe fe-plus"></i>
        </button>
      </div>
      <a class="mr-4" href="javascript: void(0);">Only My Issues</a>
      <div>Recently Updated</div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="card bg-light py-3 px-2">
          <h3 class="font-weight-bold text-dark font-size-18 mb-3">Backlog</h3>
          <draggable :list="backlog" group="board" style="min-height: 500px;">
            <div :class="$style.card" v-for="(item) in backlog" :key="item.id">
              <div :class="$style.content">
                <div :class="[$style.flag, 'bg-' + item.color]"></div>
                <div class="d-flex flex-wrap-reverse align-items-center">
                  <h5 class="text-dark font-size-18 mt-2 mr-auto">{{item.title}}</h5>
                  <i
                    :class="[item.income ? 'fe-arrow-left-circle text-success' : 'fe-arrow-right-circle text-danger']"
                    class="font-size-30 flex-shrink-0 fe"
                  ></i>
                </div>
                <div class="text-gray-5 mb-2">Deadline {{item.deadline}}</div>
                <div class="d-flex align-items-center flex-wrap pb-2">
                  <div
                    class="kit__utils__avatar kit__utils__avatar--rounded kit__utils__avatar--size27 flex-shrink-0 mr-2"
                  >
                    <img :src="item.participant" alt="User" />
                  </div>
                  <div class="text-gray-5">
                    <del>{{item.note}}</del>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card bg-light py-3 px-2">
          <h3 class="font-weight-bold text-dark font-size-18 mb-3">To Do</h3>
          <draggable :list="todo" group="board" style="min-height: 500px;">
            <div :class="$style.card" v-for="(item) in todo" :key="item.id">
              <div :class="$style.content">
                <div :class="[$style.flag, 'bg-' + item.color]"></div>
                <div class="d-flex flex-wrap-reverse align-items-center">
                  <h5 class="text-dark font-size-18 mt-2 mr-auto">{{item.title}}</h5>
                  <i
                    :class="[item.income ? 'fe-arrow-left-circle text-success' : 'fe-arrow-right-circle text-danger']"
                    class="font-size-30 flex-shrink-0 fe"
                  ></i>
                </div>
                <div class="text-gray-5 mb-2">Deadline {{item.deadline}}</div>
                <div class="d-flex align-items-center flex-wrap pb-2">
                  <div
                    class="kit__utils__avatar kit__utils__avatar--rounded kit__utils__avatar--size27 flex-shrink-0 mr-2"
                  >
                    <img :src="item.participant" alt="User" />
                  </div>
                  <div class="text-gray-5">
                    <del>{{item.note}}</del>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card bg-light py-3 px-2">
          <h3 class="font-weight-bold text-dark font-size-18 mb-3">In Progress</h3>
          <draggable :list="progress" group="board" style="min-height: 500px;">
            <div :class="$style.card" v-for="(item) in progress" :key="item.id">
              <div :class="$style.content">
                <div :class="[$style.flag, 'bg-' + item.color]"></div>
                <div class="d-flex flex-wrap-reverse align-items-center">
                  <h5 class="text-dark font-size-18 mt-2 mr-auto">{{item.title}}</h5>
                  <i
                    :class="[item.income ? 'fe-arrow-left-circle text-success' : 'fe-arrow-right-circle text-danger']"
                    class="font-size-30 flex-shrink-0 fe"
                  ></i>
                </div>
                <div class="text-gray-5 mb-2">Deadline {{item.deadline}}</div>
                <div class="d-flex align-items-center flex-wrap pb-2">
                  <div
                    class="kit__utils__avatar kit__utils__avatar--rounded kit__utils__avatar--size27 flex-shrink-0 mr-2"
                  >
                    <img :src="item.participant" alt="User" />
                  </div>
                  <div class="text-gray-5">
                    <del>{{item.note}}</del>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card bg-light py-3 px-2">
          <h3 class="font-weight-bold text-dark font-size-18 mb-3">Completed</h3>
          <draggable :list="completed" group="board" style="min-height: 500px;">
            <div :class="$style.card" v-for="(item) in completed" :key="item.id">
              <div :class="$style.content">
                <div :class="[$style.flag, 'bg-' + item.color]"></div>
                <div class="d-flex flex-wrap-reverse align-items-center">
                  <h5 class="text-dark font-size-18 mt-2 mr-auto">{{item.title}}</h5>
                  <i
                    :class="[item.income ? 'fe-arrow-left-circle text-success' : 'fe-arrow-right-circle text-danger']"
                    class="font-size-30 flex-shrink-0 fe"
                  ></i>
                </div>
                <div class="text-gray-5 mb-2">Deadline {{item.deadline}}</div>
                <div class="d-flex align-items-center flex-wrap pb-2">
                  <div
                    class="kit__utils__avatar kit__utils__avatar--rounded kit__utils__avatar--size27 flex-shrink-0 mr-2"
                  >
                    <img :src="item.participant" alt="User" />
                  </div>
                  <div class="text-gray-5">
                    <del>{{item.note}}</del>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { backlog, todo, progress, completed } from './data.json'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      backlog,
      todo,
      progress,
      completed,
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
