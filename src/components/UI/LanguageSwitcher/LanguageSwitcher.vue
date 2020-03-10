<template>
  <div>
    <ul class="lang-switcher flex">
      <li v-for="(locale, index) in languages" :key="index">
        <nuxt-link :to="locale.link" class="text-secondary" :class="{'font-bold': locale.twoLetterIsoCode === active}">{{ locale.twoLetterIsoCode }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LanguageSwitcher',
  props: {
    active: {
      type: String,
      required: true,
      default: 'EN'
    },
    languages: {
      type: Array,
      required: true,
      default: () => []
    }

  }
}
</script>
