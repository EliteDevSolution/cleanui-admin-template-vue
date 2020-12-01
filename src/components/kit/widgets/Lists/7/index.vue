<template>
  <div>
    <ul :class="$style.list" class="list-unstyled">
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div :class="[$style.donut, $style.gray2, $style.md]" />
          </div>
          <div class="mr-3">
            <div>Payment Received</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div :class="[$style.donut, $style.success, $style.md]" />
          </div>
          <div class="mr-3">
            <div>Account Activated</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div :class="[$style.donut, $style.danger, $style.md]" />
          </div>
          <div class="mr-3">
            <div>User Deleted</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div :class="[$style.donut, $style.gray2, $style.md]" />
          </div>
          <div class="mr-3">
            <div>Message Received</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div :class="[$style.donut, $style.info, $style.md]" />
          </div>
          <div class="mr-3">
            <div>Account Activated</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div :class="[$style.donut, $style.gray2, $style.md]" />
          </div>
          <div class="mr-3">
            <div>Account Activated</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList7',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
