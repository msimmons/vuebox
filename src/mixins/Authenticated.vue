<script>

export default {
  name: 'Authenticated',
  beforeRouteEnter: function (to, from, next) {
    next(vm => {
      if (!vm.auth.authenticated) vm.$router.push('/')
    })
  }
}
</script>
