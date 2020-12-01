<template>
  <div class="row" id="example-buttons">
    <div class="col-lg-6">
      <h5 class="mb-3">
        <strong>Default</strong>
      </h5>
      <div class="mb-5">
        <a-button type="primary" class="mr-3 mb-3">Primary</a-button>
        <a-button class="mr-3 mb-3">Default</a-button>
        <a-button type="dashed" class="mr-3 mb-3">Dashed</a-button>
        <a-button type="danger" class="mr-3 mb-3">Danger</a-button>
        <a-button type="link" class="mr-3 mb-3">Link</a-button>
      </div>
      <h5 class="mb-3">
        <strong>Size</strong>
      </h5>
      <div class="mb-5">
        <a-radio-group :value="size" @change="handleSizeChange">
          <a-radio-button value="large">Large</a-radio-button>
          <a-radio-button value="default">Default</a-radio-button>
          <a-radio-button value="small">Small</a-radio-button>
        </a-radio-group>
        <br />
        <br />
        <a-button type="primary" :size="size" class="mr-3 mb-3">Primary</a-button>
        <a-button :size="size">Normal</a-button>
        <a-button type="dashed" :size="size" class="mr-3 mb-3">Dashed</a-button>
        <a-button type="danger" :size="size" class="mr-3 mb-3">Danger</a-button>
        <a-button type="link" :size="size" class="mr-3 mb-3">Link</a-button>
        <br />
        <a-button type="primary" icon="download" :size="size" class="mr-3 mb-3" />
        <a-button type="primary" shape="circle" icon="download" :size="size" class="mr-3 mb-3" />
        <a-button type="primary" shape="round" icon="download" :size="size" class="mr-3 mb-3" />
        <a-button
          type="primary"
          shape="round"
          icon="download"
          :size="size"
          class="mr-3 mb-3"
        >Download</a-button>
        <a-button type="primary" icon="download" :size="size" class="mr-3 mb-3">Download</a-button>
        <br />
        <a-button-group :size="size">
          <a-button type="primary">
            <a-icon type="left" />Backward
          </a-button>
          <a-button type="primary">
            Forward
            <a-icon type="right" />
          </a-button>
        </a-button-group>
      </div>
      <h5 class="mb-3">
        <strong>Disabled</strong>
      </h5>
      <div class="mb-5">
        <a-button type="primary" class="mr-3 mb-3">Primary</a-button>
        <a-button type="primary" disabled class="mr-3 mb-3">Primary(disabled)</a-button>
        <br />
        <a-button class="mr-3 mb-3">Default</a-button>
        <a-button disabled class="mr-3 mb-3">Default(disabled)</a-button>
        <br />
        <a-button type="dashed" class="mr-3 mb-3">Dashed</a-button>
        <a-button type="dashed" disabled class="mr-3 mb-3">Dashed(disabled)</a-button>
        <br />
        <a-button type="link" class="mr-3 mb-3">Link</a-button>
        <a-button type="link" disabled class="mr-3 mb-3">Link(disabled)</a-button>
      </div>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-3">
        <strong>Default</strong>
      </h5>
      <div class="mb-5">
        <a-button type="primary" shape="circle" icon="search" class="mr-3 mb-3" />
        <a-button type="primary" shape="circle" class="mr-3 mb-3">A</a-button>
        <a-button type="primary" icon="search" class="mr-3 mb-3">Search</a-button>
        <a-button shape="circle" icon="search" class="mr-3 mb-3" />
        <a-button icon="search" class="mr-3 mb-3">Search</a-button>
        <br />
        <a-button shape="circle" icon="search" class="mr-3 mb-3" />
        <a-button icon="search" class="mr-3 mb-3">Search</a-button>
        <a-button type="dashed" shape="circle" icon="search" class="mr-3 mb-3" />
        <a-button type="dashed" icon="search" class="mr-3 mb-3">Search</a-button>
      </div>
      <h5 class="mb-3">
        <strong>Loading</strong>
      </h5>
      <div class="mb-5">
        <a-button type="primary" loading class="mr-3 mb-3">Loading</a-button>
        <a-button type="primary" size="small" loading class="mr-3 mb-3">Loading</a-button>
        <br />
        <a-button type="primary" loading class="mr-3 mb-3" />
        <a-button type="primary" shape="circle" loading class="mr-3 mb-3" />
        <a-button type="danger" shape="round" loading class="mr-3 mb-3" />
      </div>
      <h5 class="mb-3">
        <strong>Block Buttons</strong>
      </h5>
      <div class="mb-5">
        <a-button type="primary" block class="mb-3">Primary</a-button>
        <a-button block class="mb-3">Default</a-button>
        <a-button type="dashed" block class="mb-3">Dashed</a-button>
        <a-button type="danger" block class="mb-3">Danger</a-button>
        <a-button type="link" block class="mb-3">Link</a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntda-buttonExample',
  data() {
    return {
      size: 'large',
    }
  },
  methods: {
    handleSizeChange(e) {
      this.size = e.target.value
    },
  },
}
</script>
