import React, { FC, memo } from 'react'
import SC from '../base/Divider.styles'
import { IDividerProps } from '../types'

const { Block } = SC

/** Разделительная линия */
const Divider: FC<IDividerProps> = (props) => {
  const { spacing = 'xlarge', children, ...otherProps } = props

  return (
    <Block spacing={spacing} {...otherProps}>
      {children}
    </Block>
  )
}

export { Divider }
export default memo(Divider)
