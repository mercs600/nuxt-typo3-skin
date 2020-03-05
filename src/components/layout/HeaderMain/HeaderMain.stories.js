import { withKnobs, object } from '@storybook/addon-knobs'
import HeaderMain from './HeaderMain'
import Logo from '../../UI/Logo'
import NavigationMain from '../../UI/NavigationMain'
import NavigationMainFixture from '../../UI/NavigationMain/NavigationMain.fixture'

export default {
  title: 'Layout',
  component: 'HeaderMain',
  decorators: [withKnobs]
}

export const Header = () => ({
  components: { HeaderMain, Logo, NavigationMain },
  props: {
    links: {
      default: object('links', NavigationMainFixture.links)
    }
  },
  template: `
  <header-main>
    <template v-slot:logo>
      <logo/>
    </template>
    <template v-slot:navigation>
      <navigation-main :links="links"/>
    </template>
  </header-main>
  `
})
