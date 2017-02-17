import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@views/HomeView.vue'
import SignUpView from '@views/SignUpView.vue'
import SignInView from '@views/SignInView.vue'
import UserListView from '@views/UserListView.vue'
import UserDetailView from '@views/UserDetailView.vue'
import ExerciseListView from '@views/ExerciseListView.vue'
import ExerciseDetailView from '@views/ExerciseDetailView.vue'
import ExerciseCreateView from '@views/ExerciseCreateView.vue'
import ExerciseEditView from '@views/ExerciseEditView.vue'
import ProgramListView from '@views/ProgramListView.vue'
import ProgramDetailView from '@views/ProgramDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {name: 'index', path: '/', component: HomeView},
  {name: 'sign-in', path: '/sign-in', component: SignInView},
  {name: 'sign-up', path: '/sign-up', component: SignUpView},
  {name: 'user-list', path: '/users', component: UserListView},
  {name: 'user-detail', path: '/users/:id', component: UserDetailView},
  {name: 'exercise-list', path: '/exercises', component: ExerciseListView},
  {name: 'exercise-detail', path: '/exercises/:id', component: ExerciseDetailView},
  {name: 'exercise-create', path: '/exercises/create', component: ExerciseCreateView},
  {name: 'exercise-edit', path: '/exercises/:id/edit', component: ExerciseEditView},
  {name: 'program-list', path: '/programs', component: ProgramListView},
  {name: 'program-detail', path: '/programs/:id', component: ProgramDetailView}
]

const router = new VueRouter({
  routes
})

export default router
