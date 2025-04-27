import { withInstall } from '@/utils/withInstall'
import Form from './src/index.vue'
import DialogForm from './components/DialogForm.vue'

// 导出单独组件
export { Form, DialogForm }
// 默认导出
export default withInstall(Form)
