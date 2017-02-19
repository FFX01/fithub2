<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <figure class="image is-128x128">
        <img src="http://placehold.it/128x128" />
      </figure>
    </div>
    <div class="column">
      <h2 class="title">{{program.name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'program-detail-info',
  props: ['program']
}
</script>
