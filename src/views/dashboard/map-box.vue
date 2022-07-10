<template>
  <div
    ref="mapChartRef"
    class="full-box"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getChinaMap } from '@/api/echarts'
import * as echarts from 'echarts'

const mapChartRef = ref(null)
let mapChart = null

onMounted(() => {
  getChinaMap().then(res => {
    const resData = res.data
    echarts.registerMap('china', resData.data)
    initChart()
  })
})

const initChart = () => {
  mapChart = echarts.init(mapChartRef.value)
  mapChart.setOption(option)
}

const option = {
  tooltip: {
    show: true,
    backgroundColor: '#323232b3',
    textStyle: { color: '#FFF' }
  },
  geo: {
    map: 'china',
    show: true,
    roam: false,
    zoom: 1.2,
    label: { show: false },
    itemStyle: {
      areaColor: '#B2CAE0',
      borderColor: '#FFF',
    },
    emphasis: {
      label: { show: false },
      itemStyle: {
        areaColor: '#45a5f8'
      }
    }
  },
  series: []
}

</script>

<style lang="scss" scoped>
.full-box {
  width: 100%;
  height: 100%;
}
</style>
