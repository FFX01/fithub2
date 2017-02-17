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
          <router-link :to="{name: 'program-detail', params: {id: program.id}}">
            {{program.name}}
          </router-link>
        </h3>
        <div class="content" v-html="description"></div>
      </div>
    </article>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'program-box',
  props: ['program'],
  computed: {
    description() {
      return marked(this.program.description || '', {sanitize: true})
    }
  }
}
</script>
