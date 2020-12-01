<template>
  <ul class="list-unstyled">
    <li :class="$style.item">
      <div :class="$style.separator" class="bg-success mr-3"/>
      <label
        htmlFor="checkbox-1"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" checked id="checkbox-1"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Payment Received</div>
          <div class="text-muted">From themeforest</div>
        </div>
      </label>
    </li>
    <li :class="$style.item">
      <div :class="$style.separator" class="bg-primary mr-3"/>
      <label
        htmlFor="checkbox-2"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" checked id="checkbox-2"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Payment Approved</div>
          <div class="text-muted">From themeforest</div>
        </div>
      </label>
    </li>
    <li :class="$style.item">
      <div :class="$style.separator" class="mr-3"/>
      <label
        htmlFor="checkbox-3"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" id="checkbox-3"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Payment Received</div>
          <div class="text-muted">From Paypal</div>
        </div>
      </label>
    </li>
    <li :class="$style.item">
      <div :class="$style.separator" class="bg-danger mr-3"/>
      <label
        htmlFor="checkbox-4"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" id="checkbox-4"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Withdrawal Failed</div>
          <div class="text-muted">From Bitcoin Address</div>
        </div>
      </label>
    </li>
    <li :class="$style.item">
      <div :class="$style.separator" class="bg-info mr-3"/>
      <label
        htmlFor="checkbox-5"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" id="checkbox-5"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Payment Received</div>
          <div class="text-muted">From themeforest</div>
        </div>
      </label>
    </li>
    <li :class="$style.item">
      <div :class="$style.separator" class="mr-3"/>
      <label
        htmlFor="checkbox-6"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" id="checkbox-6"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Payment Received</div>
          <div class="text-muted">From themeforest</div>
        </div>
      </label>
    </li>
    <li :class="$style.item">
      <div :class="$style.separator" class="mr-3"/>
      <label
        htmlFor="checkbox-7"
        class="mb-0"
        :class="[$style.control, $style.checkbox]"
      >
        <input type="checkbox" id="checkbox-7"/>
        <span :class="[$style.controlIndicator]" />
        <div class="d-inline-block">
          <div>Payment Received</div>
          <div class="text-muted">From themeforest</div>
        </div>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'KitList17',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
