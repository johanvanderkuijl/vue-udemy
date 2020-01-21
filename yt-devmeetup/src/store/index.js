import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      // {
      //   imageUrl:
      //     'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
      //   id: 'afdsfoij3',
      //   title: 'Meetup in New York',
      //   date: new Date(),
      //   location: 'New York',
      //   description: 'A very nice meeting'
      // },
      // {
      //   imageUrl:
      //     'https://cdn.pixabay.com/photo/2016/11/01/21/22/paris-1789706_960_720.jpg',
      //   id: 'bfdsfoij3234',
      //   title: 'Meetup in Paris',
      //   date: new Date(),
      //   location: 'Paris',
      //   description: 'A very important meeting'
      // }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      // payload is a meetup object
      state.loadedMeetups.push(payload)
    },
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    // load the objects from db and add to the local store
    loadMeetupsFromDb ({ commit }) {
      commit('setLoading', true)
      var db = firebase.firestore()
      const meetups = []
      db.collection('meetups').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const meetup = {
            ...doc.data(),
            id: doc.id
          }
          // console.log('got meetup from db', meetup)
          // console.log('date from db: ', meetup.date)
          // console.log('date from Date()', new Date())

          meetups.push(meetup)
        })
        commit('setLoadedMeetups', meetups)
        commit('setLoading', false)
      })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    createMeetup ({ commit, getters }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        // imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        creatorId: getters.user.id
        // id: 'l2k34jl2jfsdk' firebase will create an id for us
      }
      // async, so do it here
      var db = firebase.firestore()

      console.log('about to add meetup to db', meetup)
      // let imageUrl
      let id
      // let uploadTask
      db.collection('meetups').add(meetup)
        .then(docRef => {
          // get the id from firebase
          id = docRef.id
          console.log('Added meetup with id', id)
          // now add it to the local store
          // commit('createMeetup', {
          //   ...meetup,
          //   id: id
          // })
          return id // this id is returned and available in the next .then()
        })
        .then(id => {
          console.log('then getting filename')
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          console.log('getting filename and ext:', filename, ext)

          // upload actual file and return the reference in the next then block
          const uploadTask = firebase.storage().ref().child('meetups/' + id + ext).put(payload.image)
          console.log('using uploadTask', uploadTask)
          // now listen async to the state change
          uploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
          }, function (error) {
            console.log(error)
          }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(function (imageUrl) {
              console.log('File available at', imageUrl)
              console.log('updating document', id)
              const docRef = db.collection('meetups').doc(id)
              console.log('with docref', docRef)

              docRef.update({
                imageUrl: imageUrl
              }).then(() => {
                console.log('updated success')
                commit('createMeetup', {
                  ...meetup,
                  imageUrl: imageUrl,
                  id: id
                })
              })
              // return db.collection('meetups').doc(id).set({ imageUrl: downloadURL })
            })
            console.log('success')
          })
        })
        .catch(error => {
          console.log('Error adding meetup:', error)
        })
        .then(() => {
          console.log('finito')
        })

      // .then(ref => {
      //   console.log('then getDownloadURL')
      //   ref.getDownloadURL().then(function (url) {
      //     console.log('getDownloadURL:', url)
      //   }).catch(function (error) {
      //     console.log(error)
      //   })
      // })

      // send to firebase
      // get id back
      // add id to meetup
      // upload image and store url back
    },
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            // new user is created
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          // this error has a message property
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            console.log('store signin', user)
            const LoggedInUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', LoggedInUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({ commit }, payload) {
      console.log('autoSignIn with user', payload)
      const LoggedInUser = {
        id: payload.uid,
        registeredMeetups: []
      }
      commit('setUser', LoggedInUser)
    },
    clearError ({ commit }) {
      commit('clearError')
    },
    logout ({ commit }) {
      // remove token from local store
      firebase.auth().signOut()
      // remove user from state
      commit('setUser', null)
      // push / to router
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
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
