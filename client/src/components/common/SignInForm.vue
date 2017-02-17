<template>
  <div class="box">
    <form onSubmit="submit">
      <label class="label">Username</label>
      <p class="control">
        <input class="input"
          type="text"
          v-model="user.username"
        />
      </p>
      <label class="label">Password</label>
      <p class="control">
        <input class="input"
          type="password"
          v-model="user.password"
        />
      </p>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary"
            @click="submit"
          >Sign In</button>
        </p>
        <p class="control">
          <button class="button is-link"
            @click="cancel"
          >Cancel</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'sign-in-form',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.user)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
