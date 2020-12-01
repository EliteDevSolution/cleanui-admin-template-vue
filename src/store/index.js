import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import settings from './settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    settings,
  },
  state: {},
  mutations: {},
  actions: {},
})
