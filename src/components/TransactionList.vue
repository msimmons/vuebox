<template>
  <div>
    <div v-for="txn in transactions" :key="txn.id">
      <transaction :transaction="txn"/>
      <hr/>
    </div>
  </div>
</template>

<script>
import Transaction from './Transaction'

export default {
  name: 'transaction-list',
  data: function () {
    return {
      transactions: [
        {id: '1232', status: 'pending', date: new Date()},
        {id: '456', status: 'posted', date: new Date()}
      ]
    }
  },
  components: {
    Transaction
  }
}

</script>

<style/>
