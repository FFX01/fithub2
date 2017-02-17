<template>
    <section class="hero is-dark is-bold is-large">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">Welcome to Fithub!</h1>
              <h2 class="subtitle">Open Source fitness at your fingertips</h2>
            </div>
            <div class="column">
              <p class="image is-square">
                <img src="https://placehold.it/460x460" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import MainHeader from '@components/common/MainHeader.vue'

export default {
  name: 'home-view',
  components: {
    MainHeader
  }
}
</script>
