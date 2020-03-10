const path = require('path');
// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    // add postcss support
    config.module.rules.push({
      test: /\.postcss$/,
      use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            config: {
              path: path.join('.', 'postcss.config.js')
            }
          }}
      ],
    })

    // Return the altered config
    return config;
  },
};
