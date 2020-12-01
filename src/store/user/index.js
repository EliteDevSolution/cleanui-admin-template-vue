import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    user: null,
  },
  mutations: {
    UPDATE_USER(state, { user }) {
      state.user = user
    },
  },
  actions: {},
  getters: {
    user: state => state.user,
  },
}
