import { BaseEntity, Field, Form } from '@/core'
import { IsNotEmpty, Length } from 'class-validator'

@Form({
  title: '修改密码',
})
export class Password extends BaseEntity {
  @IsNotEmpty({
    message: '密码不能为空',
  })
  @Length(6, 20, {
    message: '密码长度在6-20位之间',
  })
  @Field({
    label: '密码',
    type: 'Input',
  })
  password!: string

  @IsNotEmpty({
    message: '新密码不能为空',
  })
  @Length(6, 20, {
    message: '新密码长度在6-20位之间',
  })
  @Field({
    label: '新密码',
    type: 'Input',
  })
  newPassword!: string
}
