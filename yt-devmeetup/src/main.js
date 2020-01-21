import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import DateFilter from './filters/date'

import Alert from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', Alert)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_1dZGzB81qw_knzMZy7ZD5Tp8cS_LJLE',
      authDomain: 'yt-devmeetup-6fd7f.firebaseapp.com',
      databaseURL: 'https://yt-devmeetup-6fd7f.firebaseio.com',
      projectId: 'yt-devmeetup-6fd7f',
      storageBucket: 'yt-devmeetup-6fd7f.appspot.com',
      // storageBucket: 'gs:yt-devmeetup-6fd7f.appspot.com',
      messagingSenderId: '60611268652',
      appId: '1:60611268652:web:77f3dcb3cebdb7ea414189'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.$store.dispatch('autoSignIn', user)
      } else {
        // No user is signed in.
        console.log('onAuthStateChanged no user found')
      }
    })

    this.$store.dispatch('loadMeetupsFromDb')
  }
}).$mount('#app')
