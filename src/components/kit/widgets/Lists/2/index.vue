<template>
  <div>
    <a-tabs defaultActiveKey="1" :class="$style.tabs">
      <a-tab-pane tab="Alerts" key="1">
        <div class="text-gray-6">
          <ul class="list-unstyled">
            <li class="mb-3">
              <div :class="$style.head">
                <p :class="$style.title">
                  Update Status:
                  <strong class="text-black">New</strong>
                </p>
                <time :class="$style.time">5 min ago</time>
              </div>
              <p>Mary has approved your quote.</p>
            </li>
            <li class="mb-3">
              <div :class="$style.head">
                <p :class="$style.title">
                  Update Status:
                  <strong class="text-danger">Rejected</strong>
                </p>
                <time :class="$style.time">15 min ago</time>
              </div>
              <p>Mary has declined your quote.</p>
            </li>
            <li class="mb-3">
              <div :class="$style.head">
                <p :class="$style.title">
                  Payment Received:
                  <strong class="text-black">$5,467.00</strong>
                </p>
                <time :class="$style.time">15 min ago</time>
              </div>
              <p>GOOGLE, LLC AUTOMATED PAYMENTS PAYMENT</p>
            </li>
            <li class="mb-3">
              <div :class="$style.head">
                <p :class="$style.title">
                  Notification:
                  <strong class="text-danger">Access Denied</strong>
                </p>
                <time :class="$style.time">5 Hours ago</time>
              </div>
              <p>The system prevent login to your account</p>
            </li>
            <li class="mb-3">
              <div :class="$style.head">
                <p :class="$style.title">
                  Payment Received:
                  <strong class="text-black">$55,829.00</strong>
                </p>
                <time :class="$style.time">1 day ago</time>
              </div>
              <p>GOOGLE, LLC AUTOMATED PAYMENTS PAYMENT</p>
            </li>
            <li class="mb-3">
              <div :class="$style.head">
                <p :class="$style.title">
                  Notification:
                  <strong class="text-danger">Access Denied</strong>
                </p>
                <time :class="$style.time">5 Hours ago</time>
              </div>
              <p>The system prevent login to your account</p>
            </li>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane tab="Events" key="2">
        <div class="text-center mb-3 py-4 bg-light rounded">No Events</div>
      </a-tab-pane>
      <a-tab-pane tab="Actions" key="3">
        <div class="text-center mb-3 py-4 bg-light rounded">No Actions</div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  name: 'KitList2',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
