import { BaseEntity } from '@/core'
import { ComponentEnum } from '@/enums'

export class AiFormListSearch extends BaseEntity {
  /**
   * # 标题
   */
  label: string = ''

  /**
   * # 字段名称
   */
  dbName: string = ''

  /**
   * # 控件类型
   * @see ComponentEnum
   */
  widgetType: number = ComponentEnum.INPUT.key

  constructor(label: string, dbName: string, widgetType: number = ComponentEnum.INPUT.key) {
    super()
    this.label = label
    this.dbName = dbName
    this.widgetType = widgetType
  }
}
