<template>
  <section class="section">
    <div v-for="post in posts" :key="post.id">
      <Post :id="post.id" :title="post.title" :body="post.body" ></Post>

    </div>
  </section>
</template>

<script>
import Post from "~/components/Post";

export default {
  name: "index",
  components: {
    Post
  },
  async fetch({store}){
    await store.dispatch('posts/fetch')
  },
  data: () => ({
  }),
  computed: {
    posts(){
      return this.$store.getters['posts/posts']
    }
  },
}
</script>

<style scoped>

</style>
