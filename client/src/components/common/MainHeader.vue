<template>
<div>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <router-link :to="{name: 'index'}" class="nav-item">
        <h1 class="title">Fithub</h1>
      </router-link>
    </div>
    <span class="nav-toggle"
      :class="{'is-active': showMobileMenu}"
      @click="toggleMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu"
      :class="{'is-active': showMobileMenu}"
    >
      <router-link :to="{name: 'user-list'}" class="nav-item">
        Users
      </router-link>
      <router-link :to="{name: 'exercise-list'}" class="nav-item">
        Exercises
      </router-link>
      <router-link :to="{name: 'program-list'}" class="nav-item">
        Programs
      </router-link>
      <span class="nav-item" v-if="!userIsLoggedIn">
        <router-link :to="{name: 'sign-up'}" class="button is-primary">
          <span class="icon">
            <i class="fa fa-user-plus"></i>
          </span>
          <span>Sign Up</span>
        </router-link>
        <router-link :to="{name: 'sign-in'}" class="button">
          <span class="icon">
            <i class="fa fa-sign-in"></i>
          </span>
          <span>Sign In</span>
        </router-link>
      </span>
      <span class="nav-item is-hidden-mobile" v-if="userIsLoggedIn">
        <a @click="toggleUserMenu">
          <span class="icon is-medium">
            <i class="fa fa-user"></i>
          </span>
        </a>
      </span>
    </div>
  </nav>
  <user-menu v-if="showUserMenu && userIsLoggedIn"
    v-on:close="toggleUserMenu"
  ></user-menu>
</div>
</template>

<script>
import UserMenu from './UserMenu.vue'

export default {
  name: 'main-header',
  components: {
    UserMenu
  },
  data() {
    return {
      showMobileMenu: false,
      showUserMenu: false
    }
  },
  computed: {
    userIsLoggedIn() {
      return this.$store.getters['auth/loggedIn']
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu
    }
  }
}
</script>
