<template>
</template>

<script>
export default {
  name: 'program-detail-view',
  computed: {
    program() {
      return this.$store.getters['programs/detail']
    },
    exerciseMeta() {
      return this.$store.getters['programs/detailExerciseMeta']
    },
    exercises() {
      return this.$store.getters['programs/detailExerciseList']
    }
  },
  methods: {
    getProgramDetail() {
      this.$store.dispatch('programs/getDetail', this.$route.params.id)
    },
    getExerciseList() {
      this.$store.dispatch('programs/getDetailExerciseList', this.$route.params.id)
    }
  },
  mounted() {
    this.getProgramDetail()
    this.getExerciseList()
  }
}
</script>
