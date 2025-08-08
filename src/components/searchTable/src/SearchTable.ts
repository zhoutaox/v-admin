import { AiFormColumn, AiFormListSearch, AiFormButton } from '@/api'
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

  fnClass!: new () => void

  setButtonClass(fnClass: new () => void) {
    this.fnClass = fnClass
  }
}
