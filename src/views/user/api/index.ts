import { AbstractApi, Post, Controller } from '@/api/helpers'
import type { User } from './model/User'
import { UserLoginDto } from './dto/UserLoginDto'

@Controller('/user')
class UserApi extends AbstractApi<User> {
  @Post('layout')
  layout() {
    return this.post()
  }

  @Post('login')
  login(userLoginDto: UserLoginDto) {
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
