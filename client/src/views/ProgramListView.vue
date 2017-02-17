<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">Programs</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <program-box v-for="program in programList"
          :program="program"
        ></program-box>
      </div>
    </section>
  </div>
</template>

<script>
import ProgramBox from '@components/programs/ProgramBox.vue'

export default {
  name: 'program-list-view',
  components: {
    ProgramBox
  },
  computed: {
    programList() {
      return this.$store.getters['programs/list']
    },
    exerciseMeta() {
      return this.$store.getters['programs/detailExerciseMeta']
    },
    exerciseList() {
      return this.$store.getters['programs/detailExerciseList']
    }
  },
  methods: {
    getProgramList() {
      this.$store.dispatch('programs/getList').then(console.log(this.programList))
    }
  },
  mounted() {
    this.getProgramList()
  }
}
</script>
