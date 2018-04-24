<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="submit">
      <input type="text" v-model="firstName" placeholder="First Name"/>
      <input type="text" v-model="email" placeholder="Email"/>
      <input type="password" v-model="password" placeholder="Password"/>
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password"/>
      <button type="submit">Submit</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Signup',
  data () {
    return {
      firstName: null,
      email: null,
      password: null,
      confirmPassword: null,
      error: null
    }
  },
  computed: mapState({
  }),
  methods: {
    submit: function () {
      this.error = null
      this.$store.dispatch('auth/signup', {name: this.firstName, username: this.email, password: this.password}, {root: true}).then(response => {
        this.$router.push('/signup-verify')
      }).catch(error => {
        this.error = error
      })
    }
  }
}

</script>

<style/>
