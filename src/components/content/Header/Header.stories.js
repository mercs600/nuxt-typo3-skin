import CeHeader from './Header'

export default {
  title: 'Content',
  component: 'Header'
}

export const Header = () => ({
  components: { CeHeader },
  template: `
  <div>
    <CeHeader type="header" :header-layout="1" :id="1" header="Header 1" subheader="Subheader"/>
    <CeHeader type="header" :header-layout="2" :id="2" header="Header 2" subheader="Subheader"/>
    <CeHeader type="header" :header-layout="3" :id="2" header="Header 3" subheader="Subheader"/>
    <CeHeader type="header" :header-layout="4" :id="2" header="Header 4" subheader="Subheader"/>
    <CeHeader type="header" :header-layout="5" :id="2" header="Header 5" subheader="Subheader"/>
    <CeHeader type="header" :header-layout="6" :id="2" header="Header 6"/>
  </div>
  `
})
