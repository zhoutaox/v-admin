<script setup lang="ts">
import { computed } from 'vue'
import { renderIcon } from '@/utils'
import type { AiFormListSearch } from '@/api'
import type { Values } from '@/types'
import { ComponentEnum } from '@/enums'

const props = withDefaults(
  defineProps<{
    modelValue?: Record<string, Values>
    fields: AiFormListSearch[]
    labelWidth?: number
    labelAlign?: 'left' | 'right'
    labelPlacement?: 'left' | 'top'
  }>(),
  {
    labelWidth: 100,
    labelAlign: 'left',
    labelPlacement: 'left',
  },
)

const value = computed({
  get() {
    return props.modelValue || {}
  },
  set(val) {
    emits('update:modelValue', val)
  },
})

const emits = defineEmits<{
  (e: 'search', params: Record<string, string>): void
  (e: 'reset'): void
  (e: 'update:modelValue', val: Record<string, Values>): void
}>()

function search() {
  emits('search', value.value)
}

function reset() {
  emits('reset')
}
</script>

<template>
  <n-form ref="formRef" :label-width="labelWidth" label-placement="left" label-align="right">
    <div class="main">
      <n-form-item v-for="search in fields" :key="search.dbName" :label="search.label">
        <component
          :is="ComponentEnum.getComponent(search.widgetType)"
          v-model:value="value[search.dbName]"
          v-bind="search.props"
        />
      </n-form-item>
      <n-form-item>
        <n-space :style="{ paddingLeft: labelWidth + 'px' }">
          <n-button
            attr-type="button"
            type="primary"
            :render-icon="renderIcon('search')"
            @click="search"
            >检索</n-button
          >
          <n-button :render-icon="renderIcon('delete')" @click="reset">重置</n-button>
        </n-space>
      </n-form-item>
    </div>
  </n-form>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
}
</style>
