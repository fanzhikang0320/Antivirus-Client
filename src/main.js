import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/Css/Init.less'

import Star from '@/components/Star'

Vue.use(Star)

Vue.config.productionTip = false
Axios.defaults.baseURL = '/api'
Vue.use(VueAxios,Axios)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
