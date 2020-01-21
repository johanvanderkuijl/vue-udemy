<template>
  <v-container fluid>
    <v-row class="mb-2">
      <v-col cols="12" sm="6" class="text-center text-sm-right">
        <v-btn class="primary" large router to="/meetups">Explore Meetups</v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="text-center text-sm-left">
        <v-btn class="primary" large router to="/meetups/new">Organize Meetups</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-progress-circular

          v-if="loading"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-carousel v-if="!loading" style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            @click="onCarouselClick(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col cols="12" class="text-center">
        <v-btn class="primary" large router to="/meetups">Explore Meetups</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onCarouselClick (id) {
      console.log(id)
      this.$router.push({ path: '/meetups/' + id })
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    left: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    /* font-size: 2em; */
    padding: 20px;
  }
</style>
