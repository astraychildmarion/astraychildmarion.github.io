// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import VueWow from 'vue-wow'
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
Vue.use(animate)
Vue.use(VueWow)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
