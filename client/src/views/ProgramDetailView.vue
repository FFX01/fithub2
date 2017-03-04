<template>
  <div>
    <section class="section">
      <div class="container">
        <program-detail-info
          :program="program"
          :creator="creator"
        ></program-detail-info>
      </div>
      <program-detail-exercise-list :exercises="exercises"></program-detail-exercise-list>
    </section>
  </div>
</template>

<script>
import ProgramDetailInfo from '@components/programs/ProgramDetailInfo.vue'
import ProgramDetailExerciseList from '@components/programs/ProgramDetailExerciseList.vue'

export default {
  name: 'program-detail-view',
  components: {
    ProgramDetailInfo,
    ProgramDetailExerciseList
  },
  computed: {
    program() {
      return this.$store.getters['programs/detail']
    },
    exerciseMeta() {
      return this.$store.getters['programs/detailExerciseMeta']
    },
    exercises() {
      return this.$store.getters['programs/detailExerciseList']
    },
    creator() {
      return this.$store.getters['programs/creator']
    }
  },
  methods: {
    getProgramDetail() {
      this.$store.dispatch('programs/getDetail', this.$route.params.id)
    },
    getExerciseList() {
      this.$store.dispatch('programs/getDetailExerciseList', this.$route.params.id)
    },
    getCreator() {
      this.$store.dispatch('programs/getCreator', this.program.creator)
    }
  },
  mounted() {
    this.getProgramDetail()
    this.getExerciseList()
  },
  updated() {
    if(this.creator.id === 0) {
      this.getCreator()
    }
  }
}
</script>
