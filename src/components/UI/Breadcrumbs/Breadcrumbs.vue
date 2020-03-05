<template>
  <ul class="breadcrumbs py-4">
    <li v-for="(level, key) in links" :key="key" class="inline-block">
      <template>
        <component :is="level.current ? 'span' : 'nav-link'" :to="!level.current ? level.link : false">
          {{ level.title }}
        </component>
        <span class="inline-block mx-4" v-if="!level.current"> {{ spacer }} </span>
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  props: {
    /* array of breadcrumbs links */
    links: {
      type: Array,
      required: true,
      default: () => []
    },
    /* breadcrumbs spacer */
    spacer: {
      type: [String],
      required: false,
      default: '/'
    }
  }
}
</script>
<style>

</style>
