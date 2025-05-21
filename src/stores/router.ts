import { ref } from 'vue'
import { defineStore } from 'pinia'
import { router } from '@/router'
import type { Menu } from '@/api/menu/entities/Menu'
import { initMenu } from '@/router/initMenu'

export const useRouterStore = defineStore('router', () => {
  const menus = ref<Menu[]>([])
  menus.value = initMenu()

  // 添加路由
  function addRoute() {
    router.addLayoutRoutes(menus.value)
  }

  return { menus, addRoute }
})
