<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
const value = ref('')

defineExpose({
  open() {
    showModal.value = true
  },
})
</script>

<template>
  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :closable="false"
    :bordered="false"
    :style="{
      width: '600px',
      marginTop: '120px', // 调整距离顶部的距离
    }"
  >
    <n-input v-model:value="value" type="text" placeholder="请输入关键词搜索">
      <template #prefix>
        <v-icon icon="search" size="12" color="#999" />
      </template>
    </n-input>
  </n-modal>
</template>

<style scoped></style>
