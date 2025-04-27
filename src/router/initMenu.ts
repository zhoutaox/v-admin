import { stringUtil } from 'bstm-utils'
import { Menu } from '@/api/menu/entities/Menu'
import { router } from './index'

export function initMenu() {
  const menu1 = new Menu()

  menu1.name = 'Dashboard'
  menu1.iid = stringUtil.nanoid()
  menu1.icon = 'guide'
  menu1.path = '/dashboard'

  const m1_c1 = new Menu()
  m1_c1.name = '主控台'
  m1_c1.iid = stringUtil.nanoid()
  m1_c1.path = '/home'
  m1_c1.componentUrl = '/dashboard/home'
  m1_c1.icon = 'home'

  const m1_c2 = new Menu()
  m1_c2.name = '监控台'
  m1_c2.iid = stringUtil.nanoid()
  m1_c2.path = '/monitor'
  m1_c2.componentUrl = '/dashboard/monitor'
  m1_c2.icon = 'global'

  const m1_c3 = new Menu()
  m1_c3.name = '工作台'
  m1_c3.iid = stringUtil.nanoid()
  m1_c3.path = '/workbench'
  m1_c3.componentUrl = '/dashboard/workbench'
  m1_c3.icon = 'one-stop-service'

  menu1.children = [m1_c1, m1_c2, m1_c3]

  const menu2 = new Menu()
  menu2.name = '系统管理'
  menu2.iid = stringUtil.nanoid()
  menu2.icon = 'product'
  menu2.path = '/system'

  const m2_c1 = new Menu()
  m2_c1.name = '用户管理'
  m2_c1.iid = stringUtil.nanoid()
  m2_c1.path = '/user'
  m2_c1.componentUrl = '/system/user'
  m2_c1.icon = 'customer-official'

  const m2_c2 = new Menu()
  m2_c2.name = '角色管理'
  m2_c2.iid = stringUtil.nanoid()
  m2_c2.path = '/role'
  m2_c2.componentUrl = '/system/role'
  m2_c2.icon = 'vip-management'

  const m2_c3 = new Menu()
  m2_c3.name = '菜单管理'
  m2_c3.iid = stringUtil.nanoid()
  m2_c3.path = '/menu'
  m2_c3.componentUrl = '/system/menu'
  m2_c3.icon = 'gongyinglianfuwu'

  menu2.children = [m2_c1, m2_c2, m2_c3]

  router.addLayoutRoutes([menu1, menu2])
  console.error(router.instance.getRoutes())

  return [menu1, menu2]
}
