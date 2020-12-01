<template>
  <div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <div :class="$style.itemHead" class="mb-3">
          <div :class="$style.itemPic">
            <img src="resources/images/avatars/1.jpg" alt="Mary Stanform"/>
          </div>
          <div class="mr-2">
            <div>Jamie Rockstar</div>
            <div class="text-muted">Backoffice Agent</div>
          </div>
          <div class="text-success ml-auto">Active</div>
        </div>
        <p class="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry&apos;s standard dummy text ...
        </p>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemHead" class="mb-3">
          <div :class="$style.itemPic">
            <img src="resources/images/avatars/2.jpg" alt="Mary Stanform"/>
          </div>
          <div class="mr-2">
            <div>Alex Kasie</div>
            <div class="text-muted">Support Agent</div>
          </div>
          <div class="text-danger ml-auto">Suspended</div>
        </div>
        <p class="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry&apos;s standard dummy text ...
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList3',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
