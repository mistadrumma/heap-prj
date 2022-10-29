<template>
<section>
  <h1 class="is-size-3">This post page {{post.id}}</h1>
  <p>{{post.title}}</p>
</section>
</template>
<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async fetch({store, params}){
    await store.dispatch('posts/fetchPost', params.id)
  },
  computed: {
    post() {
      return this.$store.getters['posts/post']
    }
  }
}
</script>

<style scoped>
/*напиши стили для компонента*/


</style>
