<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{ meetup.title }}</h3>
          </v-card-title>
          <v-img
            :src=meetup.imageUrl
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          ></v-img>
          <v-card-subtitle>{{ meetup.date | date }} - {{ meetup.location }}</v-card-subtitle>
          <v-card-text>{{ meetup.description }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary" >Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      console.log('meetup.vue computed property')
      console.log('this.$route.params.id:', this.$route.params.id)
      console.log('this.id (prop):', this.id)
      // return this.$store.getters.loadedMeetup(this.$route.params.id)
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
