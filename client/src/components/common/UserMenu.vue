<template>
  <div class="box">
    <div class="menu">
      <ul class="menu-list">
        <li @click="close">
          <router-link :to="{name: 'user-detail', params: {id: user.id}}">
            Profile
          </router-link>
        </li>
        <li @click="close"><a>Settings</a></li>
        <li><a @click="signOut">Sign Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-menu',
  computed: {
    user() {
      return this.$store.getters['auth/authUser']
    }
  },
  methods: {
    signOut(){
      this.$store.dispatch('auth/signOut').then(() => {
        this.$router.push({name: 'index'})
      })
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
div.box {
  position: absolute;
  z-index: 1000;
  right: 0;
}
</style>
