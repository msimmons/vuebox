<template>
  <div>
    <h1>Verification</h1>
    <form @submit.prevent="submit">
      <input type="text" v-model="verifyCode" placeholder="Verification Code"/>
      <button type="submit">Submit</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>

export default {
  name: 'SignupVerify',
  data: function () {
    return {
      verifyCode: null,
      error: null
    }
  },
  methods: {
    submit: function () {
      this.error = null
      this.$store.dispatch('auth/verify', {verifyCode: this.verifyCode}, {root: true}).then(response => {
        this.$router.push('/dashboard')
      }).catch(error => {
        this.error = error
      })
    }
  }
}

</script>

<style/>
