import { ref } from 'vue'
import { secureUtil } from 'bstm-utils'
import { defineStore } from 'pinia'
import { router } from '@/router'

export const useUserStore = defineStore('user', () => {
  const password = ref('')
  const isRememberPassword = ref(false)

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
    setPassword,
    getPassword,
    logOut,
  }
})
