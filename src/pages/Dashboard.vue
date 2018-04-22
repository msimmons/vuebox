<template>
  <div>
    <h1>Logged in as {{ username }}</h1>
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

export default {
  name: 'Dashboard',
  data () {
    return {
      error: null
    }
  },
  computed: mapState({
    username: state => state.auth.username,
    profile: state => state.profile,
    auth: state => state.auth
  }),
  methods: {
    logout () {
      this.error = null
      this.$store.dispatch('auth/logout')
    }
  },
  beforeRouteEnter: function (to, from, next) {
    next(vm => {
      if (!vm.auth.authenticated) vm.$router.push('/')
    })
  },
  components: {
    LogoutButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>
