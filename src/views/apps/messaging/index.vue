<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="mb-4">
          <a-input placeholder="Search users">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </div>
        <div :class="$style.dialogs">
          <vue-custom-scrollbar style="height: 100%">
            <a
              href="#"
              v-for="(item, index) in dialogs"
              :key="item.name"
              :class="[$style.item, index === activeIndex ? $style.current : '']"
              class="d-flex flex-nowrap align-items-center"
              v-on:click.stop.prevent="changeDialog(index)"
            >
              <div class="kit__utils__avatar kit__utils__avatar--size46 mr-3 flex-shrink-0">
                <img :src="item.avatar" :alt="item.name" />
              </div>
              <div :class="$style.info" class="flex-grow-1">
                <div class="text-uppercase font-size-12 text-truncate text-gray-6">{{item.position}}</div>
                <div class="text-dark font-size-18 font-weight-bold text-truncate">{{item.name}}</div>
              </div>
              <div v-if="item.unread" :class="$style.unread" class="flex-shrink-0 align-self-start">
                <div class="badge badge-success">{{item.unread}}</div>
              </div>
            </a>
          </vue-custom-scrollbar>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="card">
          <div class="card-header card-header-flex align-items-center">
            <div class="d-flex flex-column justify-content-center mr-auto">
              <h5 class="mb-0 mr-2 font-size-18">
                {{name}}
                <span class="font-size-14 text-gray-6">({{position}})</span>
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
            <div class="height-700">
              <vue-custom-scrollbar style="height: 100%">
                <div class="d-flex flex-column justify-content-end height-100p">
                  <div
                    v-for="(message, index) in dialog"
                    :key="index"
                    :class="[$style.message, message.owner !== 'you' ? $style.answer : '']"
                  >
                    <div :class="$style.messageContent">
                      <div
                        class="text-gray-4 font-size-12 text-uppercase"
                      >{{message.owner}}, {{message.time}}</div>
                      <div>{{message.content}}</div>
                    </div>
                    <div class="kit__utils__avatar" :class="$style.messageAvatar">
                      <img
                        :src="message.owner !== 'you' ? avatar : 'resources/images/avatars/avatar-2.png'"
                        :alt="name"
                      />
                    </div>
                  </div>
                </div>
              </vue-custom-scrollbar>
            </div>
            <div class="pt-2 pb-2">{{name}} is typing...</div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Send message..." />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fe fe-send align-middle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import dialogs from './data.json'

export default {
  components: { vueCustomScrollbar },
  data: function () {
    const activeIndex = 0
    return {
      activeIndex,
      dialogs,
      name: dialogs[activeIndex].name,
      position: dialogs[activeIndex].position,
      dialog: dialogs[activeIndex].dialog,
      avatar: dialogs[activeIndex].avatar,
    }
  },
  methods: {
    changeDialog: function (index) {
      this.activeIndex = index
      this.name = dialogs[index].name
      this.position = dialogs[index].position
      this.dialog = dialogs[index].dialog
      this.avatar = dialogs[index].avatar
    },
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
