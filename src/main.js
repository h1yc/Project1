import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../src/assets/base.css'
import '../src/assets/icon-rrl/iconfont.css'
import './mock'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
