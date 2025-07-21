import { Enum } from '@/core'

export class ComponentEnum extends Enum {
  static INPUT = new ComponentEnum(0, '输入框')
  static SELECT = new ComponentEnum(1, '下拉框')
  static RADIO = new ComponentEnum(2, '单选框')
  static PASSWORD = new ComponentEnum(3, '密码输入框')
  static IMG = new ComponentEnum(4, '单图上传')
  static MULTI_IMG = new ComponentEnum(5, '多图上传')
  static TEXTAREA = new ComponentEnum(6, '文本区域')
  static CASCADER = new ComponentEnum(7, '级联选择')
  static CHECKBOX = new ComponentEnum(8, '复选框')
  static INPUT_NUMBER = new ComponentEnum(9, '数字输入')
  static SWITCH = new ComponentEnum(10, '开关')
  static TREE_SELECT = new ComponentEnum(11, '树形选择')
  static RATE = new ComponentEnum(12, '评分')
}
