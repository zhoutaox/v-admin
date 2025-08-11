import { IsNotEmpty } from 'class-validator'
import { BaseEntity, Field, Form } from '@/core'
import { ComponentEnum } from '@/enums'

@Form({
  title: '修改密码',
})
export class Password extends BaseEntity {
  @IsNotEmpty({ message: '旧密码不能为空' })
  @Field({
    label: '旧密码',
    type: 'Input',
  })
  oldPassword!: string

  @IsNotEmpty({ message: '新密码不能为空' })
  @Field({
    label: '新密码',
    type: 'Input',
  })
  newPassword!: string

  @IsNotEmpty({ message: '确认密码不能为空' })
  @Field({
    label: '确认密码',
    type: 'Input',
  })
  confirmPassword!: string
}
