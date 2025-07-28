import { type ApiResponse } from 'bstm-utils'
import { Controller, Post } from '@/core'
import { Request } from './helpers/Request'
import { UserApi } from './user'
import { MenuApi } from './menu'

export * from './dto'
export * from './entities'

@Controller('')
class Api extends Request {
  user = new UserApi()
  menu = new MenuApi()

  @Post('/app')
  app(): Promise<ApiResponse> {
    return this.post()
  }

  @Post('/uploadConfig')
  uploadConfig(): Promise<ApiResponse> {
    return this.post()
  }
}

export const api = new Api()
