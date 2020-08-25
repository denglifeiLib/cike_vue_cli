// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './utils/request.js';
import * as filters from "@/utils/filters.js"
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import  './assets/css/reset.css';
import less from 'less'



Vue.use(less)
Vue.use(Mint);
Vue.prototype.http = request;

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
