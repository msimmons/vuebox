<template>
  <div>
    <el-table :data="tableData" border size="mini" row-key="name">
      <el-table-column prop="name" label="Name" resizable sortable></el-table-column>
      <el-table-column prop="address" label="Address" resizable></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'the-table',
  data: function () {
    return {
      tableData: [
        {
          name: 'foo',
          address: 'here'
        },
        {
          name: 'bar',
          address: 'there'
        }
      ]
    }
  },
  components: {
  }
}

</script>

<style/>
