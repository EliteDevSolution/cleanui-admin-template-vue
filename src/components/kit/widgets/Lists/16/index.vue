<template>
  <ul class="list-unstyled">
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">16:00</div>
      <div :class="$style.separator" class="bg-success mr-3"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From themeforest</div>
      </div>
    </li>
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">15:28</div>
      <div :class="$style.separator" class="bg-primary mr-3"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From themeforest</div>
      </div>
    </li>
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">14:26</div>
      <div :class="$style.separator" class="mr-3"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From Paypal</div>
      </div>
    </li>
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">13:57</div>
      <div :class="$style.separator" class="mr-3 bg-danger"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From Bitcoin Address</div>
      </div>
    </li>
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">13:22</div>
      <div :class="$style.separator" class="bg-info mr-3"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From themeforest</div>
      </div>
    </li>
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">11:08</div>
      <div :class="$style.separator" class="mr-3"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From themeforest</div>
      </div>
    </li>
    <li :class="$style.item">
      <div class="font-weight-bold mr-3 font-size-18">10:01</div>
      <div :class="$style.separator" class="mr-3"/>
      <div>
        <div>Payment Received</div>
        <div class="text-muted">From themeforest</div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'KitList16',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
