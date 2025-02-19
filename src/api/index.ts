import { type ApiResponse } from 'bstm-utils'
import { Controller, Post } from '@/decorators'
import { Request } from './helpers/Request'
import { AiFormApi } from './aiForm'

@Controller('')
class Api extends Request {
  aiForm = new AiFormApi()

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
