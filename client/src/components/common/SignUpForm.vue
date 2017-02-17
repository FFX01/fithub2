<template>
  <div class="box">
    <label class="label"
      for="username"
    >Username</label>
    <p class="control has-icon has-icon-right">
      <input class="input"
        type="text"
        id="username"
        name="username"
        v-model="user.username"
        :class="{'is-danger': usernameError}"
      />
      <span class="icon is-small">
        <i class="fa"
          :class="{'fa-warning': usernameError, 'fa-check': !usernameError && user.username !== ''}"
        ></i>
      </span>
    </p>
    <span class="help is-danger"
      v-if="usernameError"
    >
      {{usernameError}}
    </span>
    <label class="label"
      for="email"
    >Email</label>
    <p class="control has-icon has-icon-right">
      <input class="input"
        type="email"
        id="email"
        name="email"
        v-model="user.email"
        :class="{'is-danger': emailError}"
      />
      <span class="icon is-small">
        <i class="fa"
          :class="{'fa-warning': emailError, 'fa-check': !emailError && user.email !== ''}"
        ></i>
      </span>
    </p>
    <span class="help is-danger"
      v-if="emailError"
    >
      {{emailError}}
    </span>
    <label class="label"
      for="password"
    >Password</label>
    <p class="control has-icon has-icon-right">
      <input class="input"
        type="password"
        id="password"
        name="password"
        v-model="user.password"
        :class="{'is-danger': passwordError}"
      />
      <span class="icon is-small">
        <i class="fa"
          :class="{'fa-warning': passwordError, 'fa-check': !passwordError && user.password !== ''}"
        ></i>
      </span>
    </p>
    <span class="help is-danger"
      v-if="passwordError"
    >
      {{passwordError}}
    </span>
    <label class="label"
      for="confirm-password"
    >Confirm Password</label>
    <p class="control has-icon has-icon-right">
      <input class="input"
        type="password"
        id="confirm-password"
        name="confirm-password"
        v-model="confirmPassword"
        :class="{'is-danger': confirmPasswordError}"
      />
      <span class="icon is-small">
        <i class="fa"
          :class="{'fa-warning': confirmPasswordError, 'fa-check': !confirmPasswordError && confirmPassword !== ''}"
        ></i>
      </span>
    </p>
    <span class="help is-danger"
      v-if="confirmPasswordError"
    >
      {{confirmPasswordError}}
    </span>
    <div class="control is-grouped">
      <span class="control">
        <button class="button is-primary"
          :class="{'is-disabled': usernameError || emailError || passwordError || confirmPasswordError}"
          @click="submit"
        >Sign Up</button>
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
import {validateEmail} from '@utils/validators'

export default {
  name: 'sign-up-form',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      confirmPassword: ''
    }
  },
  computed: {
    usernameError() {
      if(this.user.username === '') {
        return null
      }
      if(this.user.username.length < 6) {
        return "Username must be at least 6 characters in length"
      } else {
        return null
      }
    },
    emailError() {
      if(this.user.email === '') {
        return null
      }
      if(!validateEmail(this.user.email)) {
        return "Email address is invalid"
      } else {
        return null
      }
    },
    passwordError() {
      if(this.user.email === '' || this.user.username === '' || this.user.password === '') {
        return null
      }
      if(this.user.password.length < 6) {
        return "Password must be at least 6 characters in length"
      } else {
        return null
      }
    },
    confirmPasswordError() {
      if(this.user.password === '' || this.confirmPassword === '') {
        return null
      }
      if(this.user.password !== this.confirmPassword) {
        return "Passwords do not match"
      } else if(this.confirmPassword.length < 6) {
        return "Password must be at least 6 characters in length"
      } else {
        return null
      }
    }
  },
  methods: {
    submit() {
      if(this.usernameError || this.emailError || this.passwordError || this.confirmPasswordError) {
        return
      }
      this.$emit('submit', this.user)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
