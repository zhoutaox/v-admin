<script setup lang="ts">
import { type PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'file' | 'image' | 'images' | 'video' | 'files'>,
    default: 'image',
  },
})

defineOptions({
  label: '上传控件',
  icon: 'yunshangchuan',
})
</script>

<template>
  <div class="upload-container"></div>
  <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" list-type="image"> </n-upload>
</template>

<style scoped>
.upload-container {
  width: 200px;
  height: 200px;
}
</style>
