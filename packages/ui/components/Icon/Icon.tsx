import React, { FC, memo } from 'react'
import { IIconProps } from './types'
import SC from './Icon.styles'

const { Block } = SC

/** Базовый компонент для генерации иконок */
const Icon: FC<IIconProps> = (props) => {
  const { id, width = '24px', height = '24px', opacity, ...otherProps } = props
  return (
    <Block
      css={`
        width: ${width};
        height: ${height};
        opacity: ${opacity};
      `}
      {...otherProps}
    >
      <use xlinkHref={`#${id}`} />
    </Block>
  )
}

export default memo(Icon)
