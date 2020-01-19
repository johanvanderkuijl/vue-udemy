import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afdsfoij3',
        title: 'Meetup in New York',
        date: '2020-01-18'
      },
      {
        imageUrl:
          'https://cdn.pixabay.com/photo/2016/11/01/21/22/paris-1789706_960_720.jpg',
        id: 'bfdsfoij3234',
        title: 'Meetup in Paris',
        date: '2020-01-19'
      }
    ],
    user: {
      id: 'a2l3k4jlsf',
      registeredMeetups: ['asdf32fsafsaf']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      // payload is a meetup object
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        id: 'l2k34jl2jfsdk'
      }
      // or send payload directly
      commit('createMeetup', meetup)

      // send to firebase
      // get id back
      // add id to meetup
      // upload image and store url back
    }
  },
  modules: {
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.data > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      console.log('getters: loadedMeetup')
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          console.log('trying id', meetup.id)
          return meetup.id === meetupId
        })
      }
    }
  }
})
