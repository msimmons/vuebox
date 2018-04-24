<template>
  <div>
    <h1>Logged in as {{ auth.username }}</h1>
    <h3>{{ profile.profileId }}</h3>
    <h3>{{ profile.firstName }} {{ profile.lastName }}</h3>
    <h3>{{ profile.email }}</h3>
    <div>
      <logout-button/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LogoutButton from '@/components/LogoutButton'
import Authenticated from '@/mixins/Authenticated'

export default {
  name: 'Dashboard',
  data () {
    return {
      error: null
    }
  },
  computed: mapState({
    profile: state => state.profile,
    auth: state => state.auth
  }),
  methods: {
    logout () {
      this.error = null
      this.$store.dispatch('auth/logout')
    }
  },
  created: function () {
    this.$store.dispatch('profile/get', {profileId: this.auth.profileId})
  },
  mixins: {
    Authenticated
  },
  components: {
    LogoutButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>
