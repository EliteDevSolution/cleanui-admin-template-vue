<template>
  <div :class="$style.container">
    <template v-for="item in favs">
      <a-tooltip placement="bottom" :key="item.key">
        <template slot="title">{{ item.title }}</template>
        <span>
          <router-link :to="item.url" :class="$style.item" class="mr-3">
            <i class="fe" :class="[$style.icon, item.icon]" />
          </router-link>
        </span>
      </a-tooltip>
    </template>
    <a-tooltip placement="bottom">
      <template slot="title">Bookmarks</template>
      <span :class="$style.item">
        <a-dropdown :visible="dropdownVisible" :trigger="['click']" placement="bottomLeft">
          <div :class="$style.dropdown" @click="toggleDropdown">
            <i class="fe fe-star" :class="$style.icon"></i>
          </div>
          <div slot="overlay">
            <div class="card cui__utils__shadow width-350">
              <div class="card-body p-1">
                <div class="p-2">
                  <a-input
                    v-model="searchText"
                    @change="filterPagesList"
                    allowClear
                    :placeholder="$t('topBar.findPages')"
                  />
                </div>
                <div class="height-200">
                  <vue-custom-scrollbar :style="{ height: '100%' }">
                    <div class="px-2 pb-2">
                      <template v-for="item in filteredPagesList">
                        <router-link :key="item.key" :to="item.url" :class="$style.link">
                          <div
                            :class="{
                              [$style.setIcon]: true,
                              [$style.setIconActive]: item.isActive,
                            }"
                            @click="e => setFav(e, item)"
                          >
                            <i class="fe fe-star" />
                          </div>
                          <span>
                            <i class="mr-2 fe" :class="item.icon" />
                            {{ item.title }}
                          </span>
                        </router-link>
                      </template>
                    </div>
                  </vue-custom-scrollbar>
                </div>
                <div class="p-2">
                  <a-button type="primary" @click="toggleDropdown">Close</a-button>
                </div>
              </div>
            </div>
          </div>
        </a-dropdown>
      </span>
    </a-tooltip>
  </div>
</template>

<script>
import store from 'store'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { getMenuData } from '@/services/menu.service'

export default {
  components: {
    vueCustomScrollbar,
  },
  data: function () {
    return {
      dropdownVisible: false,
      searchText: '',
      favs: store.get('app.topbar.favs') || [],
      pagesList: [],
      menuData: getMenuData,
      filteredPagesList: [],
    }
  },
  mounted() {
    this.loadPagesList()
    this.filterPagesList()
  },
  methods: {
    loadPagesList() {
      const pagesList = () => {
        const menuData = this.menuData
        const _menuData = JSON.parse(JSON.stringify(menuData))
        const flattenItems = (items, key) =>
          items.reduce((flattenedItems, item) => {
            if (item.category) {
              return flattenedItems
            }
            if (item.key === 'nestedItem1' || item.disabled) { // skip unwanted items
              return flattenedItems
            }
            if (Array.isArray(item[key])) {
              const items = item[key].map(child => {
                child.icon = item.icon
                return child
              })
              return flattenedItems.concat(flattenItems(items, key))
            }
            flattenedItems.push(item)
            return flattenedItems
          }, [])
        return flattenItems(_menuData, 'children')
      }
      this.pagesList = pagesList()
    },
    filterPagesList() {
      const pagesList = this.pagesList
      const favs = this.favs
      const _searchText = this.searchText ? this.searchText.toUpperCase() : ''
      const getFilteredPageList = () => {
        const list = []
        pagesList.forEach(item => {
          const isActive = favs.some(child => child.url === item.url)
          if (!item.title.toUpperCase().includes(_searchText) && _searchText) {
            return null
          }
          item.isActive = isActive
          list.push(item)
          return null
        })
        return list
      }
      this.filteredPagesList = getFilteredPageList()
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    setFav(e, item) {
      e.preventDefault()
      e.stopPropagation()
      const favs = this.favs
      const isActive = favs.some(child => child.url === item.url)
      if (isActive) {
        const filtered = favs.filter(child => child.url !== item.url)
        store.set('app.topbar.favs', filtered)
        this.favs = filtered
        this.filterPagesList()
        return
      }
      if (favs.length >= 3) {
        this.$message.info('Only three pages can be added to your bookmarks.')
        return
      }
      const items = [...favs]
      items.push(item)
      store.set('app.topbar.favs', items)
      this.favs = items
      this.filterPagesList()
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
