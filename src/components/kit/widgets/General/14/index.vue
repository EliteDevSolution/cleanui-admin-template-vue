<template>
  <div>
    <div class="height-300 d-flex flex-column justify-content-end">
      <vue-custom-scrollbar style="height: 100%">
        <div :class="$style.contentWrapper">
          <div :class="$style.message">
            <div :class="$style.messageContent">
              <div class="text-gray-4 font-size-12 text-uppercase">You, 5 min ago</div>
              <div>Hi! Anyone here? I want to know how I can buy Cui UI?</div>
            </div>
            <div :class="[$style.messageAvatar]" class="kit__utils__avatar">
              <img src="resources/images/avatars/avatar-2.png" alt="You" />
            </div>
          </div>
          <div :class="[$style.message, $style.answer]">
            <div :class="$style.messageContent">
              <div class="text-gray-4 font-size-12 text-uppercase">Mary, 14 sec ago</div>
              <div>Please call us + 100 295 000</div>
            </div>
            <div :class="[$style.messageAvatar]" class="kit__utils__avatar">
              <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
            </div>
          </div>
        </div>
      </vue-custom-scrollbar>
    </div>
    <div class="pt-2 pb-2">Mary is typing...</div>
    <form action>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Send message..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fe fe-send align-middle" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  name: 'KitGeneral14',
  components: { vueCustomScrollbar },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
