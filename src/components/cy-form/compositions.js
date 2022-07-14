
import { reactive, computed } from 'vue'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const commonDictApi = () => new Promise()

export const init = (emit, props) => {
  const state = reactive({})

  const initParams = {
    projId: state.projectId,
    projectId: state.projectId
  }
  const initParamsPros = computed(() => Object.keys(initParams))

  const apiType = ['select', 'cascader']
  state.initApiSelect = (formItems, formVal) => {
    const apiItem = formItems.filter(item => apiType.includes(item.type) && item.api && item.api instanceof Function)
    // apiItem.forEach(item => { item.options = item.options || [] })
    if (apiItem.length > 0) {
      apiItem.forEach(item => {
        const params = Object.assign({}, item.params || {})
        Object.keys(params).forEach(item => {
          if (initParamsPros.value.includes(item) && params[item] === true) params[item] = initParams[item]
        })
        item.api(params).then(res => {
          let options = res
          if (item.filter && item.filter instanceof Function) options = item.filter(options)
          item.options = options
          item.optionChange = true
          if (item.defaultValue) setDefault(formVal, item)
        }).catch(() => {
          item.optionChange = true
        })
      })
    }
  }

  const selectType = ['select', 'radioButton', 'radio']
  state.initKeySelect = (formItems, formVal) => {
    const dictItem = formItems.filter(item => selectType.includes(item.type) && item.selectKey && !item.api)
    // dictItem.forEach(item => { item.options = item.options || [] })
    const keyList = dictItem.map(item => item.selectKey)
    if (keyList.length > 0) {
      const params = { configKeyList: keyList }
      commonDictApi(params).then(res => {
        dictItem.forEach(item => {
          item.selectLabel = 'keyName'
          item.selectValue = 'value'
          let options = res[item.selectKey]
          if (item.filter && item.filter instanceof Function) options = item.filter(options)
          item.options = options
          item.optionChange = true
          if (item.defaultValue) setDefault(formVal, item)
        })
      }).catch(() => {
        dictItem.forEach(item => { item.optionChange = true })
      })
    }
    const hasDefaults = formItems.filter(item => selectType.includes(item.type) && item.default && !item.api)
    if (hasDefaults.length > 0) {
      hasDefaults.forEach(item => {
        item.options = optionDefault[item.default]
        item.selectLabel = 'keyName'
        item.selectValue = 'value'
        if (item.defaultValue) setDefault(formVal, item)
      })
    }
  }
  const setDefault = (formVal, item) => {
    if (!item.options || !(item.options instanceof Array)) return
    const data = item.options.find(v => {
      return v[item.selectValue] === item.defaultValue || v[item.selectLabel] === item.defaultValue
    })
    formVal[item.prop] = data ? data[item.selectValue] : null
  }

  state.formatDetail = (val, item) => {
    if (item.format && item.format instanceof Function) return item.format(val)
    return val || '--'
  }

  state.selectChange = (val, item, form) => {
    if (val instanceof Array) {
      form[item.prop] = val
      emit('select-change', val, '', item)
      state.handChange(val, item)
      return
    }
    form[item.prop] = val || (props.changeNull ? null : '')
    const propLabel = item.propLabel || item.prop + 'Name'
    const labelVal = val ? item.options.find(op => op[item.selectValue] === val)[item.selectLabel] : (props.changeNull ? null : '')
    form[propLabel] = labelVal
    emit('select-change', val, labelVal, item)
    state.handChange(val, item)
  }

  state.inputChange = (val, item) => emit('input-change', val, item)

  state.clearItem = (form, item, isNull) => {
    form[item.prop] = isNull ? null : ''
    emit('input-change', form[item.prop], item)
  }

  state.dateChange = (val, form, item) => {
    const valueFormat = item.valueFormat || 'YYYY-MM-DD'
    if (!val) { form[item.prop] = props.changeNull ? null : '' } else { form[item.prop] = dayjs(val).format(valueFormat) }
    emit('select-change', val, form[item.prop], item)
    state.handChange(val, item)
  }

  state.dateRangeChange = (val, form, item) => {
    const startProp = item.start || 'start'
    const endProp = item.end || 'end'
    const valueFormat = item.valueFormat || 'YYYY-MM-DD'
    if (!val) {
      form[startProp] = props.changeNull ? null : ''
      form[endProp] = props.changeNull ? null : ''
    } else {
      form[startProp] = dayjs(val[0]).format(valueFormat)
      form[endProp] = dayjs(val[1]).format(valueFormat)
    }
    state.handChange(val, item)
  }

  state.disabledDate = (val) => {
    if (val instanceof Function) return val
    else return disabledDate(val)
  }

  state.updateSelect = (formItems, formVal, prop, type, update, clear) => {
    const formItem = formItems.find(v => v.prop === prop)
    const propLabel = formItem.propLabel || prop + 'Name'
    if (type === 'params' && formItem.api && formItem.api instanceof Function) {
      formItem.api(update).then(res => {
        formItem.options = res
        if (clear) {
          formVal[prop] = ''
          formVal[propLabel] = ''
        }
      })
    } else if (type === 'option') {
      formItem.options = update
      if (clear) {
        formVal[prop] = ''
        formVal[propLabel] = ''
      }
    }
  }

  state.handChange = (val, item) => {
    emit('hand-change', val, item.prop, item)
  }

  return state
}

export const disabledDate = (name) => {
  switch (name) {
    case 'diabledDateAfter': return (date) => {
      return dayjs(date).isBefore(dayjs(), 'date')
    }
    case 'diabledDateAfterNow': return (date) => {
      return dayjs(date).isSameOrBefore(dayjs(), 'date')
    }
    case 'diabledDateBefore': return (date) => {
      return dayjs(date).isAfter(dayjs(), 'date')
    }
    case 'diabledDateBeforeNow': return (date) => {
      return dayjs(date).isSameOrAfter(dayjs(), 'date')
    }
    default: return false
  }
}

export const optionDefault = {
  priorityRadio: [
    { keyName: '高', value: '1', class: 'serious' },
    { keyName: '中', value: '2', class: 'moderate' },
    { keyName: '低', value: '3', class: 'slight' }
  ]
}
