import { withInstall } from '@/utils/withInstall'
import Form from './src/index.vue'
import DialogForm from './components/DialogForm.vue'
import DrawerForm from './components/DrawerForm.vue'

// 导出单独组件
export { Form, DialogForm, DrawerForm }
// 默认导出
export default withInstall(Form)
