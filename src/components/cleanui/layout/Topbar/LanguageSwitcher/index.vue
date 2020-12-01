<template>
  <a-dropdown :trigger="['click']" placement="bottomRight">
    <div :class="$style.dropdown">
      <span class="text-uppercase">{{ language }}</span>
    </div>
    <a-menu slot="overlay" @click="selectLocale">
      <a-menu-item key="en-US">
        <span class="text-uppercase font-size-12 mr-2">EN</span>
        English
      </a-menu-item>
      <a-menu-item key="fr-FR">
        <span class="text-uppercase font-size-12 mr-2">FR</span>
        French
      </a-menu-item>
      <a-menu-item key="ru-RU">
        <span class="text-uppercase font-size-12 mr-2">RU</span>
        Русский
      </a-menu-item>
      <a-menu-item key="zh-CN">
        <span class="text-uppercase font-size-12 mr-2">CN</span>
        简体中文
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['settings']),
    language() {
      return this.settings.locale.substr(0, 2)
    },
  },
  methods: {
    selectLocale(item) {
      const setting = 'locale'
      this.$store.commit('CHANGE_SETTING', { setting, value: item.key })
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
