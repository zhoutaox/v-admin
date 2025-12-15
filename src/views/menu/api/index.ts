import { AbstractApi, Controller, Post } from '@/api/helpers'
import { Menu } from './model'

@Controller('/menu')
class MenuApi extends AbstractApi<Menu> {
  @Post('/menus')
  menus() {
    return this.post<Menu[]>()
  }
}

export const menuApi = new MenuApi()
export * from './model'
