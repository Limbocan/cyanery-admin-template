<template>
  <el-form
    ref="baseFormRef"
    v-bind="$attrs"
    :inline="inline"
    :model="modelValue"
    class="base-form"
  >
    <el-row :gutter="Number(gutter)">
      <el-col
        v-for="item in formItems"
        :key="item.prop || item.slot"
        :span="item.span || 0"
      >
        <el-form-item
          :prop="item.prop"
          :label="item.label || ''"
          :class="fullWidth ? 'item-content-full-width' : ''"
        >
          <template v-if="item.type === 'detail'">
            <span class="item-detail">
              {{ formOption.formatDetail(modelValue[item.prop], item) }}
            </span>
          </template>
          <template v-else-if="item.type === 'input' || item.type === 'textarea'">
            <el-input
              v-model="modelValue[item.prop]"
              :type="item.type === 'input' ? 'text' : item.type"
              :placeholder="item.placeholder || '请输入'"
              :disabled="item.disabled || false"
              :readonly="item.readonly || false"
              :maxlength="item.maxlength || ''"
              :show-word-limit="item.maxlength ? true : false"
              :rows="item.rows"
              clearable
              @clear="formOption.clearItem(modelValue, item, changeNull)"
              @change="formOption.handChange($event, item)"
              @input="formOption.inputChange($event, item)"
            >
              <template
                v-if="item.prefix && item.type === 'input'"
                #prefix
              >
                {{ item.prefix }}
              </template>
            </el-input>
          </template>
          <template v-else-if="item.type === 'select'">
            <base-select
              v-model="modelValue[item.prop]"
              :class="item.class"
              :option="item"
              @change="formOption.selectChange($event, item, modelValue)"
            />
            <slot
              v-if="item.selectSuffix"
              name="selectSuffix"
            />
          </template>
          <template v-else-if="item.type === 'date'">
            <el-date-picker
              v-model="modelValue[item.prop]"
              :type="'date'"
              :placeholder="item.placeholder || '请选择'"
              :disabled="item.disabled || false"
              :readonly="item.readonly || false"
              :clearable="item.clearable || true"
              :disabled-date="formOption.disabledDate(item.disabledDate) || null"
              @change="formOption.dateChange($event, modelValue, item)"
            />
          </template>
          <template v-else-if="item.type === 'daterange'">
            <el-date-picker
              :model-value="(modelValue[item.start] && modelValue[item.end]) ?
                [modelValue[item.start], modelValue[item.end]] : null"
              :type="'daterange'"
              :start-placeholder="item.startPlaceholder || '开始时间'"
              :end-placeholder="item.endPlaceholder || '结束时间'"
              :disabled="item.disabled || false"
              :readonly="item.readonly || false"
              :clearable="item.clearable || true"
              :disabled-date="formOption.disabledDate(item.disabledDate) || null"
              :format="item.format || 'YYYY-MM-DD'"
              @update:model-value="formOption.dateRangeChange($event, modelValue, item)"
            />
          </template>
          <template v-else-if="item.type === 'slot' || item.slot">
            <slot
              :name="item.slot"
              :info="item"
            />
          </template>
        </el-form-item>
      </el-col>
      <slot />
    </el-row>
  </el-form>
</template>

<script setup>
import { ref, defineEmit, watch, useContext } from 'vue'
import { init } from './compositions'
import { ElForm, ElFormItem, ElRow, ElCol, ElInput, ElDatePicker } from 'element-plus'
import baseSelect from './base-select.vue'

const props = defineProps({
  modelValue: { type: Object, default: () => {} },
  formItems: { type: Array, default: () => [] },
  inline: { type: [String, Boolean], default: true },
  gutter: { type: [Number, String], default: 12 },
  changeNull: { type: [Boolean, String], default: false },
  fullWidth: { type: [Boolean, String], default: false }
})
const emit = defineEmit(['value-change', 'select-change', 'hand-change', 'input-change'])
const baseFormRef = ref(null)
const formOption = init(emit, props)
formOption.initApiSelect(props.formItems, props.modelValue)
formOption.initKeySelect(props.formItems, props.modelValue)

watch(
  () => props.modelValue,
  (val) => { emit('value-change', val) },
  { deep: true }
)

const reset = () => baseFormRef.value.resetFields()
const validate = () => {
  return new Promise((resolve, reject) => {
    baseFormRef.value.validate(v => {
      if (v) resolve(v)
      else reject(v)
    })
  })
}
const updateSelect = (prop, data, clear = true) => {
  const type = data instanceof Array ? 'option' : 'params'
  formOption.updateSelect(props.formItems, props.modelValue, prop, type, data, clear)
}

const { expose } = useContext()
expose({
  reset,
  validate,
  updateSelect
})
</script>

<style lang="scss" scoped>
.el-form-item {
  width: 100%;
  :deep(.el-cascader), :deep(.el-date-editor), .el-select { width: 100%; }
  .item-detail { color: #B2B2B2; }
}
.item-content-full-width {
  :deep(.el-form-item__content) { width: 100%; }
}
</style>
