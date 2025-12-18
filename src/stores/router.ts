import { ref } from 'vue'
import { defineStore } from 'pinia'
import { router } from '@/router'
import type { Menu } from '@modules/menu/api/model/Menu'
import { menuApi } from '@modules/menu/api'

export const useRouterStore = defineStore('router', () => {
  const menus = ref<Menu[]>([])

  function renderMenList(menuList: Menu[]): Menu[] {
    const renderedMenus: Menu[] = []
    menuList.forEach((menu) => {
      if (!menu.pid) {
        renderedMenus.push(menu)
      }
      const children = menuList.filter((m) => m.pid === menu.iid)
      if (children.length) {
        menu.children = children
      }
    })
    return renderedMenus
  }

  // 添加路由
  async function initRoute() {
    const { success, data } = await menuApi.menus()

    if (success) {
      const menuList = renderMenList(data)
      menus.value = menuList

      router.addLayoutRoutes(menus.value)
    }
  }

  return { menus, initRoute }
})
