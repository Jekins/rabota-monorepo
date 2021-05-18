import React, { FC, memo } from 'react'
import SC from '../base/Sidebar.styles'
import { ISidebarProps } from '../types'

const { Block, Inner, Body, Backdrop } = SC

/** Сайдбар */
const Sidebar: FC<ISidebarProps> = (props) => {
  const {
    onClickClose,
    position = 'fixed',
    backdrop = true,
    open,
    children,
    ...otherProps
  } = props

  return (
    <Block open={open} {...otherProps}>
      {backdrop && <Backdrop onClick={onClickClose} />}

      <Inner position={position}>
        <Body>{children}</Body>
      </Inner>
    </Block>
  )
}

export { Sidebar }
export default memo(Sidebar)
