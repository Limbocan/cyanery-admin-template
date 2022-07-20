<template>
  <el-pagination
    :current-page="props.pageNum"
    :page-size="props.pageSize"
    :total="props.total"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="onSizeChange"
    @current-change="onCurrentChange"
  />
</template>

<script setup>
import { ElPagination } from 'element-plus'

const props = defineProps({
  pageNum: { type: [Number, String], default: 0 },
  pageSize: { type: [Number, String], default: 20 },
  total: { type: [Number, String], default: 0 }
})
const emit = defineEmits(['update:pageNum', 'update:pageSize', 'pageChange'])

const onSizeChange = (val) => {
  emit('update:pageSize', val)
  pageChanged()
}

const onCurrentChange = (val) => {
  emit('update:pageNum', val)
  pageChanged()
}

const pageChanged = () => {
  emit('pageChange', props)
}

</script>

<style lang="scss" scoped>
.el-pagination {
  text-align: right;
}
.cy-table + .el-pagination {
  margin-top: 8px;
}
</style>
