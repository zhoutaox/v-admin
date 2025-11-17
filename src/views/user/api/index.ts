import { AbstractApi, Post, Controller } from '@/api/helpers'
import type { User } from './model/User'
import { UserLoginDto } from './dto/UserLoginDto'
import { VerifyParameter } from '@/core'

@Controller('/user')
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
export * from './model'
