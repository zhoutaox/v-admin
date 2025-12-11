import { Request, Controller, Post } from './helpers'

@Controller('/app')
class Api extends Request {
  @Post('app')
  app() {
    return this.post()
  }

  @Post('uploadConfig')
  uploadConfig() {
    return this.post()
  }

  @Post('docs')
  docs() {
    return this.post()
  }
}

export const appApi = new Api()
