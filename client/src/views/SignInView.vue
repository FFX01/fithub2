<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title has-text-centered">Sign in to Fithub</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half">
            <sign-in-form
              v-on:submit="handleFormSubmit"
              v-on:cancel="handleFormCancel"
            ></sign-in-form>
            <div v-if="signInErrors.length > 0">
              <p v-for="error in signInErrors">{{error}}</p>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SignInForm from '@components/common/SignInForm.vue'

export default {
  name: 'sign-in-view',
  components: {
    SignInForm
  },
  computed: {
    signInErrors() {
      return this.$store.getters['auth/errors']
    },
    loggedIn() {
      return this.$store.getters['auth/loggedIn']
    }
  },
  watch: {
    loggedIn(status) {
      if(status) {
        this.$router.push({name: 'index'})
      }
    }
  },
  methods: {
    handleFormSubmit(data) {
      this.$store.dispatch('auth/signIn', data)
    },
    handleFormCancel() {
      alert('cancel')
    }
  }
}
</script>
