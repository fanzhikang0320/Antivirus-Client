import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios  from 'axios'
import { Rate, BackTop} from 'view-design';
import Loading from '@/components/Loading/index.js'
import './assets/css/init.less'
import 'view-design/dist/styles/iview.css';
import Star from '@/components/Star'
import VueMetaInfo from 'vue-meta-info'
import 'swiper/swiper.min.css'
Vue.use(VueMetaInfo);
Vue.use(Loading);
Vue.use(Star);
Vue.component('BackTop',BackTop);
Vue.component('Rate',Rate)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
