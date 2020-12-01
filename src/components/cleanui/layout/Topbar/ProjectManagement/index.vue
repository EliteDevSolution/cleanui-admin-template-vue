<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-database" :class="$style.icon"></i>
      <span class="d-none d-xl-inline">{{ $t('topBar.projectManagement') }}</span>
    </div>
    <a-menu slot="overlay">
      <a-menu-item-group title="Active">
        <a-menu-item>
          <a href="javascript: void(0);">Project Management</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript: void(0);">User Interface Development</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript: void(0);">Documentation</a>
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Inactive">
        <a-menu-item>
          <a href="javascript: void(0);">Marketing</a>
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript: void(0);">
          <i class="fe fe-settings mr-2" />
          Settings
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<style lang="scss" module>
@import "./style.module.scss";
</style>
