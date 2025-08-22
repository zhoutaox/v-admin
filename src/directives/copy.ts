/**
 * @file Copy directive
 */
import type { Directive, DirectiveBinding } from 'vue'
import { message } from '@/utils'

const copy: Directive = {
  beforeMount(el, binding: DirectiveBinding): void {
    el.targetContent = binding.value
    const success = binding.arg as ((content: string) => void) | undefined
    el.addEventListener('click', () => {
      if (!el.targetContent) return
      // 创建textarea标签
      const textarea: HTMLTextAreaElement = document.createElement('textarea')
      // 设置相关属性
      textarea.readOnly = true
      textarea.style.position = 'fixed'
      textarea.style.top = '-99999px'
      // 把目标内容赋值给它的value属性
      textarea.value = el.targetContent
      // 插入到页面
      document.body.appendChild(textarea)
      // 调用onselect()方法
      textarea.select()
      // 把目标内容复制进剪贴板, 该API会返回一个Boolean
      const res: boolean = document.execCommand('Copy')
      if (res && success) {
        success(el.targetContent)
      } else {
        message.success('复制成功')
      }
      // 移除textarea标签
      document.body.removeChild(textarea)
    })
  },
  updated(el, binding: DirectiveBinding) {
    // 实时更新最新的目标内容
    el.targetContent = binding.value
  },
  unmounted(el) {
    el.removeEventListener('click', () => {
      console.log('移除事件')
    })
  },
}

export default copy
