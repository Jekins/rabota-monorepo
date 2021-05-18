import React, { FC, memo } from 'react'
import SC from './Container.styles'
import { IContainerProps } from '../types'

const { Block } = SC

/** Контейнер */
const Container: FC<IContainerProps> = (props) => {
  const { as, children, ...otherProps } = props

  return (
    <Block as={as} {...otherProps}>
      {children}
    </Block>
  )
}

export { Container }
export default memo(Container)
