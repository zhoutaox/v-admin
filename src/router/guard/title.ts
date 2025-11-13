import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { AppParams } from '@/constants'

export function createDocumentTitleGuard(router: Router) {
  router.afterEach((to) => {
    // 设置文档标题
    const title = to.meta.title || AppParams.NAME

    useTitle(title)
  })
}
