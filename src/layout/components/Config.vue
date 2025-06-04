<script setup lang="ts">
import { ref } from 'vue'
import { YesNoEnum } from '@/enums'

const isShowAppConfigDrawer = ref(true)
</script>

<template>
  <n-drawer v-model:show="isShowAppConfigDrawer" :width="420" placement="right">
    <n-drawer-content title="系统配置">
      <n-form label-placement="left" label-align="right">
        <n-form-item label="是否显示水印">
          <n-switch :checked-value="YesNoEnum.YES" :unchecked-value="YesNoEnum.NO" />
        </n-form-item>
        <n-form-item label="是否显示面包屑">
          <n-switch :checked-value="YesNoEnum.YES" :unchecked-value="YesNoEnum.NO" />
        </n-form-item>
        <n-form-item label="是否显示多标签">
          <n-switch :checked-value="YesNoEnum.YES" :unchecked-value="YesNoEnum.NO" />
        </n-form-item>
        <n-form-item label="是否显示多标签图标">
          <n-switch :checked-value="YesNoEnum.YES" :unchecked-value="YesNoEnum.NO" />
        </n-form-item>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped></style>
