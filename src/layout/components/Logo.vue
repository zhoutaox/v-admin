<script setup lang="ts">
import { useThemeStore } from '@/stores'
import { storeToRefs } from 'pinia'

const { theme, avatar } = storeToRefs(useThemeStore())
</script>

<template>
  <div class="logo">
    <n-avatar round size="large" :src="avatar" />
    <h2 v-show="!theme.isCollapsed">V-Admin-Plus</h2>
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  margin-bottom: 10px;

  h2 {
    display: inline-block;
    height: 32px;
    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    vertical-align: middle;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  h2 {
    color: #2d8cf0;
  }
}
</style>
