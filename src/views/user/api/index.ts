import { AbstractApi, Post } from '@/api/helpers'
import type { User } from './model/User'
import type { UserLoginDto } from './dto/UserLoginDto'
import { VerifyParameter } from '@/core'

class UserApi extends AbstractApi<User> {
  @Post('layout')
  layout() {
    return this.post()
  }

  @Post('login')
  login(@VerifyParameter userLoginDto: UserLoginDto) {
    return this.post({
      data: userLoginDto,
    })
  }

  @Post('keepAlive')
  keepAlive() {
    return this.post()
  }
}

export const userApi = new UserApi()
export * from './dto/UserLoginDto'
