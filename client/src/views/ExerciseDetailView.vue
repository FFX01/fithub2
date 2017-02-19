<template>
  <div>
    <exercise-detail-info v-if="exercise.id && creator.id"
      :exercise="exercise"
      :creator="creator"
    ></exercise-detail-info>
  </div>
</template>

<script>
import ExerciseDetailInfo from '@components/exercise/ExerciseDetailInfo.vue'

export default {
  name: 'exercise-detail-view',
  components: {
    ExerciseDetailInfo
  },
  computed: {
    exercise() {
      return this.$store.getters['exercises/detailExercise']
    },
    creator() {
      return this.$store.getters['exercises/detailCreator']
    }
  },
  mounted() {
    this.$store.dispatch('exercises/getDetail', this.$route.params.id)
  }
}
</script>
