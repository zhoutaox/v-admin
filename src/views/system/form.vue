<script setup lang="ts">
import { ref } from 'vue'
import FormDesign from '@/components/formDesign/src/index.vue'
import { SearchTableComponent, SearchTable } from '@/components/searchTable'
import { AiFormButton, AiFormListSearch, User } from '@/api'
import { ButtonEnum, ComponentEnum } from '@/enums'
import { openForm } from '@/utils'

const searchTable = ref(new SearchTable())

const nameSearch = new AiFormListSearch('用户名', 'name')
const ageSearch = new AiFormListSearch('年龄', 'age', ComponentEnum.INPUT_NUMBER.key)
const phoneSearch = new AiFormListSearch('电话号码', 'phone')

searchTable.value.searchList.push(nameSearch, ageSearch, phoneSearch)

const button1 = new AiFormButton('新增', 'add', ButtonEnum.PRIMARY.key, 'add')
const button2 = new AiFormButton('编辑', 'edit', ButtonEnum.SUCCESS.key, 'edit')
const button3 = new AiFormButton('删除', 'delete', ButtonEnum.DANGER.key, 'delete')
const button4 = new AiFormButton('导出', 'export', ButtonEnum.INFO.key, 'export')
searchTable.value.buttonList.push(button1, button2, button3, button4)

class ButtonClass {
  add() {
    openForm(User)
  }

  edit() {
    openForm(User)
  }

  delete() {
    console.log('Delete button clicked with params:')
  }

  export() {
    console.log('Export button clicked with params:')
  }
}

searchTable.value.setButtonClass(ButtonClass)
</script>

<template>
  <!-- <div>表单管理</div> -->
  <!-- <FormDesign /> -->
  <SearchTableComponent :search-table="searchTable" />
</template>

<style scoped></style>
