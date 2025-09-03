<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import type { DropdownOption } from 'naive-ui'
import { useRoute } from 'vue-router'
import { Password } from '@/api/user/entities/Password'
import { User } from '@/api/user/entities/User'
import { renderIcon, openForm } from '@/utils'
import { useAppStore, useUserStore } from '@/stores'
import ConfigVue from './Config.vue'
import SearchVue from './Search.vue'

const configRef = ref<InstanceType<typeof ConfigVue> | null>(null)
const searchRef = ref<InstanceType<typeof SearchVue> | null>(null)
const { isFullscreen, toggle } = useFullscreen()
const routes = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
const { app, avatar } = storeToRefs(appStore)

const Config = {
  PROFILE: 'profile',
  EDIT_PROFILE: 'editProfile',
  LOGOUT: 'logout',
}

const options = [
  {
    label: '个人设置',
    key: Config.PROFILE,
    icon: renderIcon('customer-official'),
  },
  {
    label: '修改密码',
    key: Config.EDIT_PROFILE,
    icon: renderIcon('edit'),
  },
  {
    label: '退出登录',
    key: Config.LOGOUT,
    icon: renderIcon('tuichu'),
  },
]

function handleDropdownSelect(key: string | number, options: DropdownOption) {
  if (key === Config.PROFILE) {
    openForm(User)
  } else if (key === Config.EDIT_PROFILE) {
    openForm(Password)
  } else if (key === Config.LOGOUT) {
    userStore.logOut()
  }
}
</script>

<template>
  <ConfigVue ref="configRef" />
  <SearchVue ref="searchRef" />
  <div class="page-header">
    <div class="left">
      <n-button tertiary round type="primary" class="btn1">常用</n-button>
      <n-breadcrumb v-if="app.isShowBreadcrumb">
        <n-breadcrumb-item v-for="breadcrumb in routes.meta.breadcrumb" :key="breadcrumb">{{
          breadcrumb
        }}</n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="right">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button class="btn" circle tertiary @click="searchRef?.open()">
            <template #icon>
              <v-icon icon="search" color="#767c82" />
            </template>
          </n-button>
        </template>
        搜索
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button class="btn" circle tertiary @click="appStore.toggleTheme">
            <template #icon>
              <v-icon :icon="app.isDark ? 'daytime-mode-fill' : 'night-mode-fill'" />
            </template>
          </n-button>
        </template>
        主题模式
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button class="btn" circle tertiary @click="toggle">
            <template #icon>
              <v-icon :size="8" :icon="isFullscreen ? 'compress' : 'fullscreen'" />
            </template>
          </n-button>
        </template>
        {{ isFullscreen ? '退出全屏' : '全屏' }}
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button class="btn" circle tertiary @click="configRef?.open()">
            <template #icon>
              <v-icon icon="settings-fill" />
            </template>
          </n-button>
        </template>
        主题配置
      </n-tooltip>
      <n-button class="btn btn-last" circle tertiary @click="configRef?.open()">
        <template #icon>
          <n-badge :value="userStore.todoNum" :max="15">
            <v-icon icon="remind-btn-fill" :size="12" />
          </n-badge>
        </template>
      </n-button>

      <n-dropdown :options="options" :on-select="handleDropdownSelect">
        <n-avatar round size="medium" :src="avatar" />
      </n-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .left,
  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .btn1 {
    margin-right: 12px;
  }
}

.btn {
  margin: 0 8px;
}

.btn-last {
  margin-right: 20px;
}
</style>
