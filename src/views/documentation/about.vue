<script setup lang="ts">
import { dependencies, devDependencies, description, version } from '../../../package.json'
</script>

<template>
  <v-card class="card" title="关于">{{ description }}</v-card>
  <v-card class="card" title="项目信息">
    <n-descriptions label-placement="left" bordered :column="2">
      <n-descriptions-item label="版本"> {{ version }}</n-descriptions-item>
      <n-descriptions-item label="最新构建时间"> </n-descriptions-item>
      <n-descriptions-item label="Github 地址"> </n-descriptions-item>
      <n-descriptions-item label="预览地址"> </n-descriptions-item>
    </n-descriptions>
  </v-card>
  <v-card class="card" title="生产依赖">
    <n-descriptions label-placement="left" bordered :column="2">
      <n-descriptions-item v-for="(value, key) in dependencies" :key="value" :label="key">
        {{ value }}
      </n-descriptions-item>
    </n-descriptions>
  </v-card>
  <v-card title="开发依赖">
    <n-descriptions label-placement="left" bordered :column="2">
      <n-descriptions-item v-for="(value, key) in devDependencies" :key="value" :label="key">
        {{ value }}
      </n-descriptions-item>
    </n-descriptions>
  </v-card>
</template>

<style scoped>
.card {
  margin-bottom: 16px;
}
</style>
