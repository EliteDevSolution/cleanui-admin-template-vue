<template>
  <div id="app">
    <localization></localization>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Localization from '@/localization'

export default {
  name: 'app',
  components: { Localization },
  computed: {
    ...mapState(['settings']),
    ...mapGetters(['user']),
    nextRoute() {
      return this.$route.query.redirect || '/'
    },
  },
  mounted() {
    this.$store.commit('SET_PRIMARY_COLOR', { color: this.settings.primaryColor })
    this.$store.commit('SET_THEME', { theme: this.settings.theme })
  },
  watch: {
    '$store.state.settings.theme'(theme) {
      this.$store.commit('SET_THEME', { theme })
    },
    user(auth) {
      if (auth) {
        this.$router.replace(this.nextRoute)
      }
    },
    '$route'(to, from) {
      const query = Object.assign({}, to.query)
      this.$store.commit('SETUP_URL_SETTINGS', query)
    },
  },
}
</script>
