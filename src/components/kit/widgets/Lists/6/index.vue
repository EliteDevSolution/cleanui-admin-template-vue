<template>
  <div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <i>B</i>
        </div>
        <div class="mr-2">
          <div>
            <strong class="text-dark">Bitcoin</strong>
          </div>
          <div class="text-muted">Deposited</div>
        </div>
        <div class="ml-auto text-right text-nowrap">
          <div>+0.005 BTC</div>
          <div class="text-success">+187.89$</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <i>L</i>
        </div>
        <div class="mr-2">
          <div>
            <strong class="text-dark">Litecoin</strong>
          </div>
          <div class="text-muted">Deposited by PayPal</div>
        </div>
        <div class="ml-auto text-right text-nowrap">
          <div>+2.3657 LTC</div>
          <div class="text-success">+187.89$</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <i>L</i>
        </div>
        <div class="mr-2">
          <div>
            <strong class="text-dark">Dash</strong>
          </div>
          <div class="text-muted">To Dash adress</div>
        </div>
        <div class="ml-auto text-right text-nowrap">
          <div>-2.3657 LTC</div>
          <div class="text-danger">-2187.89$</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <i>B</i>
        </div>
        <div class="mr-2">
          <div>
            <strong class="text-dark">Bitcoin</strong>
          </div>
          <div class="text-muted">Deposited</div>
        </div>
        <div class="ml-auto text-right text-nowrap">
          <div>+0.005 BTC</div>
          <div class="text-success">+187.89$</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <i>L</i>
        </div>
        <div class="mr-2">
          <div>
            <strong class="text-dark">Litecoin</strong>
          </div>
          <div class="text-muted">Deposited by PayPal</div>
        </div>
        <div class="ml-auto text-right text-nowrap">
          <div>+2.3657 LTC</div>
          <div class="text-success">+187.89$</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList6',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
