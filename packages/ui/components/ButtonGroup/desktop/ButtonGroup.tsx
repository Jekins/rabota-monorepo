import React, { FC, memo } from 'react'
import SC from '../base/ButtonGroup.styles'
import { IButtonGroupProps } from '../types'

const { Block } = SC

/** Группа кнопок */
const ButtonGroup: FC<IButtonGroupProps> = (props) => {
  const { spacing, type, children, orientation = 'horizontal', ...otherProps } = props

  return (
    <Block orientation={orientation} type={type} spacing={spacing} {...otherProps}>
      {children}
    </Block>
  )
}

export { ButtonGroup }
export default memo(ButtonGroup)
