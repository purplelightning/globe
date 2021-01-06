// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true

console.log(location.host)
const baseUrl = location.host.indexOf('localhost') > -1 ? '../../static' : ''
Vue.prototype.baseUrl = baseUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
