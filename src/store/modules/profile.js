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
  profileId: state => state.profileId,
  firstName: state => state.firstName,
  lastName: state => state.lastName
}

/**
 * Actions
 */
const actions = {
  get ({commit, state}, email) {
    // get the profile from email
    var profile = {profileId: '1234', firstName: 'mark', lastName: 'simmons', email: 'mark@cinchfinancial.com'}
    commit('set', {profile: profile})
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
