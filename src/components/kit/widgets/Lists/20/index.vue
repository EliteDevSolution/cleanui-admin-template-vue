<template>
  <ul class="list-unstyled">
    <li :class="$style.item">
      <div :class="$style.itemPic">
        <img src="resources/images/avatars/1.jpg" alt="Jamie Rockstar" />
      </div>
      <div class="flex-fill">
        <div class="font-weight-bold text-dark">Jamie Rockstar</div>
        <div class="text-muted">Backoffice Agent</div>
      </div>
      <a href="javascript: void(0);" class="btn btn-outline-primary align-self-end">Follow</a>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemPic">
        <img src="resources/images/avatars/2.jpg" alt="Katie Banks" />
      </div>
      <div class="flex-fill">
        <div class="font-weight-bold text-dark">Katie Banks</div>
        <div class="text-muted">Support Agent</div>
      </div>
      <a href="javascript: void(0);" class="btn btn-outline-primary align-self-end">Follow</a>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemPic">
        <img src="resources/images/avatars/3.jpg" alt="Jessey Kim" />
      </div>
      <div class="flex-fill">
        <div class="font-weight-bold text-dark">Jessey Kim</div>
        <div class="text-muted">Administrator</div>
      </div>
      <a href="javascript: void(0);" class="btn btn-outline-primary align-self-end">Follow</a>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemPic">
        <img src="resources/images/avatars/4.jpg" alt="Sam Piterson" />
      </div>
      <div class="flex-fill">
        <div class="font-weight-bold text-dark">Sam Piterson</div>
        <div class="text-muted">Technical Assistant</div>
      </div>
      <a href="javascript: void(0);" class="btn btn-outline-primary align-self-end">Follow</a>
    </li>
    <li :class="$style.item">
      <div :class="$style.itemPic">
        <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
      </div>
      <div class="flex-fill">
        <div class="font-weight-bold text-dark">Mary Stanform</div>
        <div class="text-muted">Illustrator</div>
      </div>
      <a href="javascript: void(0);" class="btn btn-outline-primary align-self-end">Follow</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'KitList20',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
