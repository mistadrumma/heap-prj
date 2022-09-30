export const state = () => ({
  posts: [],
  post: []
})

export const mutations = {
  setPosts(state, posts){
    state.posts = posts
  },
  setPost(state,post) {
    state.post = post
  }
}

export const actions = {
  async fetch({ commit }) {
    const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
    commit('setPosts', posts)
  },
  async fetchPost({ commit }, id) {
    const post = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/'+ id)
    commit('setPost', post)
  },

}

export const getters = {
  posts: s => s.posts,
  post: s => s.post
}

