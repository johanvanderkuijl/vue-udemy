import Vue from 'vue'
import Vuex from 'vuex'

import axios from './axios-auth'
import globalAxios from 'axios'

import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {

    authUser(state, authData) {
      state.idToken = authData.idToken
      state.userId = authData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    logout(state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('logout')
      }, expirationTime)
    },
    signup({commit, dispatch}, formData) {
      const authData = { 
        email: formData.email, 
        password: formData.password, 
        returnSecureToken: true
      }
      axios.post(
        '/accounts:signUp?key=AIzaSyADLj3eLet05onoVuH5-nKKuEpv3ds7k8c',
        authData
      ).then(res => {
        console.log(res)
        commit('authUser', {
          idToken: res.data.idToken,
          userId: res.data.localId
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch('setLogoutTimer', res.data.expiresIn)
        dispatch('storeUser', formData)
      })
       .catch(error => console.log(error))
    },
    login({commit, dispatch}, authData){
      axios
        .post("accounts:signInWithPassword?key=AIzaSyADLj3eLet05onoVuH5-nKKuEpv3ds7k8c", 
          authData
        )
        .then(
          res => {
            console.log(res)
            commit('authUser', {
              idToken: res.data.idToken,
              userId: res.data.localId
            })
            const now = new Date()
            const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
            localStorage.setItem('token', res.data.idToken)
            localStorage.setItem('userId', res.data.localId)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch('setLogoutTimer', res.data.expiresIn)
          })
        .catch(error => console.log(error));
    },
    tryAutoLogin({commit}) {
      // check for valid token in local storage
      console.log('trying autologin')
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now > expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        idToken: token,
        userId: userId
      })
      
    },
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },
    fetchUser({commit, state}) {
      console.log('store.js fetchuser', state)
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
      // this.$http.get()
      // instance.get()
        .then(res => { 
            console.log(res.data);
            // this.email = res.data["-LyYRZHITohC7Nq1sL99"].email;
            const data = res.data
            const users = []
            for (const key in data) {
              const user = data[key]
              user.id = key
              users.push(user)
            }
            console.log(users)
            commit('storeUser', users[0])
            
        })
        .catch(error => console.log(error))
    },
    logout({commit}) {
      commit('logout')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/signin')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loggedIn (state) {
      
      return state.idToken !== null
    }
  }
})