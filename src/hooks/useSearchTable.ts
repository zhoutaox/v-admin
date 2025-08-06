import { toRefs, reactive, type Ref } from 'vue'
import { useTable, type DataTableInstance } from './useTable'

export function useSearchTable(tableRef: Ref<DataTableInstance>) {
  const { data, pageConfig } = useTable(tableRef)
  const state = reactive({
    /**
     * # 分页参数
     */
    searchParams: {},
    /**
     * # 总查询参数
     */
    totalParams: {},
    /**
     * # 查询状态
     */
    loading: false,
  })

  return {
    ...toRefs(state),
    data,
    pageConfig,
  }
}
