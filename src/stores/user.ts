import { ref } from 'vue'
import { secureUtil } from 'bstm-utils'
import { defineStore } from 'pinia'
import { router } from '@/router'
import { userApi } from '@/views/user/api'

export const useUserStore = defineStore('user', () => {
  const password = ref('')
  const isRememberPassword = ref(false)
  const todoNum = ref(0) // 待办事项数量
  const token = ref('') // 登录令牌
  const isLogin = ref(false) // 是否已登录

  function setPassword(pwd: string) {
    password.value = secureUtil.encryptBySM2(pwd)
  }

  function getPassword() {
    return secureUtil.decryptBySM2(password.value)
  }

  function logOut() {
    router.removeRoute()
    router.instance.replace({
      path: '/login',
    })
    isLogin.value = false
  }

  function setToken(t: string) {
    token.value = t
    isLogin.value = true
  }

  function initUser() {
    userApi.keepAlive().then((res) => {})
  }

  return {
    isRememberPassword,
    todoNum,
    token,
    isLogin,
    setToken,
    setPassword,
    getPassword,
    logOut,
  }
})
