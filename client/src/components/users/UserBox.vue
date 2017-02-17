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
          <router-link :to="{name: 'user-detail', params: {id: user.id}}">
            {{user.username}}
          </router-link>
        </h3>
        <div class="content" v-html="bio"></div>
        <nav class="level">
          <div class="level-left">
            <a class="level-item is-inline-mobile"
              title="Follow this user"
              v-if="!user.permissions.write"
            >
              <span class="icon is-small">
                <i class="fa fa-group"></i>
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
  name: 'user-box',
  props: ['user'],
  computed: {
    bio() {
      return marked(this.user.bio || '', {sanitize: true})
    }
  }
}
</script>
