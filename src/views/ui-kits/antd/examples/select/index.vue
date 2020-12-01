<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <div class="d-inline-block mb-3 mr-3">
        <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="d-inline-block mb-3 mr-3">
        <a-select defaultValue="lucy" style="width: 200px" @change="handleChange">
          <a-select-opt-group>
            <span slot="label">
              <a-icon type="user" />Manager
            </span>
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select-opt-group>
          <a-select-opt-group label="Engineer">
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select-opt-group>
        </a-select>
      </div>
    </div>
    <h5 class="mb-3">
      <strong>Multiple</strong>
    </h5>
    <div class="mb-5">
      <a-select
        mode="multiple"
        :defaultValue="['a1', 'b2']"
        style="width: 100%"
        @change="handleChange"
        placeholder="Please select"
      >
        <a-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i"
        >{{(i + 9).toString(36) + i}}</a-select-option>
      </a-select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdSelectExample',
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    },
  },
}
</script>
