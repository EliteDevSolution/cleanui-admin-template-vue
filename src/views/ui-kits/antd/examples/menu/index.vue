<template>
  <div>
    <h5 class="mb-3">
      <strong>Horizontal</strong>
    </h5>
    <div class="mb-5">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail">
          <a-icon type="mail" />Navigation One
        </a-menu-item>
        <a-menu-item key="app" disabled>
          <a-icon type="appstore" />Navigation Two
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="setting" />Navigation Three - Submenu
          </span>
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">Option 1</a-menu-item>
            <a-menu-item key="setting:2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">Option 3</a-menu-item>
            <a-menu-item key="setting:4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a
            href="https://antdv.com"
            target="_blank"
            rel="noopener noreferrer"
          >Navigation Four - Link</a>
        </a-menu-item>
      </a-menu>
    </div>
    <h5 class="mb-3">
      <strong>Vertical</strong>
    </h5>
    <div class="mb-5">
      <a-menu style="width: 256px" mode="vertical">
        <a-menu-item key="1">
          <a-icon type="mail" />Navigation One
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />Navigation Two
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="appstore" />
            <span>Navigation Three</span>
          </span>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
          <a-sub-menu key="sub1-2" title="Submenu">
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="setting" />
            <span>Navigation Four</span>
          </span>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdMenuExample',
  data() {
    return {
      current: ['mail'],
    }
  },
}
</script>
