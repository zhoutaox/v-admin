import { ref } from 'vue'
import { defineStore } from 'pinia'
import { router } from '@/router'
import type { Menu } from '@modules/menu/api/model/Menu'
import { initMenu } from '@/router/initMenu'
import { Log } from '@/core'

export const useRouterStore = defineStore('router', () => {
  const menus = ref<Menu[]>([])

  // 添加路由
  function addRoute(menuList: Menu[]) {
    menus.value = initMenu(menuList)
    Log.warn(menus.value)
    router.addLayoutRoutes(menus.value)
  }

  return { menus, addRoute }
})
