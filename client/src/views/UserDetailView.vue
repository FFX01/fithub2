<template>
  <div>
    <user-detail-info v-if="user"
      :user="user"
    ></user-detail-info>
    <user-detail-exercise-list v-if="exercises"
      :exercises="exercises"
    ></user-detail-exercise-list>
  </div>
</template>

<script>
import UserDetailInfo from '@components/users/UserDetailInfo.vue'
import UserDetailExerciseList from '@components/users/UserDetailExerciseList.vue'

export default {
  name: 'user-detail-view',
  components: {
    UserDetailInfo,
    UserDetailExerciseList
  },
  computed: {
    user() {
      return this.$store.getters['users/detailUser']
    },
    exercises() {
      return this.$store.getters['users/createdExercises']
    }
  },
  mounted() {
    this.$store.dispatch('users/getDetail', this.$route.params.id)
    this.$store.dispatch('users/getCreatedExercises', this.$route.params.id)
  }
}
</script>
