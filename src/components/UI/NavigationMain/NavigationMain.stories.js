import { withKnobs, object } from '@storybook/addon-knobs'

import NavigationMainComponent from '../../UI/NavigationMain'
import NavigationMainFixture from '../../UI/NavigationMain/NavigationMain.fixture'

export default {
  title: 'UI',
  component: 'NavigationMain',
  decorators: [withKnobs]
}

export const NavigationMain = () => ({
  components: { NavigationMain: NavigationMainComponent },
  props: {
    links: {
      default: object('links', NavigationMainFixture.links)
    }
  },
  template: `
  <navigation-main :links="links"/>
  `
})
