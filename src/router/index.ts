import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import ComponentLayout from '@/layout/ComponentLayout.vue'

export class Router {
  instance = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
  })

  componentRouter: RouteRecordRaw = {
    path: '/components/test',
    name: 'components-test',
    component: ComponentLayout,
    children: [],
  }

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
    this.componentRouter,
  ]
  constructor() {
    this.routes.forEach((route) => {
      this.instance.addRoute(route)
    })
  }

  addRoute(route: RouteRecordRaw) {
    this.routes.push(route)
    this.instance.addRoute(route)
  }

  addComponentRoute(route: RouteRecordRaw) {
    this.componentRouter.children?.push(route)
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
