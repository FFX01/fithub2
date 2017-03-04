<template>
  <div class="box">
    <section class="section">
      <h3 class="title is-3">Edit Program</h3>
    </section>
    <section class="section">
      <label class="label">Name</label>
      <p class="control">
        <input class="input"
          type="text"
          v-model="data.name"
        />
      </p>
      <label class="label">Description</label>
      <p class="control">
        <textarea class="textarea"
          v-model="data.description"
        ></textarea>
      </p>
      <div class="control is-grouped">
        <p class="control">
          <a class="button is-primary">Save</a>
        </p>
        <p class="control">
          <a class="button is-link">Cancel</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'program-edit-form',
  props: ['program'],
  data() {
    return {
      data: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    assignToData() {
      this.data = Object.assign({}, this.program)
    }
  },
  watch: {
    program(newData) {
      this.assignToData()
    }
  },
  mounted() {
    this.assignToData()
  }
}
</script>
