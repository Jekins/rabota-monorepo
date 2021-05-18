import React, { FC, memo } from 'react'
import SC from '../base/MenuItem.styles'
import { IMenuItemProps } from '../types'

const { Block, Checked, Icon } = SC

/** Пункт Меню */
const MenuItem: FC<IMenuItemProps> = (props) => {
  const { active, checked, spacing = 'xxsmall', EndIcon, children, ...otherProps } = props

  return (
    <Block active={active} checked={checked} spacing={spacing} {...otherProps}>
      {children}

      {checked && <Checked />}

      {EndIcon && <Icon EndIcon={!!EndIcon}>{EndIcon}</Icon>}
    </Block>
  )
}

export { MenuItem }
export default memo(MenuItem)
