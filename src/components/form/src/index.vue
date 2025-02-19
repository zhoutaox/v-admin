<script setup lang="ts">
import { computed } from 'vue'
import { type FieldProps } from '@/decorators'

const props = defineProps<{
  modelValue: Record<string, unknown>
  field: FieldProps[]
}>()

const formData = computed(() => {
  return props.modelValue
})

defineOptions({
  name: 'v-form',
})
</script>

<template>
  <n-form ref="formRef">
    <n-form-item
      v-for="item in field"
      :label="item.label"
      :key="item.propertyKey"
      :path="item.propertyKey"
    >
      <n-select
        v-if="item.options"
        v-model:value="formData[item.propertyKey]"
        :options="item.options"
      />
      <n-input
        v-else
        v-model:value="formData[item.propertyKey]"
        @keydown.enter.prevent
        :placeholder="item.placeholder"
      />
    </n-form-item>
  </n-form>
</template>

<style scoped></style>
