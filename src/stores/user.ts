import { ref } from 'vue'
import { secureUtil } from 'bstm-utils'
import { defineStore } from 'pinia'
import { router } from '@/router'
import { userApi, UserLoginDto } from '@/views/user/api'
import { AppParams } from '@/constants/AppParams'
import { useRouterStore } from './router'
import { notification } from '@/utils'

export const useUserStore = defineStore('user', () => {
  const password = ref('')
  const isRememberPassword = ref(false)
  const todoNum = ref(0) // 待办事项数量
  const token = ref('') // 登录令牌
  const isLogin = ref(false) // 是否已登录
  const routerStore = useRouterStore()

  function setPassword(pwd: string) {
    password.value = secureUtil.encryptBySM2(pwd)
  }

  function getPassword() {
    return secureUtil.decryptBySM2(password.value)
  }

  async function login(userLoginDto: UserLoginDto) {
    const { success, data } = await userApi.login(userLoginDto)
    if (success) {
      setToken(data.token)
      await routerStore.initRoute()
      await router.instance.push(AppParams.HOME_PATH)
      notification.success({
        title: '登录成功',
        duration: 3 * 1000,
      })
    }
  }

  async function logout() {
    const { success } = await userApi.logout()
    if (!success) {
      return
    }
    router.removeRoute()
    router.instance.replace({
      path: AppParams.LOGIN_PATH,
    })
    isLogin.value = false
    token.value = ''
  }

  function setToken(t: string) {
    token.value = t
    isLogin.value = true
  }

  return {
    isRememberPassword,
    todoNum,
    token,
    isLogin,
    setToken,
    setPassword,
    getPassword,
    login,
    logout,
  }
})
