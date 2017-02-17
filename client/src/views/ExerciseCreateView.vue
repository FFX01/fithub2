<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">New Exercise</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-quarters">
            <exercise-create-form
              v-on:submit="handleSubmit"
              v-on:cancel="handleCancel"
            ></exercise-create-form>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ExerciseCreateForm from '@components/exercise/ExerciseCreateForm.vue'

export default {
  name: 'exercise-create-view',
  components: {
    ExerciseCreateForm
  },
  computed: {
    newExercise() {
      return this.$store.getters['exercises/newExercise']
    }
  },
  watch: {
    newExercise(data) {
      if(data.id) {
        this.$router.push({name: 'exercise-detail', params: {id: data.id}})
      }
    }
  },
  methods: {
    handleSubmit(data) {
      this.$store.dispatch('exercises/create', data)
    },
    handleCancel() {
      this.$router.push({name: 'exercise-list'})
    }
  }
}
</script>
