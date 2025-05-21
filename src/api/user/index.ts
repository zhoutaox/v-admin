import { Controller, Post, AbstractApi } from '@/core'
import { UserLoginDto } from './dto/UserLoginDto'
import { User } from './entities/User'

@Controller('/user')
export class UserApi extends AbstractApi<User> {
  @Post('/login')
  login(userLoginDto: UserLoginDto) {
    return this.post({
      data: userLoginDto,
    })
  }

  @Post('/logout')
  logout() {
    return this.post({})
  }
}
