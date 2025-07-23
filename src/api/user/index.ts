import { Controller, Post, AbstractApi } from '@/core'
import { UserLoginDto } from './dto/UserLoginDto'
import { User } from './entities'
import type { ApiResponse } from 'bstm-utils'
import { VerifyParameter } from '@/core/VerifyParameters'

@Controller('/user')
export class UserApi extends AbstractApi<User> {
  @Post('/login')
  login(@VerifyParameter userLoginDto: UserLoginDto): Promise<ApiResponse<User>> {
    return this.post({
      data: userLoginDto,
    })
  }

  @Post('/logout')
  logout() {
    return this.post({})
  }
}
