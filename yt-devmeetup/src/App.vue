<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list  dense>
        <v-list-item
          v-for="item in menuItems"
          :key=item.title
          :to="item.link"
          @click="onLogout(item.title)"
          >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
    >
      <v-toolbar>
        <v-app-bar-nav-icon
          class="d-flex d-sm-none"
          @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to='/' tag='span' style="cursor: pointer">DevMeetup</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-flex">
          <v-btn
            v-for="item in menuItems"
            :key=item.title
            text
            :to="item.link"
            @click="onLogout(item.title)"
            >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container
      >
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>

export default {
  // name: 'App',

  components: {
  },

  data: () => ({
    drawer: false
  }),
  methods: {
    onLogout (payload) {
      // need to improve this
      if (payload === 'Logout') {
        console.log('App.vue onLogout', payload)
        this.$store.dispatch('logout')
      }
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'mdi-face', title: 'Sign up', link: '/signup' },
        { icon: 'mdi-lock-open', title: 'Sign in', link: '/signin' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'mdi-account-supervisor', title: 'View Meetups', link: '/meetups' },
          { icon: 'mdi-plus', title: 'Organize Meetups', link: '/meetups/new' },
          { icon: 'mdi-face-profile', title: 'Profile', link: '/profile' },
          { icon: 'mdi-logout', title: 'Logout', link: '#', myHandler: 'onLogout' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
