import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import http from '../http'
//把 http挂载到Vue的原型上
Vue.prototype['$http'] = http

//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入轻提示
import { Toast } from 'vant';
Vue.prototype['$msg'] = Toast

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
