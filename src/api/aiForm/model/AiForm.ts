import { BaseModel } from '@/core/BaseModel'
import { Field } from '@/decorators'
import { ComponentEnum } from '@/enums'

export class AiForm extends BaseModel {
  @Field({
    label: '名称',
    change(form: AiForm, value: string) {
      if (value == 'vv') {
        form.formStructure = 'table'
      } else {
        form.description = '罗心强大傻逼111'
      }
    },
  })
  name!: string

  @Field({
    label: '描述',
  })
  description!: string

  @Field({
    label: '表单结构',
    type: ComponentEnum.SELECT,
    options: [
      { label: '表单', value: 'form' },
      { label: '表格', value: 'table' },
    ],
  })
  formStructure!: string
}
