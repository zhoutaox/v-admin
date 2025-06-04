<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores'
import { useFullscreen } from '@vueuse/core'
import Logo from './components/Logo.vue'
import AsideMenu from './components/AsideMenu.vue'
import PageHeader from './components/PageHeader.vue'
import TabsView from './components/TabsView.vue'

const { theme } = useThemeStore()
const viewRef = ref<HTMLElement | null>(null)

const { isFullscreen, toggle } = useFullscreen(viewRef)
function fullscreenView() {
  toggle()
}
</script>

<template>
  <n-layout class="v-layout" has-sider position="static">
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      @collapse="theme.isCollapsed = true"
      @expand="theme.isCollapsed = false"
      :collapsed="theme.isCollapsed"
    >
      <Logo />
      <AsideMenu />
    </n-layout-sider>
    <n-layout class="v-layout-main">
      <n-scrollbar style="max-height: 100%">
        <n-layout-header position="static">
          <PageHeader />
        </n-layout-header>
        <n-layout-content class="v-layout-content">
          <TabsView :fullscreen="fullscreenView" />
          <div ref="viewRef" class="v-layout-view" :class="isFullscreen && 'v-layout-open-view'">
            <n-scrollbar style="max-height: 84vh">
              <RouterView></RouterView>
            </n-scrollbar>
          </div>
        </n-layout-content>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
