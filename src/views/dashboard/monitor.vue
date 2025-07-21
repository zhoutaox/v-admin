<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, onMounted } from 'vue'
import Box from './components/Box.vue'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent])

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

const option2 = ref({
  title: {
    text: 'Temperature Change in the Coming Week',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C',
    },
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' },
        ],
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }],
      },
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max',
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max',
              },
              type: 'max',
              name: '最高点',
            },
          ],
        ],
      },
    },
  ],
})
</script>

<template>
  <div class="monitor">
    <div class="main1">
      <Box class="box1" title="访问量">
        <v-chart class="chart" :option="option" autoresize />
      </Box>
      <Box class="box2" title="区域排行">
        <v-chart class="chart" :option="option2" autoresize />
      </Box>
    </div>
    <div class="main1">
      <Box class="box1" title="销售额">
        <v-chart class="chart" :option="option" autoresize />
      </Box>
      <Box class="box2" title="访问来源">
        <v-chart class="chart" :option="option" autoresize />
      </Box>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chart {
  padding: 20px;
  box-sizing: border-box;
  height: 300px;
  border-radius: 8px;
}

.main1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
