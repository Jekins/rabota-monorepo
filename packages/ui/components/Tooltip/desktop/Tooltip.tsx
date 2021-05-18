import React, { FC, memo } from 'react'
import SC from '../base/Tooltip.styles'
import { ITooltipProps } from '../types'

const { Block, Wrapper, Content } = SC

/** Тултип */
const Tooltip: FC<ITooltipProps> = (props) => {
  const { content, position, width, children, ...otherProps } = props

  return (
    <Block {...otherProps}>
      <Wrapper
        position={position}
        css={`
          width: ${width};
        `}
      >
        <Content>{content}</Content>
      </Wrapper>
      <>{children}</>
    </Block>
  )
}

export { Tooltip }
export default memo(Tooltip)
