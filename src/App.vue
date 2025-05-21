<script setup lang="ts">
import { useThemeVars, darkTheme, lightTheme, type GlobalThemeOverrides, zhCN } from 'naive-ui'
import { RouterView } from 'vue-router'
import { dateUtil } from 'bstm-utils'
import { useThemeStore, useAppStore } from './stores'
import { AppConfig } from './enums'
import { onUnmounted } from 'vue'

const { theme } = useThemeStore()
const themeVars = useThemeVars()
const appStore = useAppStore()

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2d8cf0',
  },
}

const timer = setInterval(() => {
  appStore.watermark = AppConfig.PRODUCT_NAME + '\n' + dateUtil.format(new Date())
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <n-config-provider
    class="v-app"
    :locale="zhCN"
    :class="theme.isDark ? 'v-app-dark' : 'v-app-light'"
    :theme="theme.isDark ? darkTheme : lightTheme"
    :theme-overrides="themeOverrides"
  >
    <n-watermark
      :content="appStore.watermark"
      selectable
      cross
      fullscreen
      :font-size="14"
      :line-height="16"
      :width="304"
      :height="304"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
      text-align="center"
    >
    </n-watermark>
    <RouterView />
  </n-config-provider>
</template>
