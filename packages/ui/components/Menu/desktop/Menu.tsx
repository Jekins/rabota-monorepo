import React, { FC, memo } from 'react'
import { useVHSpacing } from '@rabota/utils/hooks/useVHSpacing'
import SC from '../base/Menu.styles'
import { IMenuProps } from '../types'

const { Block, List } = SC

/** Меню для дропдаунов, селектов и т.д. */
const Menu: FC<IMenuProps> = (props) => {
  const {
    shadow = true,
    spacing = ['xxsmall', 'xsmall'],
    maxHeight = '233px',
    children,
    ...otherProps
  } = props
  const spacingValue = useVHSpacing(spacing)

  return (
    <Block {...otherProps}>
      <List
        spacingV={spacingValue.vertical}
        spacingH={spacingValue.horizontal}
        shadow={shadow}
        css={`
          max-height: ${maxHeight};
        `}
      >
        {children}
      </List>
    </Block>
  )
}

export { Menu }
export default memo(Menu)
