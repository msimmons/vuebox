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
  login ({dispatch, commit, state}, username, password) {
    // do auth(username, password)
    var timeoutId = setTimeout(function () { dispatch('logout') }, 60000)
    commit('login', {username: username, timeoutId: timeoutId})
    // get the profile
    dispatch('profile/get', null, { root: true })
  },
  logout ({commit, state}) {
    commit('logout')
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
