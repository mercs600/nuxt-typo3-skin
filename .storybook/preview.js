import Vue from 'vue'
import './preview.css'
import '../src/styles/main.css'

// add nuxt-link mockup
Vue.component('NavLink', {
  functional: true,
  render(h, ctx) {
    return h('a', {
      ...ctx.data,
      attrs: {
        href: ctx.props.to,
        ...ctx.data.attrs
      }
    }, ctx.children)
  }
})
