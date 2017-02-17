import api from '@api'
import {
  programEndpoints, userEndpoints, exerciseEndpoints
} from '@resources/endpoints'

const defaultState = {
  meta: {},
  list: [],
  detail: {},
  detailExerciseMeta: {},
  detailExerciseList: [],
  edit: {},
  new: {},
  errors: [],
  messages: [],
  creator: {}
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
  receiveDetailExerciseMeta(state, obj) {
    state.detailExerciseMeta = obj
  },
  receiveDetailExerciseList(state, objects) {
    state.detailExerciseList = objects
  },
  receiveEdit(state, objects) {
    state.edit = object
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
  receiveCreator(state, obj) {
    state.creator = obj
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
  getDetailExerciseList({commit}, id) {
    api.get(exerciseEndpoints.list, {params: {programs: id}}).then(resp => {
      commit('receiveDetailExerciseMeta', resp.data)
      commit('receiveDetailExerciseList', resp.data.results)
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
  }
}

const getters = {
  meta: state => state.meta,
  list: state => state.list,
  detail: state => state.detail,
  detailExerciseMeta: state => state.detailExerciseMeta,
  detailExerciseList: state => state.detailExerciseList,
  edit: state => state.edit,
  new: state => state.new,
  errors: state => state.errors,
  messages: state => state.messages,
  creator: state => state.creator
}

const programs = {
  state: defaultState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default programs
