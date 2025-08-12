import type { ApiResponse } from 'bstm-utils'
import { Controller, Post, AbstractApi, VerifyParameter, Loading } from '@/core'
import { UserLoginDto } from './dto'
import { User } from './entities'

@Controller('/user')
export class UserApi extends AbstractApi<User> {
  @Post('/login', {
    loading: true,
  })
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
