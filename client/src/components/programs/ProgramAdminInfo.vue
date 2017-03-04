<template>
  <section class="section">
    <div class="container">
      <program-edit-form :program="program"></program-edit-form>
    </div>
  </section>
</template>

<script>
import ProgramEditForm from './ProgramEditForm.vue'

export default {
  name: 'program-admin-info',
  props: ['program'],
  components: {
    ProgramEditForm
  }
}
</script>
