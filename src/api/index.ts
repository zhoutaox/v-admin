import { type ApiResponse } from 'bstm-utils'
import { Request, Controller, Post } from './helpers'

@Controller('')
class Api extends Request {
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
