import bus from '@/main'

/**
 * Initial state
 */
const state = {
  username: null,
  roles: [],
  authenticated: false,
  token: null,
  timeoutId: null
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
  login ({dispatch, commit, state}, {username, password}) {
    return new Promise((resolve, reject) => {
      // do auth(username, password)
      if (password === 'reject') {
        reject(new Error('Invalid password'))
      } else {
        var timeoutId = setTimeout(function () { dispatch('logout') }, 60000)
        commit('login', {username: username, timeoutId: timeoutId})
        dispatch('channel/connect', {username: username, token: state.token}, {root: true})
        dispatch('profile/get', {email: username}, {root: true})
        resolve()
      }
    })
  },
  logout ({commit, dispatch}) {
    commit('logout')
    dispatch('profile/clear', null, {root: true})
    dispatch('channel/disconnect', {}, {root: true})
    bus.$emit('logged-out', {})
  }
}

/**
 * Mutations
 */
const mutations = {
  login (state, {username, timeoutId}) {
    state.username = username
    state.authenticated = true
    state.timeoutId = timeoutId
  },
  logout (state) {
    if (state.timeoutId) clearTimeout(state.timeoutId)
    state.username = null
    state.authenticated = false
    state.timeoutId = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
