import api from '@api'
import {
  userEndpoints, exerciseEndpoints
} from '@resources/endpoints'
import {
  newUser
} from './models/users'
import {
  newExercise
} from './models/exercises'

const defaultState = {
  meta: {},
  userList: [newUser()],
  newUser: newUser(),
  editUser: newUser(),
  detailUser: newUser(),
  createdExercises: [newExercise()],
  errors: []
}

const mutations = {
  receiveUserList(state, users) {
    state.userList = users
  },
  receiveDetail(state, user) {
    state.detailUser = user
  },
  receiveMeta(state, meta) {
    state.meta = meta
  },
  receiveCreatedExercises(state, exercises) {
    state.createdExercises = exercises
  },
  receiveError(state, error) {
    state.errors.push(error)
  }
}

const actions = {
  getList({commit}) {
    api.get(userEndpoints.list).then(resp => {
      commit('receiveUserList', resp.data.results)
      commit('receiveMeta', {
        count: resp.data.count,
        next: resp.data.next,
        previous: resp.data.previous
      })
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getDetail({commit}, id) {
    api.get(userEndpoints.detail(id)).then(resp => {
      commit('receiveDetail', resp.data)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getCreatedExercises({commit}, id) {
    api.get(exerciseEndpoints.list, {
      params: {creator: id}
    }).then(resp => {
      commit('receiveCreatedExercises', resp.data.results)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  }
}

const getters = {
  userList: state => (
    state.userList
  ),
  detailUser: state => state.detailUser,
  createdExercises: state => state.createdExercises
}

const users = {
  state: defaultState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default users
