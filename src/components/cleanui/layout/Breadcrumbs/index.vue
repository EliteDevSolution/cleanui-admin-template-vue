<template>
  <div :class="$style.breadcrumbs">
    <div :class="$style.path">
      <router-link to="/">Home</router-link>
      <template v-for="(item, index) in breadcrumb">
        <span v-if="index != 0" :key="index">
          <span :class="$style.arrow"></span>
          <span>{{item.title}}</span>
        </span>
      </template>
      <span v-if="activeItem">
        <span :class="$style.arrow"></span>
        <strong :class="$style.current">{{activeItem.title}}</strong>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getMenuData } from '@/services/menu.service'
import reduce from 'lodash/reduce'

export default {
  name: 'breadcrumbs',
  data() {
    return {
      breadcrumb: [],
      activeItem: {},
      path: [],
    }
  },
  computed: {
    ...mapState(['settings']),
    menuData() {
      return getMenuData
    },
  },
  methods: {
    getPath(data, url, parents = []) {
      if (url === '/') {
        url = '/dashboard/alpha'
      }
      const items = reduce(
        data,
        (result, entry) => {
          if (result.length) {
            return result
          }
          if (entry.children) {
            const nested = this.getPath(entry.children, url, [entry].concat(parents))
            return (result || []).concat(nested.filter(e => !!e))
          }
          if (entry.url === url) {
            return [entry].concat(parents)
          }
          return result
        },
        [],
      )
      this.activeItem = items[0]
      return items
    },
  },
  mounted: function () {
    this.breadcrumb = this.getPath(this.menuData, this.$route.path)
  },
  watch: {
    $route(to) {
      this.breadcrumb = this.getPath(this.menuData, to.path)
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
