<template>
  <div>
    <div class="card" :class="$style.container">
      <div class="text-dark font-size-24 mb-4">
        <strong>Reset Password</strong>
      </div>
      <a-form class="mb-4" :form="form">
        <a-form-item>
          <a-input
            size="large"
            placeholder="Email Address"
            v-decorator="['email', {rules: [{ required: true, message: 'Please input your Email!' }]}]"
          />
        </a-form-item>
        <a-button size="large" type="primary" class="text-center w-100">
          <strong>Reset my password</strong>
        </a-button>
      </a-form>
      <router-link to="/auth/login" class="kit__utils__link font-size-16">
        <i class="fe fe-arrow-left mr-1 align-middle" />
        Go to Sign in
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CuiForgotPassword',
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
