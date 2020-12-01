<template>
  <div>
    <ul class="list-unstyled">
      <li :class="$style.item">
        <div
          :class="$style.itemDots"
          :style="{ backgroundImage: 'url(resources/images/3-rounds.png)' }"
        ></div>
        <div :class="$style.itemPicContainer">
          <div :class="$style.itemPic" class="bg-success" />
          <i :class="$style.itemIcon" class="text-success fe fe-file-text" />
        </div>
        <div>
          <div>
            <strong class="text-primary">Bitcoin</strong> lorem Ipsum is simply dummy text
            of the printing and...
          </div>
          <div class="text-muted">Deposited</div>
        </div>
      </li>
      <li :class="$style.item">
        <div
          :class="$style.itemDots"
          :style="{ backgroundImage: 'url(resources/images/3-rounds.png)' }"
        ></div>
        <div :class="$style.itemPicContainer">
          <div :class="$style.itemPic" class="bg-info" />
          <i :class="$style.itemIcon" class="text-info fe fe-mail" />
        </div>
        <div>
          <div>
            <strong class="text-primary">Litecoint</strong> lorem Ipsum is simply dummy text
            of the printing and...
          </div>
          <div class="text-muted">Deposited by PayPal</div>
        </div>
      </li>
      <li :class="$style.item">
        <div
          :class="$style.itemDots"
          :style="{ backgroundImage: 'url(resources/images/3-rounds.png)' }"
        ></div>
        <div :class="$style.itemPicContainer">
          <div :class="$style.itemPic" class="bg-danger" />
          <i :class="$style.itemIcon" class="text-danger fe fe-grid" />
        </div>
        <div>
          <div>
            <strong>Dash</strong> lorem Ipsum is simply dummy text of the printing and...
          </div>
          <div class="text-muted">To Dash adress</div>
        </div>
      </li>
      <li :class="$style.item">
        <div
          :class="$style.itemDots"
          :style="{ backgroundImage: 'url(resources/images/3-rounds.png)' }"
        ></div>
        <div :class="$style.itemPicContainer">
          <div :class="$style.itemPic" class="bg-primary" />
          <i :class="$style.itemIcon" class="text-primary fe fe-database" />
        </div>
        <div>
          <div>
            <strong>Bitcoin</strong> lorem Ipsum is simply dummy text of the printing and...
          </div>
          <div class="text-muted">Deposited</div>
        </div>
      </li>
      <li :class="$style.item">
        <div
          :class="$style.itemDots"
          :style="{ backgroundImage: 'url(resources/images/3-rounds.png)' }"
        ></div>
        <div :class="$style.itemPicContainer">
          <div :class="$style.itemPic" class="bg-success" />
          <i :class="$style.itemIcon" class="text-success fe fe-flag" />
        </div>
        <div>
          <div>
            <strong>Litecoin</strong> lorem Ipsum is simply dummy text of the printing and...
          </div>
          <div class="text-muted">Deposited by PayPal</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'KitList9',
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
