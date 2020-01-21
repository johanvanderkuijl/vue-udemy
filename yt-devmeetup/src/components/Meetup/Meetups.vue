<template>
  <v-container>
    <v-row
      v-for="meetup in meetups"
      :key=meetup.id
      class="mb-2"
    >
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-card
          class="info"
        >
          <v-row>
            <v-col cols="5" sm="4" md="3">
              <v-img
                :src=meetup.imageUrl
                height="150px"
              >
              </v-img>
            </v-col>
            <v-col cols="7" sm="8" md="9">
              <v-card-title>
                <div>
                <h3 class="white--text mb-0">{{ meetup.title }}</h3>
                <div>{{ meetup.date | date }}</div>
                </div>
              </v-card-title>
              <v-card-subtitle>
                <p>Created by {{ meetup.creatorId }}</p>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn text :to="'/meetups/' + meetup.id">
                  <v-icon left>mdi-arrow-right</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <!-- <v-card-title>Title</v-card-title> -->
          <!-- <v-card-subtitle>Subtitle</v-card-subtitle>
          <v-card-text>
            Greyhound divisively hello coldly
            wonderfully marginally far upon excluding.
          </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  },
  created () {
    console.log('Meetups.vue created')
  }
}
</script>
