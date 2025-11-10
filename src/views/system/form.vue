<script setup lang="ts">
import { ref } from 'vue'
import { SearchTableComponent, SearchTable } from '@/components/searchTable'
import { AiFormButton, AiFormListSearch } from '@/api/aiForm/entities'
import { User } from '@/api/user/entities'
import { ButtonEnum, ComponentEnum } from '@/enums'
import { openForm } from '@/utils'

// 明确指定类型，避免类型推断过深
const searchTable = ref<SearchTable>(new SearchTable())

const nameSearch = new AiFormListSearch('用户名', 'name', ComponentEnum.INPUT.key)
const ageSearch = new AiFormListSearch('年龄', 'age', ComponentEnum.CASCADER.key)
ageSearch.props = {
  options: [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
  ],
}
const phoneSearch = new AiFormListSearch('电话号码', 'phone', ComponentEnum.INPUT_NUMBER.key)

searchTable.value.searchList.push(nameSearch, ageSearch, phoneSearch)

const button1 = new AiFormButton('新增', 'add', ButtonEnum.PRIMARY.key, 'add')
const button2 = new AiFormButton('编辑', 'edit', ButtonEnum.SUCCESS.key, 'edit')
const button3 = new AiFormButton('删除', 'delete', ButtonEnum.DANGER.key, 'delete')
const button4 = new AiFormButton('导出', 'export', ButtonEnum.INFO.key, 'download')
searchTable.value.buttonList.push(button1, button2, button3, button4)

searchTable.value.fnClass = {
  add() {
    openForm(User)
  },

  edit() {
    openForm(User)
  },

  delete() {
    console.log('Delete button clicked with params:')
  },
}
</script>

<template>
  <SearchTableComponent :search-table="searchTable" />
</template>

<style scoped></style>
