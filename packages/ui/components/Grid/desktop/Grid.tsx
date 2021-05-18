import React, { FC, memo } from 'react'
import { useVHSpacing } from '@rabota/utils/hooks/useVHSpacing'
import SC from '../base/Grid.styles'
import { IGridProps } from '../types'

const { Block } = SC

/** Сетка */
const Grid: FC<IGridProps> = (props) => {
  const {
    spacing = 'xlarge',
    as,
    alignItems,
    justifyContent,
    inlineScrolling,
    withoutSpacingContainer,
    nowrap,
    children,
    ...otherProps
  } = props
  const spacingValue = useVHSpacing(spacing)
  const asProp = as ? { as } : {}

  return (
    <Block
      spacingV={spacingValue.vertical}
      spacingH={spacingValue.horizontal}
      inlineScrolling={inlineScrolling}
      withoutSpacingContainer={withoutSpacingContainer}
      nowrap={nowrap}
      css={`
        align-items: ${alignItems};
        justify-content: ${justifyContent};
      `}
      {...asProp}
      {...otherProps}
    >
      {children}
    </Block>
  )
}

export { Grid }
export default memo(Grid)
