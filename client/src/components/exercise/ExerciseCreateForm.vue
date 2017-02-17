<template>
  <div class="box">
    <label class="label">Name</label>
    <p class="control">
      <input class="input"
        type="text"
        placeholder="Name of the exercise..."
        v-model="exercise.name"
      />
    </p>
    <label class="label">Descripton</label>
    <p class="control">
      <textarea class="textarea"
        placeholder="Describe the exercise here..."
        v-model="exercise.description"
      ></textarea>
      <span class="help">Markdown supported</span>
    </p>
    <label class="label">Instructions</label>
    <p class="control">
      <textarea class="textarea"
        placeholder="Explain how to perform the exercise here..."
        v-model="exercise.instructions"
      ></textarea>
      <span class="help">Markdown supported</span>
    </p>
    <div class="control is-grouped">
      <span class="control">
        <button class="button is-primary"
          @click="submit"
        >Create</button>
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
  name: 'exercise-create-form',
  data() {
    return {
      exercise: {
        name: '',
        description: '',
        instructions: ''
      }
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.exercise)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
