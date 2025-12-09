import { Menu } from '@/views/menu/api'
import { MenuTypeEnum } from '@/views/menu/enums/MenuTypeEnum'

export function initMenu(menuList: Menu[]) {
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

  const menu4 = new Menu()
  menu4.title = '系统配置'
  menu4.icon = 'settings'
  menu4.path = '/parameter'

  const m4_c1 = new Menu()
  m4_c1.title = '应用参数'
  m4_c1.path = '/parameter/app'
  m4_c1.componentUrl = '/parameter/app'
  m4_c1.breadcrumb = ['系统配置', '应用参数']

  const m4_c2 = new Menu()
  m4_c2.title = '数据库信息'
  m4_c2.path = '/parameter/db'
  m4_c2.componentUrl = '/parameter/db'
  m4_c2.breadcrumb = ['系统配置', '数据库信息']

  menu4.children = [m4_c1, m4_c2]

  const menu5 = new Menu()
  menu5.title = '问卷管理'
  menu5.icon = 'customer-service'
  menu5.path = '/questionnaire'

  const menu6 = new Menu()
  menu6.title = '搜索页'
  menu6.icon = 'search'
  menu6.path = '/search'

  const menu6_c1 = new Menu()
  menu6_c1.title = '搜索模版'
  menu6_c1.icon = 'template'
  menu6_c1.path = '/search/template'
  menu6_c1.componentUrl = '/search/template'
  menu6_c1.breadcrumb = ['搜索页', '搜索模版']

  menu6.children.push(menu6_c1)

  const menu7 = new Menu()
  menu7.title = '常用模版'
  menu7.icon = 'template'
  menu7.path = '/template'

  const menu7_c1 = new Menu()
  menu7_c1.title = '成功页'
  menu7_c1.icon = 'template'
  menu7_c1.path = '/template/success'
  menu7_c1.componentUrl = '/template/success'
  menu7_c1.breadcrumb = ['常用模版', '成功页']

  const menu7_c2 = new Menu()
  menu7_c2.title = '失败页'
  menu7_c2.icon = 'template'
  menu7_c2.path = '/template/fail'
  menu7_c2.componentUrl = '/template/fail'
  menu7_c2.breadcrumb = ['常用模版', '失败页']

  const menu7_c3 = new Menu()
  menu7_c3.title = '信息页'
  menu7.icon = 'template'
  menu7_c3.path = '/template/info'
  menu7_c3.componentUrl = '/template/info'
  menu7_c3.breadcrumb = ['常用模版', '信息页']

  menu7.children.push(menu7_c1, menu7_c2, menu7_c3)

  const menu8 = new Menu()
  menu8.title = '异常页面'
  menu8.icon = 'error'
  menu8.path = '/error'

  const menu8_c1 = new Menu()
  menu8_c1.title = '403'
  menu8_c1.path = '/403'
  menu8_c1.componentUrl = '/error/403'
  menu8_c1.breadcrumb = ['异常页面', '403']

  const menu8_c2 = new Menu()
  menu8_c2.title = '404'
  menu8_c2.path = '/404'
  menu8_c2.componentUrl = '/error/404'
  menu8_c2.breadcrumb = ['异常页面', '404']

  const menu8_c3 = new Menu()
  menu8_c3.title = '500'
  menu8_c3.path = '/500'
  menu8_c3.componentUrl = '/error/500'
  menu8_c3.breadcrumb = ['异常页面', '500']

  menu8.children = [menu8_c1, menu8_c2, menu8_c3]

  const menu9 = new Menu()
  menu9.title = '文档'
  menu9.icon = 'sousuopaixu'
  menu9.path = '/documentation'
  menu9.componentUrl = '/documentation'
  menu9.breadcrumb = ['文档']

  const menu9_c1 = new Menu()
  menu9_c1.title = 'vue'
  menu9_c1.path = '/documentation/vue'
  menu9_c1.componentUrl = '/documentation/vue'
  menu9_c1.menuType = MenuTypeEnum.IFRAME
  menu9_c1.breadcrumb = ['文档', 'vue']

  const menu9_c2 = new Menu()
  menu9_c2.title = 'pinia'
  menu9_c2.path = '/documentation/pinia'
  menu9_c2.componentUrl = '/documentation/pinia'
  menu9_c2.menuType = MenuTypeEnum.IFRAME
  menu9_c2.breadcrumb = ['文档', 'pinia']

  menu9.children = [menu9_c1, menu9_c2]

  const menu10 = new Menu()
  menu10.title = '关于'
  menu10.path = '/about'
  menu10.icon = 'business-icon-feeds-logo'
  menu10.componentUrl = '/documentation/about'
  menu10.breadcrumb = ['关于']

  return [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, ...menuList, menu10]
}
