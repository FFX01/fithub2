import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import users from './users'
import exercises from './exercises'
import programs from './programs'

Vue.use(Vuex)

const modules = {
  auth,
  users,
  exercises,
  programs
}

const store = new Vuex.Store({
  modules
})

export default store
