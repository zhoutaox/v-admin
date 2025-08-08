import { type Ref, ref } from 'vue'
import { useTable } from './useTable'
import type { Values } from '@/types'

export function useSearchTable() {
  const { data, pageConfig, loading, tableRef } = useTable()
  const searchParams: Ref<Record<string, Values>> = ref({})

  function reset() {
    searchParams.value = Object.fromEntries(Object.keys(searchParams.value).map((key) => [key, '']))
  }

  function search() {
    console.log('Searching with params:', searchParams.value)
  }

  return {
    tableRef,
    data,
    pageConfig,
    loading,
    searchParams,
    reset,
    search,
  }
}
