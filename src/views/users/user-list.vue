<template>
  <div>
    用户列表
    <cy-form :form-items="searchFormItems" />
  </div>
</template>

<script setup name="UserList">

const searchFormItems = [
  { label: '用户名', prop: 'username', type: 'input', span: 6 }
]

</script>

<style lang="scss" scoped>

</style>
