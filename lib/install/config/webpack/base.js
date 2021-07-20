const { webpackConfig, merge } = require('@rails/webpacker')
const vueConfig = require('./rules/vue')

const webpack = require('webpack')
const customConfig = {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ]
}

module.exports = merge(vueConfig, customConfig, webpackConfig)
