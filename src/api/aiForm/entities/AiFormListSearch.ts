import { BaseEntity } from '@/core'

export class AiFormListSearch extends BaseEntity {
  /**
   * # 标题
   */
  label: string = ''

  /**
   * # 控件类型
   * @see ComponentEnum
   */
  widgetType: string = ''
}
