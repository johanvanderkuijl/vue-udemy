<template>
<v-form @submit.prevent="onSignup">
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <v-card>
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
                <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  :rules="[comparePasswords]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-spacer></v-spacer>
                <v-btn type="submit">Sign up</v-btn>
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
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : true
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        // after signup, go to /
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      // create firebase user and store
      console.log(this.email, this.password, this.confirmPassword)
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
    },
    onDismissed () {
      console.log('dismissed alert')
      this.$store.dispatch('clearError')
    }
  }
}
</script>
