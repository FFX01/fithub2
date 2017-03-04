<template>
  <div>
    <section class="section">
      <div class="container">
        <program-detail-info
          :program="program"
          :creator="creator"
        ></program-detail-info>
      </div>
    </section>
  </div>
</template>

<script>
import ProgramDetailInfo from '@components/programs/ProgramDetailInfo.vue'

export default {
  name: 'program-detail-view',
  components: {
    ProgramDetailInfo
  },
  computed: {
    program() {
      return this.$store.getters['programs/detail']
    },
    creator() {
      return this.$store.getters['programs/creator']
    }
  },
  methods: {
    getProgramDetail() {
      this.$store.dispatch('programs/getDetail', this.$route.params.id)
    },
    getCreator() {
      this.$store.dispatch('programs/getCreator', this.program.creator)
    }
  },
  mounted() {
    this.getProgramDetail()
  },
  updated() {
    if(this.creator.id === 0) {
      this.getCreator()
    }
  }
}
</script>
