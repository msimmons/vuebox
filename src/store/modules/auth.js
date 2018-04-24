import bus from '@/main'

/**
 * Initial state
 */
const state = {
  username: null,
  profileId: null,
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
  signup ({dispatch, commit, state}, {name, username, password}) {
    return new Promise((resolve, reject) => {
      dispatch('rest/signup', {name: name, username: username, password: password}, {root: true}).then(response => {
        commit('signup', {username: username})
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  verify ({dispatch, commit, state}, {verifyCode}) {
    return new Promise((resolve, reject) => {
      dispatch('rest/verify', {username: state.username, verifyCode: verifyCode}, {root: true}).then(response => {
        doLogin(dispatch, commit, state.username, response.profileId, response.token)
        dispatch('channel/connect', {username: state.username, token: response.token}, {root: true}).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  },
  login ({dispatch, commit, state}, {username, password}) {
    return new Promise((resolve, reject) => {
      dispatch('rest/login', {username: username, password: password}, {root: true}).then(response => {
        doLogin(dispatch, commit, username, response.profileId, response.token)
        dispatch('channel/connect', {username: username, token: response.token}, {root: true}).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout ({commit, dispatch}) {
    commit('logout')
    dispatch('profile/clear', null, {root: true})
    dispatch('channel/disconnect', {}, {root: true})
    bus.$emit('logged-out', {})
  }
}

function doLogin (dispatch, commit, username, profileId, token) {
  var timeoutId = setTimeout(function () { dispatch('logout') }, 60000)
  commit('login', {username: username, profileId: profileId, timeoutId: timeoutId, token: token})
}

/**
 * Mutations
 */
const mutations = {
  signup (state, {username}) {
    state.username = username
  },
  login (state, {username, profileId, timeoutId, token}) {
    state.username = username
    state.profileId = profileId
    state.authenticated = true
    state.timeoutId = timeoutId
    state.token = token
  },
  logout (state) {
    if (state.timeoutId) clearTimeout(state.timeoutId)
    state.username = null
    state.profileId = null
    state.authenticated = false
    state.timeoutId = null
    state.token = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
