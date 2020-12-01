<template>
  <div>
    <div class="card" :class="$style.container">
      <div class="text-dark font-size-24 mb-4">
        <strong>Create your account</strong>
      </div>
      <div class="mb-4">
        <p>
          And start spending more time on your projects and less time managing your
          infrastructure.
        </p>
      </div>
      <a-form class="mb-4" :form="form">
        <a-form-item>
          <a-input
            size="large"
            placeholder="Full Name"
            v-decorator="['fullName', {rules: [{ required: true, message: 'Please input your full name!' }]}]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            placeholder="Email Address"
            v-decorator="['email', {rules: [{ required: true, message: 'Please input your email address!' }]}]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            placeholder="Password"
            v-decorator="['password', {rules: [{ required: true, message: 'Please input your Password!' }]}]"
          />
        </a-form-item>
        <a-button type="primary" size="large" class="text-center w-100">
          <strong>Sign Up</strong>
        </a-button>
      </a-form>
      <div>
        <span class="mr-1">By signing up, you agree to the</span>
        <a href="javascript: void(0);" class="kit__utils__link">Terms of Service</a> and
        <a href="javascript: void(0);" class="kit__utils__link">Privacy Policy</a>
      </div>
    </div>
    <div class="text-center pt-2 mb-auto">
      <span class="mr-2">Already have an account?</span>
      <router-link to="/auth/login" class="kit__utils__link font-size-16">Sign in</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CuiRegister',
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
