<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import type { DropdownOption } from 'naive-ui'
import { Password } from '@/api/user/entities/Password'
import { User } from '@/api/user/entities/User'
import { renderIcon, openForm } from '@/utils'
import { useThemeStore } from '@/stores'

const { isFullscreen, toggle } = useFullscreen()
const themeStore = useThemeStore()
const { theme, avatar } = storeToRefs(themeStore)

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
    // Navigate to profile page
    openForm(User)
  } else if (key === Config.EDIT_PROFILE) {
    // Navigate to edit profile page
    openForm(Password)
  } else if (key === Config.LOGOUT) {
    // Handle logout
  }
}
</script>

<template>
  <div class="page-header">
    <div class="left">
      <n-button tertiary round type="primary" class="btn1">常用</n-button>
      <n-breadcrumb>
        <n-breadcrumb-item> 北京总行 </n-breadcrumb-item>
        <n-breadcrumb-item> 天津分行 </n-breadcrumb-item>
        <n-breadcrumb-item> 平山道支行 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="right">
      <n-button class="btn" circle tertiary>
        <template #icon>
          <v-icon icon="search" color="#767c82" />
        </template>
      </n-button>
      <n-button class="btn" circle tertiary @click="themeStore.toggleTheme">
        <template #icon>
          <v-icon :icon="theme.isDark ? 'daytime-mode-fill' : 'night-mode-fill'" color="#767c82" />
        </template>
      </n-button>
      <n-button class="btn btn-last" circle tertiary @click="toggle">
        <template #icon>
          <v-icon :icon="isFullscreen ? 'compress' : 'fullscreen'" color="#767c82" />
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
  margin: 0 6px;
}

.btn-last {
  margin-right: 12px;
}
</style>
