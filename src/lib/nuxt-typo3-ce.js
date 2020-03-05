import '../styles/main.css'
import Header from '../components/content/Header'
import Textpic from '../components/content/Textpic'
import Frame from '../components/utilities/Frame'

export default {
  install (Vue) {
    Vue.component('CeFrame', Frame)
    Vue.component('CeHeader', Header)
    Vue.component('CeTextpic', Textpic)
  }
}
