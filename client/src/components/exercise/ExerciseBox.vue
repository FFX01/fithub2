<template>
  <div class="box">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://placehold.it/64x64" />
        </p>
      </figure>
      <div class="media-content">
        <h3 class="title">
          <router-link :to="{name: 'exercise-detail', params: {id: exercise.id}}">
            {{exercise.name}}
          </router-link>
        </h3>
        <div class="content" v-html="description"></div>
        <nav class="level">
          <div class="level-left">
            <router-link class="level-item is-inline-mobile"
              v-if="exercise.permissions.write"
              :to="{name: 'exercise-edit', params: {id: exercise.id}}"
              title="Edit this exercise"
            >
              <span class="icon is-small">
                <i class="fa fa-pencil"></i>
              </span>
            </router-link>
            <a class="level-item is-inline-mobile"
              v-if="loggedIn && !exercise.permissions.write"
              title="Fork this exercise"
            >
              <span class="icon is-small">
                <i class="fa fa-code-fork"></i>
              </span>
            </a>
            <a class="level-item is-inline-mobile"
              v-if="loggedIn"
              title="Add this exercise to a program"
            >
              <span class="icon is-small">
                <i class="fa fa-plus"></i>
              </span>
            </a>
            <a class="level-item is-inline-mobile"
              v-if="loggedIn"
              title="Add this exercise to favorites"
            >
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'exercise-box',
  props: ['exercise'],
  computed: {
    description() {
      return marked(this. exercise.description || '', {sanitize: true})
    },
    loggedIn() {
      return this.$store.getters['auth/loggedIn']
    }
  }
}
</script>
