import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import firebase from 'firebase'
import 'firebase/firestore'
import config from '../config'
import users from './users'
import conversations from './conversations'

Firebase.initializeApp(config)
Vue.use(Vuex)

const state = {
  db: firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  }
})
