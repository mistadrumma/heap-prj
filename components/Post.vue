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
        {{title}}
      </p>
      <p>{{body}}</p>
    </div>
    <div class="card-image">

      <b-image
        src="https://leonardo.osnova.io/92f6789c-a503-5b47-a918-2301de3c94e3/-/preview/1100/-/format/webp/"
        alt="A random image"
        ratio="6by4"
      ></b-image>
    </div>
    <footer class="card-footer">
      <b-button class="card-header-icon" size="is-small" icon-pack="fas" icon="ellipsis-vertical" />
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
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




}
</script>

<style scoped>

</style>
