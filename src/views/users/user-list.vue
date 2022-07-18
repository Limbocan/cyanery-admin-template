<template>
  <div class="search-page">
    <div class="search-box">
      <cy-form :form-items="state.searchFormItems" />
    </div>
    <div class="search-content">
      <cy-table />
    </div>
  </div>
</template>

<script setup name="UserList">
import { reactive } from 'vue'

const state = reactive({
  searchFormItems: [
    { label: '用户名', prop: 'username', type: 'input', span: 6 }
  ]
})

</script>

<style lang="scss" scoped>

</style>
