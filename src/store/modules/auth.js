import bus from '@/main'

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
