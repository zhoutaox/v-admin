import { reactive, toRefs, type Ref } from 'vue'
import { NDataTable } from 'naive-ui'

export type DataTableInstance = InstanceType<typeof NDataTable>
export function useTable(tableRef: Ref<DataTableInstance>) {
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
  })

  function getTableData() {}

  return {
    ...toRefs(state),
  }
}
