import type { Component } from 'vue'
import { NInput, NInputNumber, NCascader, NSelect } from 'naive-ui'
import { Upload } from '@/components'
import { Enum } from '@/core'

export class ComponentEnum extends Enum {
  /**
   * # 组件
   */
  component: Component

  /**
   * # 标签
   */
  tag: string = ''
  public constructor(key: number, label: string, component: Component = NInput, tag = '') {
    super(key, label)
    this.component = component
    this.tag = tag
  }
  static INPUT = new ComponentEnum(0, '输入框', NInput, 'Input')
  static SELECT = new ComponentEnum(1, '下拉框', NSelect, 'Select')
  static RADIO = new ComponentEnum(2, '单选框', NInput, 'Radio')
  static PASSWORD = new ComponentEnum(3, '密码输入框', NInput, 'Input')
  static IMG = new ComponentEnum(4, '单图上传', Upload, 'Upload')
  static MULTI_IMG = new ComponentEnum(5, '多图上传', NInput, 'Input')
  static TEXTAREA = new ComponentEnum(6, '文本区域', NInput, 'Input')
  static CASCADER = new ComponentEnum(7, '级联选择', NCascader, 'Cascader')
  static CHECKBOX = new ComponentEnum(8, '复选框', NInput, 'Checkbox')
  static INPUT_NUMBER = new ComponentEnum(9, '数字输入', NInputNumber, 'InputNumber')
  static SWITCH = new ComponentEnum(10, '开关', NInput, 'Switch')
  static TREE_SELECT = new ComponentEnum(11, '树形选择', NInput, 'TreeSelect')
  static RATE = new ComponentEnum(12, '评分', NInput, 'Rate')

  static getComponent(key: number): Component | undefined {
    const component = this.toArray().find((item) => item.key === key)
    return component?.component
  }

  static getKeyByTag(tag: string): number | undefined {
    const component = this.toArray().find((item) => item.tag === tag)
    return component?.key
  }
}
