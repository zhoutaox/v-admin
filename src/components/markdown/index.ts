import { withInstall } from '@/utils'
import MarkDown from './src/index.vue'

// 导出单独组件
export { MarkDown }
// 默认导出
export default withInstall(MarkDown)
