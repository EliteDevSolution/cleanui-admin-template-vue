<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <div class="mb-3">
        <a-alert closable message="Success Tips" type="success" showIcon />
      </div>
      <div class="mb-3">
        <a-alert closable message="Informational Notes" type="info" showIcon />
      </div>
      <div class="mb-3">
        <a-alert closable message="Warning" type="warning" showIcon />
      </div>
      <div class="mb-3">
        <a-alert closable message="Error" type="error" showIcon />
      </div>
    </div>
    <h5 class="mb-3">
      <strong>Advanced</strong>
    </h5>
    <div class="mb-3">
      <a-alert message="Success Text" type="success" closable>
        <p slot="description">
          Success Description
          <span style="color: red">Success</span> Description Success Description
        </p>
      </a-alert>
    </div>
    <div class="mb-5">
      <div class="mb-3">
        <a-alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
          closable
        />
      </div>
      <div class="mb-3">
        <a-alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
          closable
        />
      </div>
      <div class="mb-3">
        <a-alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
          closable
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitAntdAlertExample',
}
</script>
