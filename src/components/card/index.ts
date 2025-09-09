import { withInstall } from '@/utils'
import Container from './src/index.vue'

// 导出单独组件
export { Container }
// 默认导出
export default withInstall(Container)
