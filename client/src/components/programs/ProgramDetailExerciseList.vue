<template>
  <section class="section">
    <div class="container">
      <exercise-box v-for="exercise in exercises"
        :exercise="exercise"
      ></exercise-box>
    </div>
  </section>
</template>

<script>
import ExerciseBox from '@components/exercise/ExerciseBox.vue'

export default {
  name: 'program-detail-exercise-list',
  components: {
    ExerciseBox
  },
  props: ['exercises']
}
</script>
