<template>
  <div>
    <div class="mb-5">
      <h5 class="mb-3">
        <strong>Basic</strong>
      </h5>
      <a-collapse v-model="activeKey">
        <a-collapse-panel header="This is panel header 1" key="1">
          <p>{{text}}</p>
        </a-collapse-panel>
        <a-collapse-panel header="This is panel header 2" key="2" :disabled="false">
          <p>{{text}}</p>
        </a-collapse-panel>
        <a-collapse-panel header="This is panel header 3" key="3" disabled>
          <p>{{text}}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="mb-5">
      <h5 class="mb-3">
        <strong>Borderless</strong>
      </h5>
      <a-collapse defaultActiveKey="1" :bordered="false">
        <a-collapse-panel header="This is panel header 1" key="1">
          <p>{{text}}</p>
        </a-collapse-panel>
        <a-collapse-panel header="This is panel header 2" key="2" :disabled="false">
          <p>{{text}}</p>
        </a-collapse-panel>
        <a-collapse-panel header="This is panel header 3" key="3">
          <p>{{text}}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdCollapseExample',
  data() {
    return {
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      activeKey: ['1'],
    }
  },
  watch: {
    activeKey(key) {
      console.log(key)
    },
  },
}
</script>
