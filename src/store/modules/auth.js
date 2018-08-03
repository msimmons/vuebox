import bus from '@/main'
import { authApi, channel } from '@/service'

/**
 * Initial state
 */
let timeoutId = null

const state = {
  username: null,
  profileId: null,
  roles: [],
  authenticated: false,
  token: null,
  loggedInAt: null,
  lastActivity: null
}

/**
 * Getters
 */
const getters = {
}

/**
 * Actions
 */
const actions = {
  async signup ({dispatch, commit, state}, {name, username, password}) {
    let response = await authApi.signup(name, username, password)
    commit('signup', {username: username})
    return response
  },
  async verify ({dispatch, commit, state}, {verifyCode}) {
    let response = await authApi.verify(state.username, verifyCode)
    doLogin(dispatch, commit, state.username, response.profileId, response.token)
    await channel.connect(response.token)
  },
  async login ({dispatch, commit, state}, {username, password}) {
    let response = await authApi.login(username, password)
    doLogin(dispatch, commit, username, response.profileId, response.token)
    await channel.connect(response.token)
  },
  logout ({commit, dispatch}) {
    commit('logout')
    dispatch('profile/clear', null, {root: true})
    channel.disconnect()
    bus.$emit('logged-out', {})
  },
  activity ({commit}) {
    commit('activity')
  },
  isExpired ({commit, dispatch}) {
    console.log('Checking session expiration')
    if (Date.now() - state.lastActivity >= 60000) {
      dispatch('logout')
    } else {
      timeoutId = setTimeout(function () { dispatch('isExpired') }, 30000)
    }
  }
}

function doLogin (dispatch, commit, username, profileId, token) {
  timeoutId = setTimeout(function () { dispatch('isExpired') }, 30000)
  commit('login', {username: username, profileId: profileId, token: token})
}

/**
 * Mutations
 */
const mutations = {
  signup (state, {username}) {
    state.username = username
  },
  login (state, {username, profileId, token}) {
    state.username = username
    state.profileId = profileId
    state.authenticated = true
    state.token = token
    state.loggedInAt = Date.now()
    state.lastActivity = state.loggedInAt
  },
  logout (state) {
    if (timeoutId) clearTimeout(timeoutId)
    state.username = null
    state.profileId = null
    state.authenticated = false
    state.token = null
    state.loggedInAt = null
    state.lastActivity = null
  },
  activity (state) {
    state.lastActivity = Date.now()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
