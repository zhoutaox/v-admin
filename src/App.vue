<script setup lang="ts">
import { darkTheme, lightTheme, zhCN } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useAppStore } from './stores'

const appStore = useAppStore()
</script>

<template>
  <n-config-provider
    id="app-config-provider"
    class="v-app"
    :locale="zhCN"
    :class="appStore.app.isDark ? 'v-app-dark' : 'v-app-light'"
    :theme="appStore.app.isDark ? darkTheme : lightTheme"
    :theme-overrides="appStore.app.theme"
  >
    <n-global-style />
    <RouterView />
  </n-config-provider>
</template>
