<template>
  <div class="hello">
    <h1>{{ id }}</h1>
    <h2>{{ option }}</h2>
  </div>
</template>

<script>
export default {
  name: 'IdDisplay',
  props: [
    'id',
    'option'
  ],
  data () {
    return {}
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
