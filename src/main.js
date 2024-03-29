// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import qs from 'qs'

Vue.use(ElementUI)
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
