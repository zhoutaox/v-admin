import { BaseDto } from '@/core'

export class UserLoginDto extends BaseDto {
  username!: string
  password!: string
}
