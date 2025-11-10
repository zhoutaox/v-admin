import { getNaiveUiRules } from './BaseEntity'

export class BaseDto {
  /**
   * # 创建实例
   */
  static create<T extends BaseDto>(this: new () => T): T {
    return new this()
  }

  /**
   * # 获取表单校验规则
   */
  static getRules() {
    return getNaiveUiRules(this)
  }
}
