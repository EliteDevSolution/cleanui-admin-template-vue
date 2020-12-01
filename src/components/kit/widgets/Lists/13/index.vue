<template>
  <div>
    <div class="text-uppercase mb-3">People you may know</div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <img src="resources/images/avatars/1.jpg" alt="Jamie Rockstar"/>
        </div>
        <div>
          <div>Jamie Rockstar</div>
          <div class="text-muted">Backoffice Agent</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <img src="resources/images/avatars/2.jpg" alt="Katie Banks"/>
        </div>
        <div>
          <div>Katie Banks</div>
          <div class="text-muted">Support Agent</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <img src="resources/images/avatars/3.jpg" alt="Jessey Kim"/>
        </div>
        <div>
          <div>Jessey Kim</div>
          <div class="text-muted">Administrator</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <img src="resources/images/avatars/4.jpg" alt="Sam Piterson"/>
        </div>
        <div>
          <div>Sam Piterson</div>
          <div class="text-muted">Technical Assistant</div>
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemPic">
          <img src="resources/images/avatars/5.jpg" alt="Mary Stanform"/>
        </div>
        <div>
          <div>Mary Stanform</div>
          <div class="text-muted">Illustrator</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList13',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
