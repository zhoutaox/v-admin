import { ref, reactive, type Ref, type Reactive, watch } from 'vue'
import { NForm } from 'naive-ui'
import Schema from 'async-validator'
import { type RuleItem } from 'async-validator'
import { getMetadataStorage } from 'class-validator'
import { AbstractApi } from '@/core/AbstractApi'
import { BaseEntity } from '@/core/BaseEntity'
import { type FieldProps } from '@/core'
import { message } from '@/utils'
import type { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata'

interface UseCrudReturn<T extends BaseEntity> {
  loading: Ref<boolean>
  formRef: Ref<InstanceType<typeof NForm> | null>
  formModel: Reactive<Record<string, unknown>>
  title: Ref<string>
  isShowModel: Ref<boolean>
  fieldList: FieldProps[]
  rules: Record<string, RuleItem[]>
  submit: () => void
}

export function useCrud<T extends BaseEntity>(model: new () => T): UseCrudReturn<T> {
  /*** refs ***/
  const loading = ref(false) // 加载状态
  const formRef: Ref<InstanceType<typeof NForm> | null> = ref(null) // 表单实例
  const formModel = reactive(new model()) // 表单数据
  const title = ref('') // 标题
  const isShowModel = ref(false) // 是否显示弹窗
  const fieldList: FieldProps[] = Object.getPrototypeOf(formModel).fields || [] // 字段列表
  const metadataStorage = getMetadataStorage()
  const validationMetaList = metadataStorage.getTargetValidationMetadatas(model, '', true, true)

  function getNaiveUiRules(rules: ValidationMetadata[]) {
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
    }

    validatorRule.message = message as string

    return validatorRule
  }

  function submit() {
    console.error('提交表单', formRef)

    formRef.value?.validate((errors) => {
      if (!errors) {
        message.success('验证成功')
      } else {
        console.log(errors)
        message.error('验证失败')
      }
    })
  }

  /*** methods ***/
  function initWatch() {
    // 监听字段变化
    fieldList.forEach(({ propertyKey, change }) => {
      if (change) {
        watch(
          // @ts-expect-error 暂时无法解决
          () => formModel[propertyKey],
          (value) => {
            change(formModel, value)
          },
        )
      }
    })
  }

  initWatch() // 初始化监听

  return {
    loading,
    formRef,
    formModel,
    title,
    isShowModel,
    fieldList,
    rules: getNaiveUiRules(validationMetaList),
    submit,
  }
}
