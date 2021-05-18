import React, { FC, memo } from 'react'
import SC from '../base/List.styles'
import { IListProps } from '../types'

const { Block } = SC

/** Список */
const List: FC<IListProps> = (props) => {
  const {
    spacing = 'medium',
    color = 'black',
    height,
    spacingH,
    children,
    ...otherProps
  } = props

  return (
    <Block
      spacingH={spacingH}
      spacing={spacing}
      color={color}
      css={`
        height: ${height};
      `}
      {...otherProps}
    >
      {children}
    </Block>
  )
}

export { List }
export default memo(List)
