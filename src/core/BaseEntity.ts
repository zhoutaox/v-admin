import { stringUtil } from 'bstm-utils'

export class BaseEntity {
  /**
   * 唯一标识
   * @type {string}
   */
  iid: string = stringUtil.nanoid()
}
