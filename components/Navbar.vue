<template>
  <b-navbar type="is-white">
    <template #brand>

      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://bulma.io/images/bulma-logo.png" width="112" height="28"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item v-for="(item, key) of menuItems"  tag="router-link" :key="key" :to="item.to">
        <b-icon
          pack="fas"
          :icon="item.icon"
          size="is-small">
        </b-icon>
        <span class="ml-2">{{ item.title }}</span>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      menuItems: [
        {
          title: 'Горячее',
          icon: 'fire',
          to: { name: 'index' }
        },
        {
          title: 'Новое',
          icon: 'clock',
          to: { name: 'new' }
        },
        {
          title: 'Сообщества',
          icon: 'list',
          to: { name: 'subheap' }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
