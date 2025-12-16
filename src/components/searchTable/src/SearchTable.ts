import { AiFormColumn, AiFormListSearch, AiFormButton } from '@modules/aiForm/api'
import { type Values } from '@/types'

export class SearchTable {
  /**
   * # 列数据
   */
  columnList: AiFormColumn[] = []

  /**
   * # 搜索数据
   */
  searchList: AiFormListSearch[] = []

  /**
   * # 按钮数据
   */
  buttonList: AiFormButton[] = []

  /**
   * # 初始化搜索参数
   */
  initSearchParams: Record<string, Values> = {}

  fnClass: Record<string, (row?: Record<string, Values>) => void> = {}
}
