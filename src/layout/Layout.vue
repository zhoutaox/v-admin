<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <n-layout class="layout">
    <v-icon icon="up"></v-icon>
    <RouterView></RouterView>
  </n-layout>
</template>

<style scoped>
.layout {
  height: 100vh;
}
</style>
