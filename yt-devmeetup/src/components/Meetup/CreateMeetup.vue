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
          <v-file-input
            label="Upload Image"
            accept="image/*"
            v-model="imageFile"
            v-on:change="onFilePicked"
        ></v-file-input>
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
      title: 'title',
      location: 'location',
      imageUrl: '',
      description: 'desc',
      date: new Date().toISOString().substr(0, 10),
      time: new Date().getHours() + ':' + new Date().getMinutes(),
      imageFile: null, // the inputfield
      image: null // the binary file
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
      if (!this.image) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        description: this.description,
        // imageUrl: this.imageUrl, // too big
        image: this.image, // better to use binary
        date: this.submitableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    },
    onFilePicked () {
      console.log('a file was picked:', this.imageFile)
      if (!this.imageFile) {
        this.imageUrl = null
        return
      }
      this.imageUrl = null

      // read the file and store it b64 encoded
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        console.log('loading the file')
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(this.imageFile)
      this.image = this.imageFile // maybe skip this
    }
  }
}
</script>
