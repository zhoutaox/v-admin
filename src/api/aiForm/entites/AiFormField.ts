import { BaseEntity } from '@/core'

export class AiFormField extends BaseEntity {
  /**
   * # 字段名称
   */
  name: string = ''

  /**
   * # 数据库字段名
   */
  dbName: string = ''

  /**
   * # 字段描述
   */
  description: string = ''

  /**
   * # 字段控件类型
   */
  widgetType: string = ''
}
