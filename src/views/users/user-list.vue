<template>
  <div :class="['search-page', state.autoHeight ? '' : 'auto-height']">
    <div class="search-box">
      <cy-form
        v-model="state.searchForm"
        :form-items="state.searchFormItems"
      >
        <div class="search-btns">
          <cy-button
            class="search-btn"
            type="search"
            @click="getData"
          />
        </div>
      </cy-form>
    </div>
    <div class="search-content">
      <div class="tools-box">
        <cy-button
          :label="state.autoHeight ? '取消自适应高度' : '自适应高度'"
          theme="success"
          class="tool-button"
          @click="state.autoHeight = !state.autoHeight"
        />
      </div>
      <cy-table
        v-model:page-num="state.searchForm.pageNum"
        v-model:page-size="state.searchForm.pageSize"
        :loading="state.loading"
        :columns="state.tableColumns"
        :data="state.tableData"
        :total="state.searchForm.total"
        @page-change="pageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="UserList">
import { reactive } from 'vue'
import { userListApi } from '@/api/user'
import dayjs from 'dayjs'

const state = reactive({
  autoHeight: true,
  loading: false,
  searchForm: {
    username: '',
    crt_time: dayjs().format('YYYY-MM-DD'),
    pageNum: 1,
    pageSize: 10,
    total: 0,
  },
  searchFormItems: [
    { label: '用户名', prop: 'username', type: 'input', span: 6 },
    { label: '创建时间', prop: 'crt_time', type: 'date', span: 6 }
  ],
  tableData: [],
  tableColumns: [
    { type: 'index' },
    { label: '用户名', prop: 'username', mWidth: 120 },
    { label: '状态', prop: 'status', mWidth: 100 }
  ]
})

getData()

function getData() {
  state.loading = true
  return userListApi(state.searchForm).then(res => {
    state.tableData = res.data.result || []
    state.searchForm.total = res.data.total
    state.loading = false
  }).catch(() => { state.loading = false })
}

const pageChange = (val: any) => {
  getData()
}

</script>

<style lang="scss" scoped>

</style>
