const babelConfig = (api) => {
  api.cache(true)

  const presets = [
    'next/babel',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    'inline-react-svg',
  ]

  const plugins = [
    ['styled-components', { ssr: true, fileName: true }],
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ]

  return {
    presets,
    plugins,
  }
}

module.exports = babelConfig
