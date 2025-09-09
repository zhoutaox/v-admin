<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()

defineOptions({
  label: '卡片',
  icon: 'search-for-similar',
})
</script>

<template>
  <div class="box base-bg">
    <div class="header">{{ props.title }}</div>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  border-radius: 6px;
  .header {
    padding-left: 12px;
    line-height: 42px;
    border-bottom: 1px solid #e5e7eb;
    font-size: 16px;
    font-weight: bold;
  }
  .main {
    padding: 16px;
  }
}
</style>
