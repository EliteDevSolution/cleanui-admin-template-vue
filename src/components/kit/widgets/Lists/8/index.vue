<template>
  <div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <a href="javascript:;" :class="$style.itemLink">
          <div :class="$style.itemPic" class="bg-success">
            <i class="fe fe-file-text"/>
          </div>
          <div class="mr-2">
            <div>Payment Received</div>
            <div class="text-muted">3 minutes ago</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript:;" :class="$style.itemLink">
          <div :class="$style.itemPic" class="bg-info">
            <i class="fe fe-mail"/>
          </div>
          <div class="mr-2">
            <div>Message Removed</div>
            <div class="text-muted">2 hours ago</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript:;" :class="$style.itemLink">
          <div :class="$style.itemPic" class="bg-danger">
            <i class="fe fe-grid"/>
          </div>
          <div class="mr-2">
            <div>Parcel Received</div>
            <div class="text-muted">6 hours ago</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript:;" :class="$style.itemLink">
          <div :class="$style.itemPic" class="bg-primary">
            <i class="fe fe-database"/>
          </div>
          <div class="mr-2">
            <div>Parcel Recived</div>
            <div class="text-muted">15 hours ago</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript:;" :class="$style.itemLink">
          <div :class="$style.itemPic" class="bg-success">
            <i class="fe fe-flag"/>
          </div>
          <div class="mr-2">
            <div>User Activated</div>
            <div class="text-muted">2 days ago</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList8',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
