<template>
  <section class="section">
    <Postlist :posts="posts">

    </Postlist>
    <!--<div v-for="post in posts" :key="post.id">-->
    <!--  <Post :title="post.title" :body="post.body"></Post>-->

    <!--</div>-->
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
