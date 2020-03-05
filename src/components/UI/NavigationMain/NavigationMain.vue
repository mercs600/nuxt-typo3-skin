<template>
  <nav class="nav-main bg-primary">
    <ul class="flex">
      <li v-for="(link, key) in links" :key="key" class="flex-auto">
        <nav-link :to="link.link" class="nav-main__link flex p-8 text-white justify-center"> {{ link.title }} </nav-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import NavLink from 'nuxt-typo3/lib/templates/components/utilities/NavLink.vue'
export default {
  name: 'NavigationMain',
  components: {
    NavLink
  },
  props: {
    links: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style>
.nav-main {
  &__link:hover, .nuxt-link-active {
    @apply bg-white text-primary
  }
}
</style>
