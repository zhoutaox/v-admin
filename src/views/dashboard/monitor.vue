<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, onMounted } from 'vue'

const chartRef = ref<InstanceType<typeof VChart>>()
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

// provide(THEME_KEY, 'dark')

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})

onMounted(() => {
  console.error('chartRef', chartRef.value)
})
</script>

<template>
  <div class="monitor">
    <div class="main">
      <div class="chart1 base-bg">
        <v-chart class="chart" :option="option" autoresize ref="chartRef" />
      </div>
      <div class="chart2"></div>
    </div>
  </div>
  <div class="base-bg"></div>
</template>

<style scoped>
/* .main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.chart1 {
  border-radius: 12px;
} */
.chart {
  padding: 20px;
  box-sizing: border-box;
  height: 300px;
  border-radius: 8px;
}
</style>
