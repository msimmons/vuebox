import { channel } from '@/service'

/**
 * Initial state
 */
const state = {
  profileId: null,
  firstName: null,
  lastName: null,
  email: null
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
  get ({commit, dispatch, state}, {profileId}) {
    channel.send('example.ws1.whatever', {profileId: profileId}).then(response => {
      console.log(response)
      var profile = {profileId: profileId, firstName: 'mark', lastName: 'simmons', email: 'mark@cinchfinancial.com', something: 'foo'}
      commit('set', {profile: profile})
    }).catch(error => {
      console.log(error)
    })
  },
  clear ({commit}) {
    commit('clear')
  }
}

/**
 * Mutations
 */
const mutations = {
  set (state, {profile}) {
    state.profileId = profile.profileId
    state.firstName = profile.firstName
    state.lastName = profile.lastName
    state.email = profile.email
  },
  clear (state) {
    state.profileId = null
    state.firstName = null
    state.lastName = null
    state.email = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
