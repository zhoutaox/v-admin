import { type ApiResponse } from 'bstm-utils'
import { Controller, Post } from '@/core'
import { Request } from './helpers/Request'
import { UserApi } from './user'
import { MenuApi } from './menu'
import { DictApi } from './dict'
import { QuestionnaireApi } from './questionnaire'

@Controller('')
class Api extends Request {
  user = new UserApi()
  menu = new MenuApi()
  dict = new DictApi()
  questionnaire = new QuestionnaireApi()

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
