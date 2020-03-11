const { resolve } = require('path')

const postCssPlugins = {
  'postcss-import': {},
  tailwindcss: resolve(__dirname, '../tailwind.config.js'),
  'postcss-nested': {}
}

const postCssPluginsProduction = {
  '@fullhuman/postcss-purgecss': {
    content: [
      './src/**/*.vue',
      resolve(__dirname, '../src/**/*.vue')
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
}

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
    this.options.build.transpile.push(...['nuxt-typo3', 'nuxt-typo3-skin'])
    postcss.plugins = postcss.plugins || {}

    if (Array.isArray(postcss.plugins)) {
      Object.keys(postCssPlugins).forEach(plugin => {
        postcss.plugins.push(require(plugin)(postCssPlugins[plugin]))
      })
      if (process.env.NODE_ENV === 'production') {
        Object.keys(postCssPluginsProduction).forEach(plugin => {
          postcss.plugins.push(require(plugin)(postCssPluginsProduction[plugin]))
        })
      }
    } else if (typeof postcss.plugins === 'object') {
      Object.assign(postcss.plugins, postCssPlugins)
      if (process.env.NODE_ENV === 'production') {
        Object.assign(postcss.plugins, postCssPluginsProduction)
      }
    }
  })
}

module.exports.meta = require('../package.json')
