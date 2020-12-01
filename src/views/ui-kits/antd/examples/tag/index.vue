<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-3">
      <a-tag class="mb-3 mr-3">Tag 1</a-tag>
      <a-tag class="mb-3 mr-3">
        <a href="https://github.com/vueComponent/ant-design">Link</a>
      </a-tag>
      <a-tag closable @close="log" class="mb-3 mr-3">Tag 2</a-tag>
      <a-tag closable @close="preventDefault" class="mb-3 mr-3">Prevent Default</a-tag>
    </div>
    <h5 class="mb-3">
      <strong>Presets</strong>
    </h5>
    <div class="mb-3">
      <a-tag color="pink" class="mb-3 mr-3">pink</a-tag>
      <a-tag color="red" class="mb-3 mr-3">red</a-tag>
      <a-tag color="orange" class="mb-3 mr-3">orange</a-tag>
      <a-tag color="green" class="mb-3 mr-3">green</a-tag>
      <a-tag color="cyan" class="mb-3 mr-3">cyan</a-tag>
      <a-tag color="blue" class="mb-3 mr-3">blue</a-tag>
      <a-tag color="purple" class="mb-3 mr-3">purple</a-tag>
    </div>
    <h5 class="mb-3">
      <strong>Custom</strong>
    </h5>
    <div class="mb-3">
      <a-tag color="#f50" class="mb-3 mr-3">#f50</a-tag>
      <a-tag color="#2db7f5" class="mb-3 mr-3">#2db7f5</a-tag>
      <a-tag color="#87d068" class="mb-3 mr-3">#87d068</a-tag>
      <a-tag color="#108ee9" class="mb-3 mr-3">#108ee9</a-tag>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdTagExample',
  methods: {
    log(e) {
      console.log(e)
    },
    preventDefault(e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    },
  },
}
</script>
