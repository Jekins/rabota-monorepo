import React, { FC, memo } from 'react'
import { sm as styledMixins } from '@rabota/utils/helpers/styles/mixins'
import SC from '../base/GridCol.styles'
import { IGridColProps } from '../types'

const { Block } = SC

/** Колонка сетки */
const GridCol: FC<IGridColProps> = (props) => {
  const { as = 'div', sm, md, lg, uxs, xs, width = '', children, ...otherProps } = props

  return (
    <Block
      sm={sm}
      md={md}
      lg={lg}
      uxs={uxs}
      xs={xs}
      as={as}
      css={`
        && {
          ${styledMixins.width(width)};
        }
      `}
      {...otherProps}
    >
      {children}
    </Block>
  )
}

export { GridCol }
export default memo(GridCol)
