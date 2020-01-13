import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import { routes } from './routes';
import { store } from './store';

Vue.use(VueRouter);
Vue.use(VueResource);

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
