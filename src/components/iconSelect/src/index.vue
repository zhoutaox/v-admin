<script setup lang="ts">
defineOptions({
  label: '图标选择器',
  icon: 'search-for-similar',
})
</script>

<template>
  <n-popover placement="top-start" trigger="click">
    <template #trigger>
      <n-button size="small" style="grid-area: 1 / 1 / 2 / 2"> Top Start </n-button>
    </template>
    <div class="large-text">啊！</div>
  </n-popover>
</template>

<style scoped></style>
