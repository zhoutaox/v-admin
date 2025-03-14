import { BaseEntity, Field } from '@/core'
import { ComponentEnum } from '@/enums'

export class User extends BaseEntity {
  @Field({
    label: '姓名',
    type: ComponentEnum.INPUT,
  })
  name!: string

  @Field({
    label: '密码',
    type: ComponentEnum.PASSWORD,
    props: {
      isPassword: true,
    },
  })
  password!: string

  @Field({
    label: '邮箱',
    type: ComponentEnum.INPUT,
  })
  email!: string

  @Field({
    label: '手机号',
    type: ComponentEnum.INPUT,
  })
  phone!: string

  @Field({
    label: '用户邮箱',
  })
  avatar!: string
}
