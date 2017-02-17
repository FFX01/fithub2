import api from '@api'
import {
  exerciseEndpoints, userEndpoints
} from '@resources/endpoints'

const defaultState = {
  meta: {},
  exerciseList: [],
  newExercise: {},
  editExercise: {},
  detailExercise: {},
  detailCreator: {},
  errors: [],
  messages: []
}

const mutations = {
  receiveMeta(state, meta) {
    state.meta = meta
  },
  receiveList(state, list) {
    state.exerciseList = list
  },
  receiveEditExercise(state, exercise) {
    state.editExercise = exercise
  },
  receiveDetailExercise(state, exercise) {
    state.detailExercise = exercise
  },
  receiveNewExercise(state, exercise) {
    state.newExercise = exercise
  },
  receiveError(state, error) {
    state.errors.push(error)
  },
  receiveDetailCreator(state, creator) {
    state.detailCreator = creator
  },
  clearErrors(state) {
    state.errors = []
  },
  receiveMessage(state, msg) {
    state.messages.push(msg)
  }
}

const actions = {
  getExerciseList({commit}) {
    api.get(exerciseEndpoints.list).then(resp => {
      commit('receiveMeta', {
        count: resp.data.count,
        previous: resp.data.previous,
        next: resp.data.next
      })
      commit('receiveList', resp.data.results)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getDetail({commit, dispatch}, id) {
    api.get(exerciseEndpoints.detail(id)).then(resp => {
      commit('receiveDetailExercise', resp.data)
      dispatch('getDetailCreator', resp.data.creator)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getEdit({commit}, id) {
    api.get(exerciseEndpoints.detail(id)).then(resp => {
      commit('receiveEditExercise', resp.data)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  getDetailCreator({commit}, path) {
    api.get(path).then(resp => {
      commit('receiveDetailCreator', resp.data)
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  create({commit, rootGetters}, data) {
    let postData = Object.assign({}, data, {
      creator: userEndpoints.detail(rootGetters['auth/authUser'].id)
    })
    api.post(exerciseEndpoints.list, postData).then(resp => {
      commit('receiveNewExercise', resp.data)
      commit('receiveMessage', "Create success")
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  },
  update({commit}, data) {
    api.put(exerciseEndpoints.detail(data.id), data).then(resp => {
      commit('receiveMessage', "Exercise updated!")
    }).catch(err => {
      console.log(err)
      commit('receiveError', err.message)
    })
  }
}

const getters = {
  meta: state => (state.meta),
  exerciseList: state => (state.exerciseList),
  detailExercise: state => state.detailExercise,
  newExercise: state => state.newExercise,
  detailCreator: state => state.detailCreator,
  editExercise: state => state.editExercise
}

const exercises = {
  state: defaultState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default exercises
