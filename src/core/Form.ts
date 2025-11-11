import type { FormProps } from 'naive-ui'
import type { AbstractApi } from '../api/helpers'
import type { BaseEntity } from './BaseEntity'

/**
 * 表单配置接口
 */
interface FormOptions extends Partial<FormProps> {
  /**
   * 标签宽度
   */
  labelWidth?: number | string

  /**
   * 标签位置
   */
  labelPlacement?: 'left' | 'top'

  /**
   * 是否显示必填星号
   */
  showRequireMark?: boolean

  /**
   * 是否显示反馈图标
   */
  showFeedback?: boolean

  /**
   * # CRUD
   */
  crud?: AbstractApi

  /**
   * # 提交函数
   */
  submitFn?: (form: BaseEntity) => Promise<void>

  /**
   * # 标题
   */
  title?: string

  /**
   * # 显示的栅格数量
   */
  cols?: number
}

/**
 * 表单配置装饰器
 * @param options 表单配置选项
 */
export function Form(options: FormOptions = {}) {
  return function <T extends { new (...args: unknown[]): unknown }>(target: T) {
    // 设置默认配置
    const defaultOptions: FormOptions = {
      labelWidth: 100,
      labelPlacement: 'left',
      showRequireMark: true,
      showFeedback: true,
      title: '',
      cols: 1,
      ...options,
    }

    // 将配置保存到类的原型上
    target.prototype.formConfig = defaultOptions

    return target
  }
}

/**
 * # 获取表单配置
 * @param target 实体类
 * @returns 表单配置
 */
export function getFormConfig(target: new () => BaseEntity): FormOptions {
  return target.prototype.formConfig || {}
}
