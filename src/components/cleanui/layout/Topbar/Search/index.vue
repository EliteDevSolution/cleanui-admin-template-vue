<template>
  <div class="d-inline-block mr-4" @keydown.esc="closeSearch()">
    <a-input
      :class="$style.extInput"
      :placeholder="$t('topBar.typeToSearch')"
      style="width: 200px;"
      @focus="openSearch"
      ref="outerInput"
    >
      <span slot="prefix">
        <a-icon type="search" style="color: rgba(0,0,0,.25)" />
      </span>
    </a-input>
    <div :class="[$style.livesearch, showSearch ? $style.livesearchVisible : '']">
      <button @click="closeSearch" :class="$style.close" type="button">
        <i class="icmn-cross"></i>
      </button>
      <div class="container-fluid">
        <div :class="$style.wrapper">
          <input
            v-model="searchText"
            :class="$style.searchInput"
            :placeholder="$t('topBar.typeToSearch')"
            ref="innerInput"
          />
          <ul :class="$style.options">
            <li :class="[$style.option, $style.optionCheckbox]">
              <a-checkbox checked>Search within page</a-checkbox>
            </li>
            <li :class="$style.option">Press enter to search</li>
          </ul>
          <div v-if="!searchText" :class="$style.results">
            <div :class="$style.resultsTitle">
              <span>No Results Found</span>
            </div>
          </div>
          <div v-if="searchText" :class="$style.results">
            <div :class="$style.resultsTitle">
              <span>Pages Search Results</span>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div :class="$style.resultContent">
                  <div
                    :class="$style.resultThumb"
                    :style="{backgroundImage: 'url(\'resources/images/content/photos/1.jpeg\')'}"
                  >#1</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">Samsung Galaxy A50 4GB/64GB</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
                <div :class="$style.resultContent">
                  <div
                    :class="$style.resultThumb"
                    :style="{backgroundImage: 'url(\'resources/images/content/photos/2.jpeg\')'}"
                  >#2</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">Apple iPhone 11 64GB</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
                <div :class="$style.resultContent">
                  <div
                    :class="$style.resultThumb"
                    :style="{backgroundImage: 'url(\'resources/images/content/photos/3.jpeg\')'}"
                  >#3</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">Samsung Galaxy A51 SM-A515F/DS 4GB/64GB</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
                <div :class="$style.resultContent">
                  <div
                    :class="$style.resultThumb"
                    :style="{backgroundImage: 'url(\'resources/images/content/photos/4.jpeg\')'}"
                  >#4</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">Xiaomi Redmi 8 4GB/64GB</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div :class="$style.resultContent">
                  <div :class="$style.resultThumb">01</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">White Case</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
                <div :class="$style.resultContent">
                  <div :class="$style.resultThumb">02</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">Blue Case</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
                <div :class="$style.resultContent">
                  <div :class="$style.resultThumb">03</div>
                  <div :class="$style.result">
                    <div :class="$style.resultText">Green Case</div>
                    <div :class="$style.resultSource">In some partition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showSearch: false,
      searchText: '',
    }
  },
  methods: {
    openSearch() {
      this.showSearch = true
      setTimeout(() => {
        this.$refs.innerInput.focus()
      }, 100)
    },
    closeSearch() {
      this.showSearch = false
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
