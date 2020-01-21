<template>
<v-form @submit.prevent="onSignin">
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <v-card :loading="loading">
          <v-row v-if="error">
            <v-col>
              <app-alert
                @dismissed="onDismissed"
                :text="error.message"
              ></app-alert>
            </v-col>
          </v-row>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  name="email"
                  label="Mail"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  v-model="password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-spacer></v-spacer>
                <v-btn :disabled="loading" type="submit">Sign in</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        // after signin, go to /
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      // create firebase user and store
      console.log(this.email, this.password, this.confirmPassword)
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    onDismissed () {
      console.log('dismissed alert')
      this.$store.dispatch('clearError')
    }
  }
}
</script>
