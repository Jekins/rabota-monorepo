import React, { FC, memo } from 'react'
import { useVHSpacing } from '@rabota/utils/hooks/useVHSpacing'
import { IBoxProps } from '../types'
import SC from '../base/Box.styles'

const { Block } = SC

/** Бокс с фоном, скруглениями и тд */
const Box: FC<IBoxProps> = (props) => {
  const {
    children,
    color,
    spacing = 'large',
    resetLastSpacing = true,
    shadowSize,
    radius = 'large',
    ...otherProps
  } = props
  const spacingValue = useVHSpacing(spacing)

  return (
    <Block
      color={color}
      spacingV={spacingValue.vertical}
      spacingH={spacingValue.horizontal}
      resetLastSpacing={resetLastSpacing}
      shadowSize={shadowSize}
      radius={radius}
      {...otherProps}
    >
      {children}
    </Block>
  )
}

export { Box }
export default memo(Box)
