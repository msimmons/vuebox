<template>
  <div class="hello">
    <h1>{{ $route.name }}</h1>
    <button @click="goNext()">next</button>
  </div>
</template>

<script>
import ContextAwareRouter from '@/mixins/ContextAwareRouter'

export default {
  name: 'Stop3',
  data: function () {
    return {
    }
  },
  mixins: [
    ContextAwareRouter
  ]
}

</script>
