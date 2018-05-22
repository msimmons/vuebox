<script>

export default {
  name: 'ContextAwareRouter',
  props: [
    'context'
  ],
  methods: {
    goTo (path) {
      if (path) {
        this.$router.push(`/${this.context}/${path}`)
      } else {
        this.$router.push(`/${this.context}`)
      }
    },
    goNext () {
      const next = this.$route.meta.next
      this.goTo(next)
    },
    goBack () {
      const back = this.$route.meta.back
      this.goTo(back)
    }
  }
}
</script>
