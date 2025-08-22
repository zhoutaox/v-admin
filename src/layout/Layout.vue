<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { dateUtil } from 'bstm-utils'
import { useFullscreen } from '@vueuse/core'
import { useAppStore } from '@/stores'
import { AppConfig } from '@/enums'
import Logo from './components/Logo.vue'
import AsideMenu from './components/AsideMenu.vue'
import PageHeader from './components/PageHeader.vue'
import TabsView from './components/TabsView.vue'

const appStore = useAppStore()
const viewRef = ref<HTMLElement | null>(null)

const { isFullscreen, toggle } = useFullscreen(viewRef)

const timer = setInterval(() => {
  appStore.watermark = AppConfig.NAME + '\n' + dateUtil.format(new Date())
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <n-layout class="v-layout" has-sider position="static">
    <n-watermark
      v-if="appStore.app.isShowWatermark"
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
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      @collapse="appStore.app.isCollapsed = true"
      @expand="appStore.app.isCollapsed = false"
      :collapsed="appStore.app.isCollapsed"
    >
      <Logo />
      <AsideMenu />
    </n-layout-sider>
    <n-layout class="v-layout-main">
      <main style="margin: 0 10px">
        <n-layout-header
          class="v-layout-main--header"
          :style="{
            position: 'fixed',
            right: '20px',
            zIndex: 10,
            width: appStore.app.isCollapsed ? 'calc(100% - 90px)' : 'calc(100% - 230px)',
          }"
        >
          <PageHeader />
          <TabsView :fullscreen="toggle" />
        </n-layout-header>
        <header style="height: 126px"></header>
        <RouterView v-slot="{ Component, route }">
          <component :is="Component" :key="route.fullPath" />
        </RouterView>
      </main>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
