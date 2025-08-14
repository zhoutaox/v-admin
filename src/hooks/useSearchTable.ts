import { computed, type Ref, ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { useTable } from './useTable'
import type { Values } from '@/types'

export function useSearchTable() {
  const { data, pageConfig, loading, tableRef, downloadCsv } = useTable()
  const containerRef = ref<HTMLElement | null>(null)
  const searchParams: Ref<Record<string, Values>> = ref({})
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(containerRef)
  const operationButtonList = computed(() => {
    return [
      {
        label: '刷新',
        icon: 'change',
        onClick: () => {
          // Refresh the table data
        },
      },
      {
        label: '导出',
        icon: 'download',
        onClick: downloadCsv,
      },
      {
        label: isFullscreen.value ? '退出全屏' : '全屏',
        icon: isFullscreen.value ? 'compress' : 'fullscreen',
        onClick: toggleFullscreen,
      },
    ]
  })

  function reset() {
    searchParams.value = Object.fromEntries(Object.keys(searchParams.value).map((key) => [key, '']))
  }

  function search() {
    console.log('Searching with params:', searchParams.value)
  }

  return {
    containerRef,
    tableRef,
    isFullscreen,
    data,
    pageConfig,
    loading,
    searchParams,
    operationButtonList,
    reset,
    search,
    toggleFullscreen,
    downloadCsv,
  }
}
