import { BaseEntity, Table } from '@/core'

@Table({
  name: '',
  comment: '智能表单',
})
export class AiForm extends BaseEntity {
  /**
   * # 表单名称
   */
  name: string = ''

  /**
   * # 对应表名
   */
  tableName: string = ''

  /**
   * # 表单描述
   */
  desc: string = ''
}
