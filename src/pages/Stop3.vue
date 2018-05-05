<template>
  <div class="hello">
    <h1>{{ $route.name }}</h1>
    <button @click="goNext()">next</button>
  </div>
</template>

<script>
import TheFlow from '@/mixins/TheFlow'

export default {
  name: 'Stop3',
  data: function () {
    return {
    }
  },
  mixins: [
    TheFlow
  ]
}

</script>
