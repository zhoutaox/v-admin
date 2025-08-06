// plugins/encryptedPersist.ts
import type { PiniaPluginContext } from 'pinia'
import { secureUtil } from 'bstm-utils'

interface EncryptedPersistOptions {
  key?: (id: string) => string
  storage?: Storage
  pick?: string[]
  omit?: string[]
  beforeRestore?: (context: PiniaPluginContext) => void
  afterRestore?: (context: PiniaPluginContext) => void
}

// todo:优化
export function createEncryptedPersist(globalOptions: EncryptedPersistOptions = {}) {
  return ({ store, options }: PiniaPluginContext) => {
    // 检查是否启用了加密持久化
    const persistOptions = options.encryptedPersist as EncryptedPersistOptions | boolean
    if (!persistOptions) return

    const {
      key = (id: string) => `encrypted_${id}`,
      storage = localStorage,
      pick,
      omit,
      beforeRestore,
      afterRestore,
    } = typeof persistOptions === 'object' ? { ...globalOptions, ...persistOptions } : globalOptions

    const storageKey = typeof key === 'function' ? key(store.$id) : key

    // 从存储中恢复数据
    const restoreFromStorage = () => {
      try {
        beforeRestore?.({ store, options } as PiniaPluginContext)

        const encryptedData = storage.getItem(storageKey)
        if (encryptedData) {
          // 解密数据
          const decryptedData = secureUtil.decryptBySM4(encryptedData)
          const parsedData = JSON.parse(decryptedData)

          // 过滤需要恢复的字段
          let dataToRestore = parsedData
          if (pick) {
            dataToRestore = pick.reduce((acc, key) => {
              if (key in parsedData) acc[key] = parsedData[key]
              return acc
            }, {} as any)
          }
          if (omit) {
            dataToRestore = Object.keys(parsedData).reduce((acc, key) => {
              if (!omit.includes(key)) acc[key] = parsedData[key]
              return acc
            }, {} as any)
          }

          // 恢复到 store
          store.$patch(dataToRestore)
        }

        afterRestore?.({ store, options } as PiniaPluginContext)
      } catch (error) {
        console.error('Failed to restore encrypted data:', error)
      }
    }

    // 保存到存储
    const saveToStorage = () => {
      try {
        let dataToSave = { ...store.$state }

        // 过滤需要保存的字段
        if (pick) {
          dataToSave = pick.reduce((acc, key) => {
            if (key in store.$state) acc[key] = store.$state[key]
            return acc
          }, {} as any)
        }
        if (omit) {
          dataToSave = Object.keys(store.$state).reduce((acc, key) => {
            if (!omit.includes(key)) acc[key] = store.$state[key]
            return acc
          }, {} as any)
        }

        // 加密并保存
        const serializedData = JSON.stringify(dataToSave)
        const encryptedData = secureUtil.encryptBySM4(serializedData)
        storage.setItem(storageKey, encryptedData)
      } catch (error) {
        console.error('Failed to save encrypted data:', error)
      }
    }

    // 初始化时恢复数据
    restoreFromStorage()

    // 监听状态变化并保存
    store.$subscribe(
      () => {
        saveToStorage()
      },
      { detached: true },
    )
  }
}
