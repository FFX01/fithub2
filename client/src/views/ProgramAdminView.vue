<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a @click="onSectionChange('info')">Information</a></li>
            <li><a @click="onSectionChange('routines')">Routines</a></li>
          </ul>
          <p class="menu-label">Media</p>
          <ul class="menu-list">
            <li><a @click="onSectionChange('avatar')">Avatar</a></li>
            <li><a @click="onSectionChange('photos')">Photos</a></li>
            <li><a @click="onSectionChange('videos')">Videos</a></li>
          </ul>
          <p class="menu-label">Security</p>
          <ul class="menu-list">
            <li><a @click="onSectionChange('contributors')">Contributors</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <article v-if="currentSection === 'info'">
          Info
        </article>
        <article v-if="currentSection === 'routines'">
          Routines
        </article>
        <article v-if="currentSection === 'avatar'">
          Avatar
        </article>
        <article v-if="currentSection === 'photos'">
          Photos
        </article>
        <article v-if="currentSection === 'videos'">
          Videos
        </article>
        <article v-if="currentSection === 'contributors'">
          Contributors
        </article>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'program-admin-view',
  data() {
    return {
      currentSection: 'info'
    }
  },
  computed: {
    program() {
      return this.$store.getters['programs/detail']
    },
    exercises() {
      return this.$store.getters['programs/detailExerciseList']
    }
  },
  methods: {
    getProgram() {
      this.$store.dispatch('programs/getDetail', this.$route.params.id)
    },
    getExercises() {
      this.$store.dispatch('programs/getDetailExerciseList', this.$route.params.id)
    },
    onSectionChange(section) {
      this.currentSection = section
    }
  },
  mounted() {
    this.getProgram()
    this.getExercises()
  }
}
</script>
