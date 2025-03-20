import { createRouter, type RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'

export class Router {
  instance = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [],
  })

  routes: RouteRecordRaw[] = [
    {
      component: Layout,
      path: '/',
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
  ]
  constructor() {
    this.routes.forEach((route) => {
      this.instance.addRoute(route)
    })
  }

  addRoute(route: RouteRecordRaw) {
    this.instance.addRoute(route)
  }

  addComponentRoute(route: RouteRecordRaw) {
    this.instance.addRoute(route)
  }

  //todo: removeRoute
  removeRoute(route: RouteRecordRaw) {
    this.routes = this.routes.filter((r) => r.path !== route.path)
    // this.instance.removeRoute(route.name)
  }
}

export const router = new Router()
