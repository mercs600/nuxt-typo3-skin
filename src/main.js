import Vue from 'vue'
import App from './App.vue'
import NuxtTypo3Ce from './lib/nuxt-typo3-ce'
Vue.config.productionTip = false
Vue.use(NuxtTypo3Ce)
new Vue({
  render: h => h(App)
}).$mount('#app')
