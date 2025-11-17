import { Request, Controller, Post } from './helpers'

@Controller('')
class Api extends Request {
  @Post('/app')
  app() {
    return this.post()
  }

  @Post('/uploadConfig')
  uploadConfig() {
    return this.post()
  }

  @Post('/doc')
  doc() {
    return this.post()
  }
}

export const api = new Api()
