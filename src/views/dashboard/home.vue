<script setup lang="ts">
import { User } from '@/api/user/entities/User'
import { openForm } from '@/utils'
</script>

<template>
  <div>
    home1

    <n-button type="primary" @click="openForm(User)"> Primary </n-button>
  </div>
</template>

<style scoped></style>
