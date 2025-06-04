import { BaseEnum } from 'bstm-utils'

export enum ComponentEnum {
  /**
   * # 输入框
   */
  INPUT = 0,

  /**
   * # 下拉框
   */
  SELECT = 1,

  /**
   * # 单选框
   */
  RADIO = 2,

  /**
   * # 密码输入框
   */
  PASSWORD = 3,

  /**
   * # 单图上传
   */
  IMG = 4,

  /**
   * # 多图上传
   */
  IMGS = 5,

  /**
   * # 图标选择器
   */
  ICON_SELECT = 6,

  /**
   * # 级联选择
   */
  CASCADER = 7,

  /**
   * # 复选框
   */
  CHECKBOX = 8,

  /**
   * # 数字输入
   */
  INPUT_NUMBER = 9,

  /**
   * # 开关
   */
  SWITCH = 10,

  /**
   * # 树形选择
   */
  TREE_SELECT = 11,

  /**
   * # 评分
   */
  RATE = 12,
}

export class ComponentType extends BaseEnum<ComponentType> {
  static INPUT = new ComponentType(ComponentEnum.INPUT, '输入框')
  static SELECT = new ComponentType(ComponentEnum.SELECT, '下拉框')
  static RADIO = new ComponentType(ComponentEnum.RADIO, '单选框')
  static PASSWORD = new ComponentType(ComponentEnum.PASSWORD, '密码输入框')
  static IMG = new ComponentType(ComponentEnum.IMG, '单图上传')
  static IMGS = new ComponentType(ComponentEnum.IMGS, '多图上传')
  static ICON_SELECT = new ComponentType(ComponentEnum.ICON_SELECT, '图标选择器')
  static CASCADER = new ComponentType(ComponentEnum.CASCADER, '级联选择')
  static CHECKBOX = new ComponentType(ComponentEnum.CHECKBOX, '复选框')
  static INPUT_NUMBER = new ComponentType(ComponentEnum.INPUT_NUMBER, '数字输入')
  static SWITCH = new ComponentType(ComponentEnum.SWITCH, '开关')
  static TREE_SELECT = new ComponentType(ComponentEnum.TREE_SELECT, '树形选择')
  static RATE = new ComponentType(ComponentEnum.RATE, '评分')
  constructor(
    public readonly index: ComponentEnum,
    public readonly name: string,
  ) {
    super()
  }
}
