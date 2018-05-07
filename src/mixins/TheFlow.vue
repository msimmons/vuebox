<script>

export default {
  name: 'TheFlow',
  methods: {
    goNext () {
      const next = this.$route.meta.next
      if (next) {
        this.$router.push(next)
      }
    }
  }
}
</script>
