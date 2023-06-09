import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
// import './plugins/element'

import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router'
import service from './service';
import echarts from 'echarts';

//挂载到原型，可以全局使用
// Vue.prototype.axios = axios;
Vue.prototype.service = service;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
