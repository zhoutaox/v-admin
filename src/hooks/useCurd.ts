import { ref, reactive, type Ref, type Reactive, watch } from 'vue'
import { NForm } from 'naive-ui'
import { AbstractApi } from '@/core/AbstractApi'
import { BaseModel } from '@/core/BaseModel'
import { type FieldProps } from '@/decorators'

interface UseCrudReturn<T extends BaseModel> {
  loading: Ref<boolean>
  formRef: Ref<InstanceType<typeof NForm> | null>
  formData: Reactive<T>
  title: Ref<string>
  isShowModel: Ref<boolean>
  fieldList: FieldProps[]
}

export function useCrud<T extends BaseModel>(
  api: AbstractApi,
  model: new () => T,
): UseCrudReturn<T> {
  /*** refs ***/
  const loading = ref(false) // 加载状态
  const formRef: Ref<InstanceType<typeof NForm> | null> = ref(null) // 表单实例
  const formModel = reactive(new model()) // 表单数据
  const title = ref('') // 标题
  const isShowModel = ref(false) // 是否显示弹窗
  const fieldList: FieldProps[] = Object.getPrototypeOf(formModel).fields || [] // 字段列表

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
    formData: formModel,
    title,
    isShowModel,
    fieldList,
  }
}
