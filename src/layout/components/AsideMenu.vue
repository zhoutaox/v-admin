<script setup lang="ts">
import { useAppStore, useRouterStore, useTabStore } from '@/stores'
import { initMenu } from '@/router/initMenu'
import { type MenuOption } from 'naive-ui'
import { Menu } from '@/api/menu/entities/Menu'
import { renderIcon } from '@/utils'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const { menus } = useRouterStore()
const { app } = useAppStore()
const { addTab } = useTabStore()
const route = useRoute()
const router = useRouter()

function convertMenuToMenuOptions(menus: Menu[]): MenuOption[] {
  return menus.map((menu) => {
    const menuOption: MenuOption = {
      label: menu.title,
      key: menu.path,
      icon: renderIcon(menu.icon),
    }
    if (menu.children && menu.children.length) {
      menuOption.children = convertMenuToMenuOptions(menu.children)
    }
    return menuOption
  })
}

function clickMenuItem(key: string, item: MenuOption) {
  addTab(item)
  router.push(key)
}

const menuOptions = computed(() => {
  return convertMenuToMenuOptions(menus)
})
</script>

<template>
  <n-menu
    :collapsed="app.isCollapsed"
    :indent="24"
    :collapsed-width="60"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :value="route.path"
    @update:value="clickMenuItem"
  />
</template>

<style scoped></style>
