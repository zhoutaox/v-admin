import { IsNotEmpty, Length, IsEmail } from 'class-validator'
import { api } from '@/api'
import { BaseEntity, Field, Form } from '@/core'

@Form({
  title: '用户',
  crud: api.user,
})
export class User extends BaseEntity {
  @IsNotEmpty({ message: '登录名不能为空' })
  @Length(2, 20, { message: '登录名长度在2到20个字符之间' })
  @Field({
    label: '登录名',
    type: 'Input',
    props: {
      clearable: true,
    },
  })
  loginName!: string

  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(2, 20, { message: '用户名长度在2到20个字符之间' })
  @Field({
    label: '姓名',
    type: 'Input',
  })
  name!: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Field({
    label: '密码',
    type: 'Cascader',
    props: {
      options: [
        { label: '强', value: 'strong' },
        { label: '中', value: 'medium' },
        { label: '弱', value: 'weak' },
      ],
    },
  })
  password!: string

  @IsEmail(
    {},
    {
      message: '邮箱格式不正确',
    },
  )
  @Field({
    label: '邮箱',
    type: 'Input',
  })
  email!: string

  @IsNotEmpty({ message: '手机号不能为空' })
  @Field({
    label: '手机号',
    type: 'Input',
  })
  phone!: string

  @Field({
    label: '用户头像',
    type: 'Upload',
  })
  avatar!: string

  @Field({
    label: '性别',
    type: 'Select',
    props: {
      options: [
        { label: '男', value: '1' },
        { label: '女', value: '0' },
      ],
    },
  })
  sex: '0' | '1' = '1'
}
