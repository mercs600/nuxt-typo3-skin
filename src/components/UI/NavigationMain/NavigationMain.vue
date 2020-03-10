<template>
  <nav class="nav-main bg-primary">
    <ul class="flex">
      <li v-for="(link, key) in links" :key="key" class="flex-auto">
        <nav-link :to="link.link" class="nav-main__link flex p-8 h-full text-white items-center justify-center"> {{ link.title }} </nav-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavigationMain',
  props: {
    links: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style lang="postcss">
.nav-main {
  &__link:hover, .nuxt-link-active {
    @apply bg-white text-primary
  }
}
</style>
