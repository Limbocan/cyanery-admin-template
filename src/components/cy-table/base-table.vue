<template>
  <div
    class="copote-table"
    :style="style"
  >
    <el-table
      ref="tableRef"
      v-bind="$attrs"
      :data="data"
      :row-key="rowKey"
      :border="$attrs.border !== false"
      :stripe="$attrs.stripe !== false"
      class="copote-table-content"
      highlight-current-row
      fit
      @sort-change="sortChange"
      @selection-change="selectionChange"
      @row-click="rowClick"
    >
      <template
        v-for="item in columns"
        :key="item.prop || item.slot || item.type"
      >
        <slot
          v-if="item.type === 'column'"
          :name="item.slot"
        />
        <el-table-column
          v-else-if="item.type === 'index'"
          type="index"
          width="56"
          align="center"
          :fixed="item.fixed || null"
          :label="item.label || '序号'"
        />
        <el-table-column
          v-else-if="item.type === 'selection'"
          :reserve-selection="true"
          :fixed="item.fixed || null"
          type="selection"
          width="50"
          align="center"
        />
        <el-table-column
          v-else-if="item.type === 'radio'"
          :selectable="item.selectable"
          :fixed="item.fixed || null"
          width="50"
          align="center"
        >
          <template #default="{ row }">
            <el-radio
              v-model="table.selectRow[rowKey]"
              :label="row[rowKey]"
            />
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :label="item.type === 'operation' ? item.label || '操作' : item.label"
          :prop="item.type === 'operation' ? '' : item.prop"
          :align="item.align || 'center'"
          :width="setWidth(item.width)"
          :min-width="setWidth(item.mWidth)"
          :sortable="item.sortable"
          :show-overflow-tooltip="item.tooltip == false ? false : true"
          :type="item.type || ''"
          :fixed="item.fixed || null"
        >
          <template
            v-if="['operation', 'expand'].includes(item.type) || item.slot"
            #default="scope"
          >
            <slot
              :name="item.slot || item.type"
              :row="scope.row"
              :index="scope.$index"
            >
              <span>{{ cellData(scope.row[item.prop]) || '-' }}</span>
            </slot>
          </template>
          <template
            v-else-if="item.type === 'tag'"
            #default="{ row }"
          >
            <!-- <el-tag :type="colStatus(row[item.prop]).type">
              {{ row[item.tagName || item.prop + 'Name'] || colStatus(row[item.prop]).name }}
            </el-tag>-->
            <div :class="colStatus(row[item.prop]).class" />
          </template>
          <template
            v-else-if="item.type === 'title'"
            #default="{ row, $index }"
          >
            <span
              class="table-column-title"
              @click="titleClick(row)"
            >{{ row[item.prop] }}</span>
            <slot
              name="title"
              :row="row"
              :index="$index"
            />
          </template>
        </el-table-column>
      </template>
      <template #append>
        <slot name="append" />
      </template>
    </el-table>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  defineProps,
  defineEmit,
  useContext,
} from 'vue'
import { ElTable, ElTableColumn, ElRadio } from 'element-plus'
import { setWidth, cellData } from './compositions'

const props = defineProps({
  data: { type: Array, default: () => [] },
  tableOption: { type: Object, default: () => {} },
  columns: { type: Array, default: () => [] },
  api: { type: Function, default: () => {} },
  modelSelect: { type: Array, default: () => [] },
  modelRadio: { type: Object, default: () => {} },
  showIndex: { type: [String, Boolean], default: false },
  selection: { type: [String, Boolean], default: false },
  rowKey: { type: String, default: 'id' },
  style: { type: Object, default: () => {} }
})
const emit = defineEmit(['update:modelSelect', 'update:modelRadio', 'title-click', 'sort-change'])
const tableRef = ref(null)
const table = reactive({
  tableData: [],
  selectRow: {}
})
table.selectRow[props.rowKey] = null

const titleClick = (row) => {
  emit('title-click', row)
}
const selectionChange = (select) => {
  emit('update:modelSelect', select)
}
const sortChange = ({ column, prop, order }) => {
  const data =
    prop !== null
      ? [{ colName: prop, sortOrder: order.replace('ending', '') }]
      : []
  emit('sort-change', data)
}
const rowClick = (row, column, event) => {
  table.selectRow[props.rowKey] = row[props.rowKey]
  emit('update:modelRadio', row)
}

const clearSelect = () => {
  tableRef.value.clearSelection()
}
const toggleRowSelection = (row, select) => {
  tableRef.value.toggleRowSelection(row, select)
}
const setCurrentRow = (row) => {
  tableRef.value.setCurrentRow(row)
}
const { expose } = useContext()
expose({
  clearSelect,
  toggleRowSelection,
  setCurrentRow,
})
</script>

<style lang="scss" scoped>
.copote-table {
  height: 100%;
  width: 100%;
  .copote-table-content {
    width: 100%;
    height: 100%;
    .table-column-title {
      cursor: pointer;
      color: #409eff;
      text-decoration: underline;
    }
    :deep(.cell) {
      &:not(.el-tooltip) {
        white-space: pre-line;
      }
      .el-radio__label { display: none; }
    }
    :deep(.oporate) {
      border: none;
      background: none;
      padding: 0;
      :hover,
      & :focus {
        color: #07c160;
      }
    }
  }
}
</style>