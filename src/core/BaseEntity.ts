import { objectUtil, stringUtil } from 'bstm-utils'
import { validate, isEmail, equals, notEquals, getMetadataStorage } from 'class-validator'
import { type RuleItem } from 'async-validator'
import type { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata'

function getAsyncValidatorRules(rule: ValidationMetadata): RuleItem {
  const { name, message, constraints } = rule
  const validatorRule = {} as RuleItem
  // @ts-expect-error 添加触发验证的事件
  validatorRule.trigger = 'blur' // 触发验证的事件

  if (name == 'IsNumber') {
    validatorRule.type = 'number'
  } else {
    validatorRule.type = 'string'
  }

  switch (name) {
    case 'isNotEmpty':
      validatorRule.required = true
      break
    case 'isLength':
      validatorRule.min = constraints[0]
      validatorRule.max = constraints[1]
      break
    case 'isEmail':
      validatorRule.validator = (_, value: string) => {
        if (value) {
          return isEmail(value)
        }
        return true
      }
      break
    case 'equals':
      validatorRule.validator = (_, value: string) => {
        if (value) {
          return equals(value, constraints[0])
        }
        return true
      }
      break
    case 'notEquals':
      validatorRule.validator = (_, value: string) => {
        if (value) {
          return notEquals(value, constraints[0])
        }
        return true
      }
      break
  }

  validatorRule.message = message as string

  return validatorRule
}

export function classValidatorTransform(rules: ValidationMetadata[]) {
  const nativeUiRules: Record<string, RuleItem[]> = {}

  for (const rule of rules) {
    const { propertyName } = rule
    if (nativeUiRules[propertyName]) {
      nativeUiRules[propertyName].push(getAsyncValidatorRules(rule))
    } else {
      nativeUiRules[propertyName] = [getAsyncValidatorRules(rule)]
    }
  }
  return nativeUiRules
}

export function getNaiveUiRules(model: new () => unknown) {
  const metadataStorage = getMetadataStorage()
  const validationMetaList = metadataStorage.getTargetValidationMetadatas(model, '', true, true)
  return classValidatorTransform(validationMetaList)
}

export class BaseEntity {
  /**
   * 唯一标识
   * @type {string}
   */
  readonly iid: string = stringUtil.nanoid()

  /**
   * 创建时间
   * @type {number}
   */
  readonly createdTime: number = 0

  /**
   * # 校验实体类
   */
  validate() {
    return validate(this)
  }

  /**
   * # 拷贝
   */
  clone() {
    return objectUtil.cloneDeep(this)
  }

  /**
   * # 创建实例
   */
  static create<T extends BaseEntity>(this: new () => T): T {
    return new this()
  }

  /**
   * # 获取表单校验规则
   */
  static getRules() {
    return getNaiveUiRules(this)
  }
}
