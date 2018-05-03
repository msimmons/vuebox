<script>

export default {
  name: 'Authenticated',
  beforeRouteUpdate: function (to, from, next) {
    next(vm => {
      if (!vm.auth.authenticated) vm.$router.push('/')
    })
  }
}
</script>
