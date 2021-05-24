import React, { FC, memo } from 'react'
import { IIconProps } from './types'
import SC from './Icon.styles'

const { Block } = SC

/** Базовый компонент для генерации иконок */
const Icon: FC<IIconProps> = (props) => {
  const { width = '24px', height = '24px', opacity, as, ...otherProps } = props

  return (
    <Block
      as={as}
      viewBox='0 0 10 10'
      css={`
        width: ${width};
        height: ${height};
        opacity: ${opacity};
      `}
      {...otherProps}
    />
  )
}

export default memo(Icon)
