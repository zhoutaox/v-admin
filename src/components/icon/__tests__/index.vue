<script setup lang="ts">
defineExpose({
  name: 'icon-test',
})
</script>

<template>
  <n-card title="基础用法-icon" size="small">
    <v-icon icon="search" />
    <v-icon icon="night-mode-fill" />
    <v-icon icon="daytime-mode-fill" />
  </n-card>

  <n-card title="大小-size" size="small">
    <v-icon icon="search" size="19" />
  </n-card>

  <n-card title="颜色-color" size="small">
    <v-icon icon="search" size="16" color="#eaafc8" />
  </n-card>

  <n-card title="可复制的-copy" size="small">
    <v-icon icon="search" size="16" color="#eaafc8" copy />
  </n-card>
</template>

<style scoped></style>
