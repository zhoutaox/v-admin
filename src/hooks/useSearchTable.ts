import { computed, type Ref, ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { useTable } from './useTable'
import type { Values } from '@/types'
import { showNoOpenMessage } from '@/utils'

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
        size: '12',
        onClick: () => {
          // Refresh the table data
          showNoOpenMessage()
        },
      },
      {
        label: '导出',
        icon: 'download',
        size: '12',
        onClick: downloadCsv,
      },
      {
        label: isFullscreen.value ? '退出全屏' : '全屏',
        icon: isFullscreen.value ? 'compress' : 'fullscreen',
        size: '10',
        onClick: toggleFullscreen,
      },
      {
        label: '打印',
        icon: 'print-fill',
        size: '12',
        onClick: () => {
          // Print the table
          showNoOpenMessage()
        },
      },
      {
        label: '设置',
        icon: 'settings',
        size: '12',
        onClick: () => {
          // Open settings
          showNoOpenMessage()
        },
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
    data,
    pageConfig,
    loading,
    searchParams,
    operationButtonList,
    reset,
    search,
  }
}
