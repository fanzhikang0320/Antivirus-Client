import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import { Rate} from 'view-design';
import Loading from '@/components/Loading/index.js'
import './assets/css/Init.less'
import 'view-design/dist/styles/iview.css';

import Star from '@/components/Star'

Vue.use(Loading);
Vue.use(Star)
Vue.component('Rate',Rate)
Vue.config.productionTip = false
Axios.defaults.baseURL = 'https://www.thebestantivirus.news'

Vue.use(VueAxios,Axios)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
