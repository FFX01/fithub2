import api from '@api'
import {
  programEndpoints, userEndpoints, exerciseEndpoints,
  routineEndpoints
} from '@resources/endpoints'
import {
  newProgram
} from './models/programs'
import {
  newUser
} from './models/users'
import {
  newExercise
} from './models/exercises'
import {
  newRoutine
} from './models/routines'

const defaultState = {
  meta: {},
  list: [newProgram()],
  detail: newProgram(),
  edit: newProgram(),
  new: newProgram(),
  errors: [],
  messages: [],
  creator: newUser(),
  routines: [newRoutine()],
  routinesMeta: {}
}

const mutations = {
  receiveMeta(state, data) {
    state.meta = {
      count: data.count,
      next: data.next,
      previous: data.previous
    }
  },
  receiveList(state, objects) {
    state.list = objects
  },
  receiveDetail(state, object) {
    state.detail = object
  },
  receiveEdit(state, payload) {
    state.edit = payload
  },
  receiveNew(state, obj) {
    state.new = obj
  },
  receiveError(state, error) {
    state.errors.push(error)
  },
  clearErrors(state){
    state.errors = []
  },
  receiveMessage(state, msg) {
    state.messages.push(msg)
  },
  clearMessages(state) {
    state.messages = []
  },
  receiveCreator(state, payload) {
    state.creator = payload.user
  },
  receiveRoutines(state, payload) {
    state.routines = payload.results
    state.routinesMeta = {
      count: payload.count,
      next: payload.next,
      previous: payload.previous
    }
  }
}

const actions = {
  getList({commit}, params={}) {
    api.get(programEndpoints.list, {params: params}).then(resp => {
      commit('receiveMeta', resp.data)
      commit('receiveList', resp.data.results)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getDetail({commit}, id) {
    api.get(programEndpoints.detail(id)).then(resp => {
      commit('receiveDetail', resp.data)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getCreator({commit}, uri) {
    api.get(uri).then(resp => {
      commit('receiveCreator', {user: resp.data})
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getEdit({commit}, id) {
    api.get(programEndpoints.detail(id)).then(resp => {
      commit('receiveEdit', resp.data)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  create({commit}, data) {
    api.post(programEndpoints.list, data).then(resp => {
      commit('receiveNew', resp.data)
      commit('receiveMessage', "Program created!")
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  update({commit}, data) {
    api.put(programEndpoints.detail(data.id), data).then(resp => {
      commit('receiveEdit', resp.data)
      commit('receiveMessage', "Program updated!")
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getRoutines({commit}, {id, params}) {
    let reqParams = Object.assign({}, params, {
      'program': id
    })
    api.get(routineEndpoints.list, {params: reqParams}).then(resp => {
      commit('receiveRoutines', resp.data)
    })
  }
}

const getters = {
  meta: state => state.meta,
  list: state => state.list,
  detail: state => state.detail,
  edit: state => state.edit,
  new: state => state.new,
  errors: state => state.errors,
  messages: state => state.messages,
  creator: state => state.creator,
  routines: state => state.routines,
  routinesMeta: state => state.routinesMeta
}

const programs = {
  state: defaultState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default programs
