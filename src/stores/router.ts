import { ref } from 'vue'
import { defineStore } from 'pinia'
import { router } from '@/router'
import type { Menu } from '@/api'
import { initMenu } from '@/router/initMenu'

export const useRouterStore = defineStore('router', () => {
  const menus = ref<Menu[]>([])

  // 添加路由
  function addRoute(menuList: Menu[]) {
    menus.value = initMenu(menuList)
    router.addLayoutRoutes(menus.value)
  }

  return { menus, addRoute }
})
