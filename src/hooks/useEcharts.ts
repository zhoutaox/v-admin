import { ref, provide, watch } from 'vue'
import { THEME_KEY } from 'vue-echarts'
import { use, type EChartsCoreOption } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
} from 'echarts/components'
import { useAppStore } from '@/stores'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  BarChart,
  LineChart,
])
export function useEcharts(options: EChartsCoreOption) {
  const appStore = useAppStore()
  const theme = ref(appStore.app.isDark ? 'dark' : 'light')
  const loading = ref(false)
  const baseOptions: EChartsCoreOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'right',
    },
  }

  const chartOptions = ref<EChartsCoreOption>({
    ...baseOptions,
    ...options,
  })

  provide(THEME_KEY, theme)
  watch(
    () => appStore.app.isDark,
    (isDark) => {
      theme.value = isDark ? 'dark' : 'light'
    },
  )

  return {
    loading,
    chartOptions,
  }
}
