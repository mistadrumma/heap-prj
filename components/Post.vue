<template>
  <div class="card mb-5" >
    <header class="card-header">
      <figure class="image is-24x24 mt-3 ml-3">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
      <p class="card-header-title">
        Маркетинг
        <span class="subtitle is-6 pl-1">RobberNoetic</span>
      </p>
      <button class="card-header-icon" aria-label="more options">
        <b-icon
          pack="fas"
          icon="ellipsis-vertical"
          size="is-small">
        </b-icon>
      </button>
    </header>
    <div class="card-content">
      <p class="title is-4 mb-3" >
        <a class="has-text-dark" @click.prevent="openPost(id)">
        {{title}}
        </a>
      </p>
      <p>{
        <a class="has-text-dark" @click.prevent="openPost(id)">
          {{body}}
        </a>
      </p>
    </div>
    <div class="card-image">
      <a class="has-text-dark" @click.prevent="openPost(id)">
        <b-image
          src="https://leonardo.osnova.io/92f6789c-a503-5b47-a918-2301de3c94e3/-/preview/1100/-/format/webp/"
          alt="A random image"
          ratio="6by4"
        ></b-image>
      </a>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <b-icon
          pack="fas"
          icon="comment"
          custom-class="fa-regular"
          size="is-medium">
        </b-icon>
        <span class="ml-2">15</span>
      </div>
      <div class="card-footer-item">
        <fa :icon="['fas', 'comment']" />
        <span class="ml-2">15</span>
      </div>

    </footer>

  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  methods: {
    openPost(id) {
      this.$router.push('/posts/' + id)
    }
  },




}
</script>

<style scoped>

</style>
