// 导入vue
import Vue from 'vue'
// 从elemet-ui这个里面按需导入你所需要的组件
import {
  Button,
  Select,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'
// 通过vue.use() 挂载所导入的组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
