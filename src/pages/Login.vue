<template>
  <div class="hello">
    <div v-if="!authenticated">
      <h1>Please Login</h1>
      <div><input type="text" hint="Username" v-model="enteredUsername"/></div>
      <div><input type="password" hint="Password" v-model="enteredPassword"/></div>
      <div><button @click="login">Login</button></div>
      <span v-if="error">{{ error.message }}</span>
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
      enteredPassword: null,
      error: null
    }
  },
  computed: mapState({
    authenticated: state => state.auth.authenticated,
    username: state => state.auth.username
  }),
  methods: {
    login () {
      this.error = null
      this.$store.dispatch('auth/login', {username: this.enteredUsername, password: this.enteredPassword}).then(() => {
        this.enteredPassword = null
        this.enteredUsername = null
        this.$router.push({path: '/dashboard'})
      }).catch((err) => {
        this.error = err
      })
    },
    logout () {
      this.error = null
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
