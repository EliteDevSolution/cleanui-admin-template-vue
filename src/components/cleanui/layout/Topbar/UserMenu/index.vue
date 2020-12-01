<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft" @visibleChange="addCount">
    <div :class="$style.dropdown">
      <a-badge :count="count">
        <a-avatar shape="square" icon="user" size="large" :class="$style.avatar" />
      </a-badge>
    </div>
    <a-menu slot="overlay">
      <a-menu-item>
        <div>
          <strong>{{ $t('topBar.profileMenu.hello') }}, Username</strong>
        </div>
        <div>
          <strong class="mr-1">{{ $t('topBar.profileMenu.billingPlan') }}:</strong> Professional
        </div>
        <div>
          <strong class="mr-1">{{ $t('topBar.profileMenu.role') }}:</strong> Admin
        </div>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <div>
          <strong class="mr-1">{{ $t('topBar.profileMenu.email') }}:</strong> admin@mediatec.org
        </div>
        <div>
          <strong class="mr-1">{{ $t('topBar.profileMenu.phone') }}:</strong> -
        </div>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript: void(0);">
          <i class="fe fe-user mr-2"></i>
          {{ $t('topBar.profileMenu.editProfile') }}
        </a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript: void(0);" @click="logout">
          <i class="fe fe-log-out mr-2"></i>
          {{ $t('topBar.profileMenu.logout') }}
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  data: function () {
    return {
      count: 7,
    }
  },
  methods: {
    addCount() {
      this.count++
    },
    logout() {
      this.$firebaseAuth.logout()
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
