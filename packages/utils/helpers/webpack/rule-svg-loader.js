const path = require('path')

/** Настройка для webpack, которая будет преобразовывать все импортнутые svg в иконки. */
module.exports = {
  test: /\.svg$/,
  issuer: {
    test: /\.(js|ts)x?$/,
  },
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
        ],
        plugins: ['@babel/plugin-proposal-object-rest-spread'],
      },
    },
    {
      loader: 'svg-sprite-loader',
      options: {
        runtimeGenerator: path.resolve(
          '../../node_modules/@rabota/utils/helpers/webpack/svg-to-icon-component-generator'
        ),
      },
    },
    'svgo-loader',
  ],
}
