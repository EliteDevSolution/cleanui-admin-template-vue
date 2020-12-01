<template>
  <div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <div :class="$style.itemHead" class="mb-2">
          <div :class="$style.itemPic">
            <img src="resources/images/avatars/1.jpg" alt="Jamie Rockstar"/>
          </div>
          <div class="mr-2">
            <div>Jamie Rockstar</div>
            <div class="text-muted">Backoffice Agent</div>
          </div>
        </div>
        <div class="text-muted mb-2">
          Access Level: <strong class="text-gray-6">Level 7</strong>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            style="width: 70%"
            role="progressbar"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemHead" class="mb-2">
          <div :class="$style.itemPic">
            <img src="resources/images/avatars/2.jpg" alt="Mary Stanform"/>
          </div>
          <div class="mr-2">
            <div>Mary Stanform</div>
            <div class="text-muted">Developer</div>
          </div>
        </div>
        <div class="text-muted mb-2">
          Access Level: <strong class="text-gray-6">Level 4</strong>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            style="width: 40%"
            role="progressbar"
            aria-valuenow={40}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </li>
      <li :class="$style.item">
        <div :class="$style.itemHead" class="mb-2">
          <div :class="$style.itemPic">
            <img src="resources/images/avatars/5.jpg" alt="Jess Hofner"/>
          </div>
          <div class="mr-2">
            <div>Jess Hofner</div>
            <div class="text-muted">CEO</div>
          </div>
        </div>
        <div class="text-muted mb-2">
          Access Level: <strong class="text-gray-6">Level 9</strong>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-danger"
            style="width: 90%"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList10',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
