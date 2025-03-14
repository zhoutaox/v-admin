import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export class Router {
  instance = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
  })
  routes: RouteRecordRaw[] = []
  constructor() {
    this.routes.forEach((route) => {
      this.instance.addRoute(route)
    })
  }

  addRoute(route: RouteRecordRaw) {
    this.routes.push(route)
    this.instance.addRoute(route)
  }

  //todo: removeRoute
  removeRoute(route: RouteRecordRaw) {
    this.routes = this.routes.filter((r) => r.path !== route.path)
    // this.instance.removeRoute(route.name)
  }
}

export const router = new Router()

router.addRoute({
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
})
