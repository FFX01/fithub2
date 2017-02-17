<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">Edit Exercise</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-quarters">
            <exercise-edit-form :exercise="exercise"
              v-on:submit="handleFormSubmit"
              v-on:cancel="handleCancel"
            ></exercise-edit-form>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ExerciseEditForm from '@components/exercise/ExerciseEditForm.vue'

export default {
  name: 'exercise-edit-view',
  components: {
    ExerciseEditForm
  },
  computed: {
    exerciseId() {
      return this.$route.params.id
    },
    exercise() {
      return this.$store.getters['exercises/editExercise']
    }
  },
  methods: {
    getExercise() {
      this.$store.dispatch('exercises/getEdit', this.exerciseId)
    },
    handleFormSubmit(data) {
      this.$store.dispatch('exercises/update', data).then(() => {
        this.$router.push({
          name: 'exercise-detail',
          params: {id: data.id}
        })
      })
    },
    handleCancel() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getExercise()
  }
}
</script>
