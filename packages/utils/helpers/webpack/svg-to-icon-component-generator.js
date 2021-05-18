const pascalCase = require('pascalcase')
const { stringifyRequest } = require('loader-utils')
const stringifySymbol = require('./stringify-symbol')

/** рантайм генератор компонента иконки из svg изображения. */
module.exports = function runtimeGenerator({ symbol, config, context }) {
  const { spriteModule, symbolModule } = config

  const spriteRequest = stringifyRequest({ context }, spriteModule)
  const symbolRequest = stringifyRequest({ context }, symbolModule)
  const displayName = `${pascalCase(symbol.id)}Icon`

  return `
    import React from 'react'
    import Base from '@rabota/ui/components/Icon'
    import SpriteSymbol from ${symbolRequest}
    import sprite from ${spriteRequest}

    const symbol = new SpriteSymbol(${stringifySymbol(symbol)})
    sprite.add(symbol)

    export default React.memo(function ${displayName}(props) {
      const { className, ...restProps } = props
      return <Base.Icon className={className} id="${symbol.id}" {...restProps} />
    })
  `
}
