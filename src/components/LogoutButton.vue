<template>
  <button @click="logout">Logout</button>
</template>

<script>

export default {
  name: 'logout-button',
  methods: {
    logout () {
      this.error = null
      this.$store.dispatch('auth/logout')
    }
  }
}

</script>

<style/>
