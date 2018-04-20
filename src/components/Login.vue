<template>
  <div class="hello">
    <div v-if="!authenticated">
      <h1>Please Login</h1>
      <input type="text" hint="Username" v-model="enteredUsername"/>
      <input type="password" hint="Password" v-model="enteredPassword"/>
      <button @click="login">Login</button>
    </div>
    <div v-if="authenticated">
      <h1>Logged In As {{ username }}</h1>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      enteredUsername: null,
      enteredPassword: null
    }
  },
  computed: mapState({
    authenticated: state => state.auth.authenticated,
    username: state => state.auth.username
  }),
  methods: {
    login () {
      this.$store.dispatch('auth/login', this.enteredUsername, this.enteredPassword)
      this.enteredPassword = null
      this.enteredUsername = null
      // Navigate somewhere?
    },
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
