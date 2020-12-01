<template>
  <div>
    <div class="text-uppercase font-size-12 mb-2 text-gray-6">Documents (3)</div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemPic" class="mr-3">
            <i :class="$style.itemIcon" class="fe fe-file" />
          </div>
          <div>
            <div class="text-blue">System Requirements.pdf</div>
            <div class="text-muted">568kb</div>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemPic" class="mr-3">
            <i :class="$style.itemIcon" class="fe fe-file" />
          </div>
          <div>
            <div class="text-blue">Queue Info.pdf</div>
            <div class="text-muted">1.2mb</div>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemPic" class="mr-3">
            <i :class="$style.itemIcon" class="fe fe-file" />
          </div>
          <div>
            <div class="text-blue">Affected_app.mov</div>
            <div class="text-muted">67mb</div>
          </div>
        </a>
      </li>
    </ul>
    <div class="text-uppercase font-size-12 mb-2 text-gray-6">Agents (4)</div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div class="mr-3" :class="$style.avatar">
            <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
          </div>
          <div>
            <div class="text-blue">Mary Stanform</div>
            <div class="text-muted">Sales Manager</div>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div class="mr-3" :class="$style.avatar">
            <img src="resources/images/avatars/1.jpg" alt="Jamie Rockstar" />
          </div>
          <div>
            <div class="text-blue">Jamie Rockstar</div>
            <div class="text-muted">Blackoffice Agent</div>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div class="mr-3" :class="$style.avatar">
            <img src="resources/images/avatars/4.jpg" alt="Mary Stanform" />
          </div>
          <div>
            <div class="text-blue">David Bowie</div>
            <div class="text-muted">Blackoffice Agent</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList1',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
