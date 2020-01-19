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
      description: ''
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
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
