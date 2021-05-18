import React, { FC, memo } from 'react'
import SC from '../base/Spacing.styles'
import { ISpacingProps } from '../types'

const { Block } = SC

/** Отступ между компонентами */
const Spacing: FC<ISpacingProps> = (props) => {
  const { spacing = 'xlarge', ...otherProps } = props

  return <Block spacing={spacing} {...otherProps} />
}

export { Spacing }
export default memo(Spacing)
