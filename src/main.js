// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import bus from './components/bus'
import {
  Col,
  Row,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui'
import App from './App'

Vue.use(Col)
Vue.use(Row)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      bus: bus
    }
  },
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
