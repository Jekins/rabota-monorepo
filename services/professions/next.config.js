/* eslint-disable */
const path = require('path')
const withPlugins = require('next-compose-plugins')
const withCustomBabelConfig = require('next-plugin-custom-babel-config')
const withTM = require('next-transpile-modules')([
  '@rabota/ui',
  '@rabota/utils',
  '@rabota/store',
])
const withImages = require('next-images')

// TODO: Сделать подключение иконок https://medium.com/wesionary-team/rendering-svg-image-in-next-js-with-next-image-and-babel-plugin-inline-react-svg-fc7fae588ac3

const plugins = [
  [withCustomBabelConfig, { babelConfigFile: path.resolve('../../babel.config.js') }],
  [
    withImages,
    {
      fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
      inlineImageLimit: false,
    },
  ],
  [withTM],
]

const config = {
  future: {
    webpack5: true,
  },
  pageExtensions: ['page.tsx'],
  images: {
    domains: ['www.rabota.ru'],
  },
}

module.exports = withPlugins(plugins, config)
