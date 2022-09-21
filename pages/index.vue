<template>
  <section class="section">
<!--<Postlist :posts="posts">-->

<!--</Postlist>-->
<!--<div v-for="post in posts" :key="post.id">-->
<!--  <Post :title="post.title" :body="post.body"></Post>-->

<!--</div>-->
    <h1>This is index</h1>
  </section>
</template>

<script>


import Post from "~/components/Post";

export default {

  name: 'HomePage',
  created() {
    this.$router.replace({path: '/posts'})
  }
}
</script>
