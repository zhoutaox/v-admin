import { ref } from 'vue'
import { secureUtil } from 'bstm-utils'
import { defineStore } from 'pinia'
import { router } from '@/router'

export const useUserStore = defineStore('user', () => {
  const password = ref('')
  const isRememberPassword = ref(false)
  const todoNum = ref(0) // 待办事项数量

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
  }

  return {
    isRememberPassword,
    todoNum,
    setPassword,
    getPassword,
    logOut,
  }
})
