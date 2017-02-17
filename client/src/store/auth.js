import api, {getAuthToken} from '@api'
import {userEndpoints} from '@resources/endpoints'

const defaultState = {
  token: '',
  authUser: {},
  loggedIn: false,
  errors: [],
  messages: []
}

const mutations = {
  receiveToken(state, token) {
    state.token = token
    window.sessionStorage.setItem('authToken', token)
  },
  receiveAuthUser(state, user) {
    state.authUser = user
  },
  receiveError(state, error) {
    state.errors.push(error)
  },
  clearErrors(state) {
    state.errors = []
  },
  setAuth(state, status) {
    state.loggedIn = status
  },
  resetState(state) {
    state.token = ''
    state.authUser = {}
    state.loggedIn = false
    state.errors = []
    window.sessionStorage.removeItem('authToken')
  },
  receiveMessage(state, msg) {
    state.messages.push(msg)
  }
}

const actions = {
  signIn ({dispatch, commit}, userData) {
    api.post(userEndpoints.signIn, userData).then(resp => {
      if(resp.status === 200){
        commit('receiveToken', resp.data.token)
      }
    }).then(() =>
      dispatch('getAuthUser')
    ).catch(err => {
      console.log(err)
      console.log(err.response || '')
      if(err.response.status === 400) {
        commit('receiveError', 'Incorrect credentials')
      } else {
        commit('receiveError', err.message)
      }
    })
  },
  signOut({commit}) {
    commit('resetState')
  },
  getAuthUser ({commit}) {
    console.log(getAuthToken())
    api.get(userEndpoints.authUser).then(resp => {
      commit('receiveAuthUser', resp.data)
    }).then(() =>
      commit('setAuth', true)
    ).then(() =>
      commit('clearErrors')
    ).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  signUp({commit, dispatch}, userData) {
    api.post(userEndpoints.signUp, userData).then(resp => {
      if(resp.status === 201) {
        commit('receiveMessage', "Sign Up successful")
        commit('receiveAuthUser', resp.data)
      }
    }).catch(err => {
      console.log(err)
      let errData = err.response.data
      for(let item in errData){
        let msg = `${item}: ${errData[item][0]}`
        commit('receiveError', msg)
      }
    })
  }
}

const getters = {
  authToken: state => (
    state.token
  ),
  authUser: state => (
    state.authUser
  ),
  loggedIn: state => (
    state.loggedIn
  ),
  errors: state => (
    state.errors
  )
}

const auth = {
  state: defaultState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default auth
