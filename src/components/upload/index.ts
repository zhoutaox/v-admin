import { withInstall } from '@/utils'
import Upload from './src/index.vue'

// 导出单独组件
export { Upload }
// 默认导出
export default withInstall(Upload)
