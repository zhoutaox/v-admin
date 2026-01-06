<script setup lang="ts">
import { ref } from 'vue'
import type { FormInst } from 'naive-ui'
import { RegisterUserDto } from '../api/dto/RegisterUserDto'
import { userApi } from '../api'
import { message } from '@/utils'

const timer = ref(0)
const formRef = ref<FormInst | null>(null)
const emailRef = ref<FormInst | null>(null)
const iconColor = 'rgba(194, 194, 194, 1)'
const formValue = ref(RegisterUserDto.create())

async function sendEmail() {
  try {
    await emailRef.value?.validate((errors) => {
      console.log(errors)
    })
  } catch (error) {
    console.log(error)
    return
  }

  await userApi.sendEmail(formValue.value.email).then((res) => {
    if (res.success) {
      message.success('发送成功')
      timer.value = 60
      setInterval(() => {
        timer.value--
        if (timer.value <= 0) {
          clearInterval(timer.value)
        }
      }, 1000)
    }
  })
}

async function register() {
  formRef.value?.validate((errors) => {
    if (!errors) {
      userApi.register(formValue.value).then((res) => {
        if (res.success) {
          message.success('注册成功，请前往登录')
        }
      })
    }
  })
}
</script>

<template>
  <n-form
    ref="formRef"
    :model="formValue"
    :rules="RegisterUserDto.getRules()"
    :show-label="false"
    size="large"
  >
    <n-form-item path="username">
      <n-input v-model:value="formValue.username" placeholder="输入姓名">
        <template #prefix>
          <v-icon :size="12" icon="customer-center" :color="iconColor" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="loginName">
      <n-input v-model:value="formValue.loginName" placeholder="输入登录名">
        <template #prefix>
          <v-icon :size="12" icon="customer-center" :color="iconColor" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="formValue.password"
        type="password"
        placeholder="输入密码"
        show-password-on="mousedown"
      >
        <template #prefix>
          <v-icon :size="12" icon="lock-fill" :color="iconColor" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item ref="emailRef" path="email">
      <n-input v-model:value="formValue.email" placeholder="输入邮箱">
        <template #prefix>
          <v-icon :size="12" icon="customer-center" :color="iconColor" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="captcha">
      <n-input v-model:value="formValue.captcha" placeholder="请输入验证码">
        <template #prefix>
          <v-icon :size="12" icon="customer-center" :color="iconColor" />
        </template>
        <template #suffix>
          <n-button size="small" round type="primary" @click="sendEmail" :disabled="timer > 0">{{
            timer > 0 ? `${timer}s` : '获取验证码'
          }}</n-button>
        </template>
      </n-input>
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" type="primary" block round @click="register"> 注册 </n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped></style>
