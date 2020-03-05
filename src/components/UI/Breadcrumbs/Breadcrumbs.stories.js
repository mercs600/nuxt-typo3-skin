import { withKnobs, object, text } from '@storybook/addon-knobs'
import Breadcrumbs from './Breadcrumbs'
import BreadcrumbsFixture from './Breadcrumbs.fixture'

export default {
  title: 'UI',
  component: Breadcrumbs,
  decorators: [withKnobs]

}

export const BreadcrumbsNavigation = () => ({
  components: { Breadcrumbs },
  props: {
    links: {
      default: object('links', BreadcrumbsFixture.links)
    },
    spacer: {
      default: text('spacer', BreadcrumbsFixture.spacer)
    }
  },

  template: `
    <breadcrumbs :links="links" :spacer="spacer"/>
  `
})
