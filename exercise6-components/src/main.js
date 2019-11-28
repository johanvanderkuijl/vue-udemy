import Vue from 'vue'
import App from './App.vue'

// we will make a header and footer component
import Header from './Header.vue'
import Footer from './Footer.vue'

import Servers from './Servers.vue'

Vue.component('my-header', Header)
Vue.component('my-footer', Footer)
// Vue.component('my-server', Server)
Vue.component('my-servers', Servers)

new Vue({
  el: '#app',
  render: h => h(App)
})
