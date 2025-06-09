import { ref } from 'vue'
import { secureUtil } from 'bstm-utils'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const password = ref('')
  const isRememberPassword = ref(false)

  function setPassword(pwd: string) {
    password.value = secureUtil.encryptBySM2(pwd)
  }

  function getPassword() {
    return secureUtil.decryptBySM2(password.value)
  }

  return {
    setPassword,
    isRememberPassword,
    getPassword,
  }
})
