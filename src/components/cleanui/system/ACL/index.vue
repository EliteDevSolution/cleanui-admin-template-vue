<template>
  <div v-if="this.show">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: 'CuiACL',
  props: {
    redirect: Boolean,
    roles: Array,
  },
  computed: {
    ...mapGetters(['user']),
  },
  data() {
    return {
      aclDefaultRedirect: '/auth/404',
      aclRedirect: this.redirect || false,
      aclRoles: this.roles || [],
      show: false,
    }
  },
  mounted() {
    this.athorize()
  },
  methods: {
    athorize() {
      const defaultRedirect = this.aclDefaultRedirect
      const redirect = this.aclRedirect
      const roles = this.aclRoles
      const role = this.user.role
      const authorized = roles.includes(role)
      this.show = authorized
      if (!authorized && redirect) {
        const url = typeof redirect === 'boolean' ? defaultRedirect : redirect
        this.$notification.warning({
          message: 'Unauthorized Access',
          description: `You have no rights to access this page. <br /> Redirected to ${url}`,
        })
        router.push(url)
      }
    },
  },
}
</script>
