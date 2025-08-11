import { ref, reactive, type Ref, type Reactive, watch } from 'vue'
import { NForm } from 'naive-ui'
import { type RuleItem } from 'async-validator'
import { BaseEntity } from '@/core/BaseEntity'
import { getFormConfig } from '@/core'
import { message, getNaiveUiRules } from '@/utils'
import { AiFormField } from '@/api'

interface UseCrudReturn<T extends BaseEntity> {
  loading: Ref<boolean>
  formRef: Ref<InstanceType<typeof NForm> | null>
  formModel: Reactive<Record<string, unknown>>
  title: Ref<string>
  isShowModel: Ref<boolean>
  fieldList: AiFormField[]
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
  const fieldList: AiFormField[] = Object.getPrototypeOf(formModel).fields || [] // 字段列表
  const formConfig = getFormConfig(model) // 表单配置

  function submit() {
    formRef.value?.validate((errors) => {
      if (!errors) {
        formConfig.crud?.add(formModel)
      } else {
        console.log(errors)
        message.error('验证失败')
      }
    })
  }

  /*** methods ***/
  // function initWatch() {
  //   // 监听字段变化
  //   fieldList.forEach(({ propertyKey, change }) => {
  //     if (change) {
  //       watch(
  //         // @ts-expect-error 暂时无法解决
  //         () => formModel[propertyKey],
  //         (value) => {
  //           change(formModel, value)
  //         },
  //       )
  //     }
  //   })
  // }

  // initWatch() // 初始化监听

  return {
    loading,
    formRef,
    formModel,
    title,
    isShowModel,
    fieldList,
    rules: getNaiveUiRules(model),
    submit,
  }
}
