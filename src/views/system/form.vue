<script setup lang="ts">
import FormDesign from '@/components/formDesign/src/index.vue'
import { SearchTableComponent, SearchTable } from '@/components/searchTable'

const searchTable = new SearchTable()
</script>

<template>
  <!-- <div>表单管理</div> -->
  <!-- <FormDesign /> -->
  <SearchTableComponent :config="searchTable" />
</template>

<style scoped></style>
