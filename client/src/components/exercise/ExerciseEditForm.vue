<template>
  <div class="box">
    <label class="label">Name</label>
    <p class="control">
      <input class="input"
        type="text"
        placeholder="Exercise name..."
        v-model="exerciseData.name"
      />
    </p>
    <label class="label">Description</label>
    <p class="control">
      <textarea class="textarea"
        placeholder="Describe the exercise..."
        v-model="exerciseData.description"
      ></textarea>
    </p>
    <label class="label">Instructions</label>
    <p class="control">
      <textarea class="textarea"
        placeholder="How to do the exercise..."
        v-model="exerciseData.instructions"
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
      exerciseData: Object.assign({}, this.exercise || {})
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.exerciseData)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
