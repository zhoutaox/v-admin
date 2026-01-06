<script setup lang="ts">
import { ref } from 'vue'
import { LogoWechat } from '@vicons/ionicons5'
import type { FormInst } from 'naive-ui'
import { useUserStore } from '@/stores'
import { showNoOpenMessage } from '@/utils'
import { UserLoginDto } from '../api'

const iconColor = 'rgba(194, 194, 194, 1)'
const formValue = ref(UserLoginDto.create())
const formRef = ref<FormInst | null>(null)
const userStore = useUserStore()
function doSubmit(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      userStore.login(formValue.value)
    }
  })
}
</script>

<template>
  <div class="tabs">
    <div class="tab-item active">账号密码登录</div>
    <div class="tab-item" @click="showNoOpenMessage">手机验证码登录</div>
  </div>
  <div style="position: relative">
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="UserLoginDto.getRules()"
      :show-label="false"
      size="large"
    >
      <n-form-item path="loginName" style="margin-bottom: 10px">
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
      <n-form-item>
        <div class="remember">
          <n-checkbox>记住密码</n-checkbox><span @click="showNoOpenMessage">忘记密码?</span>
        </div>
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" type="primary" block round @click="doSubmit"> 登录 </n-button>
      </n-form-item>
    </n-form>
  </div>

  <n-divider> 其他登录方式 </n-divider>
  <div class="other-login-way">
    <n-popover trigger="hover">
      <template #trigger>
        <n-button circle>
          <template #icon>
            <n-icon class="icon" :component="LogoWechat" :size="22" />
          </template>
        </n-button>
      </template>
      <n-qr-code value="微信扫码登录,敬请期待..." />
    </n-popover>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  padding: 4px 6px;
  width: auto;
  display: inline-flex;
  align-items: center;
  margin-bottom: 26px;
  background-color: #f3f7fb;
  border-radius: 4px;
  .tab-item {
    padding: 4px 12px;
    cursor: pointer;

    &.active {
      background-color: #fff;
      border-radius: 4px;
      color: var(--v-color-primary);
    }
  }
}

.remember {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    cursor: pointer;
    color: var(--v-color-primary);
  }
}

.other-login-way {
  display: flex;
  justify-content: center;

  .icon {
    cursor: pointer;
  }
}
</style>
