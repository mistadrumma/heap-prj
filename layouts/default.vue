<template>
  <section>
    <Navbar />

    <section class="main-content columns">
<!--      <aside class="column is-2 section">-->
<!--        <p class="menu-label is-hidden-touch">-->
<!--          General-->
<!--        </p>-->
<!--        <ul class="menu-list">-->
<!--          <li-->
<!--            v-for="(item, key) of items"-->
<!--            :key="key"-->
<!--          >-->
<!--            <NuxtLink-->
<!--              :to="item.to"-->
<!--              exact-active-class="is-active"-->
<!--            >-->
<!--              <b-icon :icon="item.icon" /> {{ item.title }}-->
<!--            </NuxtLink>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </aside>-->

      <div class="container column is-half">
        <Nuxt />
      </div>

    </section>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {Navbar},
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
