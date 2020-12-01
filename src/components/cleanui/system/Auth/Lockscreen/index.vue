<template>
  <div>
    <div class="card" :class="$style.container">
      <div class="text-dark text-center font-size-24 mb-4">
        <strong>Account Locked</strong>
      </div>
      <div class="text-center">
        <div class="kit__utils__avatar kit__utils__avatar--size64 d-inline-block mb-2">
          <img src="resources/images/avatars/2.jpg" alt="Mary Stanform" />
        </div>
        <div class="font-size-18 text-dark mb-4">
          <strong>Mary Stanform</strong>
        </div>
      </div>
      <a-form class="mb-4" :form="form">
        <a-form-item>
          <a-input
            size="large"
            placeholder="Password"
            v-decorator="['password', {rules: [{ required: true, message: 'Please input your Password!' }]}]"
          />
        </a-form-item>
        <a-button type="primary" size="large" class="text-center w-100">
          <strong>Unlock Account</strong>
        </a-button>
      </a-form>
    </div>
    <div class="text-center pt-2 mb-auto">
      <span class="mr-2">Already have an account?</span>
      <router-link to="/auth/login" class="kit__utils__link font-size-16">Sign in</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CuiLockscreen',
  data: function () {
    return {
      form: this.$form.createForm(this),
    }
  },
}
</script>
<style lang="scss" module>
@import "@/components/cleanui/system/Auth/style.module.scss";
</style>
