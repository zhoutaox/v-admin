import { type RuleItem } from 'async-validator'
import type { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata'
import { isEmail, equals, notEquals, getMetadataStorage } from 'class-validator'

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

export function getValidationMetadata(model: new () => unknown) {
  const metadataStorage = getMetadataStorage()
  return metadataStorage.getTargetValidationMetadatas(model, '', true, true)
}

export function getNaiveUiRules(model: new () => unknown) {
  const validationMetaList = getValidationMetadata(model)
  console.error(validationMetaList, classValidatorTransform(validationMetaList))

  return classValidatorTransform(validationMetaList)
}
