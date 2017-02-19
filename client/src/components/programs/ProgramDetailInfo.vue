<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <figure class="image is-128x128">
        <img src="http://placehold.it/128x128" />
      </figure>
    </div>

    <div class="column">
      <h2 class="title">{{program.name}}</h2>
      <span>Created: {{created}} | Updated: {{updated}}</span>
      <br />
      <span>Created by:
      </span>
      <hr></hr>
      <div class="content" v-html="description"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import moment from 'moment'

export default {
  name: 'program-detail-info',
  props: ['program', 'creator'],
  computed: {
    description() {
      return marked(this.program.description || '', {sanitize: true})
    },
    created() {
      return moment(this.program.created).format("MM/DD/YYYY")
    },
    updated() {
      return moment(this.program.updated).format("MM/DD/YYYY")
    }
  }
}
</script>
