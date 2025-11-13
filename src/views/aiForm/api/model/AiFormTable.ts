import { Type } from 'class-transformer'
import { AiFormField, AiFormColumn, AiFormButton } from '.'

export class AiFormTable {
  /**
   * # 检索列表
   */
  @Type(() => AiFormField)
  searchList: AiFormField[] = []

  /**
   * # 列表字段
   */
  @Type(() => AiFormColumn)
  columnList: AiFormColumn[] = [] // 列表字段

  /**
   * # 按钮列表
   */
  @Type(() => AiFormButton)
  buttonList: AiFormButton[] = []

  searchType: number = 0
}
