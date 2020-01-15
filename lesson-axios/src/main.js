import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios';
axios.defaults.baseURL = 'https://vuejs-axios-bfafd.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'Bearer: 123'
axios.defaults.headers.get['Accepts'] = 'application/json'

// // middleware, add interceptor
// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('Request interceptor', config)
//   config.headers['XYZ'] = 'b'
//   return config
// })

// axios.interceptors.response.use(res => {
//   console.log('Response interceptor', res)
//   return res
// })

// // remove interceptor
// axios.interceptors.request.eject(reqInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
