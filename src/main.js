import 'ant-design-vue/lib/style/index.less' // antd core styles
import './components/kit/vendors/antd/themes/default.less' // default theme antd components
import './components/kit/vendors/antd/themes/dark.less' // dark theme antd components
import './global.scss' // app & third-party component styles

import Vue from 'vue'
import VuePageTitle from 'vue-page-title'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'vue-nprogress'
import FirebaseAuthService from './services/firebase.auth.service'
import { i18n } from '@/localization'
import VueLayers from 'vuelayers'
import BootstrapVue from 'bootstrap-vue'
import {
  Avatar, TreeSelect, Rate, Breadcrumb, InputNumber, Steps,
  Upload, Button, Layout, Table, Icon, Progress, Radio, Dropdown, Menu,
  Carousel, Input, Calendar, Badge, Slider, Form, Tooltip, Select, Switch,
  Tag, Affix, Spin, Alert, Checkbox, Tabs, Pagination, notification, Drawer,
  Cascader, DatePicker, TimePicker, Divider, Anchor, AutoComplete, BackTop, Collapse, Card, List, Popover,
  Tree, Timeline, Row, Col, Transfer, Modal, message, Popconfirm, Skeleton, ConfigProvider, Comment,
} from 'ant-design-vue'

import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.use(VueLayers)
Vue.use(Skeleton)
Vue.use(Avatar)
Vue.use(Popconfirm)
Vue.use(Transfer)
Vue.use(Modal)
Vue.use(Divider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Timeline)
Vue.use(Tree)
Vue.use(Popover)
Vue.use(List)
Vue.use(Card)
Vue.use(Button)
Vue.use(Rate)
Vue.use(TreeSelect)
Vue.use(Breadcrumb)
Vue.use(Layout)
Vue.use(Table)
Vue.use(Icon)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(Calendar)
Vue.use(Badge)
Vue.use(Slider)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Affix)
Vue.use(Spin)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Tabs)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Steps)
Vue.use(InputNumber)
Vue.use(Drawer)
Vue.use(Switch)
Vue.use(Cascader)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Anchor)
Vue.use(AutoComplete)
Vue.use(Collapse)
Vue.use(BackTop)
Vue.use(ConfigProvider)
Vue.use(Comment)

Vue.prototype.$notification = notification
Vue.prototype.$message = message

Vue.use(NProgress)
Vue.use(FirebaseAuthService)
Vue.use(VuePageTitle, {
  prefix: 'Clean UI Pro Vue | ',
  router,
})

Vue.config.productionTip = false
const nprogress = new NProgress({ parent: 'body' })

new Vue({
  router,
  store,
  nprogress,
  i18n,
  render: h => h(App),
}).$mount('#app')
