const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-typo3-skin'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-typo3-skin.js',
    options
  })

  this.nuxt.hook('build:before', async () => {
    const { postcss } = this.options.build
    postcss.plugins = postcss.plugins || {}
    console.log(postcss.plugins)
    if (Array.isArray(postcss.plugins)) {
      postcss.plugins.push(require('tailwindcss')(resolve(__dirname, '../tailwind.config.js')))
      postcss.plugins.push('postcss-nested')
    } else if (typeof postcss.plugins === 'object') {
      postcss.plugins['postcss-import'] = {}
      postcss.plugins.tailwindcss = postcss.plugins.tailwindcss || resolve(__dirname, '../tailwind.config.js')
      postcss.plugins['postcss-nested'] = {}
    }
  })
}

module.exports.meta = require('../package.json')
