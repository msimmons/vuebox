import EventBus from 'vertx3-eventbus-client'

/**
 * Initial state
 */
let eventBus

const state = {
  uri: process.env.CHANNEL_URI,
  profileId: null,
  token: null
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
  connect ({ dispatch, commit, state }, { username, token }) {
    return new Promise((resolve, reject) => {
      // Open websocket, event bus etc.
      doConnect(token).then(response => {
        commit('connect', { profileId: '123', token: '123' })
        resolve()
      }).catch(error => {
        console.log('Failed to connect: ' + error)
        doDisconnect()
        reject(error)
      })
    })
  },
  send ({ dispatch, commit, state }, { address, payload }) {
    return new Promise((resolve, reject) => {
      if (!eventBus) {
        reject(new Error('No connection to server'))
      } else {
        // Send message and receive reply
        eventBus.send(address, payload, {}, (error, response) => {
          if (error) {
            console.log('error: ' + JSON.stringify(error))
            reject(error)
          } else {
            console.log('response: ' + JSON.stringify(response))
            resolve(response.body)
          }
        })
      }
    })
  },
  disconnect ({ commit, state, dispatch }) {
    // Disconnect
    console.log('Disconnecting')
    doDisconnect()
    commit('disconnect', {})
  }
}

function doConnect (token) {
  console.log('Connecting')
  return new Promise((resolve, reject) => {
    eventBus = new EventBus(state.uri + '?jwt=' + token)
    eventBus.enableReconnect(true)
    eventBus.onclose = (error) => {
      reject(new Error(error.reason))
    }
    eventBus.onerror = (error) => {
      console.log('onerror: ' + JSON.stringify(error))
    }
    eventBus.onopen = () => {
      console.log('Connected')
      eventBus.onclose = (close) => {
        if (!close.wasClean) {
          console.log('Socket closed: ' + JSON.stringify(close))
        }
      }
      resolve()
    }
    eventBus.onreconnect = () => {
      console.log('Reconnecting...')
    }
  })
}

function doDisconnect () {
  if (!eventBus) return
  try {
    eventBus.close()
  } catch (error) {
    console.log(error)
  }
  eventBus = null
}

/**
 * Mutations
 */
const mutations = {
  connect (state, { profileId, token, eventBus }) {
    state.profileId = profileId
    state.token = token
  },
  disconnect (state, { profileId, token, eventBus }) {
    state.profileId = null
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
