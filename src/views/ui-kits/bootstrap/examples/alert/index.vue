<template>
  <div class="row">
    <div class="col-lg-6">
      <h5 class="mb-3">
        <strong>Simple</strong>
      </h5>
      <b-alert show variant="primary">Primary Alert</b-alert>
      <b-alert show variant="secondary">Secondary Alert</b-alert>
      <b-alert show variant="success">Success Alert</b-alert>
      <b-alert show variant="danger">Danger Alert</b-alert>
      <b-alert show variant="warning">Warning Alert</b-alert>
      <b-alert show variant="info">Info Alert</b-alert>
      <b-alert show variant="light">Light Alert</b-alert>
      <b-alert show variant="dark">Dark Alert</b-alert>
    </div>
    <div class="col-lg-6">
      <h5 class="mb-3">
        <strong>Alert with List</strong>
      </h5>
      <b-alert show variant="light">
        <p>
          <strong>Read documentation and check devices:</strong>
        </p>
        <ul>
          <li>Connections</li>
          <li>Cables &amp; Accessories</li>
          <li>Display &amp; Touch</li>
          <li>Drivers</li>
        </ul>
      </b-alert>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapAlertExample',
}
</script>
