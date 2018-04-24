/**
 * Initial state
 */
const state = {
  uri: process.env.REST_URI
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
  signup ({commit, state}, {name, username, password}) {
    return new Promise((resolve, reject) => {
      // Call the signup endpoint
      console.log('Calling signup endpoint')
      resolve({})
    })
  },
  verify ({commit, state}, {username, verifyCode}) {
    return new Promise((resolve, reject) => {
      // Call the verify endpoint
      console.log('Calling verify endpoint')
      resolve({profileId: '123123', token: 'atoken'})
    })
  },
  login ({commit, state}, {username, password}) {
    return new Promise((resolve, reject) => {
      // Call the login endopint
      console.log('Calling the login endpoint')
      if (password === 'reject') {
        reject(new Error('Invalid credentials'))
      } else {
        resolve({profileId: '123123', token: 'atoken'})
      }
    })
  }
}

/**
 * Mutations
 */
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
