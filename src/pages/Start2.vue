<template>
  <div class="hello">
    <h1>{{ $route.name }}</h1>
    <button @click="goNext()">next</button>
  </div>
</template>

<script>

export default {
  name: 'Start2',
  data: function () {
    return {
    }
  },
  methods: {
    goNext () {
      this.$router.push('/start2/stop1')
    }
  }
}

</script>
