<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title has-text-centered">Sign Up for Fithub</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half">
            <sign-up-form
              v-on:submit="handleSignUpSubmit"
              v-on:cancel="handleSignUpCancel"
            ></sign-up-form>
            <div class="notification is-danger"
              v-for="err in errors"
            >
              {{err}}
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SignUpForm from '@components/common/SignUpForm.vue'

export default {
  name: 'sign-up-view',
  components: {
    SignUpForm
  },
  computed: {
    authUser() {
      return this.$store.getters['auth/authUser']
    },
    errors() {
      return this.$store.getters['auth/errors']
    }
  },
  watch: {
    authUser(data) {
      if(data.id) {
        this.$router.push({name: 'sign-in'})
      }
    }
  },
  methods: {
    handleSignUpSubmit(data) {
      this.$store.dispatch('auth/signUp', data)
    },
    handleSignUpCancel() {
      alert('cancel')
    }
  }
}
</script>
