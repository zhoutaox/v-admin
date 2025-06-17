<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

function back() {
  const router = useRouter()
  console.error(router, useRoute())

  router.back()
}
</script>

<template>
  <div>首页</div>
</template>

<style scoped></style>
