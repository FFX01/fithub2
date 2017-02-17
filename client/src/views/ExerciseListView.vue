<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">Exercises</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <router-link class="button is-primary"
        :to="{name: 'exercise-create'}"
        v-if="loggedIn"
      >
        <span class="icon">
          <i class="fa fa-plus"></i>
        </span>
        <span>New Exercise</span>
      </router-link>
    </section>
    <section class="section">
      <div class="container">
        <exercise-box v-for="exercise in exercises"
          :exercise="exercise"
        ></exercise-box>
      </div>
    </section>
  </div>
</template>

<script>
import ExerciseBox from '@components/exercise/ExerciseBox.vue'

export default {
  name: 'exercise-list-view',
  components: {
    ExerciseBox
  },
  computed: {
    exercises() {
      return this.$store.getters['exercises/exerciseList']
    },
    loggedIn() {
      return this.$store.getters['auth/loggedIn']
    }
  },
  mounted() {
    this.$store.dispatch('exercises/getExerciseList')
  }
}
</script>
