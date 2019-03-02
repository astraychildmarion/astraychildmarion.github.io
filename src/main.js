// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import VueWow from 'vue-wow'
import i18n from './lang'

import {
  Col,
  Row,
  Container,
  Header,
  Select,
  Option,
  Aside,
  Main,
  Footer
} from 'element-ui'
import App from './App'

Vue.use(Col)
Vue.use(Row)
Vue.use(Container)
Vue.use(Header)
Vue.use(Select)
Vue.use(Option)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(animate)
Vue.use(VueWow)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  i18n,
  router,
  render: h => h(App)
})
