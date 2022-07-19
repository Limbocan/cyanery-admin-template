<template>
  <div class="search-page">
    <div class="search-box">
      <cy-form
        v-model="state.searchForm"
        :form-items="state.searchFormItems"
      />
    </div>
    <div class="search-content">
      <cy-table
        :columns="state.tableColumns"
        :data="state.tableData"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="UserList">
import { reactive } from 'vue'
import dayjs from 'dayjs'

const state = reactive({
  searchForm: {
    username: '',
    crt_time: dayjs().format('YYYY-MM-DD')
  },
  searchFormItems: [
    { label: '用户名', prop: 'username', type: 'input', span: 6 },
    { label: '创建时间', prop: 'crt_time', type: 'date', span: 6 }
  ],
  tableData: [{}, {}, {}, {}, {}],
  tableColumns: [
    { type: 'index' },
    { label: '用户名', prop: 'username', mWidth: 120 },
    { label: '状态', prop: 'status', mWidth: 100 }
  ]
})

</script>

<style lang="scss" scoped>

</style>
