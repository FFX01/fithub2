<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <figure class="image is-128x128">
            <img src="http://placehold.it/128x128" />
          </figure>
        </div>
        <div class="column">
          <h2 class="title">{{exercise.name}}</h2>
          <h3 class="subtitle">Created by:
            <router-link :to="{name: 'user-detail', params: {id: creator.id}}">
              {{creator.username}}
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  name: 'exercise-detail-info',
  props: ['exercise', 'creator'],
  computed: {
    description() {
      return marked(this.exercise.description || '', {sanitize: true})
    }
  }
}
</script>
