
const tagMap = {
  1: { type: 'danger', name: '高', class: 'danger-circle' },
  2: { type: 'warning', name: '中', class: 'warning-circle' },
  3: { type: 'success', name: '低', class: 'success-circle' },
}

export const colStatus = (val) => {
  return tagMap[val] ? tagMap[val] : { type: 'success', name: '-' }
}

export const setWidth = (val) => {
  if (!val) return ''
  if (/^\d+$/.test(val)) return val + 'px'
  else return val
}

export const cellData = (val) => {
  return val === 0 ? 0 : val === 'null' ? false : val || false
}
