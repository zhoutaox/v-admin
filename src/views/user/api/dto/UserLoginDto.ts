import { BaseDto } from '@/core'
import { IsNotEmpty } from 'class-validator'

export class UserLoginDto extends BaseDto {
  @IsNotEmpty({
    message: '登录名不能为空',
  })
  loginName!: string

  @IsNotEmpty({
    message: '密码不能为空',
  })
  password!: string

  @IsNotEmpty({
    message: '验证码不能为空',
  })
  captcha!: string
}
