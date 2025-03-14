<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { api } from '@/api'

const formRef = ref<FormInst | null>(null)

const formValue = ref({
  user: {
    username: '',
    password: '',
  },
  phone: '',
})

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      api.user.login(formValue.value.user)
      api.user.add({
        name: 'text',
        age: 12,
      })
      api.user.get('1')
    } else {
      console.log(errors)
      // message.error('Invalid')
    }
  })
}

const rules = {
  user: {
    username: {
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur'],
    },
  },
}
</script>

<template>
  <div>
    <n-form ref="formRef" inline :label-width="80" :model="formValue" :rules="rules">
      <n-form-item label="姓名" path="user.username">
        <n-input v-model:value="formValue.user.username" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="密码" path="user.password">
        <n-input v-model:value="formValue.user.password" placeholder="输入密码" />
      </n-form-item>
      <n-form-item label="电话号码" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="电话号码" />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick"> 验证 </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<style scoped></style>
