<template>
  <div class="wrapper">
    <header-main>
      <template v-slot:before>
        <language-switcher
          :active="currentLanguage"
          :languages="availableLanguages"
          class="container flex justify-end"
        />
      </template>
      <template v-slot:logo>
        <nuxt-link :to="navMain.link" class="flex h-full items-center">
          <logo />
        </nuxt-link>
      </template>
      <template v-slot:navigation>
        <navigation-main :links="navMain.children" />
      </template>
    </header-main>
    <div class="section-main">
      <div v-if="breadcrumbs" class="border-b mb-20px">
        <breadcrumbs :links="breadcrumbs" class="container" />
      </div>
      <nuxt />
    </div>
    <footer-main>
      <template v-slot:credits>
        <nuxt-link :to="navMain.link" class="flex h-full items-center">
          <logo />
        </nuxt-link>
      </template>
    </footer-main>
  </div>
</template>
<script>
import {
  NavigationMain,
  Logo,
  HeaderMain,
  FooterMain,
  Breadcrumbs,
  LanguageSwitcher
} from 'nuxt-typo3-skin/components'
import { mapState } from 'vuex'
export default {
  components: {
    NavigationMain,
    HeaderMain,
    FooterMain,
    Logo,
    Breadcrumbs,
    LanguageSwitcher
  },
  computed: {
    ...mapState({
      navMain: (state) => state.typo3.initial.navigation[0] || [], // get first instance from root tree,
      breadcrumbs: (state) => state.typo3.page.page ? state.typo3.page.page.breadcrumbs : [], // get breadcrumbs for current page,
      currentLanguage: (state) => state.typo3.locale,
      availableLanguages: (state) => state.typo3.page.languages
    })
  }
}
</script>
