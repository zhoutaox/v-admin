<script setup lang="ts">
import type { BaseEntity } from '@/core'
import { type DataTableProps } from 'naive-ui'

interface TableProps extends /* @vue-ignore */ DataTableProps {
  entity?: new () => BaseEntity
  autoColumns?: boolean
  showIndex?: boolean
  showSelection?: boolean
}

const props = defineProps<TableProps>()

if (props.entity) {
  // 如果有实体，则自动生成列
}
</script>

<template>
  <n-data-table>
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]="slotProps">
      <slot :name="slot" v-bind="slotProps" />
    </template>
  </n-data-table>
</template>

<style scoped></style>
