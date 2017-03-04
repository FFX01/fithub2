<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li>
              <a @click="onSectionChange('info')"
                :class="{'is-active': currentSection === 'info'}"
              >Information</a>
            </li>
            <li>
              <a @click="onSectionChange('routines')"
                :class="{'is-active': currentSection === 'routines'}"
              >Routines</a>
              <ul v-if="currentSection === 'routines'">
                <li v-for="routine in routines"><a>{{routine.name}}</a></li>
              </ul>
            </li>
          </ul>
          <p class="menu-label">Media</p>
          <ul class="menu-list">
            <li>
              <a @click="onSectionChange('avatar')"
                :class="{'is-active': currentSection === 'avatar'}"
              >Avatar</a>
            </li>
            <li>
              <a @click="onSectionChange('photos')"
                :class="{'is-active': currentSection === 'photos'}"
              >Photos</a>
            </li>
            <li>
              <a @click="onSectionChange('videos')"
                :class="{'is-active': currentSection === 'videos'}"
              >Videos</a>
            </li>
          </ul>
          <p class="menu-label">Security</p>
          <ul class="menu-list">
            <li>
              <a @click="onSectionChange('contributors')"
                :class="{'is-active': currentSection === 'contributors'}"
              >Contributors</a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <article v-if="currentSection === 'info'">
          <program-admin-info :program="program"></program-admin-info>
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
import ProgramAdminInfo from '@components/programs/ProgramAdminInfo.vue'

export default {
  name: 'program-admin-view',
  components: {
    ProgramAdminInfo
  },
  data() {
    return {
      currentSection: 'info'
    }
  },
  computed: {
    program() {
      return this.$store.getters['programs/edit']
    },
    routines() {
      return this.$store.getters['programs/routines']
    },
    routinesMeta() {
      return this.$store.getters['programs/routinesMeta']
    }
  },
  methods: {
    getProgram() {
      this.$store.dispatch('programs/getEdit', this.$route.params.id)
    },
    getRoutines() {
      this.$store.dispatch('programs/getRoutines', {id: this.$route.params.id, params: {}})
    },
    onSectionChange(section) {
      this.currentSection = section
    }
  },
  mounted() {
    this.getProgram()
    this.getRoutines()
  }
}
</script>
