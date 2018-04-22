<template>
  <div>
    <div>
      <h1>Welcome</h1>
      <router-link to="login">Login</router-link>
      <router-link to="signup">Signup</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: mapState({
  }),
  methods: {
  }
}

</script>

<style/>
