<template>
  <ul class="list-unstyled">
    <li :class="$style.item">
      <a href="javascript:;" :class="$style.itemLink">
        <div :class="$style.itemCover" class="mr-3">
          <img src="resources/images/content/hands.png" alt="Hands"/>
        </div>
        <div>
          <div class="text-blue">New York Times</div>
          <div class="font-weight-bold mb-2">Bitcoin Costs $10k+</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry&apos;s
            standard dummy text ...
          </div>
        </div>
      </a>
    </li>
    <li :class="$style.item">
      <a href="javascript:;" :class="$style.itemLink">
        <div :class="$style.itemCover" class="mr-3">
          <img src="resources/images/content/hands.png" alt="Hands"/>
        </div>
        <div>
          <div class="text-blue">CNN</div>
          <div class="font-weight-bold mb-2">Bitcoin Costs $10k+</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry&apos;s
            standard dummy text ...
          </div>
        </div>
      </a>
    </li>
    <li :class="$style.item">
      <a href="javascript:;" :class="$style.itemLink">
        <div :class="$style.itemCover" class="mr-3">
          <img src="resources/images/content/hands.png" alt="Hands"/>
        </div>
        <div>
          <div class="text-blue">English Speakers</div>
          <div class="font-weight-bold mb-2">Bitcoin Costs $10k+</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry&apos;s
            standard dummy text ...
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'KitList15',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
