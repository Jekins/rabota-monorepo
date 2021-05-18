import React, { FC, memo } from 'react'
import SC from './Container.styles'
import { IContainerProps } from '../types'

const { Block } = SC

/** Контейнер */
const Container: FC<IContainerProps> = (props) => {
  const { children, ...otherProps } = props

  return <Block {...otherProps}>{children}</Block>
}

export { Container }
export default memo(Container)
