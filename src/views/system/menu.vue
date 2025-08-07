<script setup lang="ts">
import { SearchTableComponent, SearchTable } from '@/components/searchTable'

const searchTable = new SearchTable()
</script>

<template>
  <SearchTableComponent :config="searchTable" />
</template>

<style scoped></style>
