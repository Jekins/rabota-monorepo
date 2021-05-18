import React, { FC, memo } from 'react'
import SC from '../base/DropdownMenu.styles'
import { IDropdownMenuProps } from '../types'

const { Block } = SC

/** Дропдаун меню */
const DropdownMenu: FC<IDropdownMenuProps> = (props) => {
  const {
    width,
    minWidth,
    StartIcon,
    position = 'absolute',
    children,
    ...otherProps
  } = props

  return (
    <Block
      position={position}
      nowrap={!width && !minWidth}
      StartIcon={!!StartIcon}
      css={`
        width: ${width};
        min-width: ${minWidth};
      `}
      {...otherProps}
    >
      {children}
    </Block>
  )
}

export { DropdownMenu }
export default memo(DropdownMenu)
