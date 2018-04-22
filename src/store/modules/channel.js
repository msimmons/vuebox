/**
 * Initial state
 */
const state = {
  uri: process.env.CHANNEL_URI,
  profileId: null,
  token: null,
  eventBus: null
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
  connect ({dispatch, commit, state}, {username, token}) {
    return new Promise((resolve, reject) => {
      // Open websocket, event bus etc.
      console.log('Connecting ' + username)
      commit('connect', {profileId: '123', token: '123', eventBus: {}})
      resolve()
    })
  },
  send ({dispatch, commit, state}, {address, payload}) {
    return new Promise((resolve, reject) => {
      // Send message and receive reply
      console.log('sending ' + payload + ' to ' + address)
      resolve({})
    })
  },
  disconnect ({commit, state, dispatch}) {
    // Disconnect
    console.log('Disconnecting')
    commit('disconnect', {})
  }
}

/**
 * Mutations
 */
const mutations = {
  connect (state, {profileId, token, eventBus}) {
    state.profileId = profileId
    state.token = token
    state.eventBus = eventBus
  },
  disconnect (state, {profileId, token, eventBus}) {
    state.profileId = null
    state.token = null
    state.eventBus = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
