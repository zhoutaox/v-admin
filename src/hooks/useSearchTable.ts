import { toRefs, reactive, type Ref, ref, onMounted } from 'vue'
import { useTable } from './useTable'

export function useSearchTable() {
  const { data, pageConfig, loading, tableRef } = useTable()
  const state = reactive({
    /**
     * # 分页参数
     */
    searchParams: {},
    /**
     * # 总查询参数
     */
    totalParams: {},
  })

  return {
    ...toRefs(state),
    tableRef,
    data,
    pageConfig,
    loading,
  }
}
