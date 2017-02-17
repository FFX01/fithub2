<template>
  <div>
    <section class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">Users</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <user-box v-for="user in users"
          :user="user"
        ></user-box>
      </div>
    <section class="section">
  </div>
</template>

<script>
import UserBox from '@components/users/UserBox.vue'

export default {
  name: 'user-list-view',
  components: {
    UserBox
  },
  computed: {
    users() {
      return this.$store.getters['users/userList']
    }
  },
  mounted() {
    this.$store.dispatch('users/getList')
  }
}
</script>
