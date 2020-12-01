import store from '@/store'
import router from '@/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyAE5G0RI2LwzwTBizhJbnRKIKbiXQIA1dY',
  authDomain: 'cleanui-72a42.firebaseapp.com',
  databaseURL: 'https://cleanui-72a42.firebaseio.com',
  projectId: 'cleanui-72a42',
  storageBucket: 'cleanui-72a42.appspot.com',
  messagingSenderId: '583382839121',
}

export default {
  install: (Vue, options) => {
    const firebaseApp = firebase.initializeApp(config)
    const auth = firebaseApp.auth()
    Vue.prototype.$firebaseAuth = {
      login: async (username, pass) => {
        return auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        router.push('/auth/login')
        await auth.signOut()
      },
    }
    auth.onAuthStateChanged(user => {
      const _user = user ? {
        ...user,
        role: 'admin',
      } : user
      if (store.getters.state.authProvider !== 'firebase') {
        return
      }
      store.commit('UPDATE_USER', { user: _user })
    })
  },
}
