<template>
  <div>
    <div>{{ header }}</div>
    <div>{{ transaction.id }}</div>
    <div>{{ note }}</div>
  </div>
</template>

<script>

export default {
  name: 'transaction',
  props: [
    'transaction'
  ],
  computed: {
    isPending: vm => vm.transaction.status === 'pending',
    dateString: vm => (vm.transaction.date.getMonth() + 1) + '/' + vm.transaction.date.getDate(),
    header: vm => vm.isPending ? 'Pending' : vm.dateString,
    note: vm => 'Something'
  },
  created: function () {
    setTimeout(() => {
      this.transaction.status = 'posted'
    }, 5000)
  }
}

</script>

<style/>
