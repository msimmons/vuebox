<template>
  <div>
    <h1>Signup</h1>
    <form @submit="submit">
      <input type="text" v-model="firstName" placeholder="First Name"/>
      <input type="text" v-model="email" placeholder="Email"/>
      <input type="password" v-model="password" placeholder="Password"/>
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password"/>
      <button type="submit">Submit</button>
    </form>
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
      confirmPassword: null
    }
  },
  computed: mapState({
  }),
  methods: {
    submit: function () {
    }
  }
}

</script>

<style/>
