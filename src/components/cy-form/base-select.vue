<template>
  <el-select
    v-model="state.value"
    v-bind="$attrs"
    :placeholder="props.option.placeholder || '请选择'"
    :disabled="props.option.disabled || false"
    :readonly="props.option.readonly || false"
    :filterable="props.option.filterable === false ? false : true"
    :multiple="props.option.multiple || false"
    :multiple-limit="props.option.limit || 0"
    clearable
    @change="selectChange($event, props.option)"
  >
    <template
      v-if="props.option.prefix"
      #prefix
    >
      {{ props.option.prefix }}：
    </template>
    <el-option
      v-for="select in props.option.options"
      :key="select[props.option.selectValue || 'value']"
      :label="select[props.option.selectLabel || 'keyName']"
      :value="select[props.option.selectValue || 'value']"
    />
  </el-select>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { ElSelect, ElOption } from 'element-plus'

const props = defineProps({
  modelValue: { type: [String, Number, Array], default: '' },
  option: { type: Object, default: () => {} }
})
const emit = defineEmits(['update:modelValue', 'change'])

const hasOption = () => {
  if (!props.option) return false
  const OPTION = props.option.options
  return !!(OPTION && OPTION.length && OPTION.length > 0)
}
const state = reactive({
  value: null,
  tempValue: null,
  initOption: false,
})

if (props.option && props.option.multiple) state.value = []
state.initOption = hasOption()

watch(
  () => props.modelValue,
  (val) => {
    if (val !== state.value) {
      if (state.initOption) state.value = val
      else state.tempValue = val
    }
  },
  { immediate: true, deep: true }
)
watch(
  () => props.option.optionChange,
  (val) => {
    if (hasOption() || val) {
      state.initOption = true
      state.value = state.tempValue || props.modelValue
      state.tempValue = null
    }
  },
  { immediate: true, deep: true }
)

const selectChange = (val) => {
  emit('change', val)
}

</script>
