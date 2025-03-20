import { stringUtil } from 'bstm-utils'
import { Menu } from '@/api/menu/entities/Menu'

export function initMenu() {
  const menu1 = new Menu()

  menu1.name = 'Dashboard'
  menu1.iid = stringUtil.nanoid()
  menu1.icon = 'guide'

  const m1_c1 = new Menu()
  m1_c1.name = '主控台'
  m1_c1.iid = stringUtil.nanoid()
  m1_c1.path = '/home'
  m1_c1.componentUrl = '/home'
  m1_c1.icon = 'home'

  const m1_c2 = new Menu()
  m1_c2.name = '监控台'
  m1_c2.iid = stringUtil.nanoid()
  m1_c2.path = '/monitor'
  m1_c2.componentUrl = '/monitor'
  m1_c2.icon = 'global'

  const m1_c3 = new Menu()
  m1_c3.name = '工作台'
  m1_c3.iid = stringUtil.nanoid()
  m1_c3.path = '/workbench'
  m1_c3.componentUrl = '/workbench'
  m1_c3.icon = 'one-stop-service'

  menu1.children = [m1_c1, m1_c2, m1_c3]

  const menu2 = new Menu()
  menu2.name = '系统管理'
  menu2.iid = stringUtil.nanoid()
  menu2.icon = 'product'

  const m2_c1 = new Menu()
  m2_c1.name = '用户管理'
  m2_c1.iid = stringUtil.nanoid()
  m2_c1.path = '/user'
  m2_c1.componentUrl = '/user'
  m2_c1.icon = 'customer-official'

  const m2_c2 = new Menu()
  m2_c2.name = '角色管理'
  m2_c2.iid = stringUtil.nanoid()
  m2_c2.path = '/role'
  m2_c2.componentUrl = '/role'
  m2_c2.icon = 'vip-management'

  const m2_c3 = new Menu()
  m2_c3.name = '菜单管理'
  m2_c3.iid = stringUtil.nanoid()
  m2_c3.path = '/menu'
  m2_c3.componentUrl = '/menu'
  m2_c3.icon = 'gongyinglianfuwu'

  menu2.children = [m2_c1, m2_c2, m2_c3]

  return [menu1, menu2]
}
