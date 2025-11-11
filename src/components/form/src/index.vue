<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: Record<string, unknown>
    // field: FieldProps[]
  }>(),
  {},
)

const formData = computed(() => {
  return props.modelValue
})
</script>

<template>
  <n-form ref="formRef"> </n-form>
</template>

<style scoped></style>
