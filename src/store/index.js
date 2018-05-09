import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import profile from './modules/profile'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
    profile
  },
  strict: debug
})

export default store
