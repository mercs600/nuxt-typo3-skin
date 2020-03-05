import Logo from './Logo'

export default {
  title: 'UI',
  component: 'Logo'
}

export const LogoStory = () => ({
  components: { Logo },
  template: `
  <div>
    <Logo/>
  </div>
  `
})
