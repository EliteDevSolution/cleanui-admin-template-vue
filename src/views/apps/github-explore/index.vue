<template>
  <div>
    <div class="d-flex flex-wrap">
      <div class="mr-auto pr-3 my-2">
        <i class="fe fe-book font-size-21 mr-2"></i>
        <div class="text-nowrap d-inline-block font-size-18 text-dark">
          <a class="font-size-18 text-blue" href="javascript: void(0);">umijs</a> /
          <a class="font-size-18 text-blue" href="javascript: void(0);">umi</a>
        </div>
      </div>
      <div class="d-flex flex-wrap font-size-16">
        <div class="mr-3 my-2 text-nowrap">
          <i class="fe fe-user-check font-size-21 mr-1"></i>
          Watch
          <strong class="text-dark font-size-18 ml-1">6,870</strong>
        </div>
        <div class="mr-3 my-2 text-nowrap">
          <i class="fe fe-star font-size-21 mr-1"></i>
          Star
          <strong class="text-dark font-size-18 ml-1">16,356</strong>
        </div>
        <div class="mr-3 my-2 text-nowrap">
          <i class="fe fe-copy font-size-21 mr-1"></i>
          Fork
          <strong class="text-dark font-size-18 ml-1">569</strong>
        </div>
      </div>
    </div>
    <a-tabs defaultActiveKey="1" class="kit-tabs-bordered mb-2">
      <a-tab-pane tab="Code" key="1" />
      <a-tab-pane key="2">
        <span slot="tab">
          Issues
          <strong>(85)</strong>
        </span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          Pull requests
          <strong>(4)</strong>
        </span>
      </a-tab-pane>
      <a-tab-pane tab="Sequrity" key="4" />
      <a-tab-pane tab="Insights" key="5" />
    </a-tabs>
    <div class="text-dark font-size-18 mb-3">
      Pluggable enterprise-level react application framework.
      <a
        class="text-blue"
        href="javascript: void(0);"
      >https://umijs.org/</a>
    </div>
    <div class="mb-4">
      <a
        href="javascript: void(0);"
        class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
      >Umi</a>
      <a
        href="javascript: void(0);"
        class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
      >React-framework</a>
      <a
        href="javascript: void(0);"
        class="badge text-blue text-uppercase bg-light font-size-12 mr-2"
      >Umijs</a>
    </div>
    <div class="d-flex flex-wrap justify-content-around border-top border-bottom">
      <div class="mx-3 my-2 text-nowrap">
        <i class="fe fe-arrow-down-right font-size-21 mr-1 align-text-top" />
        <strong class="text-dark font-size-18 mr-1">2,128</strong>
        commits
      </div>
      <div class="mx-3 my-2 text-nowrap">
        <i class="fe fe-chevrons-down font-size-21 mr-1 align-text-top" />
        <strong class="text-dark font-size-18 mr-1">18</strong>
        branches
      </div>
      <div class="mx-3 my-2 text-nowrap">
        <i class="fe fe-book-open font-size-21 mr-1 align-text-top" />
        <strong class="text-dark font-size-18 mr-1">1,286</strong>
        issues
      </div>
      <div class="mx-3 my-2 text-nowrap">
        <i class="fe fe-users font-size-21 mr-1 align-text-top" />
        <strong class="text-dark font-size-18 mr-1">26</strong>
        contributes
      </div>
    </div>
    <div class="d-flex flex-wrap border-bottom mb-3">
      <div class="my-3 mr-3">
        <a-dropdown placement="bottomLeft" :trigger="['click']">
          <a
            class="btn btn-light text-blue dropdown-toggle"
            href="javascript: void(0);"
          >Branch: Master</a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">Testing</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Developers</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Killer features</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <a class="btn btn-light text-blue my-3 mr-auto" href="javascript: void(0);">New Pull Request</a>
      <a class="btn btn-light text-blue my-3 mr-3" href="javascript: void(0);">Create New File</a>
      <div class="dropdown my-3 mr-3">
        <a-dropdown placement="bottomLeft" :trigger="['click']">
          <a class="btn btn-success dropdown-toggle" href="javascript: void(0);">Clone or Download</a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">Clone</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Download</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
    <div class="d-flex align-items-center flex-wrap mb-4">
      <a
        href="javascript: void(0);"
        class="flex-shrink-0 d-flex align-items-center pr-3 mr-auto text-primary mt-1 mb-1"
      >
        <div class="kit__utils__avatar kit__utils__avatar--size27 mr-3 flex-shrink-0">
          <img src="resources/images/avatars/1.jpg" alt="sorrycc" />
        </div>
        <div>sorrycc</div>
      </a>
      <div class="mt-1 mb-1">Latest commit ab2c07f 23 hours ago</div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover text-nowrap">
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td style="width: 25px;">
              <i :class="[item.type === 'folder' ? 'fa-folder' : 'fa-file-o', 'fa']" />
            </td>
            <td class="text-nowrap">
              <a href="javascript: void(0);">{{item.name}}</a>
            </td>
            <td class="text-nowrap">{{item.info}}</td>
            <td class="text-nowrap text-right">{{item.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import data from './data.json'
export default {
  data() {
    return {
      data,
    }
  },
}
</script>
