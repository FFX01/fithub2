<template>
  <div class="box">
    <label class="label">Name</label>
    <p class="control">
      <input class="input"
        type="text"
        placeholder="Exercise name..."
        v-model="editExercise.name"
      />
    </p>
    <label class="label">Description</label>
    <p class="control">
      <textarea class="textarea"
        placeholder="Describe the exercise..."
        v-model="editExercise.description"
      ></textarea>
    </p>
    <label class="label">Instructions</label>
    <p class="control">
      <textarea class="textarea"
        placeholder="How to do the exercise..."
        v-model="editExercise.instructions"
      ></textarea>
    </p>
    <div class="control is-grouped">
      <span class="control">
        <button class="button is-primary"
          @click="submit"
        >Save</button>
      </span>
      <span class="control">
        <button class="button is-link"
          @click="cancel"
        >Cancel</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exercise-edit-form',
  props: ['exercise'],
  data() {
    return {
      editExercise: {}
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.editExercise)
    },
    cancel() {
      this.$emit('cancel')
    },
    updateState() {
      this.editExercise = Object.assign({}, this.editExercise, this.exercise)
    }
  },
  watch: {
    exercise(newData) {
      this.updateState()
    }
  },
  mounted() {
    this.updateState()
  }
}
</script>
