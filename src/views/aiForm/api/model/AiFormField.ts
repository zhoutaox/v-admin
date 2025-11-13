import { BaseEntity, Table, type AllComProps } from '@/core'
import { ComponentEnum } from '@/enums'

@Table({
  comment: '智能表单字段',
})
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
   * @see ComponentEnum
   */
  widgetType: number = ComponentEnum.INPUT.key

  props: AllComProps = {}
}
