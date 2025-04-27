import { IsNotEmpty, Length } from 'class-validator'
import { api } from '@/api'
import { BaseEntity, Field, Form } from '@/core'
import { ComponentEnum } from '@/enums'

@Form({
  title: '用户',
  crud: api.user,
})
export class User extends BaseEntity {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(2, 20, { message: '用户名长度在2到20个字符之间' })
  @Field({
    label: '姓名',
    type: ComponentEnum.INPUT,
  })
  name!: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Field({
    label: '密码',
    type: ComponentEnum.PASSWORD,
    props: {},
  })
  password!: string

  @Field({
    label: '邮箱',
    type: ComponentEnum.INPUT,
  })
  email!: string

  @IsNotEmpty({ message: '手机号不能为空' })
  @Field({
    label: '手机号',
    type: ComponentEnum.INPUT,
  })
  phone!: string

  @Field({
    label: '用户邮箱',
  })
  avatar!: string

  @Field({
    label: '性别',
    type: ComponentEnum.SELECT,
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 0 },
    ],
  })
  sex: 0 | 1 = 1
}
