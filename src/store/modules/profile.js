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
  get ({commit, dispatch, state}, {email}) {
    // get the profile from email
    dispatch('channel/send', {address: 'get profile', payload: {profileId: state.profileId}}, {root: true})
    var profile = {profileId: '1234', firstName: 'mark', lastName: 'simmons', email: 'mark@cinchfinancial.com'}
    commit('set', {profile: profile})
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
