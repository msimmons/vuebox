import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import channel from './modules/channel'
import rest from './modules/rest'
import profile from './modules/profile'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
    channel,
    rest,
    profile
  },
  strict: debug
})

export default store
