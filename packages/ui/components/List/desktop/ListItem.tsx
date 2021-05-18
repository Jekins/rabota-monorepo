import React, { FC, memo } from 'react'
import SC from '../base/ListItem.styles'
import { IListItemProps } from '../types'

const { Block, Inner, EndIconWrapper, StartIconWrapper } = SC

/** Пункт списка */
const ListItem: FC<IListItemProps> = (props) => {
  const {
    StartIcon,
    EndIcon,
    startIconSpacing = 'small',
    endIconSpacing = 'small',
    alignItems,
    width,
    nowrap,
    children,
    ...otherProps
  } = props

  return (
    <Block
      css={`
        width: ${width};
        align-items: ${alignItems};
        justify-content: ${EndIcon ? 'space-between' : ''};
      `}
      {...otherProps}
    >
      {StartIcon && (
        <StartIconWrapper startIconSpacing={startIconSpacing}>
          {StartIcon}
        </StartIconWrapper>
      )}

      <Inner nowrap={nowrap}>{children}</Inner>

      {EndIcon && (
        <EndIconWrapper endIconSpacing={endIconSpacing}>{EndIcon}</EndIconWrapper>
      )}
    </Block>
  )
}

export { ListItem }
export default memo(ListItem)
