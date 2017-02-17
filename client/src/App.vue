<template>
  <div id="main">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <main-header></main-header>
    <div id="main-content">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import bulma from 'bulma'
import MainHeader from '@components/common/MainHeader.vue'
import MainFooter from '@components/common/MainFooter.vue'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  },
  mounted() {
    if(window.sessionStorage.getItem('authToken')) {
      this.$store.dispatch('auth/getAuthUser')
    }
  }
}
</script>

<style>
#main-content {
  min-height: 90vh;
}
</style>
