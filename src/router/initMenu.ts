import { Menu } from '@/api/menu/entities/Menu'

export function initMenu() {
  const menu1 = new Menu()

  menu1.title = 'Dashboard'
  menu1.icon = 'guide'
  menu1.path = '/dashboard'

  const m1_c1 = new Menu()
  m1_c1.title = '主控台'
  m1_c1.path = '/home'
  m1_c1.componentUrl = '/dashboard/home'
  m1_c1.icon = 'home'
  m1_c1.breadcrumb = ['Dashboard', '主控台']

  const m1_c2 = new Menu()
  m1_c2.title = '监控台'
  m1_c2.path = '/monitor'
  m1_c2.componentUrl = '/dashboard/monitor'
  m1_c2.icon = 'global'
  m1_c2.breadcrumb = ['Dashboard', '监控台']

  const m1_c3 = new Menu()
  m1_c3.title = '工作台'
  m1_c3.path = '/workbench'
  m1_c3.componentUrl = '/dashboard/workbench'
  m1_c3.icon = 'one-stop-service'
  m1_c3.breadcrumb = ['Dashboard', '工作台']

  menu1.children = [m1_c1, m1_c2, m1_c3]

  const menu2 = new Menu()
  menu2.title = '系统管理'
  menu2.icon = 'product'
  menu2.path = '/system'

  const m2_c1 = new Menu()
  m2_c1.title = '用户管理'
  m2_c1.path = '/user'
  m2_c1.componentUrl = '/system/user'
  m2_c1.icon = 'customer-official'
  m2_c1.breadcrumb = ['系统管理', '用户管理']

  const m2_c2 = new Menu()
  m2_c2.title = '角色管理'
  m2_c2.path = '/role'
  m2_c2.componentUrl = '/system/role'
  m2_c2.icon = 'vip-management'
  m2_c2.breadcrumb = ['系统管理', '角色管理']

  const m2_c3 = new Menu()
  m2_c3.title = '菜单管理'
  m2_c3.path = '/menu'
  m2_c3.componentUrl = '/system/menu'
  m2_c3.icon = 'gongyinglianfuwu'
  m2_c3.breadcrumb = ['系统管理', '菜单管理']

  const m2_c4 = new Menu()
  m2_c4.title = '表单管理'
  m2_c4.path = '/form'
  m2_c4.componentUrl = '/system/form'
  m2_c4.icon = 'goods-inspection'
  m2_c4.breadcrumb = ['系统管理', '表单管理']

  const m2_c5 = new Menu()
  m2_c5.title = '字典管理'
  m2_c5.path = '/dict'
  m2_c5.componentUrl = '/system/dict'
  m2_c5.icon = 'logistics-picked-up'
  m2_c5.breadcrumb = ['系统管理', '字典管理']

  menu2.children = [m2_c1, m2_c2, m2_c3, m2_c4, m2_c5]

  const menu3 = new Menu()
  menu3.title = '系统工具'
  menu3.icon = 'tool'
  menu3.path = '/tools'

  const m3_c1 = new Menu()
  m3_c1.title = '图标库'
  m3_c1.path = '/icon'
  m3_c1.componentUrl = '/tools/icon'
  m3_c1.icon = 'vip'
  m3_c1.breadcrumb = ['系统工具', '图标库']

  const m3_c2 = new Menu()
  m3_c2.title = 'api文档'
  m3_c2.path = '/api'
  m3_c2.componentUrl = '/tools/api'
  m3_c2.icon = 'code'
  m3_c2.breadcrumb = ['系统工具', 'api文档']

  menu3.children = [m3_c1, m3_c2]

  return [menu1, menu2, menu3]
}
