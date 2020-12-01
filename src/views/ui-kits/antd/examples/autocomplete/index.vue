<template>
  <div>
    <div class="row">
      <div class="col-lg-6 mb-5">
        <h5 class="mb-3">
          <strong>Basic</strong>
        </h5>
        <a-auto-complete
          :dataSource="dataSource"
          style="width: 200px"
          @select="onSelect"
          @search="handleSearch"
          placeholder="input here"
        />
      </div>
      <div class="col-lg-6 mb-5">
        <h5 class="mb-3">
          <strong>Customized</strong>
        </h5>
        <a-auto-complete style="width: 200px" @search="handleSearchCustom" placeholder="input here">
          <template slot="dataSource">
            <a-select-option v-for="email in result" :key="email">{{email}}</a-select-option>
          </template>
        </a-auto-complete>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdAutoCompleteExample',
  data() {
    return {
      dataSource: [],
      result: [],
    }
  },
  methods: {
    handleSearch(value) {
      this.dataSource = !value ? [] : [value, value + value, value + value + value]
    },
    handleSearchCustom(value) {
      let result
      if (!value || value.indexOf('@') >= 0) {
        result = []
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
      }
      this.result = result
    },
    onSelect(value) {
      console.log('onSelect', value)
    },
  },
}
</script>
