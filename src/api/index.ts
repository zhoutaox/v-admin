import { type ApiResponse } from 'bstm-utils'
import { Request, Controller, Post } from './helpers'
import { AiFormApi } from './aiForm'
import { DictApi } from './dict'
import { MenuApi } from './menu'
import { QuestionnaireApi } from './questionnaire'

export * from './dto'
export * from './entities'

@Controller('')
class Api extends Request {
  aiForm = new AiFormApi()

  dict = new DictApi()

  menu = new MenuApi()

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
