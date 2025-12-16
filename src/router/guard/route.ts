import type { Router } from 'vue-router'

export function createRouteGuards(router: Router, whiteList: string[]) {
  router.beforeEach(async (to, from, next) => {
    // 在白名单中，直接放行
    if (whiteList.includes(to.path)) {
      next()
      return
    }

    // 前往登录页
    next('/login')
  })
}
