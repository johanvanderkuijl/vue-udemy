<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>Create a new meetup</h4>
      </v-col>
    </v-row>
    <v-form @submit.prevent="onCreateMeetup">
      <v-row>
        <v-col sm="6" offset-sm="3">
          <v-text-field v-model="title" label="Title" id="title" required></v-text-field>
          <v-text-field v-model="location" label="Location" id="location" required></v-text-field>
          <v-text-field v-model="imageUrl" label="Image Url" id="image-url" required></v-text-field>
          <img :src="imageUrl" height="200" />
          <v-textarea
            v-model="description"
            label="Description"
            id="description"
            multi-line
            required
          ></v-textarea>
        <v-row >
<h3>Choose a date and time</h3>
        </v-row>
        <v-row >
            <v-date-picker
              class="mb-2"
              v-model="date"
            ></v-date-picker>
        </v-row>
        <v-row>
            <v-time-picker
                class="mb-2"
                v-model="time"
                format="24hr"
            ></v-time-picker>
        </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg',
      description: '',
      date: new Date().toISOString().substr(0, 10),
      time: new Date().getHours() + ':' + new Date().getMinutes()
      // time: ''
      // date: new Date().toJSON(),
      // time: new Date().toJSON(),
      // date: new Date().toISOString().substr(0, 10),
      // time: new Date().getHours() + ':' + new Date().getMinutes()
    }
  },
  computed: {
    formIsValid () {
      return (
        this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
      )
    },
    submitableDateTime () {
      const date = new Date(this.date)
      const hours = this.time.split(':')[0]
      const minutes = this.time.split(':')[1]
      date.setHours(hours, minutes)
      console.log(date)
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        description: this.description,
        imageUrl: this.imageUrl,
        date: this.submitableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
