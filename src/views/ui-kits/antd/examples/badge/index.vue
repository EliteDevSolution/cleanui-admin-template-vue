<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <div class="d-inline-block mr-4">
        <a-badge count="5">
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge count="0" showZero>
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge>
          <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge count="99">
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge count="100">
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge count="109" overflowCount="10">
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge count="1000" overflowCount="999">
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
      <div class="d-inline-block mr-4">
        <a-badge dot>
          <div
            style="width: 30px; height: 30px; border-radius: 3px; border: 1px solid rgba(150, 150, 150, .2)"
          />
        </a-badge>
      </div>
    </div>
    <h5 class="mb-3">
      <strong>Standalone</strong>
    </h5>
    <div class="mb-5">
      <div class="d-inline-block mr-4">
        <a-badge count="25" />
      </div>
      <div class="d-inline-block mr-4">
        <a-badge
          count="4"
          :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
        />
      </div>
      <div class="d-inline-block mr-4">
        <a-badge count="109" numberStyle="{backgroundColor: '#52c41a'}" />
      </div>
    </div>
    <h5 class="mb-3">
      <strong>Bagde</strong>
    </h5>
    <div class="mb-5">
      <div class="d-inline-block mr-4">
        <a-badge status="success" text="Success" />
      </div>
      <div class="d-inline-block mr-4">
        <a-badge status="error" text="Error" />
      </div>
      <div class="d-inline-block mr-4">
        <a-badge status="default" text="Default" />
      </div>
      <div class="d-inline-block mr-4">
        <a-badge status="processing" text="Processing" />
      </div>
      <div class="d-inline-block mr-4">
        <a-badge status="warning" text="Warning" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntda-badgeExample',
}
</script>
<style>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
