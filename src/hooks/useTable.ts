import { reactive, toRefs, type Ref, computed, ref, onMounted } from 'vue'
import type { DataTableInst } from 'naive-ui'
import type { RecordValues } from '@/types'

export function useTable(
  api?: (params: RecordValues) => Promise<RecordValues[]>,
  initParams?: Ref<RecordValues>,
) {
  const tableRef = ref<DataTableInst>()
  const state = reactive({
    /**
     * # 表格数据
     */
    data: [],
    /**
     * # 分页配置
     */
    pageConfig: {
      /**
       * 当前页码
       */
      pageNo: 1,
      /**
       * 每页条数
       */
      pageSize: 10,
      /**
       * 总条数
       */
      total: 0,
    },
    /**
     * # 加载状态
     */
    loading: false,
  })

  const params = computed(() => {
    return {
      ...state.pageConfig,
      ...initParams?.value,
    }
  })

  function getTableData() {}

  function downloadCsv() {
    tableRef.value?.downloadCsv()
  }

  onMounted(() => {
    console.error(tableRef.value)
  })

  return {
    ...toRefs(state),
    tableRef,
    params,
    downloadCsv,
  }
}
