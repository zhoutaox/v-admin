import { AbstractApi, Controller, Post } from '@/api/helpers'
import { Menu } from './model'

@Controller('/api/menu')
class MenuApi extends AbstractApi<Menu> {
  @Post('/test')
  test() {
    return this.post()
  }
}

export const menuApi = new MenuApi()
export * from './model'