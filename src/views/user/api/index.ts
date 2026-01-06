import { AbstractApi, Post, Controller } from '@/api/helpers'
import type { User } from './model/User'
import { UserLoginDto } from './dto/UserLoginDto'
import type { ResetPasswordDto } from './dto/ResetPasswordDto'
import type { RegisterUserDto } from './dto/RegisterUserDto'

@Controller('/user')
class UserApi extends AbstractApi<User> {
  @Post('layout')
  layout() {
    return this.post()
  }

  @Post('login')
  login(userLoginDto: UserLoginDto) {
    return this.post<{
      token: string
    }>({
      data: userLoginDto,
    })
  }

  @Post('logout')
  logout() {
    return this.post()
  }

  @Post('getUserInfo')
  getUserInfo() {
    return this.post()
  }

  @Post('sendEmail')
  sendEmail(email: string) {
    return this.post({
      data: { email },
    })
  }

  @Post('register')
  register(registerUserDto: RegisterUserDto) {
    return this.post({
      data: registerUserDto,
    })
  }

  /**
   * # 重置密码
   * @param {ResetPasswordDto} resetPasswordDto
   */
  resetPassword(resetPasswordDto: ResetPasswordDto) {
    return this.post({
      data: resetPasswordDto,
    })
  }
}

export const userApi = new UserApi()

export * from './dto/UserLoginDto'
export * from './model'
