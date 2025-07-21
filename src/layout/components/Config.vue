<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { BooleanEnum } from '@/enums'
import { useAppStore } from '@/stores'

const isShowAppConfigDrawer = ref(false)
const { app } = storeToRefs(useAppStore())

defineExpose({
  open() {
    isShowAppConfigDrawer.value = true
  },
})
</script>

<template>
  <n-drawer v-model:show="isShowAppConfigDrawer" :width="420" placement="right">
    <n-drawer-content title="系统配置">
      <div class="item">
        <div class="item-title">是否显示水印</div>
        <n-switch v-model:value="app.isShowWatermark" />
      </div>
      <div class="item">
        <div class="item-title">是否显示面包屑</div>
        <n-switch :checked-value="BooleanEnum.YES" :unchecked-value="BooleanEnum.NO" />
      </div>
      <div class="item">
        <div class="item-title">是否显示面包屑图标</div>
        <n-switch :checked-value="BooleanEnum.YES" :unchecked-value="BooleanEnum.NO" />
      </div>
      <div class="item">
        <div class="item-title">是否显示多标签</div>
        <n-switch :checked-value="BooleanEnum.YES" :unchecked-value="BooleanEnum.NO" />
      </div>
      <div class="item">
        <div class="item-title">是否显示多标签图标</div>
        <n-switch :checked-value="BooleanEnum.YES" :unchecked-value="BooleanEnum.NO" />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
