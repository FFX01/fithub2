<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <figure class="image is-128x128">
            <img src="https://placehold.it/128x128" />
          </figure>
        </div>
        <div class="column">
          <h2 class="title">{{user.username}}</h2>
          <h5 class="subtitle">Member since: {{dateJoined}}</h5>
          <hr></hr>
          <div class="content" v-if="bio" v-html="bio"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import moment from 'moment'

export default {
  name: 'user-detail-info',
  props: ['user'],
  computed: {
    bio() {
      return marked(this.user.bio || '', {sanitize: true})
    },
    dateJoined() {
      return moment(this.user.date_joined || '').format('YYYY/MM/DD')
    }
  }
}
</script>
