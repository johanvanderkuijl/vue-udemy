import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { routes } from './routes';
import { store } from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // default mode is hash
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
